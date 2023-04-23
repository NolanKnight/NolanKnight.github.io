import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <a
      className="mb-6 h-[20vh] w-[80vw] rounded-xl border-2 border-teal-600 text-white md:mb-0 md:h-[42vh] md:w-[20vw] lg:h-[32vh]"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h1 className="mt-4 text-center text-xl md:mb-12 md:ml-4 md:text-left md:text-3xl">
        {title}
      </h1>
      <p className="text-center md:ml-4 md:text-left">{description}</p>
    </a>
  );
}

export default ProjectCard;
