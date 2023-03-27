import React from "react";
import navLinks from "../data/navLinks";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="w-full h-[18vh] bg-teal-600 md:grid hidden grid-cols-2 place-items-center">
      <h1 className="text-white text-4xl w-[40vw]">Nolan Knight</h1>
      <div className="text-white grid grid-cols-4 text-lg w-[49vw]">
        {navLinks.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive, isPending }) =>
              isPending
                ? "h-[18vh] grid place-items-center bg-orange-600"
                : isActive
                ? "h-[18vh] grid place-items-center bg-orange-600"
                : "h-[18vh] grid place-items-center"
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
