import React from "react";

const skillData = {
  Languages: ["Python", "C", "C++", "Java", "PHP", "JavaScript", "SQL"],
  Frontend: ["HTML", "CSS", "React"],
  Backend: ["Flask", "JSP", "Java Servlets"],
  Databases: ["MySQL", "PostgreSQL", "Azure SQL"],
  Tools: ["Linux", "Docker", "AWS", "Azure", "MS Office"],
};

const Skills = ({darkMode}) => {
  return (
    <section id="skills" className="container mt-5">
      <h2 className="mb-4 text-center">Skills</h2>
      <div className="row">
        {Object.entries(skillData).map(([category, skills], idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className={`card h-100 shadow-sm ${darkMode ? "bg-secondary text-light" : ""}`}>
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <ul className="list-unstyled">
                  {skills.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
