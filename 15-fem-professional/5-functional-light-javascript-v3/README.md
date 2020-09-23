<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Functional-Light JavaScript, v3</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Why Functional Programming?](#11-why-functional-programming)
  - [1.2. Functional Programming Journey](#12-functional-programming-journey)
  - [1.3. Code is Provable](#13-code-is-provable)
  - [1.4. Course Overview](#14-course-overview)
- [2. Function Purity](#2-function-purity)
  - [2.1. Functions vs Procedures](#21-functions-vs-procedures)
  - [2.2. Functional Naming Semantics](#22-functional-naming-semantics)
  - [2.3. Side Effects](#23-side-effects)
  - [2.4. Pure Functions & Constants](#24-pure-functions--constants)
  - [2.5. Reducing the Surface Area](#25-reducing-the-surface-area)
  - [2.6. Same Input, Same Output](#26-same-input-same-output)
  - [2.7. Level of Confidence](#27-level-of-confidence)
  - [2.8. Extracting Impurity](#28-extracting-impurity)
  - [2.9. Containing Impurity](#29-containing-impurity)
  - [2.10. Impurity Exercise: Wrappers & Adapters](#210-impurity-exercise-wrappers--adapters)
- [3. Argument Adapters](#3-argument-adapters)
  - [3.1. Arguments Shape Adapters](#31-arguments-shape-adapters)
  - [3.2. Flap and Reverse Adapter](#32-flap-and-reverse-adapter)
  - [3.3. Spread Adapter](#33-spread-adapter)
- [4. Point-Free](#4-point-free)
  - [4.1. Equational Reasoning](#41-equational-reasoning)
  - [4.2. Point-Free Refactor](#42-point-free-refactor)
  - [4.3. Point-Free Refactoring Exercise](#43-point-free-refactoring-exercise)
  - [4.4. Advanced Point-Free](#44-advanced-point-free)
- [5. Closure](#5-closure)
  - [5.1. Closure Exercise](#51-closure-exercise)
  - [5.2. Lazy vs Eager](#52-lazy-vs-eager)
  - [5.3. Memoization](#53-memoization)
  - [5.4. Referential Transparency](#54-referential-transparency)
  - [5.5. Generalized to Specialized](#55-generalized-to-specialized)
  - [5.6. Partial Application & Currying](#56-partial-application--currying)
    - [5.6.1. Partial application.](#561-partial-application)
    - [5.6.2. Currying](#562-currying)
    - [5.6.3. Strict vs Loose Currying](#563-strict-vs-loose-currying)
  - [5.7. Partial Application & Currying Comparison](#57-partial-application--currying-comparison)
  - [5.8. Changing Function Shape with Curry](#58-changing-function-shape-with-curry)
- [6. Composition](#6-composition)
  - [6.1. Composition Illustration](#61-composition-illustration)
  - [6.2. Declarative Data Flow](#62-declarative-data-flow)
  - [6.3. Piping vs Composition](#63-piping-vs-composition)

## 1. Introduction

Learn to apply functional programming concepts in JavaScript to make your programs more readable and less error-prone! Kyle Simpson will walk you through the core concepts of functional programming like function purity, point-free style, partial-application, currying, composition, immutability, recursion, and list operations like map/reduce/filter. You'll go even deeper with monads and transduction, two more techniques to add to your tool belt!

- [Slides](http://static.frontendmasters.com/resources/2019-05-06-functional-light-v3/functional-light-v3.pdf)

- We have to restructure our brains to think about and solve problems in a different way.
- There is [a book](https://www.amazon.es/Functional-Light-JavaScript-Balanced-Pragmatic-FP/dp/1981672346/ref=sr_1_1?__mk_es_ES=ÅMÅŽÕÑ&dchild=1&keywords=Functional-Light+JavaScript&qid=1600366916&sr=8-1) to accompany the course.
- The title says "light" but this is not a course for beginners.
- Light refers to not trying to inundate us with terminology & mathematical notation.
- It is deep, heavy, challenging stuff!

### 1.1. Why Functional Programming?

- One of the biggest reasons is that it signals a paradigm shift in the way that we approach code.
- That can be incorporated in the idea of imperative vs declarative programming.
- **Imperative** means code that is focused primarily on how to do something.
- The problem with imperative code is that the future reader needs to read all of the code and execute it mentally to understand it.
- The computer is great at executing code, but our brains are not built for that.
- Having to mentally execute code makes it harder to understand, and harder to maintain as a result.
- **Declarative** means code that is focused primarily on what (the outcome) and more importantly the why.
- Many people say good code should be self-documenting, and code comments shouldn't be required: nonsense!
- Code doesn't need to self-document, it needs to tell a story, and code comments can help with this.
- Comments should not duplicate the narrative of what we are doing.
- Comments should say **why** we are doing something, not the what.
- If it is particularly confusing, the **how** could be commented, but that's usually a sign we can improve the code.
- But if your code makes the _why_ obvious, then we don't need code comments at all.

### 1.2. Functional Programming Journey

- Most people give up on learning FP after their code readability decreases when using FP techniques.
- Everyone goes through this stage. Do not give up!
- It is complicated and hard and takes a long time to get comfortable with FP.
- Rather than looking at the theory and applying it top down, we should look at what we already know and make it more functional one piece at a time.
- There is a tension in that FP techniques are more confusing than the imperative approach, because it is not yet familiar.
- It is tempting to fall back to imperative techniques as we are under pressure to ship code. Keep pushing through!

### 1.3. Code is Provable

- FP looks very programmatic, but is actually mathematical.
- But it is not necessary to know the maths.
- We can take advantage of a mathematical principle, even if we can't prove it to ourselves.
- The basic arithmetic `1 + 1 = 2` has a formal proof to it which is amazingly complex.
- But we have all used and trusted this basic formula without going through the formal proof.
- Many functional programmers love to go through the formal proof, but it is not necessary.
- If we know that using a particular FP technique gives us a particular result, it is the same as using `1 + 1 = 2`.
- Most of the time our bugs are logic bugs, caused by not fully understanding what's happening in the code.
- We fumble our way through things until the tests pass, without true understanding.
- What would happen if almost every time we went to run a test we were 100% certain of the outcome?
- We would begin to develop a sense of confidence.
- We would become more effective programmers.
- A compelling thing about FP is the promise that we can use principles of programming that are based on real hard mathematics.
- And even if we don't understand the math, we can trust the mathematicians.
- If we use the principles correctly we are guaranteed of the outcome.
- FP techniques are about using mathematical principles in a mathematically sound way, that just happen to look like programming and let us solve programming problems.
- The best code is the code that doesn't have to be read.
- We could have a codebase of 900 lines of code that is based on proven mathematical principles that we never have to second guess, and just 100 lines of business logic code that we spent all day thinking about.
- We can have a more effective codebase, which is easier to manage, easier to find and fix bugs, if we reduce the surface area of what we need to focus on.

### 1.4. Course Overview

- Functions
- Closure
- Composition
- Immutability
- Recursion
- Lists / Data Structures
- Async
- FP Libraries

## 2. Function Purity

### 2.1. Functions vs Procedures

- Functional Programming is not all about the `function` keyword.
- The following both use the `function` keyword.

```js
function addNumbers(x = 0, y = 0, z = 0, w = 0) {
  var total = x + y + z + w;
  console.log(total);
}

function extraNumbers(x = 2, ...args) {
  return addNumbers(x, 40, ...args);
}

extraNumbers(); // 42
extraNumbers(3, 8, 1); // 62
```

- `addNumbers` takes an input and does something with it, but the bar for being a function is higher than that.
- Just because `addNumbers` uses the `function` keyword does not make it a function.
- `addNumbers` is a **procedure** -- a collection of operations in a program.
- Procedures can take inputs, produce outputs, we all use them and they are very useful.
- To understand the difference between a function and a procedure we need to first say that a function not only has to take an input, it has to _return_ an output.
- If there is no `return` keyword it is most definitely not a function.
- Any 'function' without a `return` keyword is a procedure.
- But there is more to the definition of a function which we will uncover as we progress with the course.
- `extraNumbers` has a `return` keyword and is returning whatever the return value of `addNumbers` is.
- In JavaScript all functions minimally return the `undefined` keyword, so it is returning _something_.
- However `extraNumbers` is not a function because functions can't call procedures, or they become procedures themselves.
- You can't do any functional programming with anything that is not a function.
- It has to be a function to take advantage of FP principles.
- There are many ways where people use what look like function APIs and patterns but don't use true functions, so they are masquerading as functional.

### 2.2. Functional Naming Semantics

- The following example returns an array, but by destructuring we are communicating that we don't really care about the array.

```js
function tuple(x, y) {
  return [x + 1, y - 1];
}

var [a, b] = tuple(...[5, 10]);

a; // 6
b; // 9
```

- We actually care about the individual elements with we are assigning to `a` and `b`.
- We are communicating that `tuple` has two outputs.
- If we just returned `40`, although it would take inputs and return outputs it wouldn't be considered the true spirit of a function.
- To understand the spirit of a function, we need to look at some mathematics.

```
f(x) = 2x² + 3
```

- The input value is interpreted as the `x` coordinate, and the output value is interpreted as the `y` coordinate, and when you take the input and output together we can interpret their meaning as a [palabora](https://en.wikipedia.org/wiki/Parabola).
- A function is a relationship between the input and the output.
- There is a semantic relationship between what we put in, and what we get out.
- If we were to write this in JS we could write:

```js
function f(x) {
  return 2 * Math.pow(x, 2) + 3;
}
```

- But a better name for this function would be Parabola, to describe to the reader of our code the relationship.
- If we are making things that don't have an obvious relationship between the input and the output, we are not accomplishing the spirit of FP.
- The goal is to create relationships that are obvious to the reader of our code.
- **The definition of a function: the semantic relationship between input and computed output**.
- If we make a function named `shippingRate` the name of the function tells the reader the semantic relationship.

```js
function shippingRate(size, weight, speed) {
  return (size + 1) * weight + speed;
}
```

- That is what functional programming bases itself on.
- Everything that we use in our app must have a name that semantically describes the relationship between the input and output.
- Even `undefined` is a valid output, as long as it has a semantic relationship to the input.
- If we were trying to retrieve a property from an object, and it wasn't present, the proper semantic return value would be `undefined`.

### 2.3. Side Effects

- In FP for there to be a function it has to not have side effects.
- Consider this procedure.

```js
function shippingRate() {
  rate = (size + 1) * weight + speed;
}

var rate;
var size = 12;
var weight = 4;
var speed = 5;
shippingRate();
rate; // 57

size = 8;
speed = 6;
shippingRate();
rate; // 42
```

- Notice first of all there are no parameters, and no `return` keyword.
- Not only must there be a relationship between the inputs and outputs, but the inputs and outputs need to be direct in order to take advantage of the maths that we benefit from with FP.
- If the inputs or outputs are _indirect_ as they are here, then it is not a true function, even though there is a semantic relationship.
- So what **side effects** really mean are indirect inputs, outputs or both.
- Some people call indirect inputs _side causes_ as in 'cause and effect'.
- So the function must take direct inputs via arguments passed to parameters, compute and return a value, without accessing or assigning to anything outside of itself.
- We want to avoid side effects because they invalidate the idea of functions.
- With side effects we don't get functions, therefore don't get the benefits of provability, verification and security that the function is definitely going to do what we want it to.
- But we can definitely still use the APIs!

```js
function shippingRate(size, weight, speed) {
  return (size + 1) * weight + speed;
}

var rate;

rate = shippingRate(12, 4, 5); // 57

rate = shippingRate(8, 4, 6); // 42
```

- In JavaScript, the definition of a function isn't the important part; it is the function call.
- Are there direct inputs and outputs from this particular function call -- that's the question.
- Our temptation is to look at the function definition to try to answer that question, but due to the way JavaScript works it is not possible to answer the question 'is it a function?' without looking at the function call.
- **Avoid side effects with function calls... if possible**.
- Sometimes side effects are unavoidable.

  - I / O (console, files, etc)
  - Database Storage
  - Network Calls
  - DOM
  - Timestamps
  - Random Numbers
  - _CPU Heat_
  - _CPU Time Delay_
  - etc

- Any program that runs in a theoretical sense is going to generate heat from the CPU: That is a side effect; it is an observable change to the state of the system.
- Just the observable delay in time caused by one program running before another one can, is a side effect.
- **There is no such thing as "no side effects". Avoid them where possible, make them obvious otherwise.**
- We need to change our mindset from side effects are bad, to side effects take away from the benefits of why we are doing FP in the first place.
- It is important to make side effects obvious.
- If there is a proportion of our code that follows FP principles and there is a bug, it is vastly more likely that the bug is being caused by the code where the side effects are.
- FP provides the idea that we visualise our our program as a sphere with a clear delineation, where all of our pure functions comprise the core, and the our non-pure functions with side effects are the outer shell.

### 2.4. Pure Functions & Constants

- **Pure functions** have direct inputs and outputs, and have no side effects.
- However as afore mentioned it is more the function call that should take focus.

```js
// Pure
function addTwo(x, y) {
  return x + y;
}

// Impure
function addAnotherTwo(x, y) {
  return addTwo(x, y) + z;
}
```

- `addAnotherTwo` uses a `z` variable that's outside of itself: an indirect input.
- We are supposed to be able to prove and predict the behaviour of the function, but because we are relying on a side effect, we can't prove the behaviour through the maths in the same way as `addTwo`.
- But is more complicated than that. It is possible that we could access a variable outside of the function and not invalidate the purity.
- But seeing a variable being accessed outside of a function should immediately trigger us to ask why.
- Is it **necessary**, is it **useful**, is it **important**?
- What if the code looks like this?

```js
const z = 1;

function addTwo(x, y) {
  return x + y;
}

function addAnother(x, y) {
  return addTwo(x, y) + z;
}

addAnother(20, 21); // 42
```

- if `+ z;` was `+ 1` inside `addAnother` we would say that the function is pure.
- So is the introduction of `z` here really a side effect?
- A constant is supposed to be a semantic placeholder for a value; it doesn't change throughout the lifetime of the program.
- `addAnother` doesn't cause any side effects, and only uses the side effect of the constant.
- If we changed `const` to `var` it would still be pure, because to make a meaningful evaluation, we have to consider the program's entirety. Nowhere in the program is `z` being reassigned, it still serves the purpose of a constant, so FP principles are being adhered to.
- There are FP programmers who use `const` everywhere, but the real question is _is the variable being reassigned_, not _can the variable be reassigned_, or in fact more importantly _is it obvious to the reader that the variable isn't reassigned_.
- In this scenario the function call `addAnother(20, 21);` is still consistent with functional principles.
- We skip over the fact that `addTwo` is no more a _constant_ than `var z` is, and yet we can see that `addTwo` is not reassigned.
- So the behaviour of `addAnother(20, 21);` is observably a pure function call.
- It is our responsibility as the author to make it as obvious as possible that something is constant, because we want the reader of our code to understand when something isn't going to change.
- If the reader is unsure whether a value will change, to understand a line they need to read everything before it.
- That is the real problem with side effects: They create an outcome where to understand any given line, we have to mentally execute code to understand what state the program was in before we ran it.
- But if the `addAnother` call is reliably and obviously pure, then we can execute it in isolation of the rest of the program and not worry if we affect anything elsewhere in the program.
- That's the real benefit of a pure function call: It isolates that line so we can analyze it independently.

### 2.5. Reducing the Surface Area

- A different usage is returning a function back.

```js
function addAnother(z) {
  return function addTwo(x, y) {
    return x + y + z;
  };
}

addAnother(1)(20, 21); // 42
```

- `z` is now a parameter that is passed in.
- `(20, 21)` executes `addTwo` which is referencing `z`, a variable outside of `addTwo`.
- What is interesting is that this code has a smaller surface area to worry about with respect to the reassignment of `z`.
- There are only two places in the entire program that could possible reassign `z`: the parameter & return statement.
- As a result of reducing surface area, we are increasing readability.
- We give the reader confidence that when they see `z` passed in as `1` they know it stays as `1` from then on.
- By closing over the `z` variable it is in effect a constant and therefore both the outer function call and the inner function all are pure. They have the predictability that we expect from pure functions.

### 2.6. Same Input, Same Output

- Here it appears that all we do is access the `id` property on `obj` and return it back.

```js
function getId(obj) {
  return obj.id;
}
```

- If we called `getId` multiple times with the same object, would we get the same value out every time?
- If we could see that the object never gets reassigned, would we be confident?
- What if we saw more of the program that revealed that the object doesn't have a regular property but a getter.

```js
getId({
  get id() {
    return Math.random();
  },
});
```

- Now that more of the program is revealed our confidence plummets.
- It is important to be able to see all relevant parts of the program.
- The more that we use the techniques from this course to reduce the surface area where these non-functional things can occur, the easier it is to read, understand and rely upon.
- Pure function calls act in isolation;**given the same input, they always produce the same output.**
- We want to design our programs so that as many of our function calls as possible behave as pure.

### 2.7. Level of Confidence

- Function purity is a level of confidence.
- It is not a binary characteristic.
- The point in JavaScript is how confident we are in the behaviour of the function.
- The answer to the question _is a function pure?_ is not _yes_ or _no_.
- The correct answer is _I have a high degree that it will / not behave pure_.
- We want to be able to see the parts of our code where we have a high degree of confidence and the parts where we don't, and to shift that balance as much as possible to the high degree, using pure functions as much as possible.
- What is important is if the function **call** behaves pure or not.

### 2.8. Extracting Impurity

- If a function is not pure, what are our options?
- Leave it impure e.g. writing to a database.
- To help with maintenance make the side effects obvious through function naming, comments, a separate file `side-effects.js`.
- Or rearrange the way the function works to extract the impurity from it, leaving a pure function in place.
- If we have a function which has complex computations and then writes to a database, the function programmer would separate it into two entities: A pure function for the computation, and a procedure that handles the single side effect.
- That is one way of making it more obvious there is a side effect: Instead of hiding the procedure away inside what looks like a pure function, we bring the procedure to the surface.

```js
function addComment(userID, comment) {
  var record = {
    id: uniqueId(),
    userID,
    text: comment,
  };

  var elem = buildCommentElement(record);
  commentList.appendChild(elem);
}

addComment(42, "This is a comment.");
```

- This is an impure function with side effects, in that we modify the state of the DOM with `appendChild()` & call `uniqueId()`.
- But we could refactor as follows.

```js
function newComment(userID, commentID, comment) {
  var record = {
    id: commentID,
    userID,
    text: comment,
  };

  return buildCommentElement(record);
}

var commentID = uniqueID();
var elem = newComment(42, commentID, "This is a new comment.");
commentsList.appendChild(elem);
```

- We pass in `commentID` as an argument, and we return the DOM element.
- This doesn't eliminate the side effect, but extracts out the impurity.

### 2.9. Containing Impurity

- If we can't extract the impurity, it may be possible to contain it.
- We may not be able to eliminate impurity, but we can prevent it from affecting other parts of the application.
- We can reduce the surface area of the impurity to give a net overall benefit to our application.
- One way of containment is as follows.

```js
var SomeAPI = {
  threshold: 13,
  isBelowThreshold(x) {
    return x <= SomeAPI.threshold;
  },
};

var numbers = [];

function insertSortedDesc(v) {
  SomeAPI.threshold = v;
  var idx = numbers.findIndex(SomeAPI.isBelowThreshold);
  if (idx == -1) {
    idx = numbers.length;
  }
  numbers.splice(idx, 0, v);
}

insertSortedDesc(3);
insertSortedDesc(5);
insertSortedDesc(1);
insertSortedDesc(4);
insertSortedDesc(2);
numbers; // [5, 4, 3, 2, 1]
```

- If we don't want the side effects of modifying the `numbers` array in global scope, we can wrap the entire thing in a function.

```js
var SomeAPI = {
  threshold: 13,
  isBelowThreshold(x) {
    return x <= SomeAPI.threshold;
  },
};

var numbers = [];

function getSortedNums(nums, v) {
  var numbers = nums.slice();
  insertedSortedDesc(v);
  return numbers;

  function insertSortedDesc(v) {
    SomeAPI.threshold = v;
    var idx = numbers.findIndex(SomeAPI.isBelowThreshold);
    if (idx == -1) {
      idx = numbers.length;
    }
    numbers.splice(idx, 0, v);
  }
}

numbers = getSortedNums(numbers, 3);
numbers = getSortedNums(numbers, 5);
numbers = getSortedNums(numbers, 1);
numbers = getSortedNums(numbers, 4);
numbers = getSortedNums(numbers, 2);
numbers; // [5, 4, 3, 2, 1]
```

- Now the array from the global scope is not being modified, but rather a copy array created inside `getSortedNums`.
- We modify the local array not the global array.
- This technique is not often required, but a good technique to be aware of.
- But we still have two other side effects:
  - Modifying the `threshold` property on `SomeAPI`.
  - Using the `isBelowThreshold` method.
- It wouldn't make sense to wrap `SomeAPI` in a function, as in reality it is probably an external API in a different file.
- There is another technique that is better than nothing!
- Instead of wrapping a function around it, we create an adaptor function alongside it.

```js
var SomeAPI = {
  threshold: 13,
  isBelowThreshold(x) {
    return x <= SomeAPI.threshold;
  },
};

var numbers = [];

function insertSortedDesc(v) {
  SomeAPI.threshold = v;
  var idx = numbers.findIndex(SomeAPI.isBelowThreshold);
  if (idx == -1) {
    idx = numbers.length;
  }
  numbers.splice(idx, 0, v);
}

function getSortedNums(nums, v) {
  var [origNumbers, origThreshold] = [numbers, SomeAPI.threshold];
  numbers = nums.slice();
  insertSortedDesc(v);
  nums = numbers;
  [numbers, SomeAPI.threshold] = [origNumbers, origThreshold];
  return nums;
}

numbers = getSortedNums(numbers, 3);
numbers = getSortedNums(numbers, 5);
numbers = getSortedNums(numbers, 1);
numbers = getSortedNums(numbers, 4);
numbers = getSortedNums(numbers, 2);
numbers; // [5, 4, 3, 2, 1]
```

- Our adapter function is `getSortedNums` and has six steps.

1. First make a copy of the current state that is going to be modified.
2. Setup the environment that we want so that `numbers` is a copy of the previous array state passed in as `nums`.
3. Call `insertedSortedDesc` which has all the side effects that we don't like.
4. Capture the changed state back in `nums`.
5. Change all of the state that was modified back to its original values.
6. Return the modified array.

- This is very brute force, very ugly, and would become unmanageable very quickly if we had a moe complex set of state like the DOM.
- Capturing the current state of the DOM, or our database, modifying it and then resetting it, is possible but very hard.
- But in this particular case we had a couple of variables that were getting changed, so we captured those values and restored them.
- Even though `getSortedNums` is not a pure function in itself, the _function call_ satisfies all the conditions of purity.
- It takes direct inputs, it produces direct outputs, it doesn't change anything about the state of the program afterwards, and didn't rely on the state of the program before.
- We have contained the observability of the side effects to the `getSortedNums` function call.

- Sometimes side effects happen, but we can improve our code and reduce the surface area in five ways:

**1. Write it pure from the beginning.**
**2. Refactor it to be pure.**
**3. Extract the impurity so it leaves a pure function.**
**4. Make a wrapper function.**
**5. Make an adaptor function.**

- If we can't do any of these things and we are stuck with the side effect, at least make it obvious.
- Contain it somewhere, make it obvious, so the future reader knows where to go looking for bugs if they occur.

### 2.10. [Impurity Exercise: Wrappers & Adapters](exercises/impurity/ex.js)

## 3. Argument Adapters

- Parameter and argument are often used interchangeably.
- The generally accepted definition is that the parameter is the variable in the function definition, and the argument is the value that is assigned to the parameter, when we call the function.
- The arguments are the inputs to the function.
- There are special terms to describe the shape of functions.
- We will use the terminology **_shape_** in place of the more formal CS term: **_type signature_**.
- The shape is described by the kind and quantity of things you pass in, and the kind and quantity of things that come out.

```js
// unary
function increment(x) {
  return sum(x, 1);
}

// binary
function sum(x, y) {
  return x + y;
}
```

- A function that takes in a single input and produces a single output is a unary function.
- A function that takes in two inputs and produces a single output is a binary function.
- We are describing the shape of the input signature.
- The functional programmer is almost obsessed with the shape of functions: It is super critical.
- When authoring functions we should constantly be thinking: what does the shape of the function imply to the future use of it.
- For functions that we decide the design of, we should be very cognizant about the shape.
- For reasons that we will begin to understand, functional programmers tend to prefer unary functions: one input, one output.
- The next preferred option is a binary function: two inputs, single output.
- Probably 95-98% of all functions in a good functional program will be one of those two sorts: Around 70/30 unary/binary.
- There is a term to describe other functions that take more than two inputs: **enary** functions.
- Enary functions are vastly less common, because the more inputs a function has, the harder it is to make it work with other functions.

### 3.1. Arguments Shape Adapters

- We can adapt the shape of functions.
- We are going to introduce a concept that is often not fully understood: Higher Order Function (HOF).
- A HOF is a function that either receives as its inputs one or more functions, and/or returns one or more functions as its outputs.
- If the inputs/outputs are not functions, then it is a single order function.

```js
function unary(fn) {
  return function one(arg) {
    return fn(arg);
  };
}

function binary(fn) {
  return function two(arg1, arg2) {
    return fn(arg1, arg2);
  };
}

function f(...args) {
  return args;
}

var g = unary(f);
var h = binary(f);

g(1, 2, 3, 4); // [1]
h(1, 2, 3, 4); // [1,2]
```

- `unary` receives a function `fn` and returns another function `one`: It is a HOF.
- All functions in JS are _variadic_ which means we can pass in as many arguments as we want.
- We can define a function that expects three arguments and pass four to it, or one, JS will not throw an error.
- Consider an enary function that might expect multiple arguments like `f`.
- If we pass it to `unary`, what we get back and assign to `g` is a new function `one`.
- Only one input makes it to the underlying function, because we name a single parameter `arg`.
- We took a function that was _enary_, and restricted its shape to _unary_.
- That's what the `unary` utility function does: it adapts the shape of a enary function to be unary.
- We must get comfortable with the idea that the shape of a function can be adapted to another shape.
- That is critical and a key takeaway from the higher order functions pattern.
- It is essential that we can adapt function shape, for when we need to create an adaptor to make two functions fit together.
- Virtually all the utilities we find in FP libraries like Lodash are higher order functions.
- They take a single function in, they do something, and make a new function that does something different.
- This pattern is repeated all over the place.
- It is critical to be comfortable with this pattern so we can make our own HOFs.
- As functional programmers we need to be able to see what kind of adaptor we need to create in order to adapt the shape of the functions to make them fit.
- This concept is core and central to all of our future functional programming.

### 3.2. Flap and Reverse Adapter

- If we have a binary function that has parameters of `x` and `y` but we need to flip the order to `y` then `x`, we can use a flip adapter.

```js
function flip(fn) {
  return function flipped(arg1, arg2, ...args) {
    return fn(arg2, arg1, ...args);
  };
}

function f(...args) {
  return args;
}

var g = flip(f);

g(1, 2, 3, 4); // [2,1,3,4]
```

- `flip` transposes the first two arguments.
- _Flip_ is the name canonically used for this function in most libraries.

The path to becoming a functional programmer is getting conformable with seeing all these mathematical pieces and using them just like we use `1 + 1 = 2`.

- A somewhat less common example we may encounter would be a reverse adapter.

```js
function reverseArgs(fn) {
  return function reversed(...args) {
    return fn(...args.reverse());
  };
}

function f(...args) {
  return args;
}

var g = reverseArgs(f);

g(1, 2, 3, 4); // [4,3,2,1]
```

- This is an adapter that Kyle created.

When we find ourselves messing around with the shape of functions and they don't fit, try and figure out:

1. Can we change the shape of the function at definition so that it fit better.
2. If not, make an adapter that changes the shape.

Everywhere that we do this we are looking for common patterns. The functional programmer is looking for the lego piece that looks like the pieces they already have.

- We don't want to invent new utilities all the time, because being able to figure something out at a glance is facilitated through familiarity and recognition.
- Wherever possible use the things that function programmers have been using for 60+ years.
- When a functional programmer sees something that is not familiar, they spend more time reasoning about the maths.
- Where it is possible we should make our FP code recognizable at a glance by using common utilities and patterns.
- That means we need to get familiar with at least one FP library, and most of the methods it provides.

### 3.3. Spread Adapter

- Another very common shape adaptation.
- When we have a function that takes individual arguments, but we want to call it with an array.

```js
function spreadArgs(fn) {
  return function spread(args) {
    return fn(...args);
  };
}

function f(x, y, z, w) {
  return x + y + z + w;
}

var g = spreadArgs(f);
g([1, 2, 3, 4]); // 10
```

- The JS method `apply` takes an array and spreads the values out as arguments.
- The reason it is called _apply_ is because that's what functional programmers call it.
- Almost all FP libraries call this operation `apply`.
- Here we are using the spread operator to accomplish this.
- For a function that takes an array as its argument, but we want to call it with individual arguments, we simply move the spread operator from line 3 to line 2.

```js
function unSpreadArgs(fn) {
  return function unSpread(...args) {
    return fn(args);
  };
}

function f(arr) {
  var [x, y, z, w] = arr;
  return x + y + z + w;
}

var g = unSpreadArgs(f);
g(1, 2, 3, 4); // 10
```

## 4. Point-Free

- Point-free is a way of defining a function without actually writing anything in the function.
- A way of making a function by making it with other functions.

### 4.1. Equational Reasoning

- The idea of a [fixed point function](https://en.wikipedia.org/wiki/Fixed_point) in mathematics is that if we have more than one input, we take one of the inputs and fix it at a certain value.
- E.g. for a function that takes in `x` and `y` and outputs a `z` the `x` might be fixed at `3`.
- That speaks to why the definition of _point-free_ is defining a function without needing to define its _points_ AKA its _inputs_.
- So we have a class of techniques in FP for defining functions with other functions.

```js
getPerson(function onPerson(person) {
  return renderPerson(person);
});
```

- This is a very common pattern.
- We pass in a callback that receives an input `person` and pass that input along to some other function.
- That `person` parameter is the _point_ or input for the `onPerson` function.
- What if we could define the equivalent of this function without having to list the point at all.
- `onPerson` and `renderPerson` by both taking a single input, have the same shape.
- If they have the same shape, they are interchangeable.
- This means we can just pass `renderPerson` as the callback.

```js
getPerson(renderPerson);
```

- This is called **equational reasoning**.
- All this means is that if two functions have the same shape, they are interchangeable.
- We are _reasoning_ about the _equality_ of the **shape** of two functions.
- The takeaway is that we are able to define a function without needing to list the point.

As the FP techniques get more advanced, particularly with point-free, the healthy response is the push ourselves just a bit until we are comfortable, before moving on to even more advanced techniques.

- Don't go overboard and create too much complexity with advanced point-free techniques.
- Fallback to what is practical, reasonable and readable to avoid writing code that we don't even ourselves understand.
- If our code is not more readable, we lose the benefits of FP.
- The line of understanding will keep moving forward as we journey further into the realm of FP.

From here on... there be dragons! 🐲 + 🤯 = 🚀

### 4.2. Point-Free Refactor

- We want to get to the idea of the shapes being equal to each other.

```js
function isOdd(v) {
  return v % 2 == 1;
}

function isEven(v) {
  return !isOdd(v);
}

isEven(4); // true
```

- By defining `isEven` in terms of `isOdd` instead of `v % 2 == 0`, we have created a more visible relationship between the two functions.
- We are saying `isEven` is the negation of `isOdd`.
- If we had used `v % 2 == 0` the relationship would exist, but it would be completely non-obvious.
- Here we are attempting to make the relationship more obvious.
- By thinking about the relationship, we consider whether the pointed definition of `isEven` could be defined in a point-free way.
- The benefit of point-free is that we are moving to a more declarative style.
- With points we route an input to an input which is a more imperative style.
- Remember, declarative is implicit and imperative is explicit.
- Most developers would argue it is better to write explicit code, but in some situations it is better to use declarative FP techniques to handle unnecessary details.
- To see `v` being passed from `isEven` to `isOdd` is an unnecessary detail.
- We accomplish the point-free style by creating a utility that adapts the shape of the function.
- We can use a HOF that already exists: `not`.
- Note: `not` is sometimes also referred to as `complement` in FP.

```js
function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 == 1;
}

var isEven = not(isOdd);

isEven(4); // true
```

- We return a new function `negated` that executes `isOdd` and negates the return value boolean.
- The line `var isEven = not(isOdd)` is easier to read, and the relationship is even clearer.
- That's where we get the readability gains in FP, specifically in pont-free style: We define one function in terms of another, which makes the relationship between them much more clear.

**We allow the _how_ of the imperative details to be implicitly hidden through a declarative style**.

- That is the big takeaway from all of FP.

### 4.3. [Point-Free Refactoring Exercise](exercises/point-free/ex.js)

- Recommend to re-watch the [solution video](https://frontendmasters.com/courses/functional-javascript-v3/point-free-solution/) for the walk-through on equational reasoning.

### 4.4. Advanced Point-Free

- There are certainly more advanced techniques.
- The following are just a couple of examples for a glimpse that will be returned to later.
- `mod` and `eq` are both common FP library utilities.

```js
function mod(y) {
  return function forX(x) {
    return x % y;
  };
}

function eq(y) {
  return function forX(x) {
    return x === y;
  };
}
```

- They take their inputs individually, in two separate function calls.
- We are providing the `y` input first and then the `x`, which might seem strange at first.
- Functional programmers care a lot about the shape of their functions.
- It matters not just what kinds of inputs there are, but also what order they are in.
- The order of `y` then `x` is much more natural in this example as we will see.
- We earlier defined `isEven` in terms of `isOdd`, but what if we want to defined `isOdd` in a point-free way.

```js
var mod2 = mod(2);
var eq1 = eq(1);
```

- `mod2` now takes any input and mods it with the number `2`.
- `eq1` now takes any input and compares it to the value `1`.
- `mod2` & `eq1` are more _specific_ than `mod` & `eq` because they only take one input; the first input has already been pre-specified.
- To define `isOdd` in terms of `mod2` and `eq1` is quite straightforward.

```js
function isOdd(x) {
  return eq1(mod2(x));
}
```

- We pass in `x` to `mod2` and whatever that returns we pass in to `eq1`.
- So if `x % 2 === 1` then `isOdd` will return `true`.
- We are not point-free yet, but we have made progress moving from operators to functions.
- We notice that the output of the `mod2` call is passed directly to the `eq1` call.
- The concept of one function call's output immediately becoming another function call's input, is called _composition_.
- We can use the idea that this is a composition pattern to define `isOdd` in a point-free manner.
- We use a compose utility which routes one function's output to another function's input.

```js
function compose(fn2, fn1) {
  return function composed(v) {
    return fn2(fn1(v));
  };
}

var isOdd = compose(eq1, mod2);
```

- We now have a point-free definition of `isOdd`: the composition of `eq1` and `mod2`.
- `fn1` is `mod2` which is called with whatever value we pass in to `isOdd`.
- `fn2` is `eq1` which is passed the output of `mod2`.
- `eq1` will return `true` or `false` as required.
- This analysis is made by equational reasoning: `eq1(mod2(x))` is the same shape as `fn2(fn1(v)`.
- They are interchangeable, which enables our point-free definition.
- But we can go a step further and replace the intermediary `mod2` and `eq1` functions and define them inline.

```js
var isOdd = compose(eq(1), mod(2));
```

- They are interchangeable because they are the same shape.
- **Equational reasoning is at the heart of being able to use point-free style.**
- We need to ask ourselves: _what kind of a shape change needs to occur to make functions interchangeable?_
- This style may look less readable at first, but with practise `compose(eq(1), mod(2))` will become more readable than `eq1(mod2(x))`.
- Familiarity through exposure will make the point-free functional style more readable than non-FP style.
- Over a period of time practising these techniques, patterns begin to jump out at us, and trigger us to use FP techniques.
- That is the key to becoming a functional programmer; recognising the patterns and knowing which techniques to apply.

## 5. Closure

- A solid understanding of closure is absolutely essential to being a functional programmer.
- A very specific definition that we can observe in our programs is:

**Closure is when a function "remembers" the variables around it even when that function is executed elsewhere.**

- The variables we refer to are from an outer scope that the function is accessing them from.
- Logic would say that passing a function somewhere else and running it in a different scope would remove access to those variables.
- But the magic of closure retains a link to them.

```js
function makeCounter() {
  var counter = 0;
  return function increment() {
    return ++counter;
  };
}

var c = makeCounter();

c(); // 1
c(); // 2
c(); // 3
```

- The function `increment` closes over the variable `counter` and is able to increment it even though the execution context of `makeCounter` no longer exists.
- `c` cannot be called a pure function because the same output is not being produced every time.
- Closure is not necessarily functionally pure, but can absolutely be used in functional purity.
- The key is if we are closing over a variable, it cannot be reassigned.
- We are not closed over a constant, we are closed over changing state, so we have an impure function.
- Some examples of functional purity with closure are as follows.

```js
function unary(fn) {
  return function one(arg) {
    return fn(arg);
  };
}
```

- The parameter `fn` is closed over by `one`.

```js
function addAnother(z) {
  return function addTwo(x, y) {
    return x + y + z;
  };
}
```

- The parameter `z` is closed over by `addTwo`.
- In both examples this is safe functionally because the closed over variables do not get modified.

### 5.1. [Closure Exercise](exercises/closure/ex.js)

- Recommend to re-watch the [solution video](https://frontendmasters.com/courses/functional-javascript-v3/closure-solution/).

### 5.2. Lazy vs Eager

- We need to understand the idea of deferring when things are occurring.

```js
function repeater(count) {
  return function allTheAs() {
    return "".padStart(count, "A");
  };
}

var A = repeater(10);

A(); // AAAAAAAAAA
A(); // AAAAAAAAAA
```

- We take in a parameter `count` and return a function `allTheAs` which is closed over `count`.
- `allTheAs` is assigned to `A` which remembers the value of `count`.
- The program actually constructs the string `AAAAAAAAAA` with `A()`: that's where the work `"".padStart(count, "A")` is done.
- It does this work every time we call `A()`.
- By returning the function `allTheAs` we are deferring the work until later.
- This is called _lazy_ or _deferred_.
- We may want to defer computationally expensive work if based on conditions the function was potentially going to be called very little.
- The downside of deferral is that we have to do the work every time we call the function.
- So we may not wish to defer if the function is likely to be called repeatedly.
- The opposite of _lazy_ is _eager_.

```js
function repeater(count) {
  var str = "".padStart(count, "A");
  return function allTheAs() {
    return str;
  };
}

var A = repeater(10);

A(); // AAAAAAAAAA
A(); // AAAAAAAAAA
```

- By moving the work outside of `allTheAs`, the work is now done with `var A = repeater(10);` rather than `A();`.
- We are now closing over the variable `str`.
- The benefit of eager is that the work is only done once: we basically cache it.
- The downside is that if the function is never called, we've done the work unnecessarily.

### 5.3. Memoization

- With lazy and eager there is a tradeoff.
- We want to do the work only once, and we don't want to do the work unless it's been asked for.
- We want to detect if the work has been done, and if so never repeat it.

```js
function repeater(count) {
  var str;
  return function allTheAs() {
    if (str == undefined) {
      str = "".padStart(count, "A");
    }
    return str;
  };
}

var A = repeater(10);

A(); // AAAAAAAAAA
A(); // AAAAAAAAAA
```

- We check to see if `str == undefined` which will only ever be `true` the first time.
- Subsequent function calls return the same result.
- The work happens with the first call `A()` but not the second.
- We cache the result and return it.
- However, to be functionally pure we cannot close over something that changes, which `str` does.
- But to be a pure function call it must produce the same output given the same input, which `A` does.
- So the function call `A()` satisfies that purity requirement, but it is not obviously pure.
- We are defeating one of the most important reasons for FP: for our code to be readable and understandable.
- This code style leads to a low degree of confidence in the function purity.
- We need a more declarative style with the same performance benefits.
- There is a utility for just this purpose: `memoize`.

```js
function repeater(count) {
  return memoize(function allTheAs() {
    return "".padStart(count, "A");
  });
}

var A = repeater(10);

A(); // AAAAAAAAAA
A(); // AAAAAAAAAA
```

- `memoize` takes a function that is not optimized and adapts it.
- It doesn't adapt the function to a different shape, but rather a different behaviour.
- `memoize` keeps an internal cache of outputs from `allTheAs`, and returns the cached result if an input has been received before.
- This style of code is more obviously pure. We are not closing over any variable that gets reassigned.
- The downside of memoization is the cost of space complexity for the cache.
- The benefit from memoization is with a function we expect to be called multiple times with the same input.

Fundamentally `memoize` is written in the same way as the previous example where we had a closed over variable `str` that was reassigned. But `memoize` is from a trusted library that is mathematically proven. The difference is that we are not using our own version ad-hoc in our code which leads to a low degree of confidence in our functional purity for the readers of our code.

### 5.4. Referential Transparency

- We previously defined pure function calls as always producing the same output given the same input.
- The path that led us to this point was:

1. A pure function must have inputs and outputs.
2. A pure function must have relationships between the inputs and outputs.
3. A pure function must have direct inputs and direct outputs.
4. A pure function can have indirect inputs; we can close over variables as long as they are not changing.
5. The function call is what is important, and should always produce the same output given the same input.

- But the full canonical definition of a pure function call is if we can replace the function call with its return value.
- If We can do that, and not affect any of the program elsewhere, then we have a pure function call.
- There is a special term for this: Referential Transparency, as in _a function call is pure if it has referential transparency_.
- The real benefit of referential transparency is to the reader of the code.
- If the reader sees the same function call used with the same input, they can recall the output they computed in their brain before.
- This frees up cognitive capacity for them to focus on other more important parts of the app.
- We must make it easy for the reader of the code to look at a line, understand it, and not have to redo that work again.
- That's why functional purity matters so much: It makes reasoning about programs easier.
- This is the cornerstone of all of functional programming.

### 5.5. Generalized to Specialized

- The idea if going from generalized functions to more specialized functions is a key concept in FP.

```js
function ajax(url, data, cb) {
  // some code goes here
}

ajax(CUSTOMER_API, { id: 42 }, renderCustomer);
```

- The call to `ajax` has a lot of detail that the reader doesn't need to see at that point.
- We want every line of code to only have the necessary amount of detail.
- One thing we can do is to write an intermediary function.

```js
function getCustomer(data, cb) {
  return ajax(CUSTOMER_API, data, cb);
}

getCustomer({ id: 42 }, renderCustomer);
```

- `getCustomer` already knows that all of its API calls will be to `CUSTOMER_API`.
- It now has a semantic function name, and describes what it does.
- Many devs say we should only make something into a function when it is used multiple times.
- But another important reason is to communicate its purpose to our readers.
- We can take this further and specialize even more, for a particular type of user.

```js
function getCurrentUser(cb) {
  return getCustomer({ id: 42 }, cb);
}

getCurrentUser(renderCustomer);
```

- `getCurrentUser` is even more semantically descriptive.
- We haven't changed any functionality, we have just changes the stylization of the code to be more semantic.
- We are communicating that `getCurrentUser` is the specialization of `getCustomer`, rather than `ajax` which is a weaker relationship.
- The downside is that we are cluttering up the code with these manual pointed definitions.
- To arrive at the point-free solution, remember function parameter order matters.
- To specialize a function we must always go from left-to-right: **general -> specific**.

### 5.6. Partial Application & Currying

- There are two techniques we can use to specialize our `ajax` application.

#### 5.6.1. Partial application.

```js
function ajax(url, data, cb) {
  // some code goes here
}

var getCustomer = partial(ajax, CUSTOMER_API);
// var getCurrentUser = partial(ajax, CUSTOMER_API, { id: 42 });
var getCurrentUser = partial(getCustomer, { id: 42 });

getCustomer({ id: 42 }, renderCustomer);

getCurrentUser(renderCustomer);
```

- We make a partial application of the `ajax` function by prespecifying the `CUSTOMER_API` url as its first input.
- `partial` is a utility available from all the FP libraries.
- It takes a function as its first input, and then a set of arguments to pass into that function at some point.
- `getCurrentUser` is a _partial application_ of `getCustomer`.
- `partial` allows us to preset one or more inputs, and produces a function that expects the rest of the inputs.
- Partially applying some of the inputs now, and receiving the other inputs later.

#### 5.6.2. Currying

- The other technique is much more common in FP.
- Currying is like the cousin of partial application.
- They both accomplish the same end goal in specializing a function, but do so in a significantly different way.

```js
function ajax(url) {
  return function getData(data) {
    return function getCB(cb) {
      // some code goes here
    };
  };
}

ajax(CUSTOMER_API)({ id: 42 })(renderCustomer);
```

- We have three levels of functions.
- We could call this style _manual currying_.
- It allows us to call and save the intermediary functions, which facilitates the specialization.

```js
var getCustomer = ajax(CUSTOMER_API);
var getCurrentUser = getCustomer({ id: 42 });
getCurrentUser(renderCustomer);
```

- We don't have to use a utility.
- To get the next specialization we just need to pass in the next input.
- The term _currying_ comes from Haskell. One of the coinventors was named Haskell Curry.
- We call it currying in JavaScript because it is the way that all functions in Haskell accept inputs.
- There is a utility that can create curried functions for us rather than writing them manually.

```js
// var ajax = url => data => cb => {..}
// var ajax = url => (data => (cb => {..}))
var ajax = curry(3, function ajax(url, data, cb) {
  // some code goes here
});

var getCustomer = ajax(CUSTOMER_API);
var getCurrentUser = getCustomer({ id: 42 });
getCurrentUser(renderCustomer);
```

- Many functional programmers use arrow syntax because it's almost identical to the mathematical notation and Haskell.
- If we use arrow functions then for readability purposes we should write them with `()` for function boundaries.
- We call `curry` with the number of inputs we expect the function to receive, and our underlying function.
- `curry` adapts the function to accept one argument at a time.
- It creates a wrapper that repeatedly returns a new function that expects another input, until we provide the specified number of inputs, and then calls the underlying function with the collected inputs.

#### 5.6.3. Strict vs Loose Currying

- There is a notion of strict vs loose currying.
- For a function that receives five inputs, of which three are known in advance, we can avoid three separate function calls.
- At each level of the function call we can pass in one or more arguments.
- The function that is returned will expect the subsequent argument.

```js
// strict currying
ajax(CUSTOMER_API)({ id: 42 })(renderCustomer);

// loose currying
ajax(CUSTOMER_API, { id: 42 })(renderCustomer);
```

- Every FP library for JS does loose currying rather than strict.
- But if we want to adhere to the true notion of currying as it was conceived in Haskell, we should use strict currying.

### 5.7. Partial Application & Currying Comparison

- The same outcome can be achieved with both techniques.
- To get each level of specialization, `partial` needs to be called multiple times, whereas `curry` is only called once.
- This is one of the reasons that makes currying more popular.
- Virtually all FP library methods are automatically curried.
- Functional programmers want all functions to be curried.
- One of the reasons they like curried functions so much is because they like unary functions.
- A curried function is exactly that: a chain of unary functions - single input => single output.
- It might be the case that partial application produces a preferable shape in some instances.
- e.g. if we had a function which expected five inputs, and we wanted to produce another function that expects three:
  - a. we'd have to call `curry` twice.
  - b. The returned curried function would expect the three inputs to be passed one at a time.

To summarize:

1. **Both are specialization techniques.**
2. **Partial Application presets some arguments now, and receives the rest on the next call.**
3. **Currying doesn't preset any arguments, but receives each argument one at a time.**

### 5.8. Changing Function Shape with Curry

- If we wanted to use `map` to add `1` to each value in an array:

```js
function add(x, y) {
  return x + y;
}

[0, 2, 4, 6, 8].map(function addOne(v) {
  return add(1, v);
});
// [1,3,5,7,9]
```

- We can't pass the binary function `add` directly to `map` because `map` expects a unary function.
- `add` is a different shape.
- We use `addOne` to change the shape of `add` by prespecifying one of its inputs - we specialize it.
- So it might be better to have a curried version of `add` that creates a more specialized function that is the correct shape.

```js
function add(x, y) {
  return x + y;
}

[0, 2, 4, 6, 8].map(function addOne(v) {
  return add(1, v);
});
// [1,3,5,7,9]

add = curry(add);

[0, 2, 4, 6, 8].map(add(1));
// [1,3,5,7,9]
```

- This is an extremely common technique in functional programming.
- We will see this 100s of times every day in the world of FP.
- Calling these little functions that are curried, providing one input, getting back a unary function, passing it to a mapper or composition... this is all over the place.
- This is why currying ends up being by far the preferred form.
- Partial application would be more awkward.
- It is a much nicer pattern to have an already curried function.
- Anywhere we need a specialized function we can just call it with one input. 😍

## 6. Composition

- One function's output becoming the input to another function.

### 6.1. Composition Illustration

- Consider this example with three unary functions.

```js
function minus2(x) {
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

// add shipping rate
var tmp = increment(4);
tmp = triple(tmp);
totalCost = basePrice + minus2(tmp);
```

- This scenario will be used throughout this section.
- Our goal is to be able to recognize composition opportunities.
- We need to become familiar with the pattern of one function call producing an output that is later routed to another function call.
- Often the output is stored in a variable which is later passed, sometimes one call is inside of another.

We will illustrate composition by looking at the code form, and a metaphor. But first we need to understand what abstraction is.

- The term _abstraction_ is thrown around in programming, but seems to have multiple definitions.
- The original idea behind abstraction is around two or more things in a piece of code that are intertwined.
- Take our example. We are handling two distinct interwoven concepts:

1. We are calculating a shipping rate.
2. We are adding that shipping rate to the base total for the order.

- The initial idea of abstraction was to tease apart two things that are intertwined together.
- We separate them by inserting a semantic boundary in between.
- Abstraction is not about _hiding_ as is often thought, it is about _separating_.
- By way of separation we make analysis easier and improve our understanding.

The metaphor we will use to illustrate composition is a chocolate factory.

- The machines operate from right to left with conveyor belts.
- 🍫 ⬅️ ⬅️ ⬅️ packaging ⬅️ ⬅️ ⬅️ small pieces ⬅️ ⬅️ ⬅️ cooled blocks ⬅️ ⬅️ ⬅️ melted chocolate
- We are the engineers responsible for managing the machines.
- One day the CEO comes to us with a problem: our competitors are producing more chocolate than we are, and we need to make more.
- The machines cannot be sped up, and there is no space for more machines.
- What can we do?

Back to the code.

- We could get rid of the `tmp` variables that take up too much space, and nest the function calls.

```js
/*
var tmp = increment(4);
tmp = triple(tmp);
totalCost = basePrice + minus2(tmp);
*/

totalCost = basePrice + minus2(triple(increment(4)));
```

- This is function composition.

Back to the chocolate factory.

- We have been thinking about the problem, and those conveyor belts are taking up too much space.
- Why not just stack the machines right on top of each other. Genius!
- We install the machines in this way, and everything goes well for six months.
- Then the CEO comes to us again, saying that the workers are complaining about the setup.
- The stack of machines has two many switches and wires everywhere, it's a mess.
- Is there any way to invent one machine that can do everything?
- 🍫 ⬅️ ⬅️ ⬅️ melted chocolate
- We think about this, and decide that to maintain the machine we would need to have access to each of the operations.

Back to the code.

- We have the same problem: calculating the shipping and adding to the total are stacked on top of each other.
- It is hard to reason about each one independently.
- So we decide to write a function called `shippingRate` - our new machine.

```js
function shippingRate(x) {
  return minus2(triple(increment(x)));
}

totalCost = basePrice + shippingRate(4);
```

- `minus2(triple(increment(x)));` is where we define how to do the calculation.
- `basePrice + shippingRate(4);` is where we define what to do with it.
- We have separated the two concerns by inserting a semantic boundary between how to calculate the shipping rate, and what to do with it.
- This is called an _abstraction_, and the function name `shippingRate` is our semantic boundary.

### 6.2. Declarative Data Flow

Back to the chocolate factory.

- We've been thinking more, and have another idea.
- We don't need to change the machines at all, we can just wrap them all in shiny new panelling.
- We'll leave an access panel so we can reach the individual machines.
- But the new casing will have a single switch, one input for the melted chocolate, and one output for the packaged bars.
- The factory workers only care about the input and output, so they love it.
- The maintenance engineers are happy with the access panel. All is well.
- But then the CEO returns with another problem!
- Our competitors are producing new types of chocolate bars all the time, and we only produce one type.
- We need to make more machines to compete.
- This might sound crazy, but can you invent a machine that can make more machines?

Back to the code.

- What if we need additional shipping rates for express, next day, international etc.
- To create separate functions for each would be messy.
- There is a pattern in that each shipping rate function takes three other functions as inputs, and calls them in succession.
- We could make a utility to define as many shipping rates as we want.

```js
function composeThree(fn1, fn2, fn3) {
  return function composed(v) {
    fn3(fn2(fn1(v)));
  };
}

function minus2(x) {
  return x - 2;
}
function triple(x) {
  return x * 3;
}
function increment(x) {
  return x + 1;
}

var shippingRate = composeThree(minus2, triple, increment);

// calculate and add shipping rate
totalCost = basePrice + shippingRate(4);
```

- The definition of `shippingRate` is not only point-free, but more declarative.
- Functional programmers know that a composition will execute a series of functions from right-to-left, passing the output of each one as the input of the next, and return the eventual result.
- We observe here that composition is _declarative data flow_.
- It is the flow of data through a series of operations defined declaratively rather than imperatively.
- Composition is so critical to functional programming, because the entire point of our programs is to have data flow.
- Our programs are a series of state transition managed data flows with inputs and outputs.
- The functional programmer knows that because of this, our data flows must be declared clearly and obviously.
- It is difficult to track data flow when functions are implicitly linked calling one another haphazardly.
- With declarative definitions such as `composeThree(minus2, triple, increment)` it is as easy as right-to-left.
- We have a general utility called `compose` that takes any number of functions, provided by all major FP libraries.

### 6.3. Piping vs Composition
