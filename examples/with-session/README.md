# IDKit Session Example

This example demonstrates how to use the IDKit Session API to create a World ID verification flow. It shows how to create a session, display a QR code for verification, poll for status updates, and handle the verification result.

## Features

-   **Session Management**: Creates and manages a World ID verification session using `useRef`
-   **QR Code Display**: Shows a QR code that users can scan with their World app
-   **Real-time Status Updates**: Polls the session status every 2 seconds until completion
-   **Terminal State Handling**: Automatically stops polling when verification succeeds or fails
-   **Proof Display**: Shows the verification proof with copy-to-clipboard functionality
-   **Responsive UI**: Different UI states for each verification step

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

You can customize the verification by setting these environment variables in a `.env.local` file:

```bash
NEXT_PUBLIC_APP_ID=your_app_id_here
NEXT_PUBLIC_ACTION=your_action_name
NEXT_PUBLIC_SIGNAL=your_signal_data # optional
```

If not provided, the example will use default staging values.

## How It Works

1. **Session Creation**: On page load, a new World ID session is created with your app configuration
2. **QR Code Display**: The session URI is displayed as a QR code for users to scan
3. **Status Polling**: The app continuously checks the verification status every 2 seconds
4. **State Management**: Different UI components are shown based on the current verification state:
    - `PreparingClient`: Loading state
    - `WaitingForConnection`: QR code display
    - `WaitingForApp`: User connected, completing verification
    - `Confirmed`: Verification successful with proof details
    - `Failed`: Verification failed with error information
5. **Automatic Cleanup**: Polling stops automatically when a terminal state is reached

## Verification States

-   **Preparing Client**: Initial loading state
-   **Waiting for Connection**: QR code is displayed, waiting for user to scan
-   **Waiting for App**: User has scanned, completing verification in World app
-   **Confirmed**: Verification completed successfully - proof is displayed
-   **Failed**: Verification failed - error details are shown
