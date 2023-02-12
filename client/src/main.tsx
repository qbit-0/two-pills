import App from "@/App";
import lightTheme from "@/style/lightTheme";
import "@fontsource/roboto";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
