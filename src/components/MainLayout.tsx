import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="p-8">{children}</main>
      <Footer />
    </div>
  );
}
