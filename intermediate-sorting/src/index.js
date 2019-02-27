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

//                  | time complexity | time complexity | space          |
//                  | (best)          | (worst)         | complexity     |
// -----------------------------------------------------------------------
// merge sort       |   O(n log n)    |   O(n log n)    |      O(n)      |
// -----------------------------------------------------------------------

// ===========
// QUICK SORT
// ===========
// - exploits the fact that arrays of 0 or 1 element are always sorted (like merge sort)
// - works by selecting a single element (called "pivot") and finding the index where the pivot should end up in the sorted array
// - once the pivot is positioned appropriately , quick sort can be applied either side of the pivot

// ----------------------------------------------------------------------------------------------------------
// challenge notes - helper function
// - in order to implement quick sort, it is useful to first implement a function responsible for arranging 
//   elements in an array on either side of the pivot
// - given an array, this helper function should designate an element as as the pivot
// - it should then rearrange elements in the array so that all values less than the pivot are moved to the
//   left of the pivot, and all values greater than the pivot are moved to the right of the pivot 
// - the order of elements on either side of the pivot doesn't matter!
// - the helper should do this in place, that is, it should not create a new array
// ----------------------------------------------------------------------------------------------------------
// challenge notes - picking a pivot
// - the runtime of quick sort depends in part on how the pivot is selected
// - ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// - for simplicity, we'll always choose the pivot to be the first element
// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode - pivot
// - it will help to accept three arguments: an array, a start index and an end index (these can default to
//   0 and the array length -1 respectively)
// - grab the pivot from the start of the array
// - store the current pivot index ina variable (this will keep track of where the pivot should end up)
// - loop through the array from start until the end
//     - if the pivot is greater than the current element, increment the pivot index variable and then swap
//       the current element with the element at the pivot index
// - swap the tarting element (i.e. the pivot) with the pivot index
// - return the pivot index
// ----------------------------------------------------------------------------------------------------------
// first Version
const pivotNaive = (arr, start=0, end=arr.length+1) => {
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++) {
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
  const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        console.log(arr)
      }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    console.log(arr)
    return swapIdx;
  }

// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode - quickSort
// - call the pivot helper on the array 
// - when the helper returns the updated pivot index, recursively call the pivot helper on the subarray to 
//   the left of that index, and the subarray to the right of that index
// ----------------------------------------------------------------------------------------------------------
const quickSort = (arr, left = 0, right = arr.length -1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
console.log('Quick sort')
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

//                  | time complexity | time complexity | space          |
//                  | (best)          | (worst)         | complexity     |
// -----------------------------------------------------------------------
// quick sort       |   O(n log n)    |     O(n^2)      |   O(n log n)   |
// -----------------------------------------------------------------------