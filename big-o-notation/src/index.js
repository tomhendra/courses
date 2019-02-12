// add all numbers from 1 to n
const addUpTo = (n) => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += n
    }
    return total
}

const addUpTo2 = (n) => n * (n + 1) / 2 // n(1)
const t1 = performance.now()
console.log(addUpTo2(1000000000))
const t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// The problem with time...
// Different machines will record different times
// The same machine will record different times
// For fast algorithms, speed measurements may not be enough
// That's where Big O Notation comes in......


// ------------------ TIME COMPLEXITY ------------------
// Number of operations is (eventually) bounded by a multiple of n

// O(n) -- simple operations grow proportionately to the value of n
const countUpAndDown = (n) => {
    console.log('Going up!')
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log('At the top.\nGoing down!...')
    for (let j = n - 1; j >= 0; j--) {
        console.log(j)
    }
    console.log('Back down, bye!')
}
countUpAndDown(10)

// O(n2) -- when O(n) operation nested inside of O(n) operation i.e. O(n * n) = (quadratic)
const printAllPairs = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
printAllPairs(10)

// Simplifying Big O
// Some rules of thumb (that don't ALWAYS work but are a good starting point)....
// 1. arithmetic operations are constant
// 2. variable assignment is constant
// 3. accessing elements in an array (by index) or object (by key) is constant
// 4. in a loop , the complexity is the length of the loop * the complexity of whatever happens inside the loop


// ------------------ AUXILIARY SPACE COMPLEXITY ------------------
// space in memory required by the algorithm, not including space taken up by inputs

// Some rules of thumb....
// 1. most primitives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O(n) space (where n is the string length)
// 3. reference types are generally O(n) where n is the length (arrays) or number of keys (objects)

// O(1) space! -- only two variables taking constant space
const sum = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sum([1, 2, 3, 4, 5]))

// O(n) space! -- length of newArr is directly proportionate to input arr (n)
const double = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
}
