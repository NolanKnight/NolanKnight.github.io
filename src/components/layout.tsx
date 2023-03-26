import React from "react";
import MobileNav from "./mobileNav";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <MobileNav />
      <div className="h-[100vh] w-full bg-zinc-900">{children}</div>
    </>
  );
}

export default Layout;
