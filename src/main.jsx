import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { SocketContextProvider } from "./contexts/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SocketContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
