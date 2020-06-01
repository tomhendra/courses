document.getElementById('section').append('Algorithms: Dynamic Programming');

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

const memoized = memoizedAddTo80();

// console.log(memoized(5));
// console.log(memoized(5));

let calculations = 0;
function fib(n) {
  calculations++;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(30));
console.log('calculations: ', calculations);
