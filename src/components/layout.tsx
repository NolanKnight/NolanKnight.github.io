import React from "react";
import Footer from "./footer";
import MobileNav from "./mobileNav";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <div className="bg-zinc-900">
      <Nav />
      <MobileNav />
      <div className="h-fit w-full bg-inherit">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
