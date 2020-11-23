document.getElementById("section").append("Algorithms: Dynamic Programming");

function memoizedAddTo80() {
  const cache = {};
  // inner function has closure over cache
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      return (cache[n] = n + 80);
    }
  };
}

// const memoized = memoizedAddTo80();
// console.log(memoized(5));
// console.log(memoized(5));

// Fibonacci problem
let calculations = 0;

function fib(n) {
  calculations++;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(30));
// console.log('calculations: ', calculations);

// Memoized Fibonacci
function fibMemo() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// const memoizedFib = fibMemo();
// console.log(memoizedFib(50));
// console.log('calculations:', calculations);

// Fibonacci bottom-up, avoids recursion
function fibMemoBottomUp(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibMemoBottomUp(100));
