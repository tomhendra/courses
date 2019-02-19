// ==========
// RECURSION
// ==========
// - a function which calls itself
// - call stack is a data structure (stack) that manages what happens when functions are invoked
// - when a function is invoked it is placed on top of the call stack (push)
// - when JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

// demonstration of call stack being used: inspect with dev tool debugger
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

// - when writing recursive functions, we keep pushing new functions onto the call stack
// - how recursive functions work: invoke the same function with a different input until you reach your base case
// - base case is where the recursion stops -- THIS IS THE MOST IMPORTANT CONCEPT TO UNDERSTAND
// - two essential parts of any recursive function:
// [1] base case
// [2] different input

// ----------------------------------------------------------------------------------------------------------
// example 1
// ----------------------------------------------------------------------------------------------------------
// Iterative version
function countDownIterative(num) {
    for (var i = num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done!")
}

// Recursive version
function countDown(num) {
    if (num <= 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}
countDown(3)

// ----------------------------------------------------------------------------------------------------------
// example 2
// ----------------------------------------------------------------------------------------------------------
function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num-1)
 }
 sumRange(4)

// ----------------------------------------------------------------------------------------------------------
// example 3
// ----------------------------------------------------------------------------------------------------------
// Iterative version
function factorialIterative (num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

// Recursive version
function factorial(num){
    if (num === 1) return 1
    return num * factorial(num-1)
}
factorial(5)
