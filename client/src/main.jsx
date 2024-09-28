import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth-context.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProjectContextProvider } from "./context/project-context.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProjectContextProvider>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    </ProjectContextProvider>
  </AuthProvider>
);
