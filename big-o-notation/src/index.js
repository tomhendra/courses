// Add all numbers from 1 to n
const addUpTo = (n) => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += n
    }
    return total
}
const addUpTo2 = (n) => n * (n + 1) / 2

const t1 = performance.now()
console.log(addUpTo2(1000000000))
const t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// The problem with time...
// Different machines will record different times
// The same machine will record different times
// For fast algorithms, speed measurements may not be enough
// That's where Big O Notation comes in!

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

// When O(n) operation nested inside of O(n) operation i.e. O(n * n) = O(n2) -quadratic
const printAllPairs = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}
printAllPairs(10)
