// ==============
// BUILT IN SORT
// ==============
// - accepts an optional comparator function to tell JavaScript how to sort
// - comparator looks at pairs of elements (a and b) & determines their sort order based on the return value
//   - if it returns a negative number, a should come before b
//   - if it returns a positive number, a should come after b
//   - if it returns 0, a and b are the same as far as the sort is concerned

// https://visualgo.net/en/sorting - great visualizer to step through sorting algorithms

// ============
// BUBBLE SORT
// ============
// - a sorting algorithm here the largest values bubble t the top!
// - not the most efficient, and won't be implementing it lots
// - many sorting algorithms involve some type of swapping functionality
// ES5 version, less optimized = O(n^2)
const bubbleSort = (arr) => {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1]) // comparisons
        if (arr[j] > arr[j+1]) {
          // swap!
          var temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp        
        }
      }
    }
    return arr;
  }
  
  // ES2015 version = O(n) linear time best case
  const bubbleSortOptimized = (arr) => {
    let noSwaps
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
  
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1])
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1)
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
    return arr;
  }
  console.log('Bubble sort')
  bubbleSort([8,1,2,3,4,5,6,7])
  console.log('Bubble sort optimized')
  bubbleSortOptimized([8,1,2,3,4,5,6,7])
  // therefore optimized bubble sort is a good candidate if data is nearly sorted