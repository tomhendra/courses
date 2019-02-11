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
