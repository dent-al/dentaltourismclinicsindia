import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

// Use basename only in production for GitHub Pages
const basename = process.env.NODE_ENV === 'production' ? "/dentaltourismclinicsindia" : "";

root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);