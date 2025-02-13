import * as idkit from '@worldcoin/idkit-core';
export { idkit as default };

declare global {
    interface Window {
        IDKitCore: typeof idkit;
    }
}
