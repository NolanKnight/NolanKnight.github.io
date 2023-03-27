import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-zinc-900 mt-[20vh]">
      <div className="w-full grid place-items-center">
        <div className="w-[95vw] h-px bg-white mb-16"></div>
      </div>
      <div className="md:ml-16 text-center md:text-left">
        <p className="text-white text-lg">
          This website was created by me. Contact me at{" "}
          <Link
            className="underline"
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:hello@nolanknight.me";
              e.preventDefault();
            }}
          >
            hello@nolanknight.me
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
