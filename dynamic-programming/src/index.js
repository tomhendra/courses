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
