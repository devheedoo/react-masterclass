import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";

const theme: DefaultTheme = {
  backgroundColor: "#7f8c8d",
  textColor: "#ecf0f1",
  accentColor: "#f1c40f",
};

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
