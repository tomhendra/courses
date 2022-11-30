---
title:: JavaScript - The Hard Parts, v2
type:: Course
author:: Will Sentance (Codesmith)
completed:: 20/08/20
url:: https://frontendmasters.com/courses/javascript-hard-parts-v2/
certificate:: No certificate provided
logseq:: false
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>JavaScript: The Hard Parts, v2</h1>

- [1. Introduction](#1-introduction)
  - [1.1. Course Overview](#11-course-overview)
- [2. JavaScript Principles](#2-javascript-principles)
  - [2.1. Thread of Execution](#21-thread-of-execution)
  - [2.2. Functions](#22-functions)
  - [2.3. Call Stack](#23-call-stack)
- [3. Functions \& Callbacks](#3-functions--callbacks)
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
  - [6.1. Async \& the Event Loop](#61-async--the-event-loop)
  - [6.2. Asynchronicity in JavaScript](#62-asynchronicity-in-javascript)
  - [6.3. Asynchronous Browser Features](#63-asynchronous-browser-features)
  - [6.4. Web APIs](#64-web-apis)
  - [6.5. Callback Queue \& Event Loop](#65-callback-queue--event-loop)
- [7. Promises](#7-promises)
  - [7.1. Fetch](#71-fetch)
  - [7.2. Then](#72-then)
  - [7.3. But How Does It Work?](#73-but-how-does-it-work)
  - [7.4. Summary](#74-summary)
- [8. Classes \& Prototypes (OOP)](#8-classes--prototypes-oop)
  - [8.1. Object Dot Notation](#81-object-dot-notation)
  - [8.2. Factory Functions](#82-factory-functions)
  - [8.3. The Prototype Chain](#83-the-prototype-chain)
  - [8.4. Prototypal Link](#84-prototypal-link)
  - [8.5. Implicit Parameters](#85-implicit-parameters)
  - [8.6. hasOwnProperty Method](#86-hasownproperty-method)
  - [8.7. this Keyword](#87-this-keyword)
  - [8.8. Arrow Function Scope and this](#88-arrow-function-scope-and-this)
  - [8.9. The new Keyword](#89-the-new-keyword)
  - [8.10. The class Keyword](#810-the-class-keyword)

## 1. Introduction

This is part of the Frontend Masters Professional Track.

Go under the hood of some of the most important aspects of JavaScript! You'll learn what you need to know to become a sought-after, versatile, problem-solving developer. Combining mental models of JavaScript's inner workings and hands-on programming challenges, this course will give you a solid understanding of callbacks and higher-order functions, closure, asynchronous JavaScript, and object-oriented JavaScript! This course is for developers with a basic to intermediate knowledge of JavaScript who wants to deepen their understanding of the fundamentals to the next level.

- [Course Link](https://frontendmasters.com/courses/javascript-hard-parts-v2/).
- [Slides](https://static.frontendmasters.com/resources/2019-09-18-javascript-hard-parts-v2/javascript-hard-parts-v2.pdf).

### 1.1. Course Overview

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

The three core components of JavaScript are:

1. Memory to store data and code (functionality).
2. The thread of execution.
3. The call stack.

### 2.1. Thread of Execution

JavaScript is not that fancy: it does two things:

1. Goes through the code line-by-line and runs/executes each line - **The thread of execution**.
2. Saves 'data' in memory like strings and arrays so we can use them later.

### 2.2. Functions

- A function being run is like a mini program.
- In order to be run, you need those two things: The thread of execution & memory to store data & functions from inside the function.
- These two things together create a new **execution context**.
- A global execution context is created as soon as we start to run any code from a file.
- A new execution context is created for every function.
- The memory created inside of the new execution context is called **local memory**.
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

- This is the core premise of functions: Making code that we can write once, and then reuse again with different values.
- ‘Parameters’ (placeholders) mean we don’t need to decide what data to run our functionality on until we run the function.
- Then we provide an actual value (‘argument’) when we run the function.
- Higher order functions follow this same principle.
- We may not want to decide exactly what some of our functionality is until we run our function: HOFs facilitate this.

### 3.2. Repeating Functionality

- Suppose we have a function `copyArrayAndMultiplyBy2`

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

- What principle are we breaking? - **DRY** (Don’t Repeat Yourself).

### 3.3. Callbacks and Higher Order Functions

- We could generalize our function, so that we pass in our specific instruction only when we run `copyArrayAndManipulate`.
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

  - Just a term to describe a function that takes in a function or passes out a function.
  - Any function that does it we call a HOF. There's nothing inherently different about them.

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
- To be an effective engineer is to overcome a hard block.
- To overcome a hard block is to go through the code line-by-line and understand the state (data): That is **debugging**.
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
  function incrementCounter() {
    counter++;
  }
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

### 6.1. Async & the Event Loop

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
const tweets = getTweets("http://twitter.com/will/1");

// ⛔ 350ms wait while a request is sent to Twitter HQ displayTweets(tweets)

// more code to run
console.log("I want to runnnn!");
```

- What if we try to delay a function directly using setTimeout?

```js
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me first!");
```

- In what order will our console logs appear?

- So what about a delay of 0ms?
- Now, in what order will our console logs occur?

```js
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 0);
console.log("Me first!");
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
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me first!");
```

- We’re interacting with a world outside of JavaScript now - so we need rules.

```js
function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {
  // blocks in the JavaScript thread for 1 sec }
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");
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

**ES5 Web Browser APIs with callback functions:**

- Up until ES6 this was the entire asynchronous JavaScript model.

**Problems**

- Callback hell:

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

## 7. Promises

- Promises: the most significant ES6 feature.
- Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that’s set up to return promises (not all are).
- Promises act as a placeholder for the data we expect to get back from the web browser feature’s background work.
- With the ES5 asynchronous JavaScript model, keeping track of background feature behaviour wasn't possible in JavaScript-land.
- You could `console.log` state, but there is no way to visualize what the background features are executing.
- There is no way to map what's happening in JavaScript-land with what's happening in the background.
- In terms of developer reasoning, thinking about what we're doing as we go, and maintaining an application at scale, created a premise for a ES6 promises.
- One of the most valuable features that promises offer, is to say: When you trigger something in the background, don't just throw it out to the browser features, but make it have some sort of consequence in JavaScript memory as well.

### 7.1. Fetch

- Replaced [`xhr`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
- A new-styled way of achieving the same thing.
- Using **two-pronged** ‘facade’ functions that both:

  - Initiate background web browser work and
  - Return a placeholder object (promise) immediately in JavaScript.

- Not only does the `fetch` identifier trigger a network request, it immediately returns a special type of object - called a promise object - which is stored in JavaScript-land's memory.
- When the background work is done, the browser updates the promise object's data with the data from the background.
- Now when we can track what's happening in the background feature with our placeholder object.
- The promise object is just a regular object, but has special properties that make it unique.

- `fetch` is Amazing!
  - This little five letter word is the most powerful in JavaScript: It is profoundly complex what those five letters do!
  - It is speaking to the internet. JavaScript can't speak to the internet, but the browser can.
  - It is using a myriad of complex technologies to go and get data from the other side of the world.

```js
function display(data) {
  console.log(data);
}
const futureData = fetch("https://twitter.com/will/tweets/1");
futureData.then(display);
console.log("Me first!");
```

- When the facade function `fetch` is called, it immediately creates the special object in JavaScript: **first prong**.
- Initially the object will have two properties:

1. `value: undefined`
2. `onFulfilled: []` (hidden property)

- The other consequence of `fetch` is in the web browser where a network request is made: **second prong**.
- Two pieces of data are are passed to the network request: The domain (`twitter.com`) and the path (`will/tweets/1`).
- We can `GET` data and `POST` data using [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
- `fetch` defaults to `GET`.
- If we want to `POST` we can pass in to `fetch` as another argument an object with options.
- Once the (response object) data comes back, the background task completes and the `value` property of the promise object is updated in JS-land.
- Now `futureData.value` holds the data.

### 7.2. Then

- We want to use the data, but we don't know when it is going to come back.
- When the data comes back and is stored in the `value` property, we need a way to automatically run some code on it.
- This is where the empty array assigned to the `onFulfilled` hidden property comes in.
- In the `onFulfilled` array we can store any functions that we want JS to trigger to be run automatically, when the `value` property is updated with the response data.
- To store functions in the `onFulfilled` array we pass them to the method `.then`.
- Under the hood this pushes to the array: `futureData.onFulfilled.push(display)`.
- We can't push manually as `onFulfilled` is a hidden property, therefore is inaccessible.
- Promise objects will automatically trigger the attached function to run (with its input being the returned data stored in the `value` property).

### 7.3. But How Does It Work?

**We need to know how our promise-deferred functionality gets back into JavaScript to be run.**

- When does the deferred function in the `onFulfilled` array attached to the promise object get pushed onto the call stack?
- We know that it is triggered to run automatically, but what are the rules?
- **Asynchronous** means running code out of the order that you see it.
- The following example shows the entire model of asynchronicity in JavaScript behind the scenes.

```js
function display(data) {
  console.log(data);
}

function printHello() {
  console.log("Hello");
}

function blockFor300ms() {
  console.log("Blocking execution...");
  alert("Unblock execution");
  console.log("Execution unblocked!");
}

setTimeout(printHello, 0);

const futureData = fetch("https://jsonplaceholder.typicode.com/todos/1");
futureData.then(display);

blockFor300ms();
console.log("Me first!");
```

- `setTimeout` tells the web browser's timer feature to set a timer, and on completion add the function `printHello` to the callback queue.
- `printHello` is added ot the callback queue immediately since the timer duration is 0.
- `futureData` is declared and assigned the return value of the `fetch` facade function call.
- **JS prong**:
  - A new promise object is immediately returned out by `fetch` and assigned to `futureData` with two properties:
    - `value: undefined`
    - `onFulfilled: []`.
    - (There is actually a third property `onRejection` added to the promise behind the scenes, an array which allows you to store functions to trigger automatically on error, i.e. if a response object is not received. We can add to this array using the `.catch` method).
- **Web browser feature prong**:
  - A network request is made with the two required parts: The domain and the path (defaults to `GET`).
- **JS prong**:
  - `display` is added to the `onFulfilled` array with the `.then` method, ready to be triggered to run automatically when the `value` property is updated with the response data.
- `blockFor300ms` is added to the call stack and a new execution context is created.

🗳**Data response object received**

- **Web browser feature prong**:
  - The promise `value` property of `futureData` isn't updated immediately when the data is received.
  - `value` is only updated after all global code has run, which is intentional: We don't want to try and gain access to something which may or may not be present.
    - In the JS specification the callback queue is called the **task queue.**
    - Any function that is attached to a promise by the `.then` method is pushed to a separate **microtask queue** (called the job queue in JS spec) which takes priority over the callback queue.
  - `display` is pushed to the microtask queue.
- `blockFor300ms` completes and is popped off of the call stack.
- `console.log('Me first!')` is executed.
- Now all synchronous code has run in global, the `value` property of the promise assigned to `futureData` is updated with the response object.
- The event loop sees that the call stack is empty, and there is no more code to run in the global execution context.
- The event loop checks the queues, starting with the microtask queue, where it finds `display`.
- `display` is dequeued from the microtask queue and pushed to the call stack, with its argument automatically inserted from the `value` property of `futureData`.
- `display` executes and is popped off from the call stack.
- The event loop sees that the call stack & microtask queue is empty, and so checks the callback queue, where it finds `printHello`.
- `printHello` is dequeued from the callback queue and pushed to the call stack.
- `printHello` executes and is popped off from the call stack.

### 7.4. Summary

**Problems**

- 99% of developers have no idea how they’re working under the hood.
- Debugging becomes super-hard as a result.
- Developers fail technical interviews.

**Benefits**

- Cleaner readable style with pseudo-synchronous style code.
- Nice error handling process.

**We have rules for the execution of our asynchronously delayed code.**

- Hold promise-deferred functions in a microtask queue and callback function in a task queue (Callback queue) when the Web Browser Feature (API) finishes
- Add the function to the Call stack (i.e. run the function) when:
  - Call stack is empty & all global code run (have the Event Loop check this condition).
- Prioritize functions in the microtask queue over the Callback queue.

**Promises, Web APIs, the Callback & Microtask Queues and Event loop enable:**

- **Non-blocking applications:** This means we don’t have to wait in the single thread and don’t block further code from running.
- **However long it takes:** We cannot predict when our Browser feature’s work will finish so we let JS handle automatically running the function on its completion.
- **Web applications:** Asynchronous JavaScript is the backbone of the modern web - letting us build fast ‘non-blocking’ applications.

## 8. Classes & Prototypes (OOP)

**Classes, Prototypes - Object Oriented JavaScript**

- An enormously popular paradigm for structuring our complex code.
- Prototype chain - the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself.
- Understanding the difference between `__proto__` and `prototype`.
- The `new` and `class` keywords as tools to automate our object & method creation.

**Core of development (and running code)**

1. Save data (e.g. in a quiz game the scores of user1 and user2).
2. Run code (functions) using that data (e.g. increase user 2’s score).

- Easy! So why is development hard?
- In a quiz game I need to save lots of users, but also admins, quiz questions, quiz outcomes, league tables - all have data and associated functionality In 100,000 lines of code.
- Where is the functionality when I need it?
- How do I make sure the functionality is only used on the right data!

**That is, I want my code to be:**

1. Easy to reason about (figure out what's going on).
   But also...
2. Easy to add features to (new functionality).
3. Nevertheless efficient and performant.

- The Object-oriented paradigm aims is to let us achieve these three goals.

### 8.1. Object Dot Notation

**So if I’m storing each user in my app with their respective data (let’s simplify)**

- user1:

  - name: ‘Tim’
  - score: 3

- user2:

  - name: ‘Stephanie’
  - score: 5

- And the functionality I need to have for each user (again simplifying!):
  - increment functionality (there’d be a ton of functions in practice).
- How could I store my data and functionality together in one place?

**Objects - store functions with their associated data!**

- This is the principle of encapsulation - and it’s going to transform how we can ‘reason about’ our code.
- Protect and bundle up the functionality and the data to which it applies.

```js
const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};
user1.increment(); // user1.score -> 4
```

_Let's keep creating our objects. What alternative techniques do we have for creating objects?_

**Creating user2 user dot notation**

- Declare an empty object and add properties with dot notation

```js
const user2 = {}; // create an empty object
// assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
  user2.score++;
};
```

### 8.2. Factory Functions

**Creating user3 using `Object.create`**

- `Object.create` is a built-in function that is going to give us fine-grained control over our object later on.

```js
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};
```

_Our code is getting repetitive, we're breaking our **DRY** principle. And suppose we have millions of users! What could we do?_

- Whenever we find ourselves repeating lines of code what do we do? - We create a generalized function.

**Solution 1. Generate objects using a function**

```js
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
// Note that closure is everywhere!
// because we returned the function on the increment property,
// although the function declaration makes reference to newUser,
// the function has a backpack, and retains access to the execution context created for userCreator,
// where the newUser variable persists: increment has closure over newUser.
```

- This approach although easy to reason about, is completely unusable.
- The function is stored in every user object created.
- If you wanted to add a new feature, we would need to add it manually to each object.

**Problems:**

- Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies.
- Is there a better way?

**Benefits:**

- It's simple and easy to reason about!

### 8.3. The Prototype Chain

- We need a better way in which we only write the function once.

**Solution 2: Using the prototype chain**

- Store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there.
- Link `user1` and `userFunctionStore` so the interpreter, on not finding `.increment`, makes sure to check up in `userFunctionStore` where it would find it.
- Make the link with `Object.create()` technique.

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

### 8.4. Prototypal Link

- `increment` and `login` don't exist on `user1` or `user2`.
- There is a bond between the user objects and the `userFunctionStore` so that `user1` and `user2` both can access its methods.
- This is the absolute core of the prototype chain technique.
- Solutions 3 & 4 are going to be shorthand ways of doing the same thing.
- `Object.create` gives the objects it creates a `__proto__` hidden property which links it to `userFunctionStore`.
- When JavaScript can't find a method on an object, it checks `__proto__` property for a link.

### 8.5. Implicit Parameters

- An implicit parameter means one that you don't specify.
- It's automatically there and automatically filled in.
- It's called `this`.
- When in the local memory of the execution context for `increment` the implicit parameter `this` is created.
- **The key rule of `this`:** `this` always attaches to itself the object on the left-hand-side of the dot, on which that function is being run.
- All functions and global automatically have a `this` although sometimes it's not very useful (when it points to the global object).
- In the case of `user1.increment` `this` is assigned the value of `user1`.

### 8.6. hasOwnProperty Method

**What if we want to confirm our user1 has the property score?**

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.hasOwnProperty("score");
```

_We can use the hasOwnProperty method - but where is it?_

- We can use the hasOwnProperty method - but where is it? Is it on user1?
- All objects have a `__proto__` property by default which defaults to linking to a big, headline object: `Object.prototype` which is full of (somewhat) useful functions.
- We get access to it via `userFunctionStore`’s `__proto__` property - the chain.
- This is where we find `hasOwnProperty`.
- `Object.prototype` even has its own `__proto__` property, although its value is `null` meaning we can't go further up the chain.

### 8.7. this Keyword

**Declaring & calling a new function inside our ‘method’ increment**

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    // Create and invoke a new function (addOne) inside increment
    function addOne() {
      this.score++;
    }
    addOne();
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

_What does_ `this` _get auto-assigned to in the function body of_ `addOne`_?_

- You would think that `this` would be assigned `user1` since that's the object which the `increment` method belongs to.
- Indeed there are languages where that is the case, even if you are running functions inside of the method.
- But the JS implementation is arguably not as well designed.
- There is no `.` and nothing to the left of `addOne`, so the key rule of `this` cannot apply.
- Therefore `this` is assigned its default value, which is the global `window` object.
- In the old days the workaround for the problem was to declare `var that = this` in the outer scope, and inside the function `this = that`!
- There are other solution to manually call `addOne` where you can take control of the `this` assignment inside of it.
  - `addOne.call(this)` will assign the `this` inside `addOne` to the `this` of where the `addOne.call(this)` statement is defined, which would result in it pointing to `user1` / `user2`.

### 8.8. Arrow Function Scope and this

**Arrow functions override the normal `this` rules**

- With arrow functions the `this` value is determined by where the function is saved.

```js
function userCreator(name, score) {
  debugger;
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    const add1 = () => {
      this.score++;
    };
    add1();
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

_Now our inner function gets its `this` set by where it was saved - it’s a ‘lexically scoped' `this`_

- We don't want to use arrow functions for our methods on objects.
- If we used an arrow function for `increment`, its `this` would point to the global object: `Window`.
- We want to use the feature of JS that binds `this` to the object on which the function is run, i.e. `user1` / `user2`.
- Using a regular function expression creates a lexical scope with a `this` that the arrow function defined within can point to.

**Solution 2: Using the prototype chain: Review**

**Problems:**

- No problems! It's beautiful. Maybe a little long-winded.
- Write this every single time - but it's 6 words!

```js
const newUser = Object.create(userFunctionStore);
// ...
return newUser;
```

**Benefits:**

- Super sophisticated but not standard.

**Summary**

- It is not the standard model to use, and we shouldn't use it.
- But it is the answer to what's really happening behind the scenes of the standard way to achieve the same goal, which are solutions 3 & 4.
- If you want to debug, or answer in interview "what's the `new` keyword doing behind the scenes?", you need to understand this model.
- The more you think in this paradigm, you start structuring your code in a more efficient way: collections of data and related functionality.

### 8.9. The new Keyword

**Solution 3 - Introducing the keyword that automates the hard work: `new`**

- When we call the function that returns an object with `new` in front we automate 2 things:

1. Create a new user object
2. Return the new user object

```js
const user1 = new userCreator("Eva", 9);
const user2 = new userCreator("Tom", 10);
```

- But now we need to adjust how we write the body of `userCreator` - how can we:

  - Refer to the auto-created object?
  - Know where to put our single copies of functions?

**Refer to the auto-created object**

- The **other rule** of `this` applies:
- First rule: `this` always points to the object on the left-hand-side of the `.` when we run a method.
- Second rule: with the `new` keyword, the automatically created object inside of the execution context is given the label `this`.

**Where to put our single copies of functions**

- Where do we want to store the functions to which the newly created objects have a link to?

**Interlude: functions are both objects and functions in JavaScript**

- When JS sees the keyword `function` we get a function + a "big old object".
- All functions have these objects.
- And this object has a property called `prototype`, which defaults to a _big old empty object_.
- The `new` keyword creates a bond through the `__proto__` property to the `prototype` property: this is where we store our functions.

```js
function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5; // using parens calls the function, using dot notation adds a property to the object.
multiplyBy2(3); // 6
multiplyBy2.stored; // 5
multiplyBy2.prototype; // {}
```

_We could use the fact that all functions have a default property `prototype` on their object version, (itself an object) - to replace our `functionStore` object_

```js
function userCreator(name, score) {
  /* const newUser = Object.create(functionStore); */
  /* newUser */ this.name = name;
  /* newUser */ this.score = score;
  /* return newUser; */
}

/* functionStore */ userCreator.prototype; // {};
/* functionStore */ userCreator.prototype.increment = function () {
  this.score++;
};
const user1 = new userCreator("Will", 3);
```

**The `new` keyword automates a lot of our manual work**

- You could say the `new` keyword is a modifier: it alters the behaviour of the `userCreator` execution context - it will insert stuff for us.

```js
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() {
  this.score++;
}

userCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new userCreator(“Eva”, 9);
user1.increment();
```

- We declare a variable `userCreator` and assign it a function definition + an empty object in global memory.
- The object attached to `userCreator` automatically has a property `prototype` which has an empty object assigned to it.
  - We will use the empty object assigned to the `prototype` property to store a single version of each function, that we want any objects that are returned from running `userCreator` to have access to any stored functions.
- We go to `userCreator`, we go to `userCreator`'s object version of itself, where we look for the `prototype` property, and in the empty object assigned to `prototype` we create a new property called `increment`, and assign the function definition `function() {this.score++;}` to `increment`.
- We go to `userCreator`, we go to `userCreator`'s object version of itself, where we look for the `prototype` property, and in the object assigned to `prototype` we create an additional property called `login`, and assign the function definition `function() {console.log("login");}` to `login`.
- We declare a constant `user1` in global memory with a value of uninitialized.
- We call `userCreator(“Eva”, 9)` with the `new` keyword to modify the behaviour and insert stuff for us.
- A brand new execution context is created for `userCreator`.
  - We store the parameters `name` and `score` in local memory.
  - We assign the arguments `"Eva"` to `name` and `9` to `score`.
  - The `new` keyword declares and saves in local memory an auto-created empty object and assigns it to `this`.
  - The `new` keyword creates a link from the hidden `__proto__` property on the auto-created object assigned to `this`, to the object full of functions assigned to the `prototype` property on `userCreator`'s object version of itself.
  - On the auto-created object assigned to `this` we create a new property called `name` and assign the value of the `name` parameter: `"Eva"`.
  - On the auto-created object assigned to `this` we create a new property called `score` and assign the value of the `score` parameter: `0`.
  - The `new` keyword automatically returns `this`: Our auto-created created object.
- `user1` is assigned the return value: Our auto-created created object.
- `user1.increment()`: We look for `increment` on the `user1` object in global memory: Not found!
- We look at the `__proto__` property of `user1` which automatically links us to the `prototype` property on `userCreator`'s object version of itself, where we find the function `increment` stored as a property of the object assigned to `prototype`.

**Benefits:**

- Faster to write. Often used in practice in professional code.

**Problems:**

- 95% of developers have no idea how it works and therefore fail interviews.
- If `userCreator` is run directly, the `this` would point to the global object. We have to upper case first letter of the function so we know it requires `new` to work!

### 8.10. The class Keyword

**Solution 4: The `class` ‘syntactic sugar’**

- 'Syntactic sugar' means the way the codes looks is different but the behaviour is the same.
- We’re writing our shared methods separately from our object ‘constructor’ itself (off in the `userCreator.prototype` object).
- Other languages let us do this all in one place. ES2015 lets us do so too.

```js
/*
function userCreator(name, score) {
  this.name = name;
  this.score = score;
} */
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  // userCreator.prototype.increment = function(){ this.score++; };
  increment() {
    this.score++;
  }
  // userCreator.prototype.login = function(){ console.log("login"); };
  login() {
    console.log("login");
  }
}
const user1 = new UserCreator("Eva", 9);
user1.increment();
```

**Benefits:**

- Emerging as a new standard.
- Feels more like style of other languages (e.g. Python, Java).

**Problems:**

- 99% of developers have no idea how it works and therefore fail interviews... But I will not be one of them! 😁
