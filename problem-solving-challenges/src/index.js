// ----------------------------------------------------------------------------------------------------------
// challenge 1 --- write a function called sameFrequency. Given 2 positive integers, find out if the numbers
// have the same frequency of digits.
// ----------------------------------------------------------------------------------------------------------
// frequency counter solution
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
// Multiple pointers solution
const areThereDuplicates = (...arr) => {
    arr.sort((a,b) => a > b)
    let start = 0;
    let next = 1;
    while (next < arr.length) {
      if(arr[start] === arr[next]) {
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

// ----------------------------------------------------------------------------------------------------------
// challenge 3 --- write a function called averagePair. Given a sorted array of integers nad a target average
// determine if there is a pair of values in the array where the average of the pair equals the target 
// average. There may be more than one pair that matches the average target.
// ----------------------------------------------------------------------------------------------------------
// multiple pointers solution
const averagePair = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2
        if (average === target) {
            return true
        } else if (average > target) {
            right--
        } else {
            left++
        }
    }
    return false
}
// test cases
console.log('Multiple pointers challenge: averagePair')
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false
// ----------------------------------------------------------------------------------------------------------
// challenge 4 --- write a function called isSubsequence which takes in 2 strings and checks whether the
// characters from the first string form a subsequence of the characters in the second string.
// ----------------------------------------------------------------------------------------------------------
const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;
    if (!str1) return true
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++
      if (i === str1.length) return true
      j++
    }
    return false
}
// test cases
console.log('Multiple pointers challenge: isSubsequence')
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false