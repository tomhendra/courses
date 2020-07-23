<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript: From Fundamentals to Functional JS, v2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Strengthen your understanding of tricky JS concepts:](#11-strengthen-your-understanding-of-tricky-js-concepts)
  - [1.2. What is Functional Programming?](#12-what-is-functional-programming)
- [2. Objects](#2-objects)
  - [2.1. Property Access](#21-property-access)
  - [2.2. Arrays](#22-arrays)
  - [2.3. Bracket Notation](#23-bracket-notation)
  - [2.4. Non-valid Characters](#24-non-valid-characters)

## 1. Introduction

Learn higher-order functions, closures, scope, master key functional methods like map, reduce and filter and promises and ES6+ asynchronous JavaScript. [Course Link](hhttps://frontendmasters.com/courses/js-fundamentals-functional-v2/).

### 1.1. Strengthen your understanding of tricky JS concepts:

- Understanding how to use functional utility methods.
- Understanding how to implement those methods.
- Applying JS fundamentals throughout the process.
- Adding some related ES6 features.

### 1.2. What is Functional Programming?

- A programming style that's trending.
- It's expected that you can read and write code in this style.
- Functional utility methods come free with JS.
- It's about breaking your code up into verbs, as opposed to OOP being about nouns.
- It's easier to think about objects as humans, but FP is about actions (verbs).
- Involves lots of pure functions that perform actions on things.
- One of the core tenets is creating pure functions that don't have side effects.
- A pure function has an input and output and can't do anything or affect any other data outside the scope of that function.
- Makes code a lot easier to test & trust.
- However with web side effects are unavoidable - DOM manipulation creates side effects so 100% purely functional is not possible.

## 2. Objects

- Starting with core data structures: object and arrays.

### 2.1. Property Access

- To be a good programmer you need to understand the language enough so that unexpected things happen less frequently.
- Anything that ever uses a single `.` in JavaScript is an object.

```js
var person = {};
// Assignment with dot
person.name = 'Mrs. White';

var who = person.name;

who; // Mrs. White

person.name = 'Mr. White';

who; // Mrs. White - no change.

/* The reference in memory to the object is separate from the variable who.
 * "Mrs. White"  will get garbage collected on reassignment of the object property.
 * This is storing a value by reference vs storing a value by value.
 */
```

- Primitive values get passed by value, whereas non-primitive values get passed by reference.
- We have pointers (or reference) in memory for objects, which means:
  - if you store or pass a primitive value it gets its own place in memory every time (makes a copy).
  - If you store or pass a non-primitive (object or function) you are passing a reference to a place in memory (shared instance).
  - If you modify the non-primitive, it can affect other code that points to the same place in memory.
- It's recommended that you don't mutate data structures, rather return new copies so that you don't have the side effect of code being updated in multiple places.

### 2.2. Arrays

- Arrays are objects and because of that you can use `.` assignment.
- The only difference between objects and arrays is that arrays have a bunch of methods.

```js
var person = [];
// Assignment with dot
person.name = 'Mrs. White';

var who = person.name;

who; // Mrs. White
```

### 2.3. Bracket Notation

```js
var person = [];

person.name = 'Mrs. White';

var who = person.name;

person[0] = 'I was not in the Billiards room';

person; // [0: "I was not in the Billiards room", name: "Mrs. White"]
```

```js
var person = [];
var plea = 'WouldShe';

person[plea] = 'I would never!'; // Uncaught ReferenceError: plea is not defined
person['plea'] = 'I would never, ever!'; // Adds property called plea.
person[0] = 'Number works!'; // Adds property 0.

person; // [0: "Number works!", WouldShe: "I would never!", plea: "I would never, ever!"]
person.length; // 1
```

- Rules about objects and arrays:
  - Arrays are objects with methods attached.
  - Properties can be assigned with dot or bracket (with quotes) notation.
  - Using dot notation coerces to a string whereas bracket notation doesn't.
  - You cannot use dot notation to assign numeric properties to an array - it is invalid syntax and will return an `error`.
  - The `array.length` method only works with numeric properties (although they are coerced to strings).

### 2.4. Non-valid Characters
