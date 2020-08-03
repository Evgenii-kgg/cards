import React from "react"
import logo from "./logo.svg"


function Card2(props) {
    console.log(props);
    
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.logo} className="card-img-top" />
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
  
  export default Card2;
  
