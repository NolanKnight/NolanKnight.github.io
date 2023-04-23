import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";

function MobileNav() {
  const logo = require("../logo.png");

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
      <div className="grid h-[18vh] w-full grid-cols-3 place-items-center bg-teal-600 md:hidden">
        <img src={logo} className="w-[10vw]" alt="{010}" />
        <h1 className="text-2xl text-white">Nolan Knight</h1>
        <IconContext.Provider value={{ color: "white", size: "38" }}>
          <FaBars onClick={handleLinksButton} />
        </IconContext.Provider>
      </div>
      <div
        className={
          linksShown
            ? "grid h-[82vh] w-full grid-rows-4 bg-teal-600 text-white"
            : "hidden"
        }
      >
        {navLinks.map((item) =>
          item.navBar ? (
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? "grid w-full place-items-center bg-orange-600"
                  : isActive
                  ? "grid w-full place-items-center bg-orange-600"
                  : "grid w-full place-items-center"
              }
              onClick={() => {
                setLinksShown(false);
              }}
            >
              {item.label}
            </NavLink>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}

export default MobileNav;
