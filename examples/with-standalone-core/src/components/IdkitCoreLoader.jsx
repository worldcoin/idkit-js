import React, { useEffect, useState } from "react";

const IdkitCoreLoader = ({ children }) => {
  const [loaded, setLoaded] = useState(() => !!window.idkitCore);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loaded) return;

    const handleLoad = () => setLoaded(true);
    const handleError = (e) => setError(e.detail);

    document.addEventListener("idkitCoreLoaded", handleLoad);
    document.addEventListener("idkitCoreError", handleError);

    return () => {
      document.removeEventListener("idkitCoreLoaded", handleLoad);
      document.removeEventListener("idkitCoreError", handleError);
    };
  }, [loaded]);

  if (error) return <div>Error loading IDKit: {error.message}</div>;
  if (!loaded) return <div>Loading security components...</div>;
  return children;
};

export default IdkitCoreLoader;
