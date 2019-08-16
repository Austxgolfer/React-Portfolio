import React from "react";

export default function MainPage() {
  return (
    <div className="container-fluid" id="homepg">
      <nav className="nav flex-column">
        <a className="nav-link active" href="/">
          Main Page
        </a>
        <a className="nav-link" href="/project">
          Portfolio
        </a>

        <a
          className="nav-link"
          href="https://www.linkedin.com/in/troy-fasnacht-0648679b"
          tabindex="-1"
          aria-disabled="true"
        >
          Linkedin
        </a>
      </nav>

      <div className="container">
        <div className="jumbotron" id="titlepage">
          <h1 className="display-4">Troy Fasnacht Web Development</h1>
          <h3> Full stack web development</h3>
          <p className="lead">
            An entry level web developer recently graduated from the Trilogy Web
            Develepment Boot Camp
          </p>
        </div>
        b de
      </div>
    </div>
  );
}
