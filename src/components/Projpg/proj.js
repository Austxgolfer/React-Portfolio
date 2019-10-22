import React from "react";
import ProjectCard from "./projcard";
import Projects from "./project.json";
import Contact from "../Contactpg/form.js";

export default function ProjectPage() {
  return (
    <div id="projects">
      <nav className="nav flex-column">
        <a className="nav-link active" href="/">
          Main Page
        </a>
        <a className="nav-link" href="/project">
          Portfolio
        </a>

        <a
          className="nav-link "
          href="https://www.linkedin.com/in/troy-fasnacht-0648679b"
          tabindex="-1"
          aria-disabled="true"
        >
          Linkedin
        </a>
      </nav>
      <div className="row">
        {Projects.map(card => (
          <ProjectCard
            id={card.id}
            name={card.name}
            desc={card.desc}
            github={card.github}
            site={card.site}
          />
        ))}
      </div>
      <div className="row" id="spacerrow" />
      <div className="row">
        <Contact />
      </div>
    </div>
  );
}
