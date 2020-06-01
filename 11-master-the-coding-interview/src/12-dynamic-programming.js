document.getElementById('section').append('Algorithms: Dynamic Programming');

function addTo80(n) {
  return n + 80;
}

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('from cache...');
    return (cache[n] = n + 80);
  }
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
