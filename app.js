const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

let g1


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = g1.puzzle
    guessesEl.textContent = g1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    g1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log( `Error: ${err}`)
// })


// getPuzzle("1", (error, puzzle) => {
//     if(error){
//         console.log(`Error: ${error}`)
//     } else{
//         console.log(puzzle)
//     }
// })





// const countryCode = "US"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place')
//     }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
// countryRequest.send()
