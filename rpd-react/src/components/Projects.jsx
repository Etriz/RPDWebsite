import React, { useState } from "react";

import ProjectsData from "../ProjectsData.json";

const Projects = (props) => {
  const [projData] = useState(ProjectsData);

  const viewLive = (URL) => {
    console.log(URL);
    // props.history.push(URL);
  };
  return (
    <div className="projects">
      {projData.map((item) => {
        return (
          <div className="card" key={item.ID}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => viewLive(item.URL)}>View</button>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
