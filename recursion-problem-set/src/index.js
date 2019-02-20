// ----------------------------------------------------------------------------------------------------------
// challenge 1 --- write a function called power which accepts a base and an exponent. The function should
// return the power of the base of the exponent. This function should mimic the functionality of Math.pow()
// ----------------------------------------------------------------------------------------------------------
const power = (base, exponent) => {
    if (exponent === 0) return 1
    return base * power(base, exponent - 1)
}
// test cases
console.log('Challenge 1: power')
console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16
// base = 2 * power(2,3) // waiting for return value
//     base = 2 * power(2,2) // waiting for return value
//     |    base = 2 * power(2,1) // waiting for return value
//     |    |    base = 2 * power(2,0) // waiting for return value
//     |    |    |   |    returns 1
//     |    |    returns 2 * 1 // 2
//     |    returns 2 * 2 // 4
//     returns 2 * 4 // 8
// returns 2 * 8 // 16

// ----------------------------------------------------------------------------------------------------------
// challenge 2 --- write a function called factorial which returns the factorial of that number. A factorial 
// is he product of an integer and all the integers below it e.g. factorial four (!4) = 24 because 
// 4 * 3 * 2 * 1 = 24. factorial zero (0!) is always 1.
// ----------------------------------------------------------------------------------------------------------
const factorial = (num) => {
    if (num === 0) return 1
    return num * factorial(num-1)
}

// test cases
console.log('Challenge 2: factorial')
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040