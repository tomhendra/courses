const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['e', 'b']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach ((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('beer', 4)
const game2 = new Hangman('Bacon baguette', 6)
console.log(game1.getPuzzle())
console.log(game2.getPuzzle())
