import type { IDKitConfig } from '@/types/config';
import { VerificationState } from '@/types/bridge';
import type { AppErrorCodes } from '@/types/bridge';
import type { ISuccessResult } from '@/types/result';
export type WorldBridgeStore = {
    bridgeUrl: string;
    iv: Uint8Array | null;
    key: CryptoKey | null;
    requestId: string | null;
    connectorURI: string | null;
    result: ISuccessResult | null;
    errorCode: AppErrorCodes | null;
    verificationState: VerificationState;
    createClient: (app_id: IDKitConfig['app_id'], action: IDKitConfig['action'], signal?: IDKitConfig['signal'], bridgeUrl?: IDKitConfig['bridgeUrl'], credential_types?: IDKitConfig['credential_types'], action_description?: IDKitConfig['action_description']) => Promise<void>;
    pollForUpdates: () => Promise<void>;
    reset: () => void;
};
export declare const useWorldBridgeStore: import("zustand").UseBoundStore<import("zustand").StoreApi<WorldBridgeStore>>;
