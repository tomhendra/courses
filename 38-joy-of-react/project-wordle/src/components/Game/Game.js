import * as React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern=".{5,5}"
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Game;
