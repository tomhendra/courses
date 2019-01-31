const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('beer', 2)
const game2 = new Hangman('Salamanca', 6)

// Render puzzle
puzzleEl.textContent = game2.puzzle
guessesEl.textContent = game2.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game2.makeGuess(guess)
    puzzleEl.textContent = game2.puzzle
    guessesEl.textContent = game2.statusMessage
})
