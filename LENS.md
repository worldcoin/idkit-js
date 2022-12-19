# Lens x Worldcoin

Lens API and Worldcoin are partnering to be able to sustainably offer gasless transactions to real users. IDKit is integrated to add a layer of protection preventing bots and other types of abuse at scale. IDKit privately verifies a user has a unique phone number, the Lens API ensures a single phone number is only matched to a single wallet address to receive gasless transactions.

## How it works?

1. Your Lens app integrates IDKit JS on the frontend.
2. When the user wants to enable gasless transactions, you call IDKit.
3. User types their phone number on IDKit and receive an SMS. They enter the SMS on IDKit.
4. IDKit verifies the phone number and issues a `nullifier_hash` (unique identifier for that phone number and the Lens ecosystem). The nullifier is fully privacy-preserving.
5. The `nullifier_hash` is sent to Lens API who enables gasless transactions.

### Additional considerations

-   User only needs to enable gasless once. If a user has enabled gasless on another Lens app, then done, no need for them to go through the flow again.
-   Flow is fully privacy-preserving. Apps and Lens don't see the user's number. Worldcoin **neither stores the phone numbers nor the nullifier hashes** (see our [open source code](https://github.com/worldcoin/developer-portal/tree/main/web/pages/api/v1/phone)).
-   For security, a very small list of countries are not supported, and verification is rate limited.

## Integration instructions

_These instructions assume you're integrating into a React/Next.js app. If you're not read the installation details on the [README.md](README.md)._

1. Install IDKit JS
    ```bash
    yarn add idkit
    # or
    npm install idkit
    ```
2. Load IDKit JS. Note the action ID below, the Action ID is the **same for all Lens-powered apps.**

    - Staging Action ID: `wid_staging_ac7743b1589fefaf3ed2fc05b3d60da1`
    - Production Action ID: `wid_2d3d2e7a1e0c8286083d4e43598e4f62`

    ```jsx
    import { IDKitWidget } from "idkit";

    const isProd = false;
    const actionId = isProd ? 'wid_2d3d2e7a1e0c8286083d4e43598e4f62' : 'wid_staging_ac7743b1589fefaf3ed2fc05b3d60da1';

    <IDKitWidget actionId={actionId} onSuccess={handleProof}>
    {({ open }) => (
        {/* You can render whatever you want here, and call open() to open the widget */}
        <button onClick={open}>Click me</button>
    )}
    </IDKitWidget>
    ```

3. Add the success handler to notify the Lens API.

    ```typescript
    import { ISuccessResult } from "idkit";
    const handleProof = async (result: ISuccessResult) => {
    	await fetch("https://world-id-lens-bridge.vercel.app", {
    		method: "POST",
    		headers: { "Content-Type": "application/json" },
    		body: JSON.stringify({
    			...result,
    			action_id: actionId,
    			signal: "{user_wallet_address}",
    			is_production: isProd,
    		}),
    	});
    	// Show success message
    	// Check with Lens API user has gasless enabled
    };
    ```
