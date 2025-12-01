"use client";

import React from "react";
import FixButton from "./FixButton";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="mx-auto flex-1 px-4">{children}</main>
        <Footer />
        <FixButton />
      </div>
    </>
  );
}
