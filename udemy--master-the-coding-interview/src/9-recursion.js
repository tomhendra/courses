document.getElementById('section').append('Algorithms: Recursion');

// 1. Identify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed. Usually there are two returns.
let counter = 0;
function inception() {
  // debugger;
  if (counter > 3) {
    return 'Done!';
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
