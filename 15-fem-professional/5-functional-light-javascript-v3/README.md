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
- **Function: the semantic relationship between input and computed output**.
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

- [Impurity Exercise: Wrappers & Adapters](exercises/impurity/ex.js)
