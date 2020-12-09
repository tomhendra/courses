let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: '326'
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: '723'
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
let getTemp = function (fahrenheit) {
    let calcCelsius = (fahrenheit - 32) * 5 / 9
    let calcKelvin = (fahrenheit + 459.67 * 5 / 9).toFixed(2)
    return {
        fahrenheit: fahrenheit,
        celsius: calcCelsius,
        kelvin: calcKelvin
    }
}

let convertTemp = getTemp(50)
console.log(convertTemp)
