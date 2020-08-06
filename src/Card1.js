import React from "react"
import logo from "./logo.svg"


function Card(props) {
    console.log(props.children);
    
    return (
      <div className="card" style={{ width: "18rem" }}>
       {props.children}
        <div className="card-body">
          <h5 className="card-title"><h2>{props.title}</h2></h5>
          <p className="card-text">
          {props.all}
          </p>
          <a
            href={props.href}
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  
