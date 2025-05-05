// Type definitions for global variables used in the React Native adapter
declare namespace NodeJS {
  interface Global {
    btoa: (data: string) => string;
    atob: (data: string) => string;
    crypto: Crypto;
  }
}

// Provide global access to crypto
declare var global: NodeJS.Global;

// For browsers
interface Window {
  crypto: Crypto;
}