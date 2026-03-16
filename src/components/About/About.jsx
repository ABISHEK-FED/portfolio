import React from "react";
import "./About.css";
import { Code, Palette, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <h1 className="about-title">
            About <span>Me</span>
          </h1>

          <p>
           I am a motivated Fresher MERN Stack Developer passionate about creating dynamic and responsive web applications. I have practical knowledge of MongoDB, Express.js, React.js, and Node.js, and I enjoy turning ideas into functional and user-friendly websites.</p><p> I am constantly learning new technologies and improving my coding skills to build efficient and scalable applications. I am looking for an opportunity to start my career in the IT industry and contribute to innovative development projects.
          </p>
         

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="about-card">
            <div className="icon">
              <Code size={28}/>
            </div>
            <div>
              <h3>Full Stack Development</h3>
              <p> TN Naan Mudhalvan Course</p>
            </div>
          </div>

          <div className="about-card">
            <div className="icon">
              <Target size={28}/>
            </div>
            <div>
              <h3>Learning Mindset</h3>
              <p>Always improving and adapting to new technologies</p>
            </div>
          </div>

          <div className="about-card">
            <div className="icon">
              <Zap size={28}/>
            </div>
            <div>
              <h3>Performance Optimization</h3>
              <p>Fast and efficient</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;