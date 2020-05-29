document.getElementById('section').append('How to Solve Coding Problems.');

// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// -----------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// Inputs - if not given by interviewer, create them for testing.
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// Brute force solution
// --------------------
// O(a * b) Time Complexity -- can't be O(n^2) because arrays can be different sizes
// O(1) Space Complexity
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Better solution
// ---------------
// O(a + b) Time Complexity
// O(a) Space Complexity
function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// Best solution
// -------------
// O(a + b) Time Complexity
// O(1) Space Complexity
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem3(array1, array2));

// Google Interview question: https://www.youtube.com/watch?v=XKu_SEDAykw

// Naive solution
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better solution
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
