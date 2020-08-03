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
  - [2.5. Dot Notation vs Bracket Notation](#25-dot-notation-vs-bracket-notation)
  - [2.6. Objects Recap Quiz](#26-objects-recap-quiz)
  - [2.7. ES6 Destructuring](#27-es6-destructuring)
- [3. List Transformations](#3-list-transformations)
- [4. `.forEach()` Function](#4-foreach-function)
  - [4.1. `_.each()` / `.forEach()` Defined](#41-_each--foreach-defined)
  - [4.2. Exercise: Implement `_.each`](#42-exercise-implement-_each)
- [5. `.map()` Function](#5-map-function)
  - [5.1. `_.map()` vs `_.each()`](#51-_map-vs-_each)
  - [5.2. Exercise: Implement `_.map`](#52-exercise-implement-_map)
- [6. `.filter()` Function](#6-filter-function)
  - [6.1. Exercise: Implement `_.filter`](#61-exercise-implement-_filter)
- [7. Functions In-Depth](#7-functions-in-depth)
  - [7.1. The Anatomy of a Function](#71-the-anatomy-of-a-function)
  - [7.2. ES6 Arrow Functions](#72-es6-arrow-functions)
  - [7.3. Exercise: Projecting](#73-exercise-projecting)
  - [7.4. Spread Operator](#74-spread-operator)
  - [7.5. Arguments Keyword](#75-arguments-keyword)
  - [7.6. Default Parameters](#76-default-parameters)
  - [7.7. Array-like Object](#77-array-like-object)
  - [7.8. Exercise: Implement `_.from()`](#78-exercise-implement-_from)
- [8. Scope](#8-scope)

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

person[0] = 'I was not in the Billiards room'; // Adds property at index 0.
person[plea] = 'I would never!'; // without var plea = 'WouldShe' -- Uncaught ReferenceError: plea is not defined
person['plea'] = 'I would never, ever!'; // Adds property called plea.

person; // [0: "I was not in the Billiards room", WouldShe: "I would never!", plea: "I would never, ever!"]
person.length; // 1
```

- **Rules regarding objects and arrays:**
  - Arrays are objects with methods attached.
  - Properties can be assigned with dot or bracket notation (quotes are required for named properties using brackets).
  - Using dot notation coerces to a string whereas bracket notation doesn't.
  - You cannot use dot notation to assign numeric properties (indices) to an array - it is invalid syntax and will return an `error`.
  - The `array.length` **property** only works with numeric indices (although they are coerced to strings).

### 2.4. Non-valid Characters

- Try not to use invalid characters as property names.

```js
var box = {};

box['material'] = 'cardboard';
box[0] = 'Meow'; // JS sees numbers as something to be evaluated rather than coerced directly into a string. Could even do box[2 + 2] = 'something'.
box['^&*'] = 'testing 123'; // must use quotes if using non-valid characters.

var test = box['^&*'];

box; // {0: "Meow", material: "cardboard", ^&*: "testing 123"}
```

### 2.5. Dot Notation vs Bracket Notation

| Dots    | Brackets         |
| ------- | ---------------- |
| strings | strings          |
|         | numbers          |
|         | variables        |
|         | weird characters |
|         | expressions      |

- Dot notation saves characters. We like to type less!

### 2.6. Objects Recap Quiz

- What is an object?
- What is the difference between dot and bracket notation?
- How do you add a property with a key that contains special characters?
- How do you add a property whose key and value are stored in different variables?
- How do we loop through objects to access the values?
- When can you only use dot notation and not bracket?
- When can you only use bracket notation and not dot?
- How do you add a property with a key that is stored in a variable?
- How do you access an object which is inside another object?
- How do you create an object that is nested inside another object?

### 2.7. ES6 Destructuring

- A simplified way of defining variables and taking them outside of an object or array.

```js
var obj = { first: 'Tom', last: 'Hendra' };
var first = obj.first;
var last = obj.last;
// Destructured variables
var { first, last } = obj;
```

- Two things we need to think about: The target & the source.

```js
// Array variable declarations: target = source;
const [first, last] = [true, false];
let [first, last] = [true, false];
var [first, last] = [true, false];

// Array variable assignment: target = source;
[first, last] = [true, false];
```

- With objects the target properties and variable declarations must have the same name.

```js
// Object variable declarations: target = source;
const {first, bump} = {first: 0, second: 1};
let {first, second} = {first: 0, second: 1};
var {first, second} = {first: 0, second: 1};

// Object variable assignment: target = source;
{first, second} = {first: 0, second: 1};
```

## 3. List Transformations

- One of the core things done in functional utility methods.
- Takes a list of data in different arrangements and extracts what is required.
- Much of the time in frontend dev you don't have control over API data, so transforming lists into something more usable is a key skill.

```js
const game = {};

game['suspects'] = [];

game.suspects.push({
  name: 'Rusty',
  color: 'orange',
});

game.suspects[1] = {
  name: 'Miss Scarlet',
  color: 'red',
};

game['suspects']; // [{name: 'Rusty', color: 'orange'}, {name: "Miss Scarlet", color: "red"}]

// Exercise 1 & 2
game.suspects.forEach((suspect) => {
  for (let key in suspect) {
    if (suspect.name === 'Rusty') {
      suspect.guilty = true;
    }
    console.log(`${key}: `, suspect[key]);
  }
});

// Exercise 3
const [{ color: firstColor }, { color: secondColor }] = game.suspects;
```

## 4. `.forEach()` Function

- Abstracting from loop into a function.
- Prevents errors.
- More readable.

```js
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log('my name is ', name);
    },
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

// Underscore.js
_.each(suspects, function (name) {
  suspectsList.push(CreateSuspectObjects(name));
});

// forEach native array method
suspects.forEach((suspect) => {
  suspectsList.push(CreateSuspectObjects(suspect));
});
```

### 4.1. `_.each()` / `.forEach()` Defined

- Iterates over a list of elements, passing the values to a function.
- Each invocation of iterator, the function, is called with three arguments: (element, index, list).
- If list is a JavaScript object, iterator's arguments will be (value, key, list).

```js
// Underscore.js
_.each(
    ['observatory','ballroom', 'library'],
    function(value, index, list){ ... }
);

// forEach native array method
['observatory','ballroom','library']
.forEach(function(value, index, list){ ... });
```

### 4.2. Exercise: Implement `_.each`

```js
const _ = {};

_.each = function (list, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else if (typeof list === 'object') {
    for (var key in list) {
      callback(list[key], key, list);
    }
  } else {
    return console.error(
      'Invalid argument: List must be an array or an object.'
    );
  }
};

const arr = ['Tom', 'Maria', 'Pablo'];
const obj = { name1: 'Tom', name2: 'Maria', name3: 'Pablo' };

const callback = function (element, i, list) {
  if (list[i] + 1) {
    console.log(element, 'is younger than', list[i + 1]);
  } else {
    console.log(element, 'is the oldest');
  }
};

// Test cases
_.each(arr, callback);
_.each(obj, callback);
_.each('🐛', callback);
_.each(arr, '🐛');
```

## 5. `.map()` Function

- Key difference between `_.each()` and `_.map()` is that `_.each()` doesn't return anything.
- `_.map()` returns a new array every time.
- We use `_.map()` to transform lists and create a new array.

```js
_.map([1, 2, 3], function (v, i, list) {
  console.log(v);
});
```

- Produces a new array of values by mapping each value in list through a transformation function (iterator).
- Each invocation of iterator is called with three arguments: (element, index, list).
- If list is a JavaScript object, iterator's arguments will be (value, key, list)

```js
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);
brokenWeapons; // ["broken candlestick", "broken lead pipe", "broken revolver"]
```

### 5.1. `_.map()` vs `_.each()`

```js
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      log(`my name is ${this.name}`);
    },
  };
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = _.map(suspects, function (name) {
  return CreateSuspectObjects(name);
});

_.each(suspects, function (suspect) {
  suspect.speak();
});
```

### 5.2. Exercise: Implement `_.map`

```js
const _ = {};

_.map = function (list, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }

  const storage = [];

  // if (Array.isArray(list)) {
  //   for (var i = 0; i < list.length; i++) {
  //     storage.push(callback(list[i], i, list));
  //   }
  // } else if (typeof list === 'object') {
  //   for (var key in list) {
  //     storage.push(callback(list[key], i, list));
  //   }
  if (Array.isArray(list) || typeof list === 'object') {
    _.each(list, function (v, i, list) {
      storage.push(callback(v, i, list));
    });
  } else {
    return console.error(
      'Invalid argument: List must be an array or an object.'
    );
  }

  return storage;
};

const arr = [1, 2, 3];
const obj = { num1: 1, num2: 2, num3: 3 };

const callback = function (element, i, list) {
  return element + 1;
};

// Test cases
const mapTest1 = _.map(arr, callback);
const mapTest2 = _.map(obj, callback);
const mapTest3 = _.map('🐛', callback);
const mapTest4 = _.map(arr, '🐛');
```

## 6. `.filter()` Function

- Takes an array and a callback.
- Returns a new array that will only contain the values that return true from the callback.

### 6.1. Exercise: Implement `_.filter`

```js
const _ = {};

_.filter = function (arr, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }

  const storage = [];

  if (Array.isArray(arr)) {
    // for (let i = 0; i < arr.length; i++) {
    //   if (callback(arr[i], i, arr) === true) {
    //     storage.push(arr[i]);
    //   }
    // }
    _.each(arr, function (item, i, list) {
      if (callback(item, i, list) === true) {
        storage.push(item);
      }
    });
  } else {
    return console.error('Invalid argument: Data must be an array.');
  }

  return storage;
};

const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Mr Brown',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

const callback = function (suspectObject) {
  return suspectObject.present;
};

// Test cases
const filterTest1 = _.filter(videoData, callback);
const filterTest2 = _.filter('🐛', callback);
const filterTest3 = _.filter(videoData, '🐛');
```

## 7. Functions In-Depth

### 7.1. The Anatomy of a Function

- The terms parameters and arguments are used interchangeably but they are actually different.
- Parameters are variables for the function.
- Arguments are actually the values passed to the function, which are then stored in the parameters.
- Side effects are things that are happening other than returning a value that affect something outside of the function. e.g. `console.log()` or changing the value of an object in a different scope.
- A function definition / declaration is the keyword `function` with `()` and `{}`.
- A function declaration is when we assign a function to a variable: `var foo = function() {...}`
- A function expression is when we name the function: `function foo() {...}`
- The function body in between the `{}` doesn't get executed until the function is invoked.

### 7.2. ES6 Arrow Functions

- Syntax differences:
  - `function` keyword is replaced by the `=>`.
  - No need to wrap parameters in `()` if there is only one.
  - If only one line can omit the `{}`.
- Arrow functions do not have their own value for `this`.
- Arrow functions bind the `this` context to the parent context.
- Replaces need for `.bind()`.
- The `arguments` keyword doesn't work with arrow functions.

```js
var nameImprover = (name, adj) => {
  return `Col ${name} Mc ${adj} pants`;
};

$('body').hide();

myArr.forEach((val) => console.log(val));

$('button').on('click', () => {
  console.log("Don't press my buttons!");
});
```

### 7.3. Exercise: Projecting

- "Projecting" is taking a data structure and turning it into another data structure.
- Exercise combines previous exercises.

```js
const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Mrs. White',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Reverend Green',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Rusty',
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { 'dining room': false },
      { 'billiard room': false },
      { library: false },
    ],
  },
];

const _ = {};

_.each = function (list, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else if (typeof list === 'object') {
    for (var key in list) {
      callback(list[key], key, list);
    }
  } else {
    return console.error(
      'Invalid argument: List must be an array or an object.'
    );
  }
};

_.map = function (list, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }

  const storage = [];

  if (Array.isArray(list) || typeof list === 'object') {
    _.each(list, function (v, i, list) {
      storage.push(callback(v, i, list));
    });
  } else {
    return console.error(
      'Invalid argument: List must be an array or an object.'
    );
  }

  return storage;
};

_.filter = function (arr, callback) {
  if (typeof callback !== 'function') {
    return console.error('Invalid argument: Callback must be a function.');
  }

  const storage = [];

  if (Array.isArray(arr)) {
    _.each(arr, function (item, i, list) {
      if (callback(item, i, list) === true) {
        storage.push(item);
      }
    });
  } else {
    return console.error('Invalid argument: Data must be an array.');
  }

  return storage;
};

const suspects = _.filter(videoData, (suspectObject) => {
  return suspectObject.present;
});

const suspectNames = _.map(suspects, (suspect) => {
  return suspect.name;
});
```

### 7.4. Spread Operator

- Can be used to collect extra arguments when there are more arguments than parameters.

```js
const createTuple = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, d],
  ];
};

createTuple('It', 'be', 'could', 'anyone', 'no one');
// [['It', 'Could'], ['be', ['anyone', 'no one']]]
```

### 7.5. Arguments Keyword

- Before the spread operator we had to rely on the `arguments` keyword.
- References all the arguments as a pseudo array.
- A pseudo array is an object that looks like an array, but is actually an object.
- The arguments keyword is most useful when we don't know how many arguments there will be.

```js
const createTuple = (a, b, c, d) => {
  console.log(arguments); // arguments is not defined because of arrow function
  return [
    [a, c],
    [b, d],
  ];
};

createTuple('It', 'be', 'could', 'anyone', 'no one');

const createTuple = function (a, b, c, ...d) {
  console.log(arguments); // ['It', 'be', 'could', 'anyone', 'no one']
  return [
    [a, c],
    [b, d],
  ];
};

createTuple('It', 'be', 'could', 'anyone', 'no one');
```

### 7.6. Default Parameters

- Use `=` to assign a default argument for the parameters of a function.
- Note, the `arguments` keyword will not pick up the default!

```js
// ES5
const add = function (a, b) {
  b = b || 2;
  console.log(arguments); // logs [3]
  return a + b;
};
add(3); // 5

// ES6
const add = function (a, b = 2) {
  console.log(arguments); // logs [3]
  return a + b;
};
add(3); // 5
```

### 7.7. Array-like Object

```js
// ES5
/*
 * - References the slice native array method.
 * - Passes in the `arguments` pseudo array as the context.
 * - Turns array-like object into an array.
 */
const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');

//ES6
const constructArr = function () {
  const arr = Array.from(arguments);
  arr.push('the billiards room?');
  return arr.join(' ');
};
constructArr('was', 'it', 'in');
```

### 7.8. Exercise: Implement `_.from()`

```js
const from = (arr) => {
  return Array.prototype.slice.call(arr);
};
```

## 8. Scope

- Scope is the area where a variable has access to some value.
- Global variables exist in the global scope and can be declared without the `var` keyword or directly attached to the `window` object through `window.VARIABLE`.
- Local variables exist inside of functions or blocks.
- Most of JS is about function scope.
- With ES6 `let` creates block scope, anywhere `{}` is used.
