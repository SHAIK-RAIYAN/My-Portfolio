import { Analytics } from "@vercel/analytics/react";
import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Theme/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Analytics />
    </ReactLenis>
  </StrictMode>,
);
