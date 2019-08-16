import React from "react";

export default function ContactForm() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Contact</h1>
        <p className="lead">
          If you would like to contact me concerning possible web development
          opportunities feel free to email me at taf442001@yahoo.com. Vist my
          linkedin profile at the link below
        </p>
        <a
          href="https://www.linkedin.com/in/troy-fasnacht-0648679b"
          className="btn btn-primary btn-block"
          id="linkbutton"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
