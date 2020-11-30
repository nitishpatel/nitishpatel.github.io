import React, { useState, useEffect } from "react";
import Card from "./Card";
import firebase from "../firebase";


const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    firebase.firestore().collection("projects")
    .onSnapshot((snapshot)=>{
      const newProjects = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setProjects(newProjects);
    })
  }, []);

  return (
    <div className="container projects" id="project">
      <h3 className="text-center" data-aos="slide-up">Projects</h3>

      <div className="row">
        {projects.map((project, index) => {
          return (
            <div className="col-lg-4" data-aos="zoom-in" key={index}>
              <a className="text-dark" href={project.url} ><Card
                title={project.name}
                image={project.image}
                description={project.description}
              />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
