import React from "react";

export default function MainPage() {
  return (
    <div className="container-fluid" id="homepg">
      <nav className="nav flex-column">
        <a className="nav-link active" href="#">
          Active
        </a>
        <a className="nav-link" href="#">
          Portfolio
        </a>
        <a className="nav-link" href="#">
          Contact
        </a>
        <a
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Linkedin
        </a>
        <a
          className="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Resume
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
