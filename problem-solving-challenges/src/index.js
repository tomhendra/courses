// ----------------------------------------------------------------------------------------------------------
// challenge --- write a function called sameFrequency. Given 2 positive integers, find out if the numbers
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
