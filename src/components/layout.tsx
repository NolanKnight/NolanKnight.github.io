import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="h-[100vh] w-full bg-zinc-900">{children}</div>
    </>
  );
}

export default Layout;
