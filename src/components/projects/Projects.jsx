import "./Projects.scss";
import projectImg from "../../assets/images/project.png";
import ProjectList from "../ProjectList/ProjectList";

import React, { useState } from "react";

const Projects = () => {
  const [selected, setSelected] = useState("Project 1");
  const list = [
    {
      id: "Project 1",
      title: "Project 1",
    },
    {
      id: "Project 2",
      title: "Project 2",
    },
    {
      id: "Project 3",
      title: "Project 3",
    },
    {
      id: "Project 4",
      title: "Project 4",
    },
    {
      id: "Project 5 ",
      title: "Project 5",
    },
  ];

  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <ul>
        {list.map((project) => (
          <ProjectList
            title={project.title}
            active={selected === project.id}
            setSelected={setSelected}
            id={project.id}
          />
        ))}
      </ul>
      <div className="project-container">
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="project">
          <img src={projectImg} alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
