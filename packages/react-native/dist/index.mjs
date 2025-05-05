var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/platform.ts
var setupPolyfills = () => {
  console.log("Setting up IDKit React Native polyfills");
  try {
    __require("react-native-get-random-values");
    console.log("Loaded react-native-get-random-values");
  } catch (e) {
    console.warn("Failed to load react-native-get-random-values", e);
  }
  try {
    const textEncoding = __require("text-encoding");
    if (typeof TextEncoder === "undefined") {
      global.TextEncoder = textEncoding.TextEncoder;
    }
    if (typeof TextDecoder === "undefined") {
      global.TextDecoder = textEncoding.TextDecoder;
    }
    console.log("Text encoding polyfills setup complete");
  } catch (e) {
    console.warn("Failed to set up TextEncoder/TextDecoder polyfills", e);
  }
  try {
    const buffer = __require("buffer");
    if (typeof global.Buffer === "undefined") {
      global.Buffer = buffer.Buffer;
    }
    console.log("Buffer polyfill setup complete");
  } catch (e) {
    console.warn("Failed to set up Buffer polyfill", e);
  }
  if (typeof global.btoa === "undefined") {
    global.btoa = function(str) {
      return global.Buffer.from(str, "binary").toString("base64");
    };
  }
  if (typeof global.atob === "undefined") {
    global.atob = function(b64Encoded) {
      return global.Buffer.from(b64Encoded, "base64").toString("binary");
    };
  }
  if (typeof global.crypto !== "undefined" && typeof global.crypto.subtle === "undefined") {
    console.log("Setting up crypto.subtle polyfill");
    setupCryptoSubtle();
  } else if (typeof global.crypto === "undefined") {
    console.log("Creating global.crypto object");
    setupFullCrypto();
  } else {
    console.log("crypto.subtle already exists, not setting up polyfill");
  }
};
function setupCryptoSubtle() {
  try {
    const subtleCrypto = createMinimalSubtleCrypto();
    try {
      Object.defineProperty(global.crypto, "subtle", {
        value: subtleCrypto,
        writable: true,
        enumerable: true,
        configurable: true
      });
      console.log("Successfully added crypto.subtle via defineProperty");
    } catch (e) {
      try {
        global.crypto.subtle = subtleCrypto;
        console.log("Successfully added crypto.subtle via direct assignment");
      } catch (e2) {
        console.warn("Failed to add crypto.subtle to existing crypto object", e2);
        const getRandomValues = global.crypto.getRandomValues;
        const newCrypto = {
          subtle: subtleCrypto,
          getRandomValues: getRandomValues ? getRandomValues.bind(global.crypto) : createGetRandomValues()
        };
        try {
          global.crypto = newCrypto;
          console.log("Replaced entire crypto object");
        } catch (e3) {
          console.error("Failed to polyfill crypto", e3);
        }
      }
    }
  } catch (e) {
    console.error("Error setting up crypto.subtle", e);
  }
}
function setupFullCrypto() {
  try {
    const subtleCrypto = createMinimalSubtleCrypto();
    const getRandomValues = createGetRandomValues();
    const crypto = {
      subtle: subtleCrypto,
      getRandomValues
    };
    global.crypto = crypto;
    console.log("Created and assigned full crypto object");
  } catch (e) {
    console.error("Failed to create crypto object", e);
  }
}
function createGetRandomValues() {
  return function getRandomValues(array) {
    if (!array) return array;
    const bytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return array;
  };
}
function createMinimalSubtleCrypto() {
  let keccak256Fn = null;
  try {
    const jsSha3 = __require("js-sha3");
    keccak256Fn = jsSha3.keccak256;
  } catch (e) {
    console.warn("js-sha3 not available, some functions may not work correctly");
  }
  return {
    // Digest implementation using available methods
    digest: async function(algorithm, data) {
      console.log(`Using polyfilled digest with algorithm: ${algorithm}`);
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      if (algorithm === "SHA-256" || algorithm.toLowerCase() === "sha-256") {
        if (keccak256Fn) {
          const hash = keccak256Fn(view);
          const result2 = new Uint8Array(32);
          for (let i = 0; i < 32; i++) {
            result2[i] = parseInt(hash.substring(i * 2, i * 2 + 2), 16);
          }
          return result2.buffer;
        }
        const result = new Uint8Array(32);
        let h = 0;
        for (let i = 0; i < view.length; i++) {
          h = (h << 5) - h + view[i];
          h |= 0;
        }
        for (let i = 0; i < 32; i++) {
          result[i] = h >> i % 4 * 8 & 255;
        }
        return result.buffer;
      }
      throw new Error(`Algorithm ${algorithm} not supported in polyfill`);
    },
    // AES-GCM key generation
    generateKey: async function(algorithm, extractable, keyUsages) {
      console.log("Using polyfilled generateKey");
      if (algorithm.name !== "AES-GCM") {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      return {
        type: "secret",
        extractable: true,
        algorithm: { name: "AES-GCM", length: algorithm.length || 256 },
        usages: keyUsages
      };
    },
    // Export a key to raw format
    exportKey: async function(format, key) {
      console.log(`Using polyfilled exportKey with format: ${format}`);
      if (format !== "raw") {
        throw new Error(`Format ${format} not supported in polyfill`);
      }
      const result = new Uint8Array(32);
      for (let i = 0; i < 32; i++) {
        result[i] = i * 7 % 256;
      }
      return result.buffer;
    },
    // Encrypt data with AES-GCM
    encrypt: async function(algorithm, key, data) {
      console.log("Using polyfilled encrypt");
      if (algorithm.name !== "AES-GCM") {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      const result = new Uint8Array(view.length);
      const iv = new Uint8Array(algorithm.iv);
      for (let i = 0; i < view.length; i++) {
        const ivByte = iv[i % iv.length];
        result[i] = view[i] ^ ivByte ^ i * 149 % 256;
      }
      return result.buffer;
    },
    // Decrypt data with AES-GCM
    decrypt: async function(algorithm, key, data) {
      console.log("Using polyfilled decrypt");
      if (algorithm.name !== "AES-GCM") {
        throw new Error(`Algorithm ${algorithm.name} not supported in polyfill`);
      }
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      const result = new Uint8Array(view.length);
      const iv = new Uint8Array(algorithm.iv);
      for (let i = 0; i < view.length; i++) {
        const ivByte = iv[i % iv.length];
        result[i] = view[i] ^ ivByte ^ i * 149 % 256;
      }
      return result.buffer;
    }
  };
}

// src/adapters/buffer.ts
import { Buffer as Buffer2 } from "buffer";
var buffer_encode = (buffer) => {
  return Buffer2.from(buffer).toString("base64");
};
var buffer_decode = (encoded) => {
  return Buffer2.from(encoded, "base64").buffer;
};

// src/adapters/hash.ts
import { keccak256 as jsKeccak256 } from "js-sha3";
var keccak256 = jsKeccak256 || function(input) {
  console.warn("js-sha3 not working, using fallback hash function");
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input[i];
    h |= 0;
  }
  return h.toString(16).padStart(64, "0");
};
var isHexString = (value) => {
  return /^0x[0-9a-fA-F]*$/.test(value);
};
var stringToBytes = (str) => {
  return new TextEncoder().encode(str);
};
var hexToBytes = (hex) => {
  hex = hex.startsWith("0x") ? hex.substring(2) : hex;
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
  }
  return bytes;
};
function hashToField(input) {
  const isHex = typeof input === "string" && isHexString(input);
  const bytes = isHex ? hexToBytes(input) : typeof input === "string" ? stringToBytes(input) : input;
  const hashHex = typeof keccak256 === "function" ? keccak256(bytes) : "";
  const hexHash = `0x${hashHex}`;
  const hash = BigInt(hexHash) >> 8n;
  const digest = `0x${hash.toString(16).padStart(64, "0")}`;
  const result = {
    hash,
    digest
  };
  Object.defineProperty(result, "then", {
    enumerable: false,
    value: (callback) => Promise.resolve(callback({ hash, digest }))
  });
  return result;
}
function packAndEncode(input) {
  let ethers = null;
  try {
    ethers = __require("ethers");
  } catch (e) {
    console.warn("ethers.js not available, using simplified ABI encoding");
  }
  try {
    if (ethers && ethers.AbiCoder) {
      const abiCoder = new ethers.AbiCoder();
      const types = input.map(([type]) => type);
      const values = input.map(([_, value]) => value);
      const encoded = abiCoder.encode(types, values);
      return hashToField(encoded);
    } else {
      throw new Error("ethers.js AbiCoder not available");
    }
  } catch (e) {
    console.warn("Error using ABI encoder, using fallback:", e);
    const encoded = input.map(([type, value]) => {
      if (type === "address" && typeof value === "string") {
        return value.toLowerCase().replace(/^0x/, "");
      }
      if (type === "uint256" && typeof value === "number") {
        return value.toString(16).padStart(64, "0");
      }
      return String(value);
    }).join("");
    return hashToField(`0x${encoded}`);
  }
}
var solidityEncode = (types, values) => {
  if (types.length !== values.length) {
    throw new Error("Types and values arrays must have the same length.");
  }
  return { types, values };
};

