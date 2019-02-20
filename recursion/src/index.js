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
console.log('Wake up example')
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
console.log('Countdown example')
countDown(3)

// ----------------------------------------------------------------------------------------------------------
// example 2
// ----------------------------------------------------------------------------------------------------------
function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num-1)
 }
 console.log('sumRange example')
 console.log(sumRange(4))

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
console.log('Factorial example')
console.log(factorial(5))

// ----------------------------------------------------------------------------------------------------------
// where things go wrong!
// ----------------------------------------------------------------------------------------------------------
// - no base case / wrong base case
// - forgetting to return or returning the wring thing
// - stack overflow!

// ========================
// HELPER METHOD RECURSION
// ========================
// - common design pattern with 2 functions
// - outer function which is not recursive & an inner function which is recursive
// - useful when compiling an array 

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
console.log('Helper method recursion')
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

// ================
// PURE RECURSION
// ================
// - fully self-contained
// - for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you don't mutate them
// - since strings are immutable so need to use methods like slice, substr or substring to make copies of strings
// - to make copies of objects use Object.assign or the spread operator

function collectOddValuesPure(arr) {
    let newArr = []
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}
console.log('Pure recursion')
console.log(collectOddValuesPure([1,2,3,4,5]))
// newArr = [1].concat(collectOddValues([2,3,4,5])) // waiting for return value
//     newArr = [].concat(collectOddValues([3,4,5])) // waiting for return value
//     |    newArr = [3].concat(collectOddValues([4,5])) // waiting for return value
//     |    |    newArr = [].concat(collectOddValues([5])) // waiting for return value
//     |    |    |   newArr = [5].concat(collectOddValues([])) // waiting for return value
//     |    |    |   |    returns []
//     |    |    |   returns [5].concat([]) // [5]
//     |    |    returns [].concat[5] // [5]
//     |    returns [3].concat[5] // [3,5]
//     returns [].concat[3,5] // [3,5]
// returns [1].concat[3,5] // [1,3,5]