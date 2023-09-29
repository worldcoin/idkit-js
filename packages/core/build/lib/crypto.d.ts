export declare const generateKey: () => Promise<{
    key: CryptoKey;
    iv: Uint8Array;
}>;
export declare const exportKey: (key: CryptoKey) => Promise<string>;
export declare const encryptRequest: (key: CryptoKey, iv: Uint8Array, request: string) => Promise<{
    payload: string;
    iv: string;
}>;
export declare const decryptResponse: (key: CryptoKey, iv: Uint8Array, payload: string) => Promise<string>;
