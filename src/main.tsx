import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";
import ThemeProvider from "./utils/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
