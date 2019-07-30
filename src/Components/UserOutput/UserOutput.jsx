import React from "react";
import "./UserOutput.css";

const userOutput = props => (
  <div className="UserOutput">
    <p>Username: {props.name}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
      consequatur.
    </p>
  </div>
);

export default userOutput;
