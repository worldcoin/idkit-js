declare module 'idkit-core' {
  export * from 'idkit-core/build/index';
}

declare module 'idkit-core/hashing' {
  export interface HashFunctionOutput {
    hash: bigint;
    digest: string;
    then?: (onfulfilled?: ((value: HashFunctionOutput) => any)) => Promise<any>;
  }
}

declare module 'idkit-core/build/types/config' {
  export interface AbiEncodedValue {
    types: string[];
    values: unknown[];
  }
}