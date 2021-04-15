import React, { Component } from "react";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import "./styles.css";

class Skills extends Component {
  render() {
    return (
      <div className="skill">
        <h1>Principais ferramentas para você aprender</h1>
        <section className="skill-section">
          <div className="skill-card">
            <div className="skill-title">
              <p>React</p>
            </div>
            <div className="skill-image">
              <FaReact />
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-title">
              <p>Bootstrap</p>
            </div>
            <div className="skill-image">
              <FaBootstrap />
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-title">
              <p>Git</p>
            </div>
            <div className="skill-image">
              <FaGitAlt />
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-title">
              <p>Node</p>
            </div>
            <div className="skill-image">
              <FaNodeJs />
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-title">
              <p>MongoDB</p>
            </div>
            <div className="skill-image">
              <DiMongodb />
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default Skills;
