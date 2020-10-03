import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getProjects } from "../core/helper/corehelper";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    preload();
  }, []);
  const preload = () => {
    getProjects()
      .then((data) => {
        if (data) {
          setProjects(data);
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container projects" id="project">
      <h3 className="text-center">Projects</h3>

            <div className="row">
          
            {projects.map((project,index)=>{
            return(
              <div className="col-lg-3" key={index}>
                <Card title={project.name} image={project.image} description={project.description} />

              </div>

            )
          })}
            </div>
          </div>
   
          
  );
};

export default Project;
