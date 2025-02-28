import React from "react";
import "../styles.css";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaPython, 
  FaJava 
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiC 
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-card">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Frontend Development */}
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid frontend">
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
                <FaBootstrap className="skill-icon bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className="skill">
                <FaReact className="skill-icon react" />
                <span>React.js</span>
              </div>
            </div>
          </div>
          
          {/* Backend Development */}
          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-grid backend">
              <div className="skill">
                <FaNodeJs className="skill-icon nodejs" />
                <span>Node.js</span>
              </div>
              <div className="skill">
                <SiExpress className="skill-icon express" />
                <span>Express.js</span>
              </div>
              <div className="skill">
                <SiMongodb className="skill-icon mongodb" />
                <span>MongoDB</span>
              </div>
              <div className="skill">
                <SiMysql className="skill-icon mysql" />
                <span>MySQL</span>
              </div>
            </div>
          </div>
          
          {/* Programming Languages */}
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <div className="skills-grid programming-languages">
              <div className="skill">
                <FaPython className="skill-icon python" />
                <span>Python</span>
              </div>
              <div className="skill">
                <SiC className="skill-icon c" />
                <span>C</span>
              </div>
              <div className="skill">
                <FaJs className="skill-icon js" />
                <span>JavaScript</span>
              </div>
              <div className="skill">
                <FaJava className="skill-icon java" />
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
