// function - input (argument), code, output

let greetUser = function () {
  console.log('welcome user!')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// challenge area

// convertFahrenheitToCelsius

let convertTemp = function (temp) {
  let result = (temp - 32) * 5 / 9
  return result
}

let fahrenheit = 68
let celsius = convertTemp(fahrenheit)
console.log('Temperature in celsius: ' + celsius)
