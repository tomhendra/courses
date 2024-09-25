import * as React from 'react';

export default function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
