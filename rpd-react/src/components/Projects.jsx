import React, { useState } from "react";

import ProjectsData from "../ProjectsData.json";

const Projects = () => {
  const [projData] = useState(ProjectsData);
  return (
    <div className="projects">
      {projData.map((item) => {
        return (
          <div className="card" key={item.ID}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button>View</button>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
