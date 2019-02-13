// How do you improve?
// 1. Devise a plan for problem solving (previous approach section)
// 2. Master common problem solving patterns (this section!)

// some patterns....
// 1. frequency counter
// 2. multiple pointers
// 3. sliding window
// 4. divide & conquer
// 5. dynamic programming
// 6. greedy algorithms
// 7. backtracking
// + many more!

// =======================
// [1] FREQUENCY COUNTERS
// =======================
// - uses objects or sets to collect values / frequencies of values
// - this can often avoid the need for nested loops or O(n^2) operations with strings / arrays
// - usually O(n)

// ----------------------------------------------------------------------------------------------------------
// challenge --- write a function called same, which accepts 2 arrays. The function should return true if 
// every value in the array has it's corresponding value squared in the second array. The frequency of 
// values must be the same.
// ----------------------------------------------------------------------------------------------------------
// test cases:
/*
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false - must be same frequency
*/

// naive solution = O(n^2)
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

// refactored solution = O(n)
const sameRefactored = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

sameRefactored([1,2,3,2,5], [9,1,4,4,11])
