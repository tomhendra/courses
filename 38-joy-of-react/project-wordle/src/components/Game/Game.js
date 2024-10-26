import * as React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.log({ answer });

function Game() {
  const [history, setHistory] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function handleSubmitGuess(guess) {
    const nextGuesses = [...history, guess];

    if (guess === answer) {
      setStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
    setHistory([...history, guess]);
  }

  return (
    <div>
      <GuessResults history={history} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== 'running'}
      />
      {status === 'won' && <WonBanner numberOfGuesses={history.length} />}
      {status === 'lost' && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
