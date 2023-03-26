import React from "react";

function Home() {
  return (
    <div className="grid place-items-stretch">
      <h1 className="md:text-6xl text-4xl text-white md:ml-16 pt-16 md:text-left text-center">
        Hi, I'm Nolan.
      </h1>
      <p className="text-white md:ml-16 text-lg mt-4 md:text-left text-center">
        I am a amateur developer and FRC (FIRST Robotics Competition) team
        member.
      </p>
      <div className="w-full grid place-items-center">
        <div className="w-[95vw] h-px bg-white mt-4"></div>
      </div>
    </div>
  );
}

export default Home;
