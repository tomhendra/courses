document.getElementById("section").append("Algorithms: Recursion");

// 1. Identify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed. Usually there are two returns.
let counter = 0;
function inception() {
  // debugger;
  if (counter > 3) {
    return "Done!";
  }
  counter++;
  return inception();
}

inception();

// Write two functions that finds the factorial of any number. One should use recursive,
// the other should just use a for loop.
function findFactorialRecursive(number) {
  if (number === 1) return 1;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  // O(2^n) -- Exponential
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));
console.log(fibonacciIterative(6));

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString("yoyo master");

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

function reverseStringRecursiveAlt(str) {
  if (str.length <= 1) return str;
  return reverseStringRecursiveAlt(str.slice(1)) + str[0];
}

console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'