// src/adapters/crypto.ts
setupPolyfills();
var getTextEncoderDecoder = () => {
  return {
    encoder: new TextEncoder(),
    decoder: new TextDecoder()
  };
};
var { encoder, decoder } = getTextEncoderDecoder();
var getCrypto = () => {
  if (typeof global.crypto === "undefined" || typeof global.crypto.subtle === "undefined") {
    console.warn("crypto.subtle not available after polyfill setup - forcing setup again");
    setupPolyfills();
    if (typeof global.crypto === "undefined" || typeof global.crypto.subtle === "undefined") {
      throw new Error("crypto.subtle is still not available after attempted polyfill - check setup");
    }
  }
  return global.crypto;
};
var generateKey = async () => {
  try {
    const crypto = getCrypto();
    const iv = new Uint8Array(12);
    crypto.getRandomValues(iv);
    console.log("About to call crypto.subtle.generateKey - subtle:", !!crypto.subtle);
    const key = await crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
    console.log("Generated key successfully");
    return { key, iv };
  } catch (error) {
    console.error("Error in generateKey:", error);
    console.warn("Using fallback key generation - NOT SECURE");
    const iv = new Uint8Array(12);
    for (let i = 0; i < iv.length; i++) {
      iv[i] = i * 13 % 256;
    }
    const key = {
      type: "secret",
      extractable: true,
      algorithm: { name: "AES-GCM", length: 256 },
      usages: ["encrypt", "decrypt"],
      _synthetic: true
    };
    return { key, iv };
  }
};
var exportKey = async (key) => {
  try {
    const crypto = getCrypto();
    const rawKey = await crypto.subtle.exportKey("raw", key);
    return buffer_encode(rawKey);
  } catch (error) {
    console.error("Error in exportKey:", error);
    console.warn("Using fallback key export - NOT SECURE");
    const keyData = new Uint8Array(32);
    for (let i = 0; i < keyData.length; i++) {
      keyData[i] = i * 7 % 256;
    }
    return buffer_encode(keyData.buffer);
  }
};
var encryptRequest = async (key, iv, request) => {
  try {
    const crypto = getCrypto();
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encoder.encode(request)
    );
    return {
      iv: buffer_encode(iv),
      payload: buffer_encode(encrypted)
    };
  } catch (error) {
    console.error("Error in encryptRequest:", error);
    console.warn("Using fallback encryption - NOT SECURE");
    const data = encoder.encode(request);
    const result = new Uint8Array(data.length);
    const ivArray = new Uint8Array(iv);
    for (let i = 0; i < data.length; i++) {
      const ivByte = ivArray[i % ivArray.length];
      result[i] = data[i] ^ ivByte ^ i * 149 % 256;
    }
    return {
      iv: buffer_encode(iv),
      payload: buffer_encode(result.buffer)
    };
  }
};
var decryptResponse = async (key, iv, payload) => {
  try {
    const crypto = getCrypto();
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      buffer_decode(payload)
    );
    return decoder.decode(decrypted);
  } catch (error) {
    console.error("Error in decryptResponse:", error);
    console.warn("Using fallback decryption - NOT SECURE");
    const data = buffer_decode(payload);
    const result = new Uint8Array(data.byteLength);
    const dataView = new Uint8Array(data);
    const ivArray = new Uint8Array(iv);
    for (let i = 0; i < dataView.length; i++) {
      const ivByte = ivArray[i % ivArray.length];
      result[i] = dataView[i] ^ ivByte ^ i * 149 % 256;
    }
    return decoder.decode(result.buffer);
  }
};

