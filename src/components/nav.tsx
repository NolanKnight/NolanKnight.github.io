import React from "react";
import navLinks from "../data/navLinks";
import { NavLink } from "react-router-dom";

function Nav() {
  const logo = require("../logo.png");

  return (
    <div className="w-full h-[18vh] bg-teal-600 md:grid hidden grid-cols-2 place-items-center">
      <div className="w-[40vw] grid lg:grid-cols-3 grid-cols-2 gap-1 place-items-center">
        <img src={logo} className="w-[6vw]" alt="" />
        <h1 className="text-white text-4xl w-[16vw] text-center">
          Nolan Knight
        </h1>
      </div>
      <div className="text-white grid grid-cols-5 text-lg w-[35vw] h-[10vh]">
        {navLinks.map((item) =>
          item.navBar ? (
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? "grid place-items-center bg-orange-600"
                  : isActive
                  ? "grid place-items-center bg-orange-600"
                  : "grid place-items-center"
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
