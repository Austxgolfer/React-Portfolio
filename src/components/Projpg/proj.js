import React from "react";
import ProjectCard from "./projcard";

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
        <ProjectCard />
      </div>
    </div>
  );
}
