// Global scope (convertTemp, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertTemp = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
      let isFreezing = true
    } 

  return celsius
}

let tempOne = convertTemp(68)
let tempTwo = convertTemp(125)
console.log('Temperature in celsius: ' + tempOne)
