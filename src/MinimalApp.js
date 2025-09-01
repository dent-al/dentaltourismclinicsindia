import React from "react";
import { Routes, Route } from "react-router-dom";
import SimpleHome from "./pages/SimpleHome";

// Minimal App for testing
function MinimalApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SimpleHome />} />
        <Route path="*" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
              <p className="text-gray-600">The page you're looking for doesn't exist.</p>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default MinimalApp;
