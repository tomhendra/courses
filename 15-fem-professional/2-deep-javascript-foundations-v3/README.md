<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Deep JavaScript Foundations v3</h1>
</div>

**Started: 20/08/20**

- [1. Introduction](#1-introduction)
  - [1.1. Motivations](#11-motivations)
  - [1.2. Course Overview](#12-course-overview)
- [2. Types](#2-types)
  - [2.1. Primitive Types](#21-primitive-types)
  - [2.2. The typeof Operator](#22-the-typeof-operator)
  - [2.3. BigInt](#23-bigint)
  - [2.4. Kinds of Emptiness](#24-kinds-of-emptiness)
  - [2.5. NaN and isNaN](#25-nan-and-isnan)
  - [2.6. Negative Zero](#26-negative-zero)
  - [2.7. Type Check Exercise.](#27-type-check-exercise)
  - [2.8. Fundamental Objects](#28-fundamental-objects)

## 1. Introduction

Dive into the core pillars of the JavaScript language with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll learn JavaScript's types, how to convert between them, and compare them with == and ===. You'll also learn lexical scope and closure. As well as the objects oriented system (this, prototypes and classes).

- [Slides](https://static.frontendmasters.com/resources/2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf)

### 1.1. Motivations

**Why dive into JavaScript so much more deeply?**

- We as developers tend to assume mental models about code, and when bugs happen we blame the language.
- JS clearly must have been designed poorly because this happened.
- It is not OK to blame JS for something happening that we are surprised by.
- Many people think that because of JavaScript's low barrier to entry that if something isn't immediately intuitive then it was poorly designed.
- We have a responsibility to learn how our tool works.
- Have you even read the [JavaScript specification](https://www.ecma-international.org/ecma-262/11.0/)?
- If you don't understand something, the JS spec is the source of authority.
- If something is weird or mysterious or blackbox or buggy there are two questions you should ask:

1. What does the specification say should happen?
2. Does the behaviour that I am seeing match the spec?

- If they don't match, you have a bug.
- If they do match, you aren't thinking about what's happening correctly.

- Most of the spec is written in this sort of numbered algorithmic format.

**12.4.4.1 Runtime Semantics: Evaluation**
_UpdateExpression : LeftHandSideExpression++_

1. Let _lhs_ be the result of evaluating _LeftHandSideExpression_.
2. Let _oldValue_ be ? ToNumeric(? GetValue(_lhs_)).
3. Let _newValue_ be ! Type(_oldvalue_)::add(_oldValue_, Type(_oldValue_)::unit).
4. Perform ? PutValue(_lhs_, _newValue_).
5. Return _oldValue_.

- Even though some parts of reading the spec can be challenging, there is a very straightforward algorithm for determining what to do.
- If we to know what something is doing, predict it and avoid problems, the only way to do that is to understand what it's going to do: how its algorithm works.
- One of the biggest blocks to a developer's effectiveness is that we code without really understanding what's happening under the hood.

- You can always check MDN but MDN is not always right!
- You need to be comfortable enough go to the spec for as the real source of authority.

**Whenever there's a divergence between what your brain thinks is happening, and what the computer does, that's where bugs enter the code.** _--getify's law #17_

### 1.2. Course Overview

- JavaScript can be divided into 3 pillars.
- No matter what framework you are using, these three pillars are fundamental.

**1. Types**

- Primitive Types
- Abstract Operations
- Coercion
- Equality
- TypeScript, Flow, etc.

**2. Scope**

- Nested Scope
- Hoisting
- Closure
- Modules

**3. Objects (Oriented)**

- `this`
- `class { }`
- Prototypes
- OO vs. OLOO

## 2. Types

### 2.1. Primitive Types

- "In JavaScript everything is an object" - **false!**
- The reason people say this is because most of the values in JS can behave like objects, but that does not make them objects.
- The spec doesn't say that. It says...

**6.1 ECMAScript Language Types**
An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, BigInt, and Object. An ECMAScript language value is a value that is characterized by an ECMAScript language type.

- Types have an intrinsic set of characteristics that we means we expect a certain behaviour from a value.
- The primitive types are:

  - undefined
  - string
  - number
  - boolean
  - object
  - symbol
  - bigint

- There are some other things that may behave like types that we need to consider.

  - undeclared? - not listed in the spec as a type, but has a certain behaviour.
  - null? - listed in the spec as a type, but it has some quirky behaviour.
  - function? - listed as a subtype of the object type, yet we know intuitively that values which are functions have a very specific behaviour.
  - array? - listed as a subtype of the object type, but have a very specific behaviour.\

- Out of all types in both lists the only types that can be considered objects are:

  - object
  - function
  - array

- In JS and other dynamically types languages, it is the values that have types, not the variables.

### 2.2. The typeof Operator

- When we assign a value to a variable, we use the `typeof` operator as a way of identifying the value's type.
- The `typeof` operator always returns a string that represents the type of the value.

```js
var v;
typeof v; // "undefined"
v = '1';
typeof v; // "string"
v = 2;
typeof v; // "number"
v = true;
typeof v; // "boolean"
v = {};
typeof v; // "object"
v = Symbol();
typeof v; // "symbol"
```

- We can thing of `undefined` as the default value, when there is no other value.
- A lot of people think of `undefined` as "it doesn't have a value yet".
- But it is more appropriate to think of it as "it doesn't currently have a value" because it's often the case that a variable did have a value but has been set to `undefined`.

```js
typeof doesNotExist; // "undefined"

var v = null;
typeof v; // "object" - oops!! Historical bug.

v = function () {};
typeof v; // "function" - JS can distinguish from object.

v = [1, 2, 3];
typeof v; // "object" - huh? JS cannot distinguish array from object. Historical reasons...

v = 42n; // or BigInt(42)
typeof v; // "bigint"
```

- `typeof v;` when `v = null` returns a string of `"object".`
- In the current spec there is a statement that's been there since ES1 that says if you want to unset a regular value you would use `undefined`, but if you want to unset an object you would use `null`. That's part of the historical reason that `typeof null` returns `"object"`. But in reality it is just a bug.
- You have to ensure that when you are doing a `typeof` check on an object that it isn;t accidentally `null` because you aren't going to get an object.
- `function` isn't a top level type yet it has a return value for `typeof`.
- `array` doesn't have a return value for `typeof` - we get `"object"` instead.
- These things are quirks that we cannot change, because if these bugs were fixed then a bunch of the internet would break!
- So rather than whine about them we should learn to work around them.

### 2.3. BigInt

- A primitive type.
- Can essentially have an integer that grows infinitely large.
- Don't really mix and match well with regular numbers.

### 2.4. Kinds of Emptiness

- `undefined` and `undeclared` are often confused because developers think about them as synonyms.
- When a variable is `undeclared`, it has never been declared in any scope that we have access to.
- Something that is `undefined` is a variable that has been declared, but it doesn't yet have a value.
- The `typeof` operator is the only operator in existence that is able to reference a thing that doesn't exist and not throw an error.
- There ia another concept of emptiness in JS that was introduced with ES6: `uninitialized` AKA [TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#The_temporal_dead_zone_and_typeof).
- The idea with `uninitialized` is that certain variables like block scope ones, don't get initialized. They never initially get set to `undefined`.
- When something is in an `uninitialized` state you are not allowed to touch it in any way, otherwise you will get a TDZ error.

### 2.5. NaN and isNaN

- Within the primitive types there are special values to pay attention to.
- There are a number of them but `NaN` and `isNaN` crop up most often.
- Stands for **N**ot **A** **N**umber and comes from the IEEE 754 spec, which is a set of technical standards for how numbers are represented.
- Essentially `NaN` doesn't mean "Not A Number" it is a sentinel value that represents an invalid number.
- `0` is not the way to represent absence of valid numeric value.
- `NaN` with any other mathematical operation is always `NaN`.
- The type of `NaN` is `number` but is an invalid number.
- If you're designing a system and somebody expects to get a number and you want to signal to them there is valid number to give, there is only one value that makes any sense as all: you should return the `NaN`.

```js
var myAge = Number('0o46'); // 38
var myNextAge = Number('39'); // 39
var myCatsAge = Number('n/a'); // NaN
myAge = "my son's age"; // NaN - JS coerces the string into the NaN value.

myCatsAge === myCatsAge; // false OOPS!
// This happens because IEEE says NaNs are not equal to each other.
// NaN is the only value in JS that doesn't have the identity property, meaning it is not equal to itself.

isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true OOPS!
// This happens because the isNaN utility coerces values to numbers before performing the NaN check.
// The string is coerced into the NaN value.

Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false
// Number.isNaN came with ES6 and doesn't do any coercion.
// It tells you literally whether a value is NaN.
```

### 2.6. Negative Zero

- Another special value.
- IEEE 754 requires there to be a negative zero, although a mathematician would say it doesn't exist, but it certainly exists in programming.
- Essentially a zero with the `-` sign.
- The designers of JS in the early days felt that devs would never want a `-0` and went to extreme lengths to pretend as if it didn't exist.

```js
var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); // "0" OOPS!
trendRate === 0; // true OOPS!
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false
```

- For a long time you could get negative zeros but you couldn't determine that you had one, until ES6 added a utility `Object.is`.
- `-0` can actually be useful. For example a car in a game or map app that you need to have point in a certain direction.
- There's a utility called `Math.sign` which should tell us if the `-` sign is present, but when using with `-0` and -`0` was made to return `-0` and -`0` instead of `-1` and `1` as with all other numbers.

```js
Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0 WTF??
Math.sign(0); // 0 WTF??

// fix Math.sign(..) by returning 1 or -1 as with all other numbers.
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1
sign(-0); // -0
sign(0); // 0
```

```js
function formatTrendRate(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? '▼' : '▲';
  return `${direction} ${Math.abs(trendRate)}`;
}

formatTrendRate(-3); // "▼ 3"
formatTrendRate(3); // "▲ 3"
formatTrendRate(-0); // "▼ 0"
formatTrendRate(0); // "▲ 0"
```

- Having acute awareness of the types that exist in out language help us identify bugs, and make better use of our tool.

### 2.7. [Type Check Exercise](exercises/types-exercises/object-is/ex.js).

### 2.8. Fundamental Objects

- In addition to primitive values we have fundamental objects.
- aka: Built-In Objects.
- aka: Native Functions.
- From the bolt-on OOP aspect of JS.
- Copied from a language like Java and so start with capital letters.
- **Not advisable to use them**, but we need to understand them.
- The following fundamental objects should be preceded with the `new` keyword.
- These are constructor forms of fundamental objects which create object representations.

  - `Object()`
  - `Array()`
  - `Function()`
  - `Date()`
  - `RegExp()`
  - `Error()`

- We use the `new` keyword to instantiate instances of them.
- There are however three other fundamental objects that we could use the `new` keyword with, but we absolutely **should never** use the `new` keyword with:

  - `String()`
  - `Number()`
  - `Boolean()`

- We want to use `String()`, `Number()` and `Boolean()` as functions, not constructors.
- We don't want to put the `new` keyword in front of them, because if we call them with some value, it actually coerces the value into that primitive type.

```js
var yesterday = new Date('July 16, 2020');
yesterday.toUTCString();
// "Wed, 15 Jul 2020 22:00:00 GMT"

var myGPA = String(transcript.gpa);
// "3.54"
```
