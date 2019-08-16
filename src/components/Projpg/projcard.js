import React, { useState } from "react";
import Projectone from "../../Images/place1.jpg";

export default function ProjectCard(props) {
  const [link] = useState(props.github);

  console.log("component", link);
  return (
    <div className="col-md center-block" key={props.id}>
      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={link} className="btn btn-primary btn-block" id="gitbutton">
            Github
          </a>
          <a
            href={props.site}
            className="btn btn-primary btn-block"
            id="sitebutton"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
