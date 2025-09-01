import React, { useState } from "react";

export default function ConnectionTest() {
  const [status, setStatus] = useState(null);

  const testConnection = async () => {
    try {
      const res = await fetch("/api/health");
      if (res.ok) {
        setStatus("Connection successful!");
      } else {
        setStatus("Connection failed.");
      }
    } catch (error) {
      setStatus("Connection failed.");
    }
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", margin: "1rem 0" }}>
      <h2>Connection Test</h2>
      <button onClick={testConnection} style={{ padding: "0.5rem 1rem", borderRadius: "4px", background: "#3578b3", color: "#fff", border: "none" }}>
        Test Backend Connection
      </button>
      {status && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{status}</p>}
    </div>
  );
}
