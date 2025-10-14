"use client";

import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme/theme";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="mx-auto max-w-7xl flex-1 px-4">{children}</main>
        <Footer />
      </div> */}

      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Header />
        <main className="mx-auto max-w-7xl flex-1 px-4">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
