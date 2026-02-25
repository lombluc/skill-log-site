import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function BasePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cloud font-sans text-text-color">
      <NavBar />

      {children}

      <Footer />
    </div>
  );
}
