import React from "react";
import "./Projects.css";
import weatherImg from '../../assets/weather.png'
import meachine from '../../assets/meachine.webp'
import portfolio from '../../assets/portfolio.png'
import { LayoutGrid, ShoppingCart, MessageSquare, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="projects">

      <div className="projects-header">
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p>
          A selection of my recent work showcasing my skills and expertise
        </p>
      </div>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
         <img src={meachine} alt="Weather App" className="project-img"/>
          <div className="project-content">
            <h3>Advanced Tecniques for Digital image forgery Detection <ArrowUpRight size={20} /></h3>
            <p>
              A comprehensive financial dashboard with real-time analytics and
              data visualization.
            </p>

            <div className="tags">
              <span>Meachine Learning</span>
              {/* <span>TypeScript</span>
              <span>Chart.js</span> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">       
        <img src={weatherImg} alt="Weather App" className="project-img"/>
          <div className="project-content">
            <h3>Weather API<ArrowUpRight size={20} /></h3>
            <p>
             Weather app using public API
            </p>

            <div className="tags">
              <span>Html</span>
              <span>Css</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
        
         <img src={portfolio} alt="Weather App" className="project-img"/>
          <div className="project-content">
            <h3>Portfolio Website <ArrowUpRight size={20} /></h3>
            <p>
             Modern Portfolio Design
            </p>

            <div className="tags">
              <span>React</span>
            
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;