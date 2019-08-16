import React from "react";
import ProjectCard from "./projcard";
import Projects from "./project.json";

export default function ProjectPage() {
  return (
    <div id="projects">
      <nav className="nav">
        <a className="nav-link active" href="#">
          Active
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
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
    </div>
  );
}
