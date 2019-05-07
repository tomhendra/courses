// =======================
// FUNCTIONAL PROGRAMMING 
// =======================
// - all about separation of concerns
// - packaging code into separate chunks so everything is well organised
// - each part of code concerns itself with the one thing it is good at
// - keeps data & behaviour separate rather then grouping them together (as with OOP)
// - all objects created in FP are immutable

// - Goals are the same as OOP:
//   - clear & understandable
//   - easy to extend
//   - easy to maintain
//   - memory efficient
//   - DRY

// - rather than 4 pillars of OOP (encapsulation, abstraction, inheritance & polymorphism) FP relies on one: 
//   Pure Functions

// ----------------------------------------------------------------------------------------------------------
// Exercise -- Amazon shopping: Part 1
// Implement a cart feature:
//   1. Add items to cart.
//   2. Add 3% tax to item in cart
//   3. Buy item: cart --> purchases
//   4. Empty cart
// Bonus:
//   accept refunds.
//   Track user history.
// ----------------------------------------------------------------------------------------------------------

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const item = {
    name: 'socks',
    price: 7.95
}

const addToCart = (user, item) => {
    user.cart.push(item);
}

const addTax = (user) => {
    user.cart.forEach(item => {
        item.price = (item.price * 1.03).toFixed(2)
    })
}

const buyItems = (user) => {
    const cartItems = user.cart;
    user.cart = [];
    user.purchases.push(cartItems);
}

const emptyCart = (user) => {
    user.cart = [];
}

addToCart(user, item)
console.log(user)
addTax(user)
console.log(user)
buyItems(user)
console.log(user)


// ----------------------------------------------------------------------------------------------------------
// Pure functions
// - two main points:
//   1. a function always has to return the same output given the same input -- Referential transparency
//   2. a function cannot modify anything outside of itself  
// - makes functions very easy to test and very easy to compose
// - avoids bugs - no mutations, no shared state
// ----------------------------------------------------------------------------------------------------------

//Side effects:
const array = [1,2,3];
function mutateArray(arr) {
  arr.pop()
}
function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}
//The order of the function calls will matter.
mutateArray(array)
mutateArray2(array)

// map and concat methods can fix this issue of mutation
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}
function multiplyByTwo(arr) {
  // map automatically returns new array
  return arr.map(item => item * 2)
}


// ----------------------------------------------------------------------------------------------------------
// - a perfect function should:
//   1. do 1 task only
//   2. should have a return statement -- every function should return something
//   3. should be pure
//   4. immutable state
//   5. no shared state, always return a new copy
//   6. composable
//   7. predictable
// ----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
// Idempotence
// - a function that always does what we expect it to do, even though it us not pure
// ----------------------------------------------------------------------------------------------------------

function notGood() {
    return Math.random()
    // new Date();
  }
  
  function good() {
    return 5
  }
  
  Math.abs(Math.abs(10))


// ----------------------------------------------------------------------------------------------------------
// Imperative vs Declarative
// - imperative code tells the machine what to do and how to do it
// - declarative code tells the machine what to do and what should happen
// ----------------------------------------------------------------------------------------------------------

// imperative
for (i = 0; i < 9; i++) {
    console.log(i);
}

// declarative
[1,2,3,4,5,6,7,8].forEach(item => console.log(item));


// ----------------------------------------------------------------------------------------------------------
// Immutability
// - not changing the data. Not changing the state
// - instead making copies of the state and returning new versions of the state
// ----------------------------------------------------------------------------------------------------------

const obj = {name: 'Tom'}

function clone(obj) {
  return {...obj}; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Maria'
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)


// ----------------------------------------------------------------------------------------------------------
// Review - HOF & Closure
// - functions are first class citizens, allowing HOFs and Closure
// - HOFs do one of two things: 
//   1. takes one or more functions as arguments
//   2. returns function as output -- callback function

// - closures are a mechanism for containing state 
// - closure is created whenever a function accesses a variable defined outside of the immediate function 
//   scope; the parent.
// - variable accessible to inner function even after the enclosing function has finished running
// - can use closures to create data privacy - used a lot in FP for this reason
// ----------------------------------------------------------------------------------------------------------

//HOF
const hof = (fn) => fn(5);
hof(function a(x) { 
    return x
})

//Closure
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure()
getCounter()
getCounter()
getCounter()


// ----------------------------------------------------------------------------------------------------------
// Currying
// - the technique of translating the evaluation of a function that takes multiple arguments, into evaluating
//   a sequence of functions, each with a single argument
// - can create multiple utility functions
// ----------------------------------------------------------------------------------------------------------

const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b

curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5) // remembers that 5 was used as first parameter
multiplyBy5(20)


// ----------------------------------------------------------------------------------------------------------
// Partial application
// - the process of producing a function with a smaller number of parameters
// - taking a function, applying some if its arguments into the function so it remembers its parameters, 
//   then uses closures to later on be called with all the rest of the arguments
// - currying expects one argument at a time, partial application expects remaining arguments on second call
// ----------------------------------------------------------------------------------------------------------

const multiplyAgain = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiplyAgain.bind(null, 5) // using bind as a way to pass an argument
partialMultiplyBy5(10, 20)


// ----------------------------------------------------------------------------------------------------------
// Memoization
// - a specific form of caching
// ----------------------------------------------------------------------------------------------------------

//learn to cache
function addTo80(n) {
    return n + 80;
  }
  
  addTo80(5)
  
  let cache = {};
  function memoizeAddTo80(n) {
    if (n in cache) {
      console.log('cached data')
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
  
  // console.log(1, memoizeAddTo80(6))
  // // console.log(cache)
  // // console.log('-----------')
  // console.log(2, memoizeAddTo80(6))
  
  // let's make that better with no global scope. This is closure in javaScript.
  function memoizeClosureAddTo80(n) { 
    let cache = {}; // closure
    return function(n) {
      if (n in cache) {
        console.log('cached data')
        return cache[n];
      } else {
        console.log('long time');
        const answer = n + 80;
        cache[n] = answer;
        return answer;
      }
    }
  }
  
  const memoized = memoizeClosureAddTo80();
  console.log(1, memoized(6))
  // console.log(cache)
  // console.log('-----------')
  console.log(2, memoized(6))


// ----------------------------------------------------------------------------------------------------------
// Compose & pipe
// - composition is the idea that any sort of data transformation should be obvious
// - a system design principal that deals with relationships of components
// - provides components that can be selected and assembled in various combinations based on users' specific 
//   requirements
// - pipe is the same as compose but goes from left to right instead of right to left
// ----------------------------------------------------------------------------------------------------------

// fn1(fn2(fn3(50)));

// compose(fn1, fn2, fn3)(50) // right to left
// pipe(fn3, fn2, fn1)(50) // left to right

const compose = (f1, f2) => (data) => f1(f2(data))
const pipe = (f1, f2) => (data) => f2(f1(data))
const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
console.log(multiplyBy3AndAbsolute(-50))


// ----------------------------------------------------------------------------------------------------------
// Arity
// - simply means the number of arguments a function takes
// - usually good practice -- the fewer number of parameters there are in a function, the easier it is to 
//   use that function
// - fewer parameters makes functions more flexible -- can use things like currying, compose, pipe
// - rule of thumb is to use no more than one or two parameters
// - fewer parameters helps make functions more reusable when using the functional programming paradigm
// ----------------------------------------------------------------------------------------------------------