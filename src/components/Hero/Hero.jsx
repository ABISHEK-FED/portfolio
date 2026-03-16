import React from "react";
import "./Hero.css";
import hero from "../../assets/hero1.jpeg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge"> 🎗️ Full Stack Developer | Based in karur , Tamilnadu.  </span>

        <h1>
          MERN Stack <br /> Developer
        </h1>

        <p>
          I'm <b>Abishek</b>, a Full Stack Developer building accessible,
          pixel-perfect, and performant web experiences.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" target="_blank" >
          <button className="primary">View Resume ↗</button>
          </a>
        </div>

        <div className="stats">

          <div>
            <h2>5+</h2>
            <p>Technolgy Used</p>
          </div>

          <div>
            <h2>5+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Commitment</p>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
      

    </section>
  );
};

export default Hero;