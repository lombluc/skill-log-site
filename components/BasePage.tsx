import React from "react";
import SiteFooter from "./sections/SiteFooter";
import NavBar from "./sections/NavBar";

export default function BasePage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      {children}

      <SiteFooter />
    </>
  );
}
