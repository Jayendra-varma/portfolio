import React from "react";

const projects = [
  {
    title: "Predicting House Prices",
    tech: "React, Flask, Random Forest, PostgreSQL",
    desc: "ML-powered web app that predicts house prices using real-world data. Integrated multiple regression models and real-time interaction.",
    link: "https://github.com/Jayendra-varma"
  },
  {
    title: "Job Management System",
    tech: "Java, JSP, Azure SQL",
    desc: "Dynamic job portal with JSP frontend and optimized stored procedures in Azure DB.",
    link: "https://github.com/Jayendra-varma"
  },
  {
    title: "Advanced Surveillance Robot",
    tech: "Arduino, ESP32-CAM, HTML",
    desc: "IoT robot with live camera and robotic arm, controllable via a web interface.",
    link: "https://github.com/Jayendra-varma/Advanced-surviellance-robot-with-robotic-arm-control"
  }
];

const Projects = ({darkMode}) => {
  return (
    <section id="projects" className="container mt-5">
      <h2 className="mb-4 text-center">Projects</h2>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className={`card h-100 shadow-sm ${darkMode ? "bg-secondary text-light" : ""}`}>
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{proj.tech}</h6>
                <p className="card-text">{proj.desc}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
