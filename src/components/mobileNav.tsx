import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";

function MobileNav() {
  const [linksShown, setLinksShown] = useState(false);

  function handleLinksButton() {
    if (linksShown) {
      setLinksShown(false);
    } else {
      setLinksShown(true);
    }
  }

  return (
    <>
      <div className="md:hidden w-full h-[18vh] bg-teal-600 grid grid-cols-2 place-items-center">
        <h1 className="text-white text-2xl">Nolan Knight</h1>
        <IconContext.Provider value={{ color: "white", size: "38" }}>
          <FaBars onClick={handleLinksButton} />
        </IconContext.Provider>
      </div>
      <div
        className={
          linksShown
            ? "w-full h-[82vh] grid grid-rows-4  bg-teal-600"
            : "hidden"
        }
      >
        {navLinks.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive, isPending }) =>
              isPending
                ? "w-full grid place-items-center bg-orange-600"
                : isActive
                ? "w-full grid place-items-center bg-orange-600"
                : "w-full grid place-items-center"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MobileNav;
