// ====================
// DYNAMIC PROGRAMMING
// ====================
// - a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing those solutions
// - most problems cannot be solved with dynamic programming - it's a small subset
// - for the problems that can be solved with dynamic programming, it can make a huge difference in their performance
// - it only works with:
//     - optimal substructure
//     - overlapping subproblems
//
// - overlapping subproblems 
//     - a problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times
//     - e.g. fibonacci sequence: every number after the first two is the sum of the two preceding ones
//
// - optimal substructure
//     - a problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

// ----------------------------------------------------------------------------------------------------------
// challenge pseudocode -- fibonacci sequence - plain recursion
// - fib(n) = fib(n-1) + fib(n-2)
// - fib(1) = 1
// - fib(2) = 1
// ----------------------------------------------------------------------------------------------------------
const fibPlain = (n) => {
    if (n <= 2) return 1;
    return fibPlain(n-1) + fibPlain(n-2);
}
console.log(fibPlain(10));
// - plain recursion solution is O(2^n) - exponential! - very bad!
// - repeats calculations again and again and again...
// ----------------------------------------------------------------------------------------------------------
// - enter dynamic programming: using past knowledge to make solving a future problem easier
// - one strategy is called memoization - bottom-down implementation
//     - storing the results of expensive function calls and returning the cached result when the same inputs occur again
// - fibonacci memoized solution:
const fibMemo = (n, memo=[]) => {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    memo[n] = res;
    return res;
  }
  console.log(fibMemo(100));
// - memoized solution is O(n) - MUCH better!
// ----------------------------------------------------------------------------------------------------------
// - tabulation - bottom-up implementation
//     - storing the result of a previous result in a "table" (usually an array)
//     - usually done using iteration
//     - better space complexity can be achieved using tabulation
const fibTab = (n) => {
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums;
}
// - tabulated solution is time complexity O(n), but has better space complexity than memoized solution