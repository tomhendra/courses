// What is an algorithm? -- a process or set of steps to accomplish a task

// How to solve a problem in 5 steps:
// 1. understand the problem
// 2. explore concrete examples
// 3. break it down 
// 4. solve/simplify
// 5. look back & refactor

// ===========================
// [1] UNDERSTAND THE PROBLEM 
// ===========================
// 1. can I restate the problem in my own words?
// 2. what are the inputs that go into the problem?
// 3. what are the outputs that should come from the solution?
// 4. can the outputs be determined from the inputs? do I have enough information to solve the problem?
// 5. how should I label the important pieces of data that are a part of the problem?

// ==============================
// [2] EXPLORE CONCRETE EXAMPLES
// ==============================
// - coming up with examples can help you understand the problem better
// - examples provide sanity checks that the eventual solution works how it should
// - user stories! 
// - unit tests!
// 1. start with simple examples
// 2. progress to more complex examples
// 3. explore examples with empty inputs
// 4. explore examples with invalid inputs

// ----------------------------------------------------------------------------------------------------------
// challenge --- write a function which takes in a string and returns counts of each character in the string
// ----------------------------------------------------------------------------------------------------------

// 1. start with simple examples
// charCount('aaaa') // questions: all alphabet in output object?
/* 
{
    a: 4
} 
*/

// charCount('Hello hi') // questions: uppercase letters same as lowercase? space handling?
/* 
{
    h: 2,
    e: 1,
    i: 1,
    l: 2,
    o: 1
} 
*/

// 2. progress to more complex examples
// charCount('your PIN number is 1234') // questions: numbers in output? special characters?
/*
{
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 1,
    2: 1,
    u: 1,
    y: 1
}
*/

// 3. explore examples with empty inputs
// charCount('') // what's the output?

// 4. explore examples with invalid inputs
// charCount('null') // what's the output?
// charCount([1,2,3,'h', {a: false}]) // what's the output?

// ==================
// [3] BREAK IT DOWN
// ==================
// - explicitly write down the steps you need to take (can even bounce steps off interviewer; you might get a hint!)
// forces you to think about code before you write it, & helps to catch any lingering conceptual issues or misunderstandings before diving in & having to worry about detail

/* 
const charCount = (str) => {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the character count.
}
*/

/*
const charCount = (str) => {
    // make object to return at end
    // loop over string for each character
        // if the char is a number/letter AND a key in object, add 1 to count
        // if the char is umber/letter AND not in object, add it and set value to 1
        // if char is something else (space, dollar sign etc.) don't do anything
    // return object at end
}
*/

// ===================
// [4] SOLVE/SIMPLIFY
// ===================
// if there is something you are less comfortable with, leave it until the end and say out loud " I can't remember how to do xyz" e.g. check if alphanumeric....
/*
const charCount = (str) => {
    // make object to return at end
    const obj = {}
    // loop over string for each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        // if the char is a number/letter AND a key in object, add 1 to count
        if (obj[char] > 0) {
            obj[char]++
        } else {
        // if the char is umber/letter AND not in object, add it and set value to 1
            obj[char] = 1
        }
        // if char is something else (space, dollar sign etc.) don't do anything
    }
    // return object at end
    return result
}
*/

// ask the interviewer if you get stuck on something - can they make a suggestion? - this demonstrates problem solving ability

// =========================
// [5] LOOK BACK & REFACTOR
// =========================
// in an interview setting, it's important to ask these questions, often out loud:
// 1. can you check the result?
// 2. can you derive the result differently? 
// 3. can you understand it at a glance? 
// 4. can you use the result or method for some other problem? 
// 5. can you improve the performance of your solution? 
// 6. can you think of other ways to refactor? 
// 7. how have other people solved this problem? 
// example:
/*
const charCount = (str) => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++
            } else {
            obj[char] = 1
        }
    }
    return obj
}
*/

// using charCodeAt & simple booleans is more efficient than regex
const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false
    }
    return true
}

const charCount = (str) => {
    const obj = {}
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}
console.log(charCount('Hello hi!!'))
console.log(charCount('Your PIN number is 1234'))
