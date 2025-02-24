import React from "react";
import "../styles.css";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-card">
        <h2>Skills</h2>
        
        <div className="skills-grid">
          <div className="skill">
            <FaHtml5 className="skill-icon html" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon css" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs className="skill-icon js" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <FaPython className="skill-icon python" />
            <span>Python</span>
          </div>
          <div className="skill">
            <FaReact className="skill-icon react" />
            <span>React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
