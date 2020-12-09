const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Tom',
    age: 36
}, {
    name: 'Maria',
    age: 29
}, {
    name: 'Gertrude',
    age: 87
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
const oldLady = people.find((person) => person.age === 87)

console.log(oldLady.name)