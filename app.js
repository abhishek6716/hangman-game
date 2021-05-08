const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const g1 = new Hangman('car parts', 2)

puzzleEl.textContent = g1.puzzle
guessesEl.textContent = g1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    g1.makeGuess(guess)
    puzzleEl.textContent = g1.puzzle
    guessesEl.textContent = g1.statusMessage
})

getPuzzle("1", (error, puzzle) => {
    if(error){
        console.log(`Error: ${error}`)
    } else{
        console.log(puzzle)
    }
})

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if(e.target.readyState === 4){
//         console.log('An error has taken place')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()



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
