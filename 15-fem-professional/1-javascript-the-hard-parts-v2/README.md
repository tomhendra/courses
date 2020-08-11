<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript: The Hard Parts, v2</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. JavaScript Principles](#2-javascript-principles)
  - [2.1. Thread of Execution](#21-thread-of-execution)
  - [2.2. Functions](#22-functions)
  - [2.3. Call Stack](#23-call-stack)

## 1. Introduction

Go under the hood of some of the most important aspects of JavaScript! You'll learn what you need to know to become a sought-after, versatile, problem-solving developer. Combining mental models of JavaScript's inner workings and hands-on programming challenges, this course will give you a solid understanding of callbacks and higher-order functions, closure, asynchronous JavaScript, and object-oriented JavaScript! This course is for developers with a basic to intermediate knowledge of JavaScript who wants to deepen their understanding of the fundamentals to the next level.

[Course Link](https://frontendmasters.com/courses/javascript-hard-parts-v2/).
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
// 1. num declared and assigned value of 3, which is stored in memory (in the global execution context).
const num = 3;
// 2. multiplyBy2 stored in memory but function doesn't run until it is called. At this point it is just a pointer to the function.
function multiplyBy2(inputNumber) {
  // 4. New execution context created & inputNumber parameter is stored in local memory as argument of 3.
  // 5. result is stored in local memory as 6
  const result = inputNumber * 2;
  // 6. Look in local memory for result variable and return its value.
  return result;
}
// 3. output is created but remains uninitialized until the function is run, as variables can only store values, not functionality (commands).
const output = multiplyBy2(num);
// 7. after function is run, output evaluates to 6 which is stored in memory (in the global execution context).
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
