const React = require("react");
const { memo, useRef, useEffect } = React;
const {
  VerificationLevel,
  VerificationState,
  useWorldBridgeStore,
} = require("@worldcoin/idkit-core");

// Adjust paths to match your project structure
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
// If there's a dedicated CJS build of idkit-core, import from it, e.g.:
// const { VerificationLevel, VerificationState, useWorldBridgeStore } = require("@worldcoin/idkit-core/cjs");
//
// Otherwise, if the library can be imported normally with CommonJS, do:

function IDKitBridge(props) {
  // const { VerificationLevel, VerificationState, useWorldBridgeStore } =
  //   window.idkitCore;
  console.log(VerificationLevel);
  const {
    app_id,
    action,
    action_description,
    connectionTimeout,
    verificationLevel,
    setScreen,
    setQrData,
    setProofResult,
    resetKiosk,
  } = props;

  const intervalIdRef = useRef();

  const {
    connectorURI,
    result,
    verificationState: idKitVerificationState,
    createClient,
    pollForUpdates,
    bridge_url,
  } = useWorldBridgeStore();

  useEffect(() => {
    if (idKitVerificationState !== VerificationState.PreparingClient) {
      return;
    }

    // Clear any existing interval
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    createClient({
      app_id: app_id,
      action: action,
      bridge_url,
      verification_level: verificationLevel || VerificationLevel.Device,
      action_description: action_description,
    })
      .then(() => {
        intervalIdRef.current = setInterval(async () => {
          try {
            await pollForUpdates();
          } catch (error) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = undefined;
          }
        }, 3000);
      })
      .catch((error) => {
        if (process.env.NODE_ENV === "development") {
          console.log("Error creating client");
          console.error(error);
        }
      });
  }, [
    bridge_url,
    createClient,
    idKitVerificationState,
    pollForUpdates,
    action,
    action_description,
    app_id,
    verificationLevel,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    switch (idKitVerificationState) {
      case VerificationState.WaitingForConnection:
        setScreen(KioskScreen.Waiting);
        break;
      case VerificationState.WaitingForApp:
        setScreen(KioskScreen.Connected);
        break;
      case VerificationState.Confirmed:
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
        break;
      case VerificationState.Failed:
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
        // If there's a connection timeout, reset
        if (connectionTimeout) {
          if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
          }
          resetKiosk();
        }
        break;
      default:
        break;
    }
  }, [connectionTimeout, idKitVerificationState, resetKiosk, setScreen]);

  useEffect(() => {
    if (connectorURI) {
      setQrData(connectorURI);
    }
  }, [connectorURI, setQrData]);

  useEffect(() => {
    if (result) {
      setProofResult(result);
    }
  }, [result, setProofResult]);

  // Render nothing; purely a background effect
  return null;
}

export default IDKitBridge;
