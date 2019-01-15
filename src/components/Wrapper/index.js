import React from "react";
import "./style.css";

function Wrapper(props) {
  // create a wrapper to enclose our app
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
