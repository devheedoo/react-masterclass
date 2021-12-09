import React from "react";
import ReactDOM from "react-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";

const theme: DefaultTheme = {
  backgroundColor: "#7f8c8d",
  textColor: "#ecf0f1",
  accentColor: "#f1c40f",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
