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
-   Flow is fully privacy-preserving. Apps and Lens never see the user's number. The `nullifier_hash` cannot be reversed into a phone number. Worldcoin **neither stores the phone numbers nor the nullifier hashes** (see our [open source code](https://github.com/worldcoin/developer-portal/tree/main/web/pages/api/v1/phone)).
-   For security, a very small list of countries are not supported, and verification is rate limited.

## Integration instructions

_These instructions assume you're integrating into a React/Next.js app. If you're not, read the installation details on the [README.md](README.md)._

1. Install IDKit JS
    ```bash
    yarn add @worldcoin/idkit@0.3.3
    # or
    npm install @worldcoin/idkit@0.3.3
    # or
    pnpm install @worldcoin/idkit@0.3.3
    ```
2. Load IDKit JS. Note the action ID below, the Action ID is the **same for all Lens-powered apps.**

    - Staging Action ID: `wid_staging_ac7743b1589fefaf3ed2fc05b3d60da1`
    - Production Action ID: `wid_2d3d2e7a1e0c8286083d4e43598e4f62`

    ```jsx
    import { IDKitWidget } from "@worldcoin/idkit";

    const address = ''; // the user's wallet address
    const is_production = process.env.NODE_ENV == "production";
    const action_id = is_production ? 'wid_2d3d2e7a1e0c8286083d4e43598e4f62' : 'wid_staging_ac7743b1589fefaf3ed2fc05b3d60da1';

    <IDKitWidget actionId={action_id} signal={address} handleVerify={verifyProof}>
    {({ open }) => (
        {/* You can render whatever you want here, and call open() to open the widget */}
        <button onClick={open}>Click me</button>
    )}
    </IDKitWidget>
    ```

3. Add the verification handler to notify the Lens API.

    ```typescript
    import type { ISuccessResult } from "@worldcoin/idkit";
    const verifyProof = useCallback(
    	async (result: ISuccessResult) => {
    		console.log("Received successful verification from IDKit.");

    		const response = await fetch("https://world-id-lens-bridge.vercel.app/api/v1/submit", {
    			method: "POST",
    			headers: { "Content-Type": "application/json" },
    			body: JSON.stringify({
    				...result,
    				signal: address,
    				action_id,
    				is_production,
    			}),
    		});

    		// Check with Lens API user has gasless enabled
    		if (response.ok) return;

    		if (response.status === 400 && (await response.json()).code === "already_verified") {
    			throw new Error(
    				"You have already verified this phone number with Lens. You can only verify one wallet with one phone number."
    			);
    		}

    		console.error("Failed to submit verification to Lens bridge.", response.status);
    		throw new Error();
    	},
    	[address]
    );
    ```

4. Done! User has gasless transactions. You can optionally add an `onSuccess` handler to continue with the flow in your app.
