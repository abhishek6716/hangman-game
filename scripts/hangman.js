class Hangman{
    constructor(word, leftGuesses){
        this.word = word.toLowerCase().split('')
        this.leftGuesses = leftGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus(){

        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        // let finished = true
        // this.word.forEach((letter) => {
        //     if (this.guessedLetters.includes(letter)) {
        //     } else {
        //         finished = false
        //     }
        // })

        if (this.leftGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage(){
        if (this.status === 'playing') {
            return `Guesses Left: ${this.leftGuesses}`
        } else if (this.status === 'failed') {
            return `Nice Try! The word was "${this.word.join('')}".`
        } else {
            return `Great Work! You guessed the word.`
        }
    }

    get puzzle(){
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter == ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.leftGuesses--
        }
        this.calculateStatus()
    }
}


// const Hangman = function(word, leftGuesses){
//     this.word = word.toLowerCase().split('')
//     this.leftGuesses = leftGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function(){
//     let finished = true

//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter)){

//         } else{
//             finished = false
//         }
//     })

//     if(this.leftGuesses === 0){
//         this.status = 'failed'
//     } else if(finished){
//         this.status = 'finished'
//     } else{
//         this.status = 'playing'
//     }
// }

// Hangman.prototype.getStatusMessage = function(){
//     if(this.status === 'playing'){
//         return `Guesses Left: ${this.leftGuesses}`
//     } else if(this.status === 'failed'){
//         return `Nice Try! The word was "${this.word.join('')}".`
//     } else{
//         return `Great Work! You guessed the word.`
//     }
// }

// Hangman.prototype.getPuzzle = function(){
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter) || letter == ' '){
//             puzzle  += letter
//         } else{
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }

// Hangman.prototype.makeGuess = function(guess){
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if(this.status !== 'playing'){
//         return
//     }

//     if(isUnique){
//         this.guessedLetters.push(guess)
//     }

//     if(isUnique && isBadGuess){
//         this.leftGuesses--
//     }
//     this.calculateStatus()
// }


