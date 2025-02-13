import React, { useState, useCallback } from "react";

// Adjust this path to wherever KioskScreen is exported in your project
const KioskScreen = {
  Waiting: "Waiting",
  Connected: "Connected",
  AlreadyVerified: "AlreadyVerified",
  VerificationRejected: "VerificationRejected",
  ConnectionError: "ConnectionError",
  Success: "Success",
  InvalidIdentity: "InvalidIdentity",
  VerificationError: "VerificationError",
  InvalidRequest: "InvalidRequest",
};
// Import your converted IDKitBridge (the CJS version)
import IDKitBridge from "./IDKitBridge";

function MiniKiosk() {
  // Example kiosk states
  const [screen, setScreen] = useState(KioskScreen.Waiting);
  const [qrData, setQrData] = useState(null);
  const [proofResult, setProofResult] = useState(null);
  const [connectionTimeout, setConnectionTimeout] = useState(false);

  // Example reset function
  const resetKiosk = useCallback(() => {
    setScreen(KioskScreen.Waiting);
    setQrData(null);
    setProofResult(null);
    setConnectionTimeout(false);
  }, []);

  return (
    <div>
      <h1>MiniKiosk - Current Screen: {screen}</h1>

      {/* Example placeholders for kiosk UI */}
      {qrData && (
        <div>
          <p>QR Code URI: {qrData}</p>
          {/* If you actually want to show a QR image, you could do:
              <img src={qrData} alt="QR Code" />
             but that typically requires a data URI or a generated code.
          */}
        </div>
      )}

      {proofResult && (
        <div>
          <p>Proof Result:</p>
          <pre>{JSON.stringify(proofResult, null, 2)}</pre>
        </div>
      )}

      {/* 
        IDKitBridge usage. Update app_id, action, etc. to match your actual config.
        If your kiosk logic sets "connectionTimeout" after some interval, 
        then IDKitBridge will handle a "Failed" verificationState and trigger resetKiosk.
      */}
      <IDKitBridge
        app_id="app_example" // e.g. "app_myId"
        action="my-action"
        action_description="Kiosk Example"
        connectionTimeout={connectionTimeout}
        verificationLevel={undefined} // or VerificationLevel.Device
        setScreen={setScreen}
        setQrData={setQrData}
        setProofResult={setProofResult}
        resetKiosk={resetKiosk}
      />
    </div>
  );
}

export default MiniKiosk;
