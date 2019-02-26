// - family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
// - there is a tradeoff between efficiency and simplicity
// - much less simple and take longer to understand! 

// ===========
// MERGE SORT
// ===========
// - combination of 2 things: merging and sorting
// - exploits the fact that arrays of 0 or 1 element are always sorted
// - works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
// - in order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// - given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
// - this function should run in O(n + m) time and O(n + m) space and should nto modify the parameters

// ----------------------------------------------------------------------------------------------------------
// challenge part 1 pseudocode
// - create an empty array, take a look at the smallest values in each input array
// - recommend 2 counters (i & j) and use while loops
// - while there are still values we haven't looked at
//     - if the value in the first array is smaller than the value in the second array, push the value in 
//       the first array into our results and move onto the next value in the 1st array 
//     - if the value in the first array is larger than the value in the second array, push the value in 
//       the second array into our results and move onto the next vale in the 2nd array 
//     - once we exhaust one array, push in all remaining values from the other array
// ----------------------------------------------------------------------------------------------------------
const merge = (arr1,arr2) => {
    const result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++
        }
        else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}
// test cases
console.log('Merge sort part 1')
console.log(merge([1,10,50],[2,14,99,100])) // [1,2,10,14,50,99,100]

// ----------------------------------------------------------------------------------------------------------
// challenge part 2 pseudocode
// - break up the array into halves until you have arrays that are empty or have 1 element 
// - once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at 
//   the full length of the array
// - once the array as been merged back together, return the merged (and sorted!) array
// ----------------------------------------------------------------------------------------------------------
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
// test cases
console.log('Merge sort part 2')
console.log(mergeSort([42,7,2,1,67,24,12,3])) // [1,2,3,7,12,24,47,67]

//                  | time complexity | time complexity | space         |
//                  | (best)          | (worst)         | complexity    |
// ----------------------------------------------------------------------
// merge sort       |   O(n log n)    |   O(n log n)    |      O(n)     |
// ----------------------------------------------------------------------