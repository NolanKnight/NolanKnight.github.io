import React from "react";
import ProjectCard from "../components/projectCard";
import projectList from "../data/projectList";

function Projects() {
  return (
    <div className="mt-32 grid w-full grid-rows-4 place-items-center md:h-[40vh] md:grid-cols-4 lg:h-[30vh]">
      {projectList.map((item) => (
        <ProjectCard
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Projects;
