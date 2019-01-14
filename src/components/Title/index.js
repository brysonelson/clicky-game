import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="title">{props.children}</h1>
      </div>
    </div>
  );
}

export default Title;
