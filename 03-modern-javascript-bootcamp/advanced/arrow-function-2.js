const add = function (a, b) {
    return arguments[0] + arguments[1]
}

add(11, 22, 33, 44)

const car = {
    colour: 'red',
    getSummary() { // Method definition syntax
        return `The car colour is ${this.colour}`
    }
}

console.log(car.getSummary())