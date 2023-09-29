declare const brand: unique symbol;
type Brand<T, TBrand extends string> = T & {
    [brand]: TBrand;
};
export type AbiEncodedValue = Brand<{
    types: string[];
    values: unknown[];
}, 'AbiEncodedValue'>;
export declare enum CredentialType {
    Orb = "orb",
    Phone = "phone"
}
export type IDKitConfig = {
    /** Unique identifier for the app verifying the action. This should be the app ID obtained from the Developer Portal. */
    app_id: string;
    /** The description of the specific action (shown to users in World App). Only recommended for actions created on-the-fly. */
    action_description?: string;
    /** Encodes data into a proof that must match when validating. Read more on the [On-chain section](https://docs.worldcoin.org/advanced/on-chain). */
    signal?: AbiEncodedValue | string;
    /** Identifier for the action the user is performing. Should be left blank for [Sign in with Worldcoin](https://docs.worldcoin.org/id/sign-in). */
    action?: AbiEncodedValue | string;
    /** URL to a third-party bridge to use when connecting to the World App. Optional. */
    bridgeUrl?: string;
    /** An array of credential types to allow for verification. Will accept any combination of "orb" & "phone". Defaults to orb. TypeScript apps can use the `CredentialType` enum. */
    credential_types?: CredentialType[];
};
export {};
