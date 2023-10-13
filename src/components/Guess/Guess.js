import React from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({guess, answer }) {
  const guessResults = checkGuess(guess, answer);


  return <p className="guess">
    {range(0,5).map((letter)=><span key={letter} className={`cell ${guessResults? guessResults[letter].status : ''}`}>{guess ? guess[letter] : ''}</span>)}
  </p>;
}

export default Guess;
