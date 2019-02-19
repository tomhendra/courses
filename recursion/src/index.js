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
// iterative version
function countDownIterative(num) {
    for (var i = num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done!")
}

// recursive version
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
// iterative version
function factorialIterative (num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

// recursive version
function factorial(num){
    if (num === 1) return 1
    return num * factorial(num-1)
}
factorial(5)

// where things go wrong
// - no base case / wrong base case
// - forgetting to return or returning the wring thing
// - stack overflow!

// ========================
// HELPER METHOD RECURSION
// ========================
// - common design pattern with 2 functions
// - outer function which is not recursive & an inner function which is recursive
// - useful when compiling an array 

// demonstration
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}
collectOddValues([1,2,3,4,5,6,7,8,9])
