import React from "react"
import logo from "./logo.svg"


function Card(props) {
    console.log(props);
    
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.logo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"><h2>{props.children[0]}</h2></h5>
          <p className="card-text">
          {props.children[1]}
          </p>
          <a
            href={props.children[2]}
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;
  
