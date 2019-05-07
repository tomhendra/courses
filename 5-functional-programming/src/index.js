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
for (i = 0; i < 1000; i++) {
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
