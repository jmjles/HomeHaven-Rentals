"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#009ccc",
    },
    secondary: {
      main: "#0F084B",
    },
    info: {
      main: "#c2f1ff",
    },
    background: {
      paper: "#FBF9FF",
    },
  },
  typography: {
    allVariants: {
      textDecorationLine: "none",
    },
  },
});
