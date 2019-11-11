import React from "react";

export default function MainPage() {
  return (
    <div className="container-fluid" id="homepg">
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

      <div className="container">
        <div className="jumbotron" id="titlepage">
          <h1 className="display-4">Troy Fasnacht Web Development</h1>
          <h3> Full stack web development</h3>
          <p className="lead">
            An entry level web developer that has recently completed the Trilogy
            Web Develepment Boot Camp
          </p>
        </div>
      </div>
    </div>
  );
}
