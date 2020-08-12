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
  - [3.3. Higher Order Functions](#33-higher-order-functions)
  - [3.4. Callbacks and Higher Order Functions](#34-callbacks-and-higher-order-functions)

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

### 3.3. Higher Order Functions

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
- Functions in javascript = first class objects.
- They can co-exist with and can be treated like any other javascript object

1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

- **Higher order functions:**

  - Take in a function or pass out a function.
  - Just a term to describe these functions - any function that does it we call a HOF - but there's nothing different about them inherently.

### 3.4. Callbacks and Higher Order Functions

- Callbacks and Higher Order Functions simplify our code and keep it DRY.
- **Declarative readable code**: Map, filter, reduce - the most readable way to write code to work with data.
- **Codesmith & pro interview prep**: One of the most popular topics to test in interview both for Codesmith and mid/senior level job interviews.
- **Asynchronous JavaScript:** Callbacks are a core aspect of async JavaScript, and are under-the-hood of promises, async/await.
