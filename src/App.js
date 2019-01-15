import Navbar from "./components/Navbar";
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

class App extends Component {
  // Setting initial state
  state = {
    characters,
    countedCharacters: [],
    count: 0,
    highScore: 0,
    correctGuess: null,
    firstGuess: false
  };


  countCharacter = id => {

    //look to see if the selected character's id already exists in the countedCharacters array
    // if the character does not yet exist, keep going
    if (this.state.countedCharacters.indexOf(id) === -1) {

      //store the id of the selected character
      const findCharacters = this.state.characters.filter((character) => character.id === id);

      //store the current counted character in a variable
      const countedCharacters = this.state.countedCharacters;

      //loop through the entire array of found characters, will only be one in this game
      for (let i = 0; i < findCharacters.length; i++) {

        //push the id of the newly selected character into the countedCharacters array
        countedCharacters.push(findCharacters[i].id);
      }

      // randomize the list of characters for the next pick
      for (let i = this.state.characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]];
      }

      //store the current high score
      let highScore = this.state.highScore

      //if the current high score is less than the current correct click count
      //set the highScore to be the current click count
      if (highScore <= this.state.count) {
        highScore = this.state.count + 1
      }
     
      //update the state of the app to reflect the users choices
      this.setState({
        countedCharacters,
        count: this.state.count + 1,
        characters: this.state.characters,
        highScore: highScore,
        correctGuess: true,
        firstGuess: true
      });
    } 
    //if the users guess has already been guessed
    //reset the state to the beginning
    else {
      this.setState({ 
        count: 0,
        countedCharacters: [],
        correctGuess: false ,
        firstGuess: false
      });
    }
  };

  // render the components to the page
  render() {
    return (
      //return the wrapper element
      <Wrapper className="container">
        {/* return the Navbar element while passing the current click count, highscore, whether the users guess was corrent,
        and wether they have already guess the first time or not */}
        <Navbar count={this.state.count} highScore={this.state.highScore} correctGuess={this.state.correctGuess} firstGuess={this.state.firstGuess}/>
        {/* render the title section */}
        <Title>Superhero Memory Game</Title>
        {/* map over the characters array and create a character card passing in the relevent character info */}
        {this.state.characters.map(character => (
          <CharacterCard
            countCharacter ={this.countCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
