import React from "react";
import ProjectCard from "./projcard";
import Projects from "./project.json";
import Contact from "../Contactpg/form.js";

export default function ProjectPage() {
  return (
    <div id="projects">
      <nav className="nav ">
        <a class="nav-link active" href="/">
          Main
        </a>

        <a class="nav-link" href="/project">
          Projects
        </a>
        <a
          class="nav-link"
          href="https://www.linkedin.com/in/troy-fasnacht-0648679b"
        >
          Linkedin
        </a>
      </nav>
      <div className="row" id="topspacerrow" />
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
