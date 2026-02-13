import type { Metadata } from "next";
import { CssBaseline, ModalRoot, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./theme";
import { ChildrenType } from "@/types";

export const metadata: Metadata = {
  title: "HomeHaven Rentals",
  description: "Find a home for you",
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
