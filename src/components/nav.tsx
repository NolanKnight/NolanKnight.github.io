import React from "react";
import navLinks from "../data/navLinks";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full h-[18vh] bg-teal-600 md:grid hidden grid-cols-2 place-items-center">
      <h1 className="text-white text-4xl">Nolan Knight</h1>
      <div className="text-white grid grid-cols-4 text-lg">
        {navLinks.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive, isPending }) =>
              isPending
                ? "w-[12vw] h-[18vh] grid place-items-center bg-orange-600"
                : isActive
                ? "w-[12vw] h-[18vh] grid place-items-center bg-orange-600"
                : "w-[12vw] h-[18vh] grid place-items-center"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Nav;
