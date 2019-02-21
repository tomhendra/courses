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
    if (num <= 1) return 1
    return num * factorial(num-1)
}

// test cases
console.log('Challenge 2: factorial')
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

// ----------------------------------------------------------------------------------------------------------
// challenge 3 --- write a function called productOfArray which takes in an array of numbers and returns 
// them all.
// ----------------------------------------------------------------------------------------------------------
const productOfArray = (arr) => {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
// test cases
console.log('Challenge 3: productOfArray')
console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

// ----------------------------------------------------------------------------------------------------------
// challenge 4 --- write a function called recursiveRange which accepts a number and adds up all the numbers 
// from 0 to the number passed into the function.
// ----------------------------------------------------------------------------------------------------------
const recursiveRange = (num) => {
    if (num === 1) return 1
    return num + recursiveRange(num-1)
}
// test cases
console.log('Challenge 4: recursiveRange')
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55

// ----------------------------------------------------------------------------------------------------------
// challenge 5 --- write a recursive function called fib which accepts a number and returns the nth number
// in the Fibonacci sequence. The Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8,... which
// starts with 1 & 1, and where every number thereafter is equal to the sum of the previous two numbers.
// ----------------------------------------------------------------------------------------------------------
const fib = (n) => {
    if (n == 0 || n == 1)  return n;
    return fib(n - 1) + fib(n - 2);
}
// test cases
console.log('Challenge 4: fib')
console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465