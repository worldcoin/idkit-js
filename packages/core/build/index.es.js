import { create } from 'zustand';
import { isBytes, isHex, encodePacked, keccak256 } from 'viem';

var AppErrorCodes;
(function (AppErrorCodes) {
    AppErrorCodes["ConnectionFailed"] = "connection_failed";
    AppErrorCodes["VerificationRejected"] = "verification_rejected";
    AppErrorCodes["MaxVerificationsReached"] = "max_verifications_reached";
    AppErrorCodes["AlreadySigned"] = "already_signed";
    AppErrorCodes["CredentialUnavailable"] = "credential_unavailable";
    AppErrorCodes["MalformedRequest"] = "malformed_request";
    AppErrorCodes["InvalidNetwork"] = "invalid_network";
    AppErrorCodes["InclusionProofFailed"] = "inclusion_proof_failed";
    AppErrorCodes["InclusionProofPending"] = "inclusion_proof_pending";
    AppErrorCodes["UnexpectedResponse"] = "unexpected_response";
    AppErrorCodes["FailedByHostApp"] = "failed_by_host_app";
    AppErrorCodes["GenericError"] = "generic_error";
    AppErrorCodes["InvalidPhoneOTP"] = "invalid_phone_otp";
})(AppErrorCodes || (AppErrorCodes = {}));
var VerificationState;
(function (VerificationState) {
    VerificationState["PreparingClient"] = "loading_widget";
    VerificationState["PollingForUpdates"] = "awaiting_connection";
    VerificationState["Confirmed"] = "confirmed";
    VerificationState["Failed"] = "failed";
})(VerificationState || (VerificationState = {}));

/**
 * Hashes an input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. The function will try to determine the best hashing mechanism, if the string already looks like hex-encoded
 * bytes (e.g. `0x0000000000000000000000000000000000000000`), it will be hashed directly.
 * @param input Any string, hex-like string, bytes represented as a hex string.
 * @returns
 */
function hashToField(input) {
    if (isBytes(input) || isHex(input))
        return hashEncodedBytes(input);
    return hashString(input);
}
function packAndEncode(input) {
    const [types, values] = input.reduce(([types, values], [type, value]) => {
        types.push(type);
        values.push(value);
        return [types, values];
    }, [[], []]);
    return hashEncodedBytes(encodePacked(types, values));
}
/**
 * Converts an input to bytes and then hashes it with the World ID protocol hashing function.
 * @param input - String to hash
 * @returns hash
 */
function hashString(input) {
    const bytesInput = Buffer.from(input);
    return hashEncodedBytes(bytesInput);
}
/**
 * Hashes raw bytes input using the `keccak256` hashing function used across the World ID protocol, to be used as
 * a ZKP input. Example use cases include when you're hashing an address to be verified in a smart contract.
 * @param input - Bytes represented as a hex string.
 * @returns
 */
function hashEncodedBytes(input) {
    const hash = BigInt(keccak256(input)) >> 8n;
    const rawDigest = hash.toString(16);
    return { hash, digest: `0x${rawDigest.padStart(64, '0')}` };
}
const generateSignal = (signal) => {
    if (!signal || typeof signal === 'string')
        return hashToField(signal ?? '');
    return packAndEncode(signal.types.map((type, index) => [type, signal.values[index]]));
};
const encodeAction = (action) => {
    if (!action)
        return '';
    if (typeof action === 'string')
        return action;
    return action.types.map((type, index) => `${type}(${action.values[index]})`).join(',');
};

const buffer_encode = (buffer) => {
    let encoded = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        encoded += String.fromCharCode(bytes[i]);
    }
    return Buffer.from(encoded).toString('base64');
};
const buffer_decode = (encoded) => {
    const byteCharacters = Buffer.from(encoded, 'base64').toString('utf-8');
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    return new Uint8Array(byteNumbers);
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const generateKey = async () => {
    return {
        iv: window.crypto.getRandomValues(new Uint8Array(12)),
        key: await window.crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']),
    };
};
const exportKey = async (key) => {
    return buffer_encode(await window.crypto.subtle.exportKey('raw', key));
};
const encryptRequest = async (key, iv, request) => {
    return {
        iv: buffer_encode(iv),
        payload: buffer_encode(await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(request))),
    };
};
const decryptResponse = async (key, iv, payload) => {
    return decoder.decode(await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, buffer_decode(payload)));
};

const DEFAULT_BRIDGE_URL = 'https://bridge.id.worldcoin.org/';
const useWorldBridgeStore = create((set, get) => ({
    iv: null,
    key: null,
    result: null,
    errorCode: null,
    requestId: null,
    connectorURI: null,
    bridgeUrl: DEFAULT_BRIDGE_URL,
    verificationState: VerificationState.PreparingClient,
    createClient: async (app_id, action, signal, bridgeUrl, credential_types, action_description) => {
        const { key, iv } = await generateKey();
        const requestId = window.crypto.randomUUID();
        const res = await fetch(`${bridgeUrl ?? DEFAULT_BRIDGE_URL}/request/${requestId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(await encryptRequest(key, iv, JSON.stringify({
                app_id,
                credential_types,
                action_description,
                action: encodeAction(action),
                signal: generateSignal(signal).digest,
            }))),
        });
        if (!res.ok) {
            set({ verificationState: VerificationState.Failed });
            throw new Error('Failed to create client');
        }
        set({
            iv,
            key,
            requestId,
            bridgeUrl: bridgeUrl ?? DEFAULT_BRIDGE_URL,
            verificationState: VerificationState.PollingForUpdates,
            connectorURI: `https://worldcoin.org/verify?t=wld&i=${requestId}&k=${encodeURIComponent(await exportKey(key))}${bridgeUrl ? `&b=${encodeURIComponent(bridgeUrl)}` : ''}`,
        });
    },
    pollForUpdates: async () => {
        const key = get().key;
        if (!key)
            throw new Error('No keypair found. Please call `createClient` first.');
        const res = await fetch(`${get().bridgeUrl}/response/${get().requestId}`);
        if (res.status == 500) {
            return set({ verificationState: VerificationState.Failed });
        }
        if (!res.ok)
            return;
        const result = JSON.parse(await decryptResponse(key, get().iv, await res.text()));
        if ('error_code' in result) {
            return set({
                errorCode: result.error_code,
                verificationState: VerificationState.Failed,
            });
        }
        set({ result, verificationState: VerificationState.Confirmed, key: null, connectorURI: null, requestId: null });
    },
    reset: () => {
        set({
            iv: null,
            key: null,
            requestId: null,
            connectorURI: null,
            verificationState: VerificationState.PreparingClient,
        });
    },
}));

export { useWorldBridgeStore };
//# sourceMappingURL=index.es.js.map
