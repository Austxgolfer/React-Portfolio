import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="col-md-3 center-block" key={props.id}>
      <div className="card mx-auto">
        <img src="{props.image}" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
