import { DefaultTheme } from "styled-components";

export enum ThemeName {
  LIGHT = "light",
  DARK = "dark",
}

export const darkTheme: DefaultTheme = {
  backgroundColor: "#7f8c8d",
  textColor: "#ecf0f1",
  accentColor: "#f1c40f",
};

export const lightTheme: DefaultTheme = {
  backgroundColor: "#ecf0f1",
  textColor: "#7f8c8d",
  accentColor: "#f1c40f",
};
