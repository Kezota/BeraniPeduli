import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { HomePage } from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <DonatePage />
  </React.StrictMode>
);
