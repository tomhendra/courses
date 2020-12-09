let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: '326'
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area
let person = {
    name: 'Tom',
    age: '36',
    location: 'Salamanca'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.` )

person.age = '37'
console.log(`${person.name} is ${person.age} and lives in ${person.location}.` )
