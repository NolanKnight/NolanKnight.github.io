import React from "react";
import navLinks from "../data/navLinks";
import { NavLink } from "react-router-dom";

function Nav() {
  const logo = require("../logo.png");

  return (
    <div className="hidden h-[18vh] w-full grid-cols-2 place-items-center bg-teal-600 md:grid">
      <div className="grid grid-cols-2 place-items-center gap-1 lg:grid-cols-3">
        <img src={logo} className="w-[6vw]" alt="{010}" />
        <h1 className="w-[16vw] text-center text-4xl text-white">
          Nolan Knight
        </h1>
      </div>
      <div className="grid h-[10vh] grid-cols-5 gap-8 text-lg text-white">
        {navLinks.map((item) =>
          item.navBar ? (
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? "grid w-[12vw] place-items-center bg-orange-600"
                  : isActive
                  ? "grid w-[12vw] place-items-center bg-orange-600"
                  : "grid w-[12vw] place-items-center"
              }
            >
              {item.label}
            </NavLink>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Nav;
