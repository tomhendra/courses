// ==============
// LINEAR SEARCH
// ==============
// - most basic form of search
// - the best we can do if data is unsorted!
// - best case O(1) / worst case O(n)
// - built in methods...
// indexOf
// includes
// find
// findIndex
// ----------------------------------------------------------------------------------------------------------
// coding exercise 24 --- write a function called linearSearch which accepts an array & value, and returns
// the index at which the value exists. If the value does not exist in the array, return -1.
// ----------------------------------------------------------------------------------------------------------
// - solution
const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++)  {
        if (arr[i] === val) return i
    }
    return -1
}
console.log('Coding challenge 24: linearSearch')
console.log(linearSearch([1,2,3],3))

// ==============
// BINARY SEARCH
// ==============
// - much faster form of search
// - ONLY works on sorted arrays
// - rather than eliminating 1 element at a time, you can eliminate half the remaining elements at a time
// - divide & conquer
// - best case O(1) / worst & average case O(log n)
// ----------------------------------------------------------------------------------------------------------
// coding exercise 25 --- write a function called binarySearch which accepts an array & value, and returns
// the index at which the value exists. If the value does not exist in the array, return -1.
// ----------------------------------------------------------------------------------------------------------
// - solution
const binarySearch = (arr, val) => {
    let start = 0
    let end = arr.length -1
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle -1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === val ? middle : -1
}
// test cases
console.log('Coding exercise 25: binarySearch')
console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1

// ====================
// NAIVE STRING SEARCH
// ====================
// - examples
const stringSearch = (long, short) => {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
           if (short[j] !== long[i+j]) break
           if (j === short.length - 1) count++
        }
    }
    return count;
}
console.log('Short string search')
console.log(stringSearch('hello harry potter', 'pot'))