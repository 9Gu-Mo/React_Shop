"use client";

import React from "react";
import FixButton from "./FixButton";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { useLayout } from "../context/LayoutContext";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { layoutClassName, bottomPadding } = useLayout();

  return (
    <>
      <div
        className={`flex min-h-dvh flex-col ${layoutClassName}`}
        style={{ paddingBottom: bottomPadding > 0 ? `${bottomPadding}px` : undefined }}
      >
        <Header />
        <main className="mx-auto flex-1 px-4">{children}</main>
        <Footer />
        <FixButton />
      </div>
    </>
  );
}
