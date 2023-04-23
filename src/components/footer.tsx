import React from "react";
import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-[20vh] h-[40vh] w-full bg-zinc-900">
      <div className="grid w-full place-items-center">
        <div className="mb-16 h-px w-[95vw] bg-white"></div>
      </div>
      <div className="grid grid-rows-3 place-items-center md:ml-16 md:place-items-start">
        <div className="grid w-[60vw] grid-cols-3 place-items-center md:w-[30vw] md:place-items-start lg:w-[12vw]">
          <a
            href="https://github.com/NolanKnight"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ color: "rgb(13 148 136)", size: "38" }}
            >
              <BsGithub />
            </IconContext.Provider>
          </a>
          <a
            href="mailto:hello@nolanknight.me"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ color: "rgb(13 148 136)", size: "38" }}
            >
              <ImMail4 />
            </IconContext.Provider>
          </a>
          <a
            href="https://open.spotify.com/user/31b4pra2i5szjjaue5embhrcw5ee?si=c29772dcb5fa4ce4"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{ color: "rgb(13 148 136)", size: "38" }}
            >
              <FaSpotify />
            </IconContext.Provider>
          </a>
        </div>
        <p className="mt-4 text-gray-400">© 2023 Nolan Knight</p>
      </div>
    </div>
  );
}

export default Footer;
