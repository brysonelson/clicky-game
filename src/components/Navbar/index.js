import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function Navbar(props) {

    // The render method returns the JSX that should be rendered
    return (
        //use bootstrap to create a navbar
        <div className="container">
            <nav className="navbar navbar fixed-top navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                
                <div className="row nav-row">
                    <div className="col-lg-6">
                    {/* use a ternary operator to decide what to render based on if the user has
                    made a guess yet */}
                    {!props.firstGuess ? (
                        <p>Choose a Character Below: </p>
                    ):(
                        // if the user has already made at least one guess, display one of the following
                        // based on if the users guess was correct or not
                        <div>
                            {props.correctGuess ? (
                                <p>You Guessed Correctly!</p>
                            ): (
                                <p>Wrong Guess!</p>
                            )}
                        </div>
                        )}
                    </div>
                    <div className="col-lg-6">
                        {/* display the users current score and their highscore */}
                        <p className="">Correct Guesses: {props.count} | High Score: {props.highScore}</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


