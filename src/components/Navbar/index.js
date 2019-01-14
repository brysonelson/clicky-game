import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function Navbar(props) {

    // The render method returns the JSX that should be rendered
    return (
        <div className="container">
            <nav className="navbar navbar fixed-top navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                
                <div className="row nav-row">
                    <div className="col-lg-6">
                    {!props.firstGuess ? (
                        <p>Choose a Character Below: </p>
                    ):(
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
                        <p className="">Correct Guesses: {props.count} | High Score: {props.highScore}</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


