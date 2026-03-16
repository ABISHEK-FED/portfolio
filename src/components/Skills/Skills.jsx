import React from "react";
import "./Skills.css";
import { Monitor, Server, Wrench } from "lucide-react";

const Skills = () => {
  return (
    <section className="skills">

      <div className="skills-header">
        <h1>
          Tech <span>Skills</span>
        </h1>
        <p>
          A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
        </p>
      </div>

      <div className="skills-container">

        {/* FRONTEND */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="icon"><Monitor size={24} /></div>
            <h3>Frontend</h3>
          </div>

          <div className="skills-tags">
            <span>React.js</span>
            <span>Html</span>
            <span>Css</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="icon"><Server size={24} /></div>
            <h3>Backend</h3>
          </div>

          <div className="skills-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>REST API</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-box">
          <div className="skills-title">
            <div className="icon"><Wrench size={24} /></div>
            <h3>Tools & Others</h3>
          </div>

          <div className="skills-tags">
            <span>Git & GitHub</span>
            <span>Responsive Design</span>
            <span>Vite</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;