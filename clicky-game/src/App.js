import Navbar from "./components/Navbar";
import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    countedCharacters: [],
    count: 0,
    highScore: 0,
    correctGuess: null,
    firstGuess: false
  };


  countCharacter = id => {

    // console.log(this.state.countedCharacters.indexOf(id));
    // Filter this.state.friends for friends with an id not equal to the id being removed
    if (this.state.countedCharacters.indexOf(id) === -1) {
      const findCharacters = this.state.characters.filter((character) => character.id === id);
      // Set this.state.friends equal to the new friends array
      const countedCharacters = this.state.countedCharacters;

      for (let i = 0; i < findCharacters.length; i++) {
        countedCharacters.push(findCharacters[i].id);
      }


      console.log(findCharacters);



      for (let i = this.state.characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.state.characters[i], this.state.characters[j]] = [this.state.characters[j], this.state.characters[i]];
      }

      let highScore = this.state.highScore

      if (highScore <= this.state.count) {
        highScore = this.state.count + 1
    }
     
      this.setState({
        countedCharacters,
        count: this.state.count + 1,
        characters: this.state.characters,
        highScore: highScore,
        correctGuess: true,
        firstGuess: true
      });
      console.log(characters);
      console.log(this.state.correctGuess);
      console.log(this.state.countedCharacters);
      console.log(this.state.count);
    } else {
      this.setState({ 
        count: 0,
        countedCharacters: [],
        correctGuess: false ,
        firstGuess: true
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper className="container">
        <Navbar count={this.state.count} highScore={this.state.highScore} correctGuess={this.state.correctGuess} firstGuess={this.state.firstGuess}/>
        <Title>Superhero Memory Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            shuffleArray={this.countCharacter}
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
