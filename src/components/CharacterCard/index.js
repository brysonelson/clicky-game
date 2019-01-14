import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div onClick={() => props.shuffleArray(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
