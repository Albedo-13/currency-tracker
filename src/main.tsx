import "./index.scss";

import ReactDOM from "react-dom/client";

import App from "./components/App/App";
import ThemeProvider from "./components/Providers/ThemeProvider";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
