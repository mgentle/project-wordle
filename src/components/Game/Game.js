import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  const handleGuess = (guess) =>{
    const newGuesses = [...guesses];
    newGuesses.push(guess);

    if(guess.value === answer) setGameStatus('won');
    else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) setGameStatus('lost');

    setGuesses(newGuesses);
  }


  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput onGuess={handleGuess} totalGuesses={guesses.length}  />
    <Banner status={gameStatus} answer={answer} guesses={guesses.length} />
  </>;
}

export default Game;
