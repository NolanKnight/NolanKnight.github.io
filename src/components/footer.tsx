import React from "react";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-zinc-900 mt-[20vh]">
      <div className="w-full grid place-items-center">
        <div className="w-[95vw] h-px bg-white mb-16"></div>
      </div>
      <div className="md:ml-16 place-items-center md:place-items-start grid grid-rows-3">
        <div className="grid grid-cols-3 w-[60vw] place-items-center md:place-items-start md:w-[30vw] lg:w-[12vw]">
          <a href="https://github.com/NolanKnight" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ color: "rgb(13 148 136)", size: "38" }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
          <a href="mailto:hello@nolanknight.me" target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ color: "rgb(13 148 136)", size: "38" }}>
              <ImMail4 />
            </IconContext.Provider>
          </a>
          <a
            href="https://open.spotify.com/user/31b4pra2i5szjjaue5embhrcw5ee?si=c29772dcb5fa4ce4"
            target="_blank" rel="noreferrer"
          >
            <IconContext.Provider value={{ color: "rgb(13 148 136)", size: "38" }}>
              <FaSpotify />
            </IconContext.Provider>
          </a>
        </div>
        <p className="text-gray-400 mt-4">© 2023 Nolan Knight</p>
      </div>
    </div>
  );
}

export default Footer;
