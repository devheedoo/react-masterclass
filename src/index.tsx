import React from "react";
import ReactDOM from "react-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";

const lightTheme: DefaultTheme = {
  textColor: "black",
  backgroundColor: "white",
};

const darkTheme: DefaultTheme = {
  textColor: "white",
  backgroundColor: "black",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
