import React from "react";
import "./style.css";

//this is the character card element
function CharacterCard(props) {
  return (
    //call the countCharacter function in app.js
    <div onClick={() => props.countCharacter(props.id)} className="card">
      <div className="img-container">
        {/* display the image based on the url for said character */}
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
