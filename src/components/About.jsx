import React from "react";
import profilePic from '../Assets/profilepic.jpg';
const About = ({ darkMode }) => {
  return (
    <section id="about" className="container mt-5 mb-5">
      <h2 className="mb-4 text-center">About Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className={`card p-4 shadow-lg border-0 ${darkMode ? "bg-secondary text-light" : "bg-light"}`}>
            <div className="text-center mb-3">
              <img
                src={profilePic}
                alt="profile"
                className="rounded-circle shadow"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>
            <p className="lead text-center">
              Hi, I’m Jayendra Sai Varma Datla — a recent Computer Science graduate from the University of Oklahoma with a passion for building meaningful software and data solutions.
            </p>
            <p>
              I’ve worked on projects ranging from job management systems, tweaking parameters that maximize efficiency, data analysis and visualizations. Along the way, I’ve gained experience with Python, Java, React, SQL, AWS, Azure, and more.
            </p>
            <p>
              I’m driven by curiosity — whether it’s learning new frameworks, solving tricky bugs, or making systems faster and smarter. I’m excited to apply my skills in software and data engineering roles while continuing to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
