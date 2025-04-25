import { createTheme } from "@mui/material";
import { commonSettings } from "./theme";

// Light theme
export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007A33",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#005C2E",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F5F5F5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#424242",
    },
  },
  ...commonSettings,
});

// Dark theme
export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00C781", // lighter HanseMerkur green for contrast
      contrastText: "#000000",
    },
    secondary: {
      main: "#009E60",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
    },
  },
  ...commonSettings,
});
