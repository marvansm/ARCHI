import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TanstackProvider from "./Providers/TanstackProvider.tsx";
import TanstackRouterProvider from "./Router/TanstackRouterProvider.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Constants/theme.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <TanstackProvider>
        <TanstackRouterProvider />
        <App />
      </TanstackProvider>
    </ThemeProvider>
  </StrictMode>
);
