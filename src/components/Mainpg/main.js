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
          <h1 className="display-4">Vanadium Web Development</h1>
          <p className="lead">A future force in full stack web development</p>
        </div>
      </div>
    </div>
  );
}
