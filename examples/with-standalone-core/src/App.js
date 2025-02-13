import React from "react";
import MiniKiosk from "./MiniKiosk";
const sampleAction = {
  app_id: "app_staging_6c0c10e8f99effda0b361733caf2a15d",
  action: "verify",
  description: "Sample action description for IDKit Core integration.",
};

console.log(window);
function App() {
  if (!window.idkitCore) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1>Welcome to my React App</h1>
      <MiniKiosk action={sampleAction} />
    </div>
  );
}

export default App;