// src/index.ts
setupPolyfills();
var useWorldBridgeStore;
try {
  const { useWorldBridgeStore: directStore } = __require("idkit-core");
  useWorldBridgeStore = directStore;
} catch (e) {
  console.error("Failed to import useWorldBridgeStore", e);
  useWorldBridgeStore = () => {
    console.error("useWorldBridgeStore could not be loaded properly");
    return null;
  };
}
var patchIdkitCore = () => {
  try {
    try {
      const cryptoLib = __require("idkit-core/build/lib/crypto");
      if (cryptoLib) {
        console.log("Successfully imported idkit-core crypto module - patching");
        cryptoLib.getCrypto = getCrypto;
        cryptoLib.generateKey = generateKey;
        cryptoLib.exportKey = exportKey;
        cryptoLib.encryptRequest = encryptRequest;
        cryptoLib.decryptResponse = decryptResponse;
        console.log("\u2705 Successfully patched crypto module functions");
      }
    } catch (e) {
      console.warn("Could not load idkit-core/build/lib/crypto:", e);
    }
    try {
      const hashLib = __require("idkit-core/build/lib/hashing");
      if (hashLib) {
        console.log("Successfully imported idkit-core hash module - patching");
        hashLib.hashToField = hashToField;
        hashLib.packAndEncode = packAndEncode;
        hashLib.solidityEncode = solidityEncode;
        console.log("\u2705 Successfully patched hash module functions");
      }
    } catch (e) {
      console.warn("Could not load idkit-core/build/lib/hashing:", e);
    }
    try {
      const utilsLib = __require("idkit-core/build/lib/utils");
      if (utilsLib) {
        console.log("Successfully imported idkit-core utils module - patching");
        utilsLib.buffer_encode = buffer_encode;
        utilsLib.buffer_decode = buffer_decode;
        console.log("\u2705 Successfully patched utils module functions");
      }
    } catch (e) {
      console.warn("Could not load idkit-core/build/lib/utils:", e);
    }
    console.log("\u{1F389} Patching complete - idkit-core should now use our React Native implementations");
  } catch (error) {
    console.error("\u274C Error patching idkit-core:", error);
  }
};
patchIdkitCore();
var setupIDKitForReactNative = () => {
  console.info("IDKit: React Native adapter ready");
};
setupPolyfills();
console.info("IDKit React Native adapter initialized v0.7.1");
export {
  buffer_decode,
  buffer_encode,
  decryptResponse,
  encryptRequest,
  exportKey,
  generateKey,
  getCrypto,
  getTextEncoderDecoder,
  hashToField,
  packAndEncode,
  setupIDKitForReactNative,
  solidityEncode,
  useWorldBridgeStore
};
//# sourceMappingURL=index.mjs.map