const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const g1 = new Hangman('cat', 2)

puzzleEl.textContent = g1.getPuzzle()
guessesEl.textContent = g1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    puzzleEl.textContent = g1.getPuzzle()
    guessesEl.textContent = g1.getStatusMessage()
})

