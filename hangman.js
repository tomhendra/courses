// Object constructor function
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

// Method -- return result after guess
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

// Method -- handle guess
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }

// Testing, testing, 123
const game1 = new Hangman('beer', 2)
game1.makeGuess('b')
game1.makeGuess('e')
game1.makeGuess('z')
console.log(game1.getPuzzle())

const game2 = new Hangman('Bacon baguette', 4)
game2.makeGuess('b')
console.log(game2.getPuzzle())
