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
