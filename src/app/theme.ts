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
    fontSize: 18,
    allVariants: {
      textDecorationLine: "none",
    },
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "1.6rem" },
    h3: { fontSize: "1.3rem" },
    body1: { fontSize: "1rem" },
    button: { fontSize: ".8rem" },
    subtitle1: { fontSize: "1.1rem" },
  },
});
