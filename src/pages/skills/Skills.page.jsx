import React from "react";
import Frontend from "../../components/skills/Frontend.component";
import Backend from "../../components/skills/Backend.component";
import "./Skills.page.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
