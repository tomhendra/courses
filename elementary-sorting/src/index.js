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
// legacy version (non ES2015 syntax) = O(n^2)
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

// ===============
// SELECTION SORT
// ===============
// - similar to bubble sort, but instead of placing large values into sorted position, it places small values into position
// - finds the minimum by comparing all values in the array and places the minimum at the beginning after comparing all values
// legacy version (non ES2015 syntax) = O(n^2)
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]) // comparisons
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            //swap!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 version = O(n^2)
function selectionSortNew(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr, arr[j], arr[j+1]) // comparisons
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}
console.log('Selection sort')
console.log(selectionSort([0,2,34,22,10,19,17]))
console.log('Selection sort ES2015')
console.log(selectionSortNew([0,2,34,22,10,19,17]))