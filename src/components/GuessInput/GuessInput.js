import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessInput({onGuess, totalGuesses}) {
    const [guess, setGuess] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (guess.length !== 5) {
            window.alert('Please enter exactly 5 characters.');
            return;
        }

        console.log({guess})
        onGuess({id: crypto.randomUUID(), value: guess});
        setGuess('');
    }

    return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text"
            required
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            title="5 letter word"
            value={guess}
            onChange={(event) => setGuess(event.target.value.toUpperCase())}
            disabled={NUM_OF_GUESSES_ALLOWED === totalGuesses}
            placeholder={NUM_OF_GUESSES_ALLOWED === totalGuesses ? "GAME OVER" : undefined}
        />
    </form>
}

export default GuessInput;
