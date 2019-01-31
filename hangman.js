// Object constructor function
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

// Calculate status of game
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })
    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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
    this.calculateStatus()
}
