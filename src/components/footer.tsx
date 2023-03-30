import React from "react";

function Footer() {
  return (
    <div className="w-full h-[40vh] bg-zinc-900 mt-[20vh]">
      <div className="w-full grid place-items-center">
        <div className="w-[95vw] h-px bg-white mb-16"></div>
      </div>
      <div className="md:ml-16 text-center md:text-left">
        <p className="text-white text-lg">
          This website was created by me. Contact me at{" "}
          <a className="underline" href="mailto:hello@nolanknight.me">
            hello@nolanknight.me
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
