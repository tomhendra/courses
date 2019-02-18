// ----------------------------------------------------------------------------------------------------------
// challenge 1 --- write a function called sameFrequency. Given 2 positive integers, find out if the numbers
// have the same frequency of digits.
// ----------------------------------------------------------------------------------------------------------
const sameFrequency = (num1, num2) => {
    const str1 = num1.toString()
    const str2 = num2.toString()

    if (str1.length !== str2.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i]
        lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i]
        if (!lookup[digit]) {
        return false
        } else {
        lookup[digit] -= 1
        }
    }
    return true
}
// test cases
console.log('Frequency counter challenge: sameFrequency')
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false
// ----------------------------------------------------------------------------------------------------------
// challenge 2 --- write a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are duplicates amongst the arguments passed in. 
// ----------------------------------------------------------------------------------------------------------
const areThereDuplicates = (...arr) => {
    arr.sort((a,b) => a > b)
    let start = 0;
    let next = 1;
    while (next < arr.length) {
      if(args[start] === args[next]) {
          return true
      }
      start++
      next++
    }
    return false
}
// one liner solution: return new Set(arguments).size !== arguments.length
// test cases
console.log('Frequency counter / multiple pointers challenge: areThereDuplicates')
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
