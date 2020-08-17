<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript: The Hard Parts, v2</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. JavaScript Principles](#2-javascript-principles)
  - [2.1. Thread of Execution](#21-thread-of-execution)
  - [2.2. Functions](#22-functions)
  - [2.3. Call Stack](#23-call-stack)
- [3. Functions & Callbacks](#3-functions--callbacks)
  - [3.1. Generalized Functions](#31-generalized-functions)
  - [3.2. Repeating Functionality](#32-repeating-functionality)
  - [3.3. Callbacks and Higher Order Functions](#33-callbacks-and-higher-order-functions)
  - [3.4. Arrow Functions](#34-arrow-functions)
- [4. Pair programming](#4-pair-programming)
- [5. Closure (Lexical Scope and Execution Context)](#5-closure-lexical-scope-and-execution-context)
  - [5.1. Functions with Memories](#51-functions-with-memories)
  - [5.2. Returning Functions](#52-returning-functions)
  - [5.3. Nested Function Scope](#53-nested-function-scope)
  - [5.4. Retaining Function Memory](#54-retaining-function-memory)
  - [5.5. Function Closure](#55-function-closure)
  - [5.6. Closure Technical Definition and Review](#56-closure-technical-definition-and-review)
  - [5.7. Multiple Closure Instances](#57-multiple-closure-instances)
  - [5.8. Practical Applications](#58-practical-applications)
- [6. Asynchronous JavaScript](#6-asynchronous-javascript)
  - [6.1. Promises, Async & the Event Loop](#61-promises-async--the-event-loop)
  - [6.2. Asynchronicity in JavaScript](#62-asynchronicity-in-javascript)
  - [6.3. Asynchronous Browser Features](#63-asynchronous-browser-features)
  - [6.4. Web APIs](#64-web-apis)
  - [6.5. Callback Queue & Event Loop](#65-callback-queue--event-loop)

## 1. Introduction

Go under the hood of some of the most important aspects of JavaScript! You'll learn what you need to know to become a sought-after, versatile, problem-solving developer. Combining mental models of JavaScript's inner workings and hands-on programming challenges, this course will give you a solid understanding of callbacks and higher-order functions, closure, asynchronous JavaScript, and object-oriented JavaScript! This course is for developers with a basic to intermediate knowledge of JavaScript who wants to deepen their understanding of the fundamentals to the next level.

[Course Link](https://frontendmasters.com/courses/javascript-hard-parts-v2/).\
[Slides](https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf).

The following topics are covered:

1. Principles of JavaScript
2. Callbacks & Higher order functions
3. Closure (scope and execution context)
4. Asynchronous JavaScript & the event loop
5. Classes & Prototypes (OOP)

- The goal of the course is to grow as problem solvers with code.
- To do this, you need to understand JavaScript under the hood as fully as possible.
- The more you know about JS atomically, the more you are able to solve problems at a higher level.
- **Junior-level engineer**: Takes any given feature, and if they have seen the technology or solution before they can build it.
- **Mid-level engineer**: Takes any given feature, and even if they have not seen the technology or solution before they can build it. They have problem solving skills.
- **Senior-level engineer**: Not only can build the feature, but enable the rest of their team to figure it out because they have technical communication.
- To communicate what is happening in the code in a clear and precise way will not only improve the way you reason as an engineer, it will also make you a more effective, collaborative team member.

## 2. JavaScript Principles

- The three core components of JavaScript are:

1. Memory to store data and code (functionality).
2. The thread of execution.
3. The call stack.

### 2.1. Thread of Execution

- JavaScript is not that fancy: it does two things:

1. Goes through the code line-by-line and runs/executes each line - **The thread of execution**.
2. Saves 'data' in memory like strings and arrays so we can use them later.

### 2.2. Functions

- A function being run is like a mini program.
- In order to be run, you need those two things: The thread of execution & memory to store data & functions from inside the function.
- These two things together create a new **execution context**.
- A global execution context is created as soon as we start to run any code from a file.
- A new execution context is created for every function.
- The memory created inside of the ne execution context is called **local memory**.
- Once the function has finished running, everything is deleted apart form the value that is returned.

```js
// 1. num declared and assigned value of 3, which is stored in global memory.
const num = 3;
// 2. multiplyBy2 stored in memory but function doesn't run until it is called.
// At this point the variable multiplyBy2 is just a pointer to the function.
function multiplyBy2(inputNumber) {
  // 4. New execution context created & inputNumber parameter is stored in local memory as argument of 3.
  // 5. result is stored in local memory as 6
  const result = inputNumber * 2;
  // 6. Look in local memory for result variable and return its value.
  return result;
}
// 3. output is created but remains uninitialized until the function is run,
// as variables can only store values, not functionality (commands).
const output = multiplyBy2(num);
// 7. after function is run, output evaluates to 6 which is stored in global memory.
```

- In JavaScript there is only one thread of execution.
- The thread of execution weaves in and out of functions as it executes them: it can only do one thing at a time.

### 2.3. Call Stack

- JavaScript keeps track of what function is currently running (where’s the thread of execution).
- Run a function - add to call stack.
- Finish running the function - JS removes it from call stack.
- Whatever is top of the call stack - that’s the function we’re currently running.
- The return keyword pops the function off from the call stack.
- The bottommost thing in the call stack is the global execution context, which is always present.
- Once a function has finished running and its execution context no longer exists, it is removed from the call stack and the thread of execution returns to the previous execution context.

## 3. Functions & Callbacks

- One of the most misunderstood concepts in JavaScript.
- Enables powerful pro-level functions like map, filter, reduce (a core aspect of functional programming).
- Makes our code more declarative and readable.
- Forms the backbone of the Codesmith technical interview (and professional mid/senior level engineering interviews).

### 3.1. Generalized Functions

- Why do we even have functions?

```js
function tenSquared() {
  return 10 * 10;
}

function nineSquared() {
  return 9 * 9;
}

tenSquared(); // 100
nineSquared(); // 100
```

- And an a 8 squared function? 125 squared?
- What principle are we breaking? **DRY** (Don’t Repeat Yourself).
- We don't want to rewrite code when we don't have to, as it becomes much harder to track and maintain what we're doing if we do so.
- We can generalize the function to make it reusable.

```js
function squareNum(num) {
  return num * num;
}
squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64
```

- This is the core premise if functions: Making code that we can write once, and then reuse again with different values.
- ‘Parameters’ (placeholders) mean we don’t need to decide what data to run our functionality on until we run the function.
- Then provide an actual value (‘argument’) when we run the function.
- Higher order functions follow this same principle.
- We may not want to decide exactly what some of our functionality is until we run our function: HOFs facilitate this.

### 3.2. Repeating Functionality

- Now suppose we have a function `copyArrayAndMultiplyBy2`

```js
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
```

- What if want to copy array and divide by 2?

```js
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
```

- Or add 3?

```js
function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndAdd3(myArray);
```

- What principle are we breaking? **DRY** (Don’t Repeat Yourself).

### 3.3. Callbacks and Higher Order Functions

- We could generalize our function - So we pass in our specific instruction only when we run `copyArrayAndManipulate`!
- We can pass in functionality as a parameter.

```js
// The outer function that takes in a function is our higher-order function
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

// The function we insert is our callback function
function multiplyBy2(input) {
  return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

- How was this possible?
- Functions in javascript = **first class objects**.
- They can co-exist with and can be treated like any other javascript object.

1. Assigned to variables and properties of other objects.
2. Passed as arguments into functions.
3. Returned as values from functions.

- **Higher order functions:**

  - Take in a function or pass out a function.
  - Just a term to describe these functions - any function that does it we call a HOF - but there's nothing different about them inherently.

- Callbacks and Higher Order Functions simplify our code and keep it DRY.
- **Declarative readable code**: Map, filter, reduce - the most readable way to write code to work with data.
- **Pro interview prep**: One of the most popular topics to test in interview for mid/senior level job interviews.
- **Asynchronous JavaScript:** Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await.

### 3.4. Arrow Functions

- Introducing arrow functions - a shorthand way to save functions.

```js
function multiplyBy2(input) {
  return input * 2;
}
const multiplyBy2 = (input) => {
  return input * 2;
};
// If the function only does one thing, you can skip {} & return keyword.
const multiplyBy2 = (input) => input * 2;
// If there is only one parameter, you can skip the () too.
// prettier-ignore
const multiplyBy2 = input => input * 2;

const output = multiplyBy2(3); // 6
```

- Updating our callback function as an arrow function

```js
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
const multiplyBy2 = (input) => input * 2;
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// The following is becoming more common, but it is so unclear what it is doing. How readable is it?
const result = copyArrayAndManipulate([1, 2, 3], (input) => input * 2);
```

- Anonymous and arrow functions
  - Improve immediate legibility of the code.
  - But at least for our purposes here they are ‘syntactic sugar’ - we’ll see their full effects later.
  - Understanding how they’re working under-the-hood is vital to avoid confusion.

## 4. Pair programming

- The most effective way to grow as a software engineer.
- To be an effective engineer is to overcome and a hard block.
- To overcome a hard block is to go through the code line-by-line and understand the state (data): That is debugging.
- When becoming an engineer you often fall into one of two very risky traps:
- **Researcher**: Avoids blocks by reading everything they can find on their block/bug.
- **Stackoverflower**: Uses code snippets to fix bug without knowing how they work.
- **Pair programming**:
  - Tackle blocks with a partner.
  - Stay focused on the problem.
  - Refine technical communication.
  - Collaborate to solve problem.
- In pair programming we are forced to verbalise and explain our code which improves our technical communication beyond measure.
- Not being able to verbalise code with precision and clarity with intuitive style, is a massive hindrance to a company.

## 5. Closure (Lexical Scope and Execution Context)

- Closure is the most esoteric of JavaScript concepts.
- Enables powerful pro-level functions like ‘once’ and ‘memoize’.
- Many JavaScript design patterns including the module pattern use closure.
- Build iterators, currying, handle partial application and maintain state in an asynchronous world.

- Functions get a new memory every run/invocation

```js
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);
```

### 5.1. Functions with Memories

- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function’s execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
- But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory. 🤯
- But it all starts with us returning a function from another function.

### 5.2. Returning Functions

- Functions can be returned from other functions in JavaScript.

```js
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3); // 6
```

- `generatedFunc` is assigned the return value of `createFunction`, which is the code previously assigned to `multiplyBy2`.
- `generatedFunc` has nothing to do with createdFunction after it has run once.
- The identifier of `multiplyBy2` is deleted after `createFunction` has run and its execution context is deleted.
- The identifier `generatedFunc` retains access to the parameter `num`, and the function body itself.
- When we run `generatedFunc`, we are running the code which was previously assigned to `multiplyBy2`.
- Result is assigned the return value of `generatedFunc`.
- This is confusing because we can't see JS storing the return value of `createFunction` in global memory and assigning it to `generatedFunc`.
- When we read the code we have to look inside `createFunction` to see what the result of running `generatedFunc` (previously assigned `multiplyBy2`) would be.

### 5.3. Nested Function Scope

- Calling a function in the same function call as it was defined.
- Where you define your functions determines what data it has access to when you call it.

```js
function outer() {
  let counter = 0;
  function incrementCounter() {}
  counter++;
  incrementCounter();
}

outer();
```

- How is `counter` accessed from inside `incrementCounter`?
  - Do we move down the call stack into `outer` and look for `counter`?
  - Is it the fact we are running `incrementCounter` inside of `outer`, which gives us access to `outer`'s local memory?
  - Is it the fact that we saved `incrementCounter` inside of `outer`'s local memory, which gives us access to `outer`'s local memory?
- We can't tell!
- It is fundamental to understanding closure, what the answer to this question is!

### 5.4. Retaining Function Memory

- Calling a function outside of the function call in which it was defined.
- When a function is defined, it gets a bond to the surrounding Local Memory (“Variable Environment”) in which it has been defined.

```js
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();
```

### 5.5. Function Closure

- We return `incrementCounter`’s code (function definition) out of outer into global and give it a new name - `myNewFunction`.
- We maintain the bond to `outer`’s live local memory - it gets ‘returned out’ attached on the back of `incrementCounter`’s function definition.
- So `outer`’s local memory is now stored attached to `myNewFunction` - even though `outer`’s execution context is long gone.
- When we run `myNewFunction` in global, it will first look in its own local memory first (as we’d expect), but then in `myNewFunction`’s ‘backpack’.
- We now have permanent, and also private data that cannot be accessed in any way apart from running the function. 🤯

### 5.6. Closure Technical Definition and Review

- Angus Croll who wrote [If Hemmingway Wrote JavaScript](https://nostarch.com/hemingway) refers to the "backpack" as the "closed over" data from the "variable environment" - C.O.V.E.
- Scope is the rules in any programming language for: at any given line of code, what data do I have available to me.
- JavaScript has a very particular scope rule: Lexical AKA Static scoping - Wherever I declare my function determines for the rest of the life of that function what data it has access to when that function runs.
- The opposite would be dynamically scoped which means wherever the function is run would determine the data accessible.
- The technical term for the "backpack" is **Persistent Lexical Scope Referenced Data (P.L.S.R.D.)**.
- The industry term for the "backpack" and the overall concept is **Closure**.
- The ‘backpack’ (or ‘closure’) of live data is attached to `incrementCounter` (then to `myNewFunction`) through a hidden property known as `[[scope]]` which persists when the inner function is returned out.
- There is no way to access `[[scope]]` apart from executing the function of which it is a property.
- Anything that is referenced in the function definition is retained, so `counter` is available in the backpack.
- Anything that isn't referenced is deleted, otherwise it would cause a memory leak: that is a variable that can never be accessed.
- If you return out more than one function (in an object or array) the backpack is shared by all of them.

### 5.7. Multiple Closure Instances

```js
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

- **Individual backpacks**
- If we run `outer` again and store the returned `incrementCounter` function definition in `anotherFunction`, this new `incrementCounter` function was created in a new execution context and therefore has a brand new independent backpack.

### 5.8. Practical Applications

- **Closure gives our functions persistent memories and an entirely new toolkit for writing professional code.**

- **Helper functions:** Everyday professional helper functions like ‘once’ and ‘memoize’.
- **Iterators and generators:** Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript.
- **Module pattern:** Preserve state for the life of an application without polluting the global namespace.
- **Asynchronous JavaScript:** Callbacks and Promises rely on closure to persist state in an asynchronous environment.

## 6. Asynchronous JavaScript

### 6.1. Promises, Async & the Event Loop

- Promises - the most significant ES6 feature.
- Asynchronicity - the feature that makes dynamic web applications possible.
- The event loop - JavaScript’s triage.
- Microtask queue, Callback queue and Web Browser features (APIs).

### 6.2. Asynchronicity in JavaScript

- Asynchronicity is the backbone of modern web development in JavaScript yet...

- JavaScript is:
  - Single threaded (one command runs at a time).
  - Synchronously executed (each line is run in order the code appears).
- So what if we have a task:

  - Accessing Twitter’s server to get new tweets that takes a long time - Code we want to run using those tweets.
  - Challenge: We want to wait for the tweets to be stored in tweets so that they’re there to run displayTweets on - but no code can run in the meantime.

- Slow function blocks further code running.

```js
const tweets = getTweets('http://twitter.com/will/1');

// ⛔350ms wait while a request is sent to Twitter HQ displayTweets(tweets)

// more code to run
console.log('I want to runnnn!');
```

- What if we try to delay a function directly using setTimeout?

```js
function printHello() {
  console.log('Hello');
}
setTimeout(printHello, 1000);
console.log('Me first!');
```

- In what order will our console logs appear?

- So what about a delay of 0ms?
- Now, in what order will our console logs occur?

```js
function printHello() {
  console.log('Hello');
}
setTimeout(printHello, 0);
console.log('Me first!');
```

- JavaScript is not enough - We need new pieces (some of which aren’t JavaScript at all).

Our core JavaScript engine has 3 main parts:

1. Thread of execution
2. Memory/variable environment
3. Call stack

We need to add some new components:

- Web Browser APIs/Node background APIs.
- Promises.
- Event loop, Callback/Task queue and micro task queue.

### 6.3. Asynchronous Browser Features

- The browser is more than just JS.
- It is a collection of features.
- JavaScript lets us use these features.
- We have access to a bunch of functions that look like JS functions...

  - `setTimeOut` is the identifier for the browser's timer.
  - `document` is the identifier for the HTML DOM.
  - `fetch` / `xhr` is the identifier for the browser feature that allows to make network requests.
  - `console` is the identifier for the browser console feature.

- But in actual fact, none of these are JavaScript!

### 6.4. Web APIs

- ES5 solution: Introducing ‘callback functions’, and Web Browser APIs.

```js
function printHello() {
  console.log('Hello');
}
setTimeout(printHello, 1000);
console.log('Me first!');
```

- We’re interacting with a world outside of JavaScript now - so we need rules.

```js
function printHello() {
  console.log('Hello');
}

function blockFor1Sec() {
  // blocks in the JavaScript thread for 1 sec }
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log('Me first!');
```

### 6.5. Callback Queue & Event Loop

- `setTimeout` starts the web browser timer, and after it has completed, in this case immediately, `printHello` is added to the **callback queue.**
- However the next function to be added to the call stack is `blockFor1Sec`.
- Then `console.log('Me first!')` runs.
- Only afterwards does `printHello` get added to the call stack.
- The rule is that all other code in global must be executed synchronously before the `printHello` is dequeued.
- JavaScript checks before running every line of code:
  - Whether there is anything in the call stack.
  - Whether there is any more code to run in the global execution context.
- Only when the there is nothing more to execute, does the function in the callback queue get pushed onto the call stack.
- The feature that facilitates this is called the **event loop.**
- Up until ES6 this was the entire asynchronous JavaScript model.

**ES5 Web Browser APIs with callback functions:**

**Problems**

- With the function that is automatically called, the background feature receives some data.
- That data only shows up when the background feature inserts the function into the call stack.
- The problem with that is the data is only available within the execution context of that function.
- We don't get to run the function ourselves, therefore we can't have it return anything out.
- We can't assign a return value of it to anywhere.
- So our response data is only available within the callback function.
- This is knows as **Callback hell**, where we have to do all of our work on the data inside that one function.
- You end up with function inside of function inside of function... pretty nasty!

- Maybe it feels a little odd to think of passing a function into another function only for it to run much later.
- This is debatable as if we are working with a language that makes use of background features, this behaviour is inevitable.

- For error handling it is not as clean as the ES6 (Promise) approach.

**Benefits**

- Super explicit once you understand how it works under-the-hood.
