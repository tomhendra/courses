---
title:: Deep JavaScript Foundations, v3
type:: Course
author:: Kyle Simpson (You Don't Know JS)
completed:: 01/09/20
url:: https://frontendmasters.com/courses/deep-javascript-v3/
certificate:: No certificate provided
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>Deep JavaScript Foundations, v3</h1>

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
- [3. Coercion](#3-coercion)
  - [3.1. Abstract Operations](#31-abstract-operations)
    - [3.1.1. ToPrimitive (7.1.1)](#311-toprimitive-711)
    - [3.1.2. ToString (7.1.12)](#312-tostring-7112)
    - [3.1.3. ToNumber (7.1.4)](#313-tonumber-714)
    - [3.1.4. ToBoolean (7.1.2)](#314-toboolean-712)
  - [3.2. Cases of Coercion](#32-cases-of-coercion)
  - [3.3. Boxing](#33-boxing)
  - [3.4. Corner Cases of Coercion](#34-corner-cases-of-coercion)
- [4. Philosophy of Coercion](#4-philosophy-of-coercion)
  - [4.1. Intentional Coercion](#41-intentional-coercion)
  - [4.2. Culture of Learning](#42-culture-of-learning)
  - [4.3. Implicit Coercion](#43-implicit-coercion)
  - [4.4. Understanding Features](#44-understanding-features)
  - [4.5. Coercion Exercise](#45-coercion-exercise)
- [5. Equality](#5-equality)
  - [5.1. Double and Triple Equals](#51-double-and-triple-equals)
  - [5.2. Coercive Equality](#52-coercive-equality)
  - [5.3. Double Equals Algorithm](#53-double-equals-algorithm)
  - [5.4. Double Equals Corner Cases](#54-double-equals-corner-cases)
  - [5.5. Corner Cases: Booleans](#55-corner-cases-booleans)
  - [5.6. Corner Cases Summary](#56-corner-cases-summary)
  - [5.7. The Case for Double Equals](#57-the-case-for-double-equals)
  - [5.8. Equality Exercise](#58-equality-exercise)
- [6. Static Typing](#6-static-typing)
  - [6.1. TypeScript and Flow](#61-typescript-and-flow)
  - [6.2. Custom Types](#62-custom-types)
  - [6.3. Validating Operand Types](#63-validating-operand-types)
  - [6.4. Static Typing Pros](#64-static-typing-pros)
  - [6.5. Static Typing Cons](#65-static-typing-cons)
  - [6.6. Understanding Your Types](#66-understanding-your-types)
- [7. Scope](#7-scope)
  - [7.1. Compilation and Scope](#71-compilation-and-scope)
  - [7.2. Executing Code](#72-executing-code)
  - [7.3. Dynamic Global Variables](#73-dynamic-global-variables)
  - [7.4. Strict Mode](#74-strict-mode)
  - [7.5. Nested Scope](#75-nested-scope)
  - [7.6. Undefined vs Undeclared](#76-undefined-vs-undeclared)
  - [7.7. Lexical Scope Elevator](#77-lexical-scope-elevator)
- [8. Scope \& Function Expressions](#8-scope--function-expressions)
  - [8.1. Function Expressions](#81-function-expressions)
  - [8.2. Named Function Expressions](#82-named-function-expressions)
  - [8.3. Arrow Functions](#83-arrow-functions)
  - [8.4. Function Types Hierarchy](#84-function-types-hierarchy)
  - [8.5. Function Expression Exercise](#85-function-expression-exercise)
- [9. Advanced Scope](#9-advanced-scope)
  - [9.1. Lexical Scope](#91-lexical-scope)
  - [9.2. Dynamic Scope](#92-dynamic-scope)
  - [9.3. Function Scoping](#93-function-scoping)
  - [9.4. IIFE Pattern](#94-iife-pattern)
  - [9.5. Block Scoping](#95-block-scoping)
  - [9.6. choosing let or var](#96-choosing-let-or-var)
  - [9.7. Explicit let Block](#97-explicit-let-block)
  - [9.8. const](#98-const)
  - [9.9. Hoisting](#99-hoisting)
  - [9.10. Hoisting Example](#910-hoisting-example)
  - [9.11. let Doesn't Hoist](#911-let-doesnt-hoist)
- [10. Closure](#10-closure)
  - [10.1. What is Closure?](#101-what-is-closure)
  - [10.2. Closing Over Variables](#102-closing-over-variables)
  - [10.3. The Module Pattern](#103-the-module-pattern)
  - [10.4. ES6 Modules and Node.js](#104-es6-modules-and-nodejs)
  - [10.5. ES6 Module Syntax](#105-es6-module-syntax)
  - [10.6. Modules Exercise](#106-modules-exercise)
- [11. Objects](#11-objects)
  - [11.1. The this Keyword](#111-the-this-keyword)
  - [11.2. Binding the this Keyword](#112-binding-the-this-keyword)
    - [11.2.1. Implicit Binding](#1121-implicit-binding)
    - [11.2.2. Explicit Binding](#1122-explicit-binding)
    - [11.2.3. new Keyword Binding](#1123-new-keyword-binding)
    - [11.2.4. Default Binding](#1124-default-binding)
  - [11.3. Binding Precedence](#113-binding-precedence)
  - [11.4. Arrow Functions and Lexical this](#114-arrow-functions-and-lexical-this)
  - [11.5. Resolving this in Arrow Functions](#115-resolving-this-in-arrow-functions)
  - [11.6. this Exercise](#116-this-exercise)
  - [11.7. ES6 class Keyword](#117-es6-class-keyword)
  - [11.8. Classes Exercise](#118-classes-exercise)
- [12. ProtoTypes](#12-prototypes)
  - [12.1. Prototypal Class](#121-prototypal-class)
  - [12.2. The Prototype Chain](#122-the-prototype-chain)
  - [12.3. Dunder Prototypes](#123-dunder-prototypes)
  - [12.4. Shadowing Prototypes](#124-shadowing-prototypes)
  - [12.5. Prototypal Inheritance](#125-prototypal-inheritance)
  - [12.6. Classical vs Prototypal Inheritance](#126-classical-vs-prototypal-inheritance)
  - [12.7. Inheritance is Delegation](#127-inheritance-is-delegation)
  - [12.8. OLOO Pattern](#128-oloo-pattern)
  - [12.9. Delegation-Oriented Design](#129-delegation-oriented-design)
- [13. Summary](#13-summary)

## 1. Introduction

This is part of the Frontend Masters Professional Track.

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

**12.4.4.1 Runtime Semantics: Evaluation**\
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

**Whenever there's a divergence between what your brain thinks is happening, and what the computer does, that's where bugs enter the code.**\
_--getify's law #17_

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
  - symbol
  - bigint
  - object - [The spec](https://tc39.es/ecma262/#sec-primitive-value) doesn't list object as a primitive type, but Kyle specifies it as primitive?

- There are some other things that may behave like types that we need to consider.

  - undeclared? - not listed in the spec as a type, but has a certain behaviour.
  - null? - listed in the spec as a type, but it has some quirky behaviour.
  - function? - listed as a subtype of the object type, yet we know intuitively that values which are functions have a very specific behaviour.
  - array? - listed as a subtype of the object type, but have a very specific behaviour.

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
v = "1";
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
- You have to ensure that when you are doing a `typeof` check on an object that it isn't accidentally `null` because you aren't going to get an object.
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
- Something that is `undefined` is a variable that has been declared, but doesn't currently have a value.
- The `typeof` operator is the only operator in existence that is able to reference a thing that doesn't exist and not throw an error.
- There ia another concept of emptiness in JS that was introduced with ES6: `uninitialized` AKA [TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#The_temporal_dead_zone_and_typeof).
- The idea with `uninitialized` is that certain variables like block scope ones, don't get initialized. They never initially get set to `undefined`.
- When something is in an `uninitialized` state you are not allowed to touch it in any way, otherwise you will get a TDZ error.

### 2.5. NaN and isNaN

- Within the primitive types there are special values to pay attention to.
- There are a number of them but `NaN` and `isNaN` crop up most often.
- Stands for **N**ot **A** **N**umber and comes from the IEEE 754 spec, which is a set of technical standards for how numbers are represented.
- Essentially `NaN` doesn't mean "Not A Number" it is a sentinel value that represents an invalid number.
- `0` is not the way to represent the absence of a valid numeric value.
- `NaN` with any other mathematical operation is always `NaN`.
- The type of `NaN` is `number` but is an invalid number.
- If you're designing a system and somebody expects to get a number and you want to signal to them that there is no valid number to give, there is only one value that makes any sense as all: you should return the `NaN`.

```js
var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); // NaN
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
- There's a utility called `Math.sign` which should tell us if the `-` sign is present, but when using with `-0` and `0` was made to return `-0` and `0` instead of `-1` and `1` as with all other numbers.

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
sign(-0); // -1
sign(0); // 1
```

```js
function formatTrendRate(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "▼" : "▲";
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
var yesterday = new Date("July 16, 2020");
yesterday.toUTCString();
// "Wed, 15 Jul 2020 22:00:00 GMT"

var myGPA = String(transcript.gpa);
// "3.54"
```

## 3. Coercion

- When you think of conversion think of coercion, they are the same as far as JS is concerned.

### 3.1. Abstract Operations

- Abstract operations are the fundamental building blocks of how we deal with type conversion.
- The JavaScript spec says:

**_7 Abstract Operations_**
_These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification._

**_7.1 Type Conversion_**
_The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. The conversion abstract operations are polymorphic; they can accept a value of any ECMAScript language type. But no other specification types are used with these operations._

_The BigInt type has no implicit conversions in the ECMAScript language; programmers must call BigInt explicitly to convert values from other types._

- Abstract operations are not functions that can be invoked. When we call them abstract they are a conceptual operation, so conceptually we need to do a set of algorithmic steps to complete the operation.
- As a foundation we need to become familiar with the four main abstract operations:

1. ToPrimitive
2. ToString
3. ToNumber
4. ToBoolean

#### 3.1.1. ToPrimitive (7.1.1)

- If we have something non-primitive like an object or array, and we need to coerce it into a primitive, we apply the `ToPrimitive` abstract operation.
- Takes an optional type hint: if you have something that is not a primitive, tell me what kind of type you would like it to be.
- Another thing to understand about the algorithms within JS is that they are inherently recursive. e.g. with `ToPrimitive`, if the return result is not a primitive, it will get invoked repeatedly until the return result is a primitive.
- There are two methods that could be available on any non-primitive: `valueOf()` & `toString()`.
- What the algorithm does is try to invoke these two methods until a primitive is returned, or an error if no primitive is returned.

- hint: "number"

  - `valueOf()`
  - `toString()`

- hint: "string"

  - `toString()`
  - `valueOf()`

- If you are going to use something with a value that is not a primitive, but definitely needs primitives like math or concatenation, JS will coerce the value through this algorithm.

#### 3.1.2. ToString (7.1.12)

- Takes any value and gives us the representation of that value in string form.
- Almost every value that you can imagine has some representation in string form.

  - `null` ⇢ `"null"`
  - `undefined` ⇢ `"undefined"`
  - `true` ⇢ `"true"`
  - `false` ⇢ `"false"`
  - `3.14159` ⇢ `"3.14159"`
  - `0` ⇢ `"0"`
  - `-0` ⇢ `"0"` - corner case

- if we invoke `ToString` on an object it is going to invoke `ToPrimitive` with the string hint.
- Arrays for example have a default `ToString` that serializes the representation of an array as follows.

  - `[]` ⇢ `""`
  - `[1,2,3]` ⇢ `"1,2,3"`
  - `[null,undefined]` ⇢ `","`
  - `[[[],[],[]],[]]` ⇢ `",,,"`
  - `[,,,,]`⇢ `",,,"`

- The brackets are removed, strangely.
- If there is a value it will be returned, unless it is `null` or `undefined`.
- This is bizarre because `null` or `undefined` are represented differently when `ToString` is applied to them directly.

- For objects the square brackets are present?! Bonkers!

  - `{}` ⇢ `"[object Object]"`
  - `{a:2}` ⇢ `"[object Object]"`
  - `{toString(){ return "X"; }}` ⇢ `"X"`

- After the lower case object JS inserts something called the string tag - capitalized "Object".
- You can override the string tag for any custom object, using an ES6 Symbol [`toStringTag`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag).
- If you override the `toString` method you can completely control what you want the stringification of your object to look like.
- The above example shows "X" as the string tag but you could do something more useful like `JSON.stringify()` the object.

#### 3.1.3. ToNumber (7.1.4)

- Any time we want to do something numeric and we don't have a number, we are going to invoke the `ToNumber` abstract operation.
- Some of the return values are well formed, and some are strange.

  - `""` ⇢ `0` - Strange! Surely the absence of value should be represented by NaN?
  - `"0"` ⇢ `0`
  - `"-0"` ⇢ `-0`
  - `"009"` ⇢ `9`
  - `"3.14159"` ⇢ `3.14159`
  - `"0."` ⇢ `0`
  - `".0"` ⇢ `0`
  - `"."` ⇢ `NaN`
  - `"0xaf"` ⇢ `175`

  - `false` ⇢ `0`
  - `true` ⇢ `1`
  - `null` ⇢ `0` - This looks like it should make sense, but would have been better as NaN!
  - `undefined` ⇢ `NaN`

- If we invoke `ToNumber` on a non-primitive (here an object) it first invokes `ToPrimitive` with the number hint, which in turn first consults `valueOf()` and then consults `toString()`.
- For `[]` and `{}` by default (meaning not overridden), the `valueOf` method essentially returns itself, which has the effect of ignoring `valueOf` and just deferring to `toString`, so it doesn't even matter that the hint was number, it automatically goes straight to `ToString`.
- `valueOf() { return this; }` --> `toString()`
- You can think of the numberfication of an object as essentially the stringification of it; it's going to end up producing whatever `ToString` produces. A perplexing choice!
- So in your operations where you would expect a primitive number, you would actually get a primitive string, before further coercions are applied.

- ToNumber(Array)

  - `[""]` ⇢ `0` - empty array becomes empty string, empty string becomes 0!
  - `["0"]` ⇢ `0`
  - `["-0"]` ⇢ `-0`
  - `[null]` ⇢ `0`
  - `[undefined]` ⇢ `0`
  - `[1,2,3]` ⇢ `NaN`
  - `[[[[]]]]` ⇢ `0`

- ToNumber(Object):

  - `{ .. }` ⇢ `NaN` - an object's `ToString` returns the object, of which the stringification is `"[object Object]"`.
  - `{valueOf() { return 3; }}` ⇢ `3` - you can override the `valueOf` to return whatever you want.

#### 3.1.4. ToBoolean (7.1.2)

- Any time we have a value that is not a boolean, and it's used in a place that needs a boolean, `ToBoolean` will be invoked.
- This operation is less algorithmic and more lookup: is the value falsy or not?
- Doesn't invoke the `ToPrimitive`, or `ToNumber`, or `ToString` algorithms ...it just does a lookup.
- There is literally a lookup table in the spec.

- Falsy: values that will return `false` when coerced to a boolean.

  - `“”`
  - `0, -0`
  - `NaN`
  - `null`
  - `undefined`
  - `false`

- Truthy: values that will return `true` when coerced to a boolean.

  - `“foo”`
  - `23`
  - `{ a:1 }`
  - `[1,3]`
  - `true`
  - `function(){..}`
  - Anything else...

**Memorize the falsy list - if a value is anything else it must be truthy.**

### 3.2. Cases of Coercion

- With the four main abstract operations covered as a foundation, we can really tackle the topic of coercion.
- To get anything out of this section, you need to have an open mind, because devs have been preprogrammed to believe this is a horrible buggy part of JavaScript that you should avoid.
- Many devs wish to avoid coercions, and just use `===` everywhere and not deal with types, but they are using coercion already whether they realise ot or not!

```js
var numStudents = 16;

console.log(`There are ${numStudents} students.`);
// Coerced to a string implicitly!

var msg1 = "There are ";
var msg2 = "students.";
console.log(msg1 + numStudents + msg2);
// Coerced to a string implicitly!

console.log(`There are ${numStudents + ""} students.`);
// Coerced to a string implicitly!
```

- The spec says that if you use the `+` operator, if either one of the values is a string, the operator prefers string concatenation.

_12.15.5 ApplyStringOrNumericBinaryOperator_

_c. If Type(lprim) is String or Type(rprim) is String, then_
_i. Let lstr be ? ToString(lprim)._
_ii. Let rstr be ? ToString(rprim)._
_iii. Return the string-concatenation of lstr and rstr._

- You may say you don't want to do these implicit coercions and would rather be explicit about it.

```js
var numStudents = 16;

console.log(`There are ${[numStudents].join("")} students.`);
// Coerced to a string explicitly - but don't do this!

console.log(`There are ${numStudents.toString()} students.`);
// There is a little weirdness here: How are you calling a method on a primitive value?
// You are actually still doing implicit coercion here.

console.log(`There are ${String(numStudents)} students.`);
// If you don't want to be implicit at all, then your only option
// is to use the fundamental object String without the new keyword.
```

- OK, OK, what what about the other way around? Ha: You're already doing that too!

```js
function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(studentsInputElement.value); // "16"
// "161" OOPS! String concatenation.

addAStudent(+studentsInputElement.value);
// force it to be a number.
// There are two ways to do this:
// 1. the unary + operator invokes the ToNumber abstract operation.
// However if the string is empty you will get 0 from ToNumber!
addAStudent(Number(studentsInputElement.value));
// 2. the fundamental Number object without the new keyword.
```

```js
function kickStudentOut(numStudents) {
  return numStudents - 1;
}
// The - operator is not overloaded for string concatenation,
// so would invoke ToNumber and coerce to number.
kickStudentOut(studentsInputElement.value);
```

- OK, fine. But I never mess around with coercion of booleans, right? Wrong!

```js
if (studentsInputElement.value) {
  numStudents = Number(studentsInputElement.value));
}
// if statements that use non-booleans in the if clause: coercion!
// if the string is empty: falsy!

while(newStudents.length) {
  enrolStudent(newStudents.pop());
}
// numeric coercion of a number to a boolean.
// what happens when it's NaN?
```

- There are a lot of corner cases and gotchyas, probably more with boolean coercion than any other type coercion.
- Implicit coercion can be very useful, but we need to understand what's happening sufficiently to be intentional and careful.
- Don't try to be clever to save a few characters.
- Be more explicit where being more explicit is more communicative.

```js
if (!!studentsInputElement.value) {
  numStudents = Number(studentsInputElement.value));
}
// Explicitly coerce into a boolean with !!

while(newStudents.length > 0) {
  enrolStudent(newStudents.pop());
}
// Keep looping while length is > 0 is more semantic than saying
// keep looping while length is truthy.

Boolean(""); // false
Boolean("  \t\n"); // true OOPS! if the string is bunch of whitespace: truthy.
```

- If the test that we are asking for is "has this thing been set or not?" implicit boolean coercion is great.
- For Kyle, this is the only implicit boolean coercion that is OK to use:
- Literally where a value is being checked for `null`, `undefined` or an object.

```js
var workshop = getRegistration(student);

if (workshop) {
  console.log(`Welcome ${student.name} to ${workshop.name}.`);
}

Boolean(undefined); // false
Boolean(null); // false
Boolean({}); // true
```

### 3.3. Boxing

- Boxing is the magical behaviour like accessing properties on primitive values e.g. `.length()` on a string.
- It is a form of implicit coercion.
- Not called out in the same way as the abstract operations, but in spirit is implicit coercion.
- You are using something that is not as object as if it was an object.
- JS is implicitly coercing values into their object counterparts so we can access properties and methods on them.
- If we had to write code to turn a primitive into an object we would be writing Java!
- One of the unsung heroes of JS is that it does this boxing and does it well.

**All programming languages have type conversions, because it's absolutely necessary.**

**You use coercion in JS whether you admit it or not, because you have to.**

### 3.4. Corner Cases of Coercion

**Every language has type conversion corner cases**

- People use JavaScript's coercion as ammunition to criticize the language because they don't understand it.
- It is impossible to design a system without corner cases.

```js
Number(""); // 0 OOPS!
Number("  \t\n"); // 0 OOPS!
Number(null); // 0 OOPS!
Number(undefined); // NaN
Number([]); // 0 OOPS!
Number([1, 2, 3]); // NaN
Number([null]); // 0 OOPS!
Number([undefined]); // 0 OOPS!
Number({}); // NaN

String(-0); // "0" OOPS!
String(null); // "null"
String(undefined); // "undefined"
String([null]); // "" OOPS!
String([undefined]); // "" OOPS!

Boolean(new Boolean(false)); // true OOPS!
// we just ask if it is on the falsy list or not, so returns true!
```

- The root of all (coercion) evil: Not only does an empty string become 0, but whitespace also becomes 0.
- Because the ToNumber first strips off all leading and trailing whitespace before performing its coercion.

```js
studentsInput.value = "";

Number(studentsInput.value); // 0

studentsInput.value = "  \t\n";

Number(studentsInput.value); // 0
```

- There are also corner cases that are not so obvious because we are not dealing with typical operations.

```js
Number(true); // 1
Number(false); // 0

1 < 2; // true
2 < 3; // true
1 < 2 < 3; // true (but what's actually happening is an accident...)

// prettier-ignore
(1 < 2) < 3; // 1 < 2 is evaluated to true...
// prettier-ignore
(true) < 3; // true is coerced into a number, which gives 1.
1 < 3; // true

// ******************

3 > 2; // true
2 > 1; // true
3 > 2 > 1; // false OOPS!

// prettier-ignore
(3 > 2) > 1; // 3 > 2 is evaluated to true...
// prettier-ignore
(true) > 1; // true is coerced into a number, which gives 1.
1 > 1; // false
```

- So it is terrible idea for booleans to implicitly coerce themselves into numbers.
- Any programming style from 1970 onwards that relies upon the ability to take something that's boolean and add or subtract from it, has been taking advantage of that hack but making worse off code.
- Number coercion of booleans should be `NaN` but it's not and we can't change it.

## 4. Philosophy of Coercion

### 4.1. Intentional Coercion

- **You don't deal with these type conversion corner cases by avoiding coercions.**
- Instead, you have to adopt a coding style that makes value types plain and obvious.
- **A quality JS program embraces coercions, making sure the types involved in every operation are clear. Thus, corner cases are safely managed.**
- Don't write polymorphic functions that can take any sort of value and do 15 different things.
- We can choose to be more obvious about how we manage our types, how much we overload, how polymorphic we make our code.
- We can opt into problems or opt out of problems as a result.
- Coercion is a fact of your programs, and you need to decide how much you are going to be affected by those facts.
- We don't need to have Type Rigidity, Static Types, Type Soundness - they are reactions to this problem, but are not a necessary reaction.
- **JavaScript's dynamic typing is not a weakness, it's one of its strong qualities.**
- The first truly multi-paradigm language, and the reason it has survived so many paradigms is because of its type system.

### 4.2. Culture of Learning

- If junior devs don't understand something, it is your duty to ensure they understand coercion well enough.
- Everyone on the team should be learning and improving.
- Dumbing down the codebase because not everyone understands JS well enough is not a good direction to move in.
- Use code reviews, talk to your team members and encourage a culture of learning for everyone.
- Your code is a form of communication, and there is an effective way to communicate that understands and uses the tool well.
- If you ask the reader of code to understand something about the tool so they can understand a line of code, that is aweakness if JS n investment on their part. Ensure that investment pays off beyond that line of code.
- That's part of the problem with not having a great dev culture: not promoting that everyone should understand.
- From someone who's been writing JS for 3 weeks to someone who has 20 years experience, we should all be able to operate on the same codebase and communicate well.

### 4.3. Implicit Coercion

- There is a temptation to believe and a cult feeling among the community that most devs think that implicit mechanisms are magical.
- When something happens that is unexpected it is magical, and we equate this with bad.
- This is part of the reason why anti-coercion perspectives exist, that implicit coercion is the downfall.
- People say this is a weakness of JS and cite other languages as being better.
- We should think of implicit coercion as an abstraction.
- Not all abstractions are good, but some are.
- Within functional programming abstraction is everywhere.
- Implicitness is not bad, it is the proper use of abstraction.
- **Hiding unnecessary details, re-focusing the reader and increasing clarity.**
- In other words we want to hide the unnecessary details because that refocuses the reader on the important stuff.
- Some of the implicit nature of JS type system is sketchy, but some is really quite useful.
- Boxing for example, because the distraction of having to cast into an object is an unnecessary detail.

```js
var numStudents = 16;

console.log(`There are ${numStudents} students.`);

console.log(`There are ${String(numStudents)} students.`);
// using if statements to detect corner cases and dropping the
// String fundamental object properly allows JS abstract the detail that isn't necessary.
```

```js
var workshopEnrolment1 = 16;
var workshopEnrolment2 = workshopElement.value;

if (Number(workshopEnrolment1)) < (Number(workshopEnrolment2)) {
  // ..
}

if (workshopEnrolment1 < workshopEnrolment2) {
  // ..
}
```

- The `<` operator does an alphanumeric comparison if both the operands are strings.
- So there is a corner case to consider, but if you know that at least one operand is a number then you know the other one will be coerced into a number.
- If you are in a place where you can use coercion but it's not obvious, it is within your purview to make it obvious.
- If you communicate that intent, it's not going to trip up readers of the code.
- **Is showing the reader the extra type details helpful or distracting?**
- Be a critical analytical thinker: an engineer, not a code monkey!

### 4.4. Understanding Features

- A quality JS program embraces coercions, making sure the types involved in every operation are clear.
- If you make your types obvious in your program, the vast majority of the quirky corner cases that people complain about go away.

_If a feature is sometimes useful and sometimes dangerous and if there is a better option, always use the better option._
-- The Good Parts, Crockford.

- This statement is troubling, as what _useful_ and _dangerous_ and _better_ mean is not precisely defined.
- An improved perspective would be:
- _Useful_: when the reader is focused on what is important.
- _Dangerous_: when the reader can't tell what will happen.
- _Better_: when the reader understands the code.

- **It is irresponsible to knowingly avoid usage of a feature that can improve code readability.**

### 4.5. [Coercion Exercise](exercises/types-exercises/coercion/ex.js)

## 5. Equality

### 5.1. Double and Triple Equals

- The biggest problem that most devs have with coercion is around equality checking.
- A common interpretation is that:
  - `==` checks value (loose)
  - `===` checks value and type (strict)
- In reality this is not exactly the case.
- **If you're trying to understand your code, it's critical you learn to think like JS.**
- The spec says:

_7.2_.15 Abstract Equality _Comparison_
The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. _If Type(x) is the same as Type(y), then_
   - _a. Return the result of performing Strict Equality Comparison x === y._
2. _If x is null and y is undefined, return true._
3. _If x is undefined and y is null, return true._
4. _If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)._ 5._ If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y._
5. _If Type(x) is BigInt and Type(y) is String, then_
   - _a. Let n be ! StringToBigInt(y)._
   - _b. If n is NaN, return false._
   - _c. Return the result of the comparison x == n._
6. _If Type(x) is String and Type(y) is BigInt, return the result of the comparison y == x._
7. _If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y._
8. _If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y)._
9. _If Type(x) is either String, Number, BigInt, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y)._
10. _If Type(x) is Object and Type(y) is either String, Number, BigInt, or Symbol, return the result of the comparison ToPrimitive(x) == y._
11. _If Type(x) is BigInt and Type(y) is Number, or if Type(x) is Number and Type(y) is BigInt, then_
    - _a. If x or y are any of NaN, +∞, or -∞, return false._
    - _b. If the mathematical value of x is equal to the mathematical value of y, return true; otherwise return false._
12. _Return false._

- There is a myth that `==` checks the value and `===` checks the value and type: debunked on line 1!

```js
var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrolment1 = 16;
var workshopEnrolment2 = workshopEnrolment1 + 0;

studentName1 == studentName2; // true
studentName1 === studentName2; // true

workshopEnrolment1 == workshopEnrolment2; // true
workshopEnrolment1 === workshopEnrolment2; // true
```

- When the types match `===` is performed in any case.
- You should try to have the value types obvious and ideally have them match as much as possible.

**_7.2.16 Strict Equality Comparison_**
_The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:_

_If Type(x) is different from Type(y), return false._
_If Type(x) is Number or BigInt, then_
_Return ! Type(x)::equal(x, y)._
_Return ! SameValueNonNumeric(x, y)._

- Strict equality in the spec states that if the types are not the same then there is no way the operands could be equal.
- The real difference between loose and strict equality is whether or not we are going to allow any coercion to occur.

```js
var workshop1 = {
  name: "Deep JS Foundations",
};

var workshop2 = {
  name: "Deep JS Foundations",
};

if (workshop1 == workshop2) {
  // nope! different objects
}

if (workshop1 === workshop2) {
  // nope! different objects
}
```

- **`==` allows coercion (types different)**
- **`===` disallows coercion (types same)**

### 5.2. Coercive Equality

- **Like every other operation, is coercion helpful in an equality comparison or not?**
- It's a critical analysis.
- The choice to use `==` or `===` is a trailing indicator of whether you know your program.
- It's better to fix the problem, that you don't know what the types are in the comparison.
- Knowing the types will lead to better code and fewer bugs.
- **Like every other operation, do we know the types or not?**

### 5.3. Double Equals Algorithm

- Let's look at what `==` will do if the types are different.

1. If x is null and y is undefined, return true.
2. If x is undefined and y is null, return true.

- `null` and `undefined` are coercively equal to each other, and to no other values in the language.
- `null` and `undefined` will not match any other clause in the Abstract Equality Comparison algorithm apart from 2 and 3.
- This is incredibly useful.
- Having two empty values is confusing, and you have the option to treat `null` and `undefined` as indistinguishable through coercive equality.
- Whether something us `null` or `undefined` is not a useful distinction in almost all cases.
- Some of the staunchest critics of JS coercion will use `== null` checks in their code.

```js
var workshop1 = {topic: null};
var workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined) &&
  ) {
    // execute this code
  }

// the == coercively checks null and undefined equal to each other.
// Arguably better code: more readable, focused on what's important.
if (
  workshop1.topic == null && workshop2.topic == null
) {
  // execute this code
}
```

- What about strings numbers and booleans?
- There is a prevailing sense that the algorithm prefers to do numeric coercion.

4. _If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)._
5. _If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y._
6. _If Type(x) is BigInt and Type(y) is String, then_
   - _a. Let n be ! StringToBigInt(y)._
   - _b. If n is NaN, return false._
   - _c. Return the result of the comparison x == n._
7. _If Type(x) is String and Type(y) is BigInt, return the result of the comparison y == x._
8. _If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y._
9. _If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y)._

- It prefers to reduce everything to numbers to make the comparison.
- This helps to predict the behaviour of the `==` algorithm.

```js
var workshopEnrolment1 = 16;
var workshopEnrolment2 = workshopElement.value;

if (Number(workshopEnrolment1)) === (Number(workshopEnrolment2)) {
  // ..
}
// Ask: What do we know about the types here?
// if we know that at least one is a number, then the == algorithm will coerce to a number.
if (workshopEnrolment1 == workshopEnrolment2) {
  // ..
}
```

- You can structure your code in a way that coercion is a useful and obvious system rather than the complex magic that most people perceive.

- If you use `==` with an operand that's not already a primitive, we invoke the `ToPrimitive` abstract algorithm.

1.  _If Type(x) is either String, Number, BigInt, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y)._
2.  _If Type(x) is Object and Type(y) is either String, Number, BigInt, or Symbol, return the result of the comparison ToPrimitive(x) == y._

- Remember that the algorithms are inherently recursive.
- The `==` operator says: I need to get it to the point that one of the clauses matches. If there is a scenario where the two values don't match completely, I will keep calling the algorithm recursively until I get two primitives that are of the same type, or two primitives that are coercively equal to each other.

- The following is a contrived example, but to demonstrate if you wrote a function that couldn't control whether an array or a number was passed.

```js
var workshop1Count = 43;
var workshop2Count = [42];

if (workshop1Count == workshop2Count) {
  // Yep (but why would an array holding a number
  // be coercively equal to a number??)
}

// if (workshop1Count == workshop2Count) {
// if (42 == "42") - ToPrimitive stringifies the array!
// if (42 === 42) - The == algorithm prefers numeric coercion!
if (true) {
  // Yep (hmm...)
}
```

- You shouldn't fix this problem by using `===`.
- `===` takes you away from the real problem that you are making a terrible comparison in the first place.

**Abstract Equality Comparison Algorithm Summary**

- If the types are the same: `===`.
- If `null` or `undefined`: equal.
- If non-primitives: `ToPrimitive`.
- Prefer: `ToNumber`.

### 5.4. Double Equals Corner Cases

- The following on the surface looks like a clear argument against JS and the `==`.

```js
[] == ![]; // true HUH?
```

- But this construct is a false construct to begin with.
- You would never compare a value to the negated value of itself... ever!
- But what if you did?

```js
var workshopStudents1 = [];
var workshopStudents2 = [];
// Check if it is coercively equal to its negation
if (workshopStudents1 == !workshopStudents2) {
  // Yep, HUH?
}
// Check if it is not coercively equal: the non-contrived example!
if (workshopStudents1 != workshopStudents2) {
  // Yep, HUH?
}
```

- But what is actually happening?

```js
var workshopStudents1 = [];
var workshopStudents2 = [];
// The algorithm is sensibly applied, but not to a rational situation.
// if (workshopStudents1 == !workshopStudents2)
// if ([] == false) - negating an array becomes false (arrays are truthy)
// if ("" == false) - coerces non-primitive to primitive: array becomes ""
// if (0 == false) - two primitives not of the same type: algorithm prefers numbers
// if (0 === 0) - false primitive also becomes 0: algorithm prefers numbers
if (true) {
  // Yep, HUH?
}
// != is like the negation of coercive equality ==.
// Since they are both arrays, we are asking are they not the same identity.
// We are asking an identity question, which is totally valid.
// if (workshopStudents1 != workshopStudents2)
// if (!(workshopStudents1 == workshopStudents2))
// if (!(false)
if (true) {
  // Yep, HUH?
}
```

### 5.5. Corner Cases: Booleans

- If you want to allow the boolean coercion of an array to be true, there's a correct way to do it.
- Allow the `ToBoolean` operation to be invoked on the array, which performs a simple lookup, with array not being on the falsy list therefore coerces to true.

```js
var workshopStudents = [];

if (workshopStudents) {
  // Yep
}

if (workshopStudents == true) {
  // Nope :(
}

if (workshopStudents == false) {
  // Yep :(
}
```

- Using `==` or `===` to compare a boolean with an array will lead to corner cases.
- Never use `==` or `===` with `true` or `false`.
- There is no situation where you need to do this, when you can invoke the `ToBoolean` operation implicitly.
- So what's happening with the algorithms?

```js
var workshopStudents = [];

// if (workshopStudents)
// if (Boolean(workshopStudents))
if (true) {
  // Yep
}

// if (workshopStudents == true)
// if ("" == true) - non-primitive coerced into a primitive, so array becomes ""
// if (0 === 1) - two primitives not of the same type: algorithm prefers numbers
if (false) {
  // Nope :(
}

// if (workshopStudents == false)
// if ("" == false) - non-primitive coerced into a primitive, so array becomes ""
// if (0 === 1) - two primitives not of the same type: algorithm prefers numbers
if (false) {
  // Yep :(
}
```

### 5.6. Corner Cases Summary

- Avoid:

1. `==` with `0` or `""` (or even `" "`)
2. `==` with non-primitives - only use it for coercion among the primitives.
3. `== true` or `== false` - allow `ToBoolean` or use `===`

### 5.7. The Case for Double Equals

- You should prefer `==` in all possible places.
- **Knowing types is always better than not knowing them.**
- The uncertainty of code is what makes it hard to read and susceptible to bugs.
- Some people respond to the problem of not knowing types with changing their coding style to use static typing.
- **Static Types is not the only (or even necessarily best) way to know your types.**
- `==` is **not** about comparisons with unknown types.
- Never use the `==` when you don't know the types.
- `==` is about comparisons with known type(s), **optionally** where conversions are helpful.
- If you want to take advantage of coercion `==` is essentially your only option.

- If you **know** the type(s) in a comparison (it is **obvious** to the reader what the types will be):

  - If both types are the same, `==` is identical to `===`.
  - Using `===` would be **unnecessary**, so prefer the shorter `==`.

- If you **know** the type(s) in a comparison (it is **obvious** to the reader what the types will be):

  - If the types are different, using one `===` would be **broken** - it will always fail.
  - Since `===` is pointless when the types don't match, it's similarly **unnecessary** when they do match.
  - The only two options in this scenario, are to prefer the more powerful `==` or **don't compare** at all.

- If you **know** the type(s) in a comparison (it is **obvious** to the reader what the types will be):

  - If the types are different, the equivalent of one `==` would be two (or more!) `===` (ie, "slower").
  - You cannot have a `===` and a `==` be equivalent when the types are different.
  - It is faster to let JS do the coercion than make a bunch of explicit `===` comparisons.
  - Prefer the "faster" single `==`.
  - (We are talking microseconds but it helps to make the case of the bigger argument).

- If you **know** the type(s) in a comparison (it is **obvious** to the reader what the types will be):

  - If the types are different, two (or more!) `===` comparisons may distract the reader.
  - Prefer the **cleaner** single `==`.

- **Summary: whether the types match or not, `==` is the more sensible choice**.

- If you **don't** know the type(s) in a comparison:

  - Not knowing the types means not fully understanding that code.
  - So, best to refactor so you can **know the types**.

- If you **don't** know the type(s) in a comparison:

  - The uncertainty of not knowing types should be obvious to reader.
  - Use comments if necessary.
  - The **most obvious** signal is `===`.
  - If `==` should always be used when you do know the types, `===` should be reserved only for when you don't know the types.
  - It signals to the reader that there is uncertainty of the types, and you are trying to protect yourself.

- If you **don't** know the type(s) in a comparison:

  - Not knowing the types is equivalent to assuming type conversion.
  - If you don't know the types, the worst case scenario is that they will not match and will invoke some weird corner case of coercion.
  - Not knowing the types is equivalent to that worst case scenario, you always need to assume the worst.
  - Because of corner cases, the only safe choice is `===`.

- **Summary: if you can't or won't use known and obvious types, `===` is the only reasonable choice**.

- Even if `===` would always be equivalent to `==` in your code, using `===` everywhere sends a wrong semantic signal: "Protecting myself since I don't know/trust the types".

- **Summary: making types known and obvious leads to better code. If types are known, `==` is best. Otherwise, fall back to `===`.**

### 5.8. [Equality Exercise](exercises/types-exercises/equality/ex.js)

## 6. Static Typing

### 6.1. TypeScript and Flow

- Benefits:

1. Catch type-related mistakes
2. Communicate type intent
3. Provide IDE feedback

- Caveats:

1. Inferencing is best-guess, not a guarantee
2. Annotations are optional
3. Any part of the application that isn't typed introduces uncertainty

```js
var teacher = "Kyle";
// TS will infer that teacher should always be a string, and throw an error if it's reassigned.
teacher = { name: "Kyle" };
// Error: can't assign object to string
```

### 6.2. Custom Types

- Can create custom types, but notice the guarantee is based on things being assigned correctly.
- A parameter to a function is a lot like a variable.
- Can be very useful if your problem is types being misassigned.

### 6.3. Validating Operand Types

- A valuable feature is to validate operands, as many bugs can be introduced this way.
- Checking the operations we are doing where most of our business logic is.

```js
var studentName: string = "Frank";

var studentCount: number = 16 - studentName;
// Error: can't subtract string from a number
```

### 6.4. Static Typing Pros

- They make types more obvious in code.
- Familiarity: they look like other language's type systems.
- Extremely popular these days.
- They're **very** sophisticated and good at what they do.

### 6.5. Static Typing Cons

- They use "non-JS-standard" syntax (or code comments).
- They require\* a build process, which raises the barrier to entry.
- Their sophistication can be intimidating to those without prior formal types experience.
- They focus more on "static types" (variables, parameters, returns, properties, etc) than **value types**.
- The only way to have confidence over the runtime behaviour is to limit/eliminate dynamic typing.

### 6.6. Understanding Your Types

- JavaScript has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons.
- However, the prevailing response seems to be: avoid as much of this system as possible, and use `===` to "protect" from needing to worry about types.
- Part of the problem with **avoidance** of whole swaths of JS, like pretending `===` saves you from needing to know types, is that it tends to systemically perpetuate bugs.
- You simply cannot write quality JS programs without knowing the types involved in your operations.
- Alternately, many choose to adopt a different "static types" system layered on top.
- While certainly helpful in some respects, this is "avoidance" of a different sort.
- Apparently, JS's type system is inferior so it must be replaced, rather than learned and leveraged.
- Many claim that JS's type system is too difficult for newer devs to learn, and that static types are (somehow) more learnable.
- Kyle's claim: the better approach is to embrace and learn JS's type system, and to adopt a coding style which makes types as obvious as possible.
- By doing so, you will make your code more readable and more robust, for experienced and new developers alike.
- As an option to aid in that effort, Kyle created [Typl](https://github.com/getify/Typl), which he believes embraces and unlocks the best parts of JS's types and coercion.

## 7. Scope

- What is lexical scope? Where we look for things.
- What are we looking for? Identifiers.
- You can think metaphorically as coloured buckets with matching coloured marbles: The buckets are scopes, and the marbles are identifiers.
- Here we have a variable `x` that a value is being assigned to, and a variable `y` that a value is being retrieved from.

```js
x = 42;
console.log(y);
```

- All variables are in one of those two roles in your program.
- When the JS engine is processing the code, it's asking:

1. What position is the variable in?
2. What scope does it belong to?

- There is something nuanced with this definition, in that the processing by the engine is an actual step in JS, and not inlined with the execution.
- JS is not an interpreted language but a compiled language, or at least it's parsed.
- Proof: If you receive a syntax error on line 10 you do so without lines 1-9 executing first.
- There is a processing step.
- In compiler theory there are four stages to a compiler (sometimes steps 1 & 2 are combined):

1. Lexing.
2. Tokenization.
3. Parsing: taking the stream of tokens and turning it into an Abstract Syntax Tree.
4. Code generation: taking the AST and producing some other executable form of that program.

- That's basically how a program gets processed from textual code that you write into an executable format.
- A lot of people think about the difference between compiled and interpreted as the distribution model for the binary.
- A better way to think about it is whether the code is processed before it is executed or not.
- We want to align our brains more to think like a compiler.
- In JS a plan for the lexical environment is produced when parsing, at the same stage the AST is created.
- The JS engine produces in essence an intermediate representation not that dissimilar to bytecode, and hands that off to the JS virtual machine which is embedded inside of the same JS engine.
- The JS virtual machine interprets the output and whenever it enters a scope it creates all the identifiers according to what the program told it to do.
- We have to think about JavaScript as a two pass system as opposed to a single pass.
- **JavaScript organizes scopes with functions and blocks.**

### 7.1. Compilation and Scope

- Consider this code:

```js
var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  console.log("Welcome!");
}

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass(); // Welcome!
ask(); // Why?
```

- We need to try and think about the code more like how the JS engine thinks about it.
- To do this we can pretend that the processing of the program is a conversation!
- There will be two actors in this conversation:

1. The compiler
2. The scope manager (makes buckets and marbles)

- This will be the first pass.
- Once the plans have been produced, we will process the second step which actually executes the code.
- The global scope is the red bucket, the inner scopes are blue and green.

- Compiler: _Hey scope manager, I have a formal declaration here in the red bucket. Have you ever heard of a thing called teacher?_
- Scope Manager: _Nope, never heard of it, but I have created now a red marble for you and dropped it into the red bucket._
- Compiler: _Hey scope manager, I have a formal declaration for otherClass. Heard of this one?_
- Scope Manager: _Nope, not that one. Here's another red marble for the bucket._
- Compiler: _Oh, that's a special kind of thing since it's a function, it creates scopes. Hey scope manager, how's about a new bucket?_
- Scope Manager: _No problem compiler, here's a blue bucket for you dude! Just popped that puppy inside the red bucket for you._
- Compiler: _Cheers my guy. Just looking inside the blue bucket and I got me another declaration. You ever heard of teacher?_
- Scope Manager: _Nothing in the blue bucket called teacher. Here's a blue marble coming at ya._

_Interlude_: having two variables of the same name in different scopes is called **shadowing**. Now we cannot reference the outer scope variable of the same name from the inner scope, hence the name shadowing.

- Compiler: _Nice, back into the red bucket I go... Ah look what I found, another one. Heard of ask?_
- Scope Manager: _Not on my list, but here you go - another red marble._
- Compiler: _Ah dude this one's a function. Can you sort me out a green bucket for it?_
- Scope Manager: _No problem for you my man. Here you go, green bucket, chucked it inside of the red one._
- Compiler: _Nice, thanks dawg. Just found another declaration in the green bucket though. You have question on your list?_
- Scope Manager: _Doesn't appear to be there. Here's a green marble for ya._
- Compiler: _It's been an absolute pleasure as always, all done for now._

- **Takeaway**: In a lexically scoped language, all of the scopes and identifiers that we are dealing with are determined at compile time, not at runtime. This allows the JS engine to much more efficiently optimize at runtime.
- The decisions you make about scope and variables are author time decisions. They can't change at runtime.

### 7.2. Executing Code

- Back to the example:

```js
// var teacher: handled by compiler
// teacher = "Kyle": handled by execution engine
var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  console.log("Welcome!");
}

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass(); // Welcome!
ask(); // Why?
```

- The only code left after the compiler stage has finished, is the code remaining to be executed.
- There was mention earlier that variables are in one of two positions:

1. The **target** of a value assignment.
2. The **source** of a value retrieval.

- Back in the day the terminology was `lhs` and `rhs` of the assignment operator `=`.
- The position information is something that the compiler picked up.
- When it created the AST it knew what scope the identifiers were in, and what position they were in.
- The next conversation involves the Scope Manager, and this time the JS engine's virtual machine.

- JS Engine: _Hey Scope Manager, I have a target reference for teacher in the red bucket. Hit me!_
- Scope Manager: _Yeah I got that one, here's the marble._
- JS Engine: _Cool, I'll assign the value "Kyle" and move on._
- JS Engine: _Hey Scope man, I got me a source reference for otherClass in the red bucket. Look familiar?_
- Scope Manager: _Yeah man, here you go, marble away._
- JS Engine: _Nice, retrieving that value now!_
- JS Engine: _Ah, parens, nice, let's execute..._
- JS Engine: _Yo Scope, in the blue bucket I have a target reference for teacher. Any luck?_
- Scope Manager: _Uh huh, here's ya blue marble my dude._
- JS Engine: _Sweet, assigning the value "Suzy" to it as we speak._
- JS Engine: _Hey scope, any console in that blue bucket?_
- Scope Manager: _Nope, but checking up one level, there's an auto-global in the red bucket. Red marble comin' atchya!_

When you reference a variable in a **target** position, you have to first look it up.
When you reference a variable in a **source** position, you have to first look it up.

- JS Engine: _Hey Scope, just found a source reference for ask, you got that one?_
- Scope Manager: _Yes, I have that one. Here you go, red marble._
- JS Engine: _Cool, this one has a function value and I see parens, gonna execute..._
- JS Engine: _Dude, looking in the green bucket and seeing a target reference for question, you got that one?_
- Scope Manager: _Yeah got it! Here's your green marble._
- JS Engine: _Superb work, gonna assign the value to "Why?" to it._
- JS Engine: _Hey scope, any console in that green bucket?_
- Scope Manager: _Nope, but checking up one level, there's an auto-global in the red bucket, here you go._
- JS Engine: _Cheers. Oh and executing the log method on that console object, I have a source ref for question in the green bucket._
- Scope Manager: _Here you go, green marble for you._

- Then the lookup of `question` happens, the value of `"Why?"` is returned, which we assign as the argument to the `log` method's parameter.
- Note a parameter is a **target** (assignment) reference, but an argument is a **source** (retrieval) reference.

### 7.3. Dynamic Global Variables

```js
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass(); // Welcome!

teacher; // Suzy
topic; // React
```

- topic is a target reference, not found in the scope of `otherClass` or the global scope.
- So JS applies a historical bad part of its design and creates a variable automatically in the global scope.
- Never ever under any circumstances should you create global variables in this way.

### 7.4. Strict Mode

- Use strict mode by putting the pragma at the top of a file: `"use strict";`.
- This prevents the behaviour of dynamic global variables.
- When the global scope is queried for `react` in the previous example, a reference error is returned instead of automatically creating a global variable.
- A Type error is different to a Reference error.
- A _Type error_ is when you find the variable, but the value it is holding doesn't allow the operation you are trying to perform.
- A _Reference error_ is when a variable cannot be found.
- **Always use strict mode**.

### 7.5. Nested Scope

- Scopes can be nested.

```js
var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass(); // Suzy Why?
ask("????"); // Reference error!
// unlike a target reference, a global variable is not created automatically for source references.
```

### 7.6. Undefined vs Undeclared

- `undefined` means a variable exists, but at the moment it has no value.
- `undeclared` means a variable has never been formally declared, in any scope that we have access to.

### 7.7. Lexical Scope Elevator

- The idea of scope being nested within each other, can be represented as a building with many floors.
- The first floor is the current scope where the reference is, and the top floor is the global scope.
- We move one floor at a time up on the elevator when looking for identifiers in scopes.

## 8. Scope & Function Expressions

### 8.1. Function Expressions

- We've been talking about functions adding their identifier in the enclosing scope.
- Remember there is a difference between what can happen at compile time, and what can happen at execution time.

```js
function teacher() {
  console.log("functional stuff..");
}

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError: anotherTeacher is not defined
```

- `myTeacher` identifier is created in the global scope.
- `anotherTeacher` creates another scope, but because `var myTeacher = function anotherTeacher() {...}` is not a function declaration it is not handled in the same way.
- This is called a **function expression**.
- As opposed to `function teacher(){}` which is a **function declaration**.
- One of the main differences is that function declarations attach their marble to the enclosing scope, where as function expressions add their marble to their own scope.
- There is a nuance in that not only does the blue marble show up in the blue scope, but it is also read only.
- You could not reassign `anotherTeacher` to some other value.

### 8.2. Named Function Expressions

- A function declaration is only a function declaration if the keyword `function` is literally the first thing in the statement.
- Anything else must be a function expression.
- You can have anonymous function expressions, and named function expressions.

```js
var clickHandler = function () {
  // I am an anonymous function expression
};

var clickHandler = function keyHandler() {
  // I am a named function expression
};
```

- Kyle says that 100% of the time with zero exceptions you should always prefer named function expressions.
- There are three reasons that make a solid case for why function expressions are better:

- **1. Reliable function self-reference**

  - Useful if function is recursive.
  - Useful if function is an event handler and needs to reference itself to unbind itself.
  - Useful if you need to access any properties on the function object.
  - Any time you need a self-reference the only answer is that it needs to have a name.
  - If you want to self-reference the function from inside its body, referencing the identifier in its own read only scope is much better than the variable that the function has been assigned to in the outer scope as with a function declaration, which isn't by default read only.

- **2. More debuggable stack traces**

  - By naming your functions you automatically make your code debuggable.
  - When you have minified code debugging with anonymous functions is a nightmare.
  - You can even figure out the bug without looking at the code, if you use well named semantic function names.
  - And if you do need to look at the code you do with more mental context.

- **3. More self-documenting code**

  - By putting a name on your function you make that code more self-documenting.
  - If you have a function that is anonymous, to infer the purpose of the function you have to read the function body and what it is being passed.
  - It's much better to use a name that makes the purpose of the function completely unambiguous to the reader.

- The purpose of code is to clearly communicate your intent.
- Even when assigning anonymous functions to a property or variable, it still is an anonymous function, it still doesn't have a lexical self-reference. You can reference the variable in the outer scope but it's less reliable and less semantic.
- Depending on where the anonymous function expression exists, you may still be able to have a name inferred. If it is assigned to a variable then as long as there isn't some complex destructuring code in place, generally JS will infer the name for the purpose of the stack trace.
- **But the big problem is this**: Where 99.9% of people use anonymous function expressions is as callbacks, passing them inline into other function like `.map`, `.then` etc. but when you pass a function expression in a call position, there's no way to infer any name from it. You don't get the benefit of name inference, so you have to assign it to a variable, so you may as well just use a function declaration.

**In summary**:

- You should prefer function declarations with good semantic names.
- If you going to pass in function expression then use a name as with function declarations.
- There is no argument that anonymous functions should be preferable.
- There is no reason why using names is distracting and unhelpful for code readability.
- Every single function has a purpose, so every function should have a name.
- Don't make the reader of your code figure things out every single time.
- If you can't come up with a name, it probably means that function is too complex, and needs to be broken down into smaller pieces until the names are completely self-obvious.
- A leading indicator of problems in code is when you can't come up with a name, or the name is 14 words long!
- Kyle's rule of thumb is that he prefers function declarations if it is more than 3 lines of code. Otherwise use an inline function expression. Unless it needs to be called multiple times, then a declaration is preferable, even if it is only 1 line.
- Naming things is hard.
- Code is always an iterative process, so accept the first name you come up with may change several times.
- If you really can't come up with anything name it TODO and when searching for comments with TODO before committing code you may have a better sense of what to name the function.

### 8.3. Arrow Functions

- Arrow functions are anonymous.
- The advice is not to use anonymous function expressions.
- You shouldn't be using them because they are nice short syntax; that isn't why they were created.
- The shorter the syntax the more complex the corner cases of syntax are.
- You still have to infer the purpose of the code rather than seeing it listed out.

```js
var ids = people.map((person) => person.id);

// This function expression tells us in its name exactly what it does.
var ids = people.map(function getId(person) {
  return person.id;
});
```

- Even though the rule of using a function expression for 3 lines of code and less would apply below, promise chains can be hard to read, so Kyle would use a function declaration instead.

```js
getPerson()
  .then((person) => getData(person.id))
  .then(renderData);

// reads almost like plain english
getPerson()
  .then(function getDataFrom(person) {
    return getData(person.id);
  })
  .then(renderData);
```

- Some people say you can assign arrow functions to variables and get the same benefit out of them.

```js
// But it's actually fewer characters to do the function declaration!
var getId = (person) => person.id;
var ids = people.map(getId);

// ***************************

var getDataFrom = (person) => getData(person.id);
getPerson().then(getDataFrom).then(renderData);
```

- More concise code does not equal more readable code.

### 8.4. Function Types Hierarchy

1. (Named) Function Declaration
2. Named Function Expression
3. Anonymous Function Expression

### 8.5. [Function Expression Exercise](exercises/scope-exercises/function-expressions/ex.js)

## 9. Advanced Scope

- Lexical scope is the formal name of what we have refer to as scope.
- The idea of scopes being nested within each other.
- Specifically the idea that a compiler / parser / processor is figuring out all those scopes ahead of time before being executed.
- That's where the term _lexical_ scope comes from; the _lex_ shares the same root as the first stage of parsing, the _lexer_.
- Think of lexical scope as related to the compiler, the author time. You make a decision at author time about what will be in each scope.
- It is not affected at runtime, in any way, shape or form.
- The vast majority of programming languages in existence are lexically scoped.
- There is another concept of scoping, albeit very rare, called dynamic scope. Bash script is probably the most predominant example.

### 9.1. Lexical Scope

```js
var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";

  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}
```

- At author time when the function `ask` was put inside of `otherClass` the irrevocable decision was made that `teacher` being passed as the argument to `console.log` would point to the declaration `var teacher = 'Suzy';`.
- We figure all this at compile time, and we know that this will never change, so we don't need to figure it out at runtime.
- One of the reasons lexical scope is so popular is because it is so optimizable.

### 9.2. Dynamic Scope

- Dynamic scope does not exist in JS, but to explain it theoretically, we can look at how the example would be processed if it was.

```js
var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy";

  ask("Why?");
}
```

- When we encounter `teacher` as the argument to `console.log`, we wouldn't check the outer scope and assign `"Kyle"`.
- We would ask "where was the function `ask` called from?"
- `ask` cas called form the scope of `otherClass` so it would have the value of `"Suzy"`.
- In dynamic scope a function's reference to its variables depend on where the function was called from.
- Dynamic scope is determined based upon the conditions at runtime, whereas lexical scope is determined based upon the conditions at author time.
- Dynamic scope is very flexible, lexical scope is very predictable.

### 9.3. Function Scoping

- What problems does function scope solve?
- Imagine this scenario:

```js
var teacher = "Kyle";

{
  /* ... */
}
// 6 months later someone declares a variable of the same name!
var teacher = "Suzy";

console.log(teacher); // Suzy OOPS!
```

- There is a name collision.
- How do we fix this? Put them in different buckets.

```js
var teacher = "Kyle";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
}

anotherTeacher(); // Suzy
console.log(teacher); // Kyle
```

- But now we have a function that exists in the scope: `anotherTeacher`.
- So we haven't really fixed the problem - we have just shifted it to another variable name.
- We still have a naming collision problem.
- There is a principle in software development called **the principle of least exposure / privilege** that says: You should default to keeping everything private, and only expose the minimum necessary.
- There are three problems that this defensive approach solves:

1. It reduces the surface area for name collisions.
2. Someone can't accidentally/intentionally misuse it.
3. You protect yourself for future refactoring. If something is exposed and someone uses it, then it limits your ability to freely refactor it without breaking the code of whoever has used it -- If the person has an important enough job title they will squash your refactor!

### 9.4. IIFE Pattern

- **I**mmediately **I**nvoked **F**unction **E**xpression.
- A very common pattern.
- Fixes the problem of name collision, without polluting the scope with a new function name.

```js
var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();

console.log(teacher); // Kyle
```

- Not like a regular function that we call multiple times, it is a one off for creating a scope.
- It is not a function declaration because the keyword `function` is not the first thing in the statement.
- The enclosing `()` are there for no other purpose than to syntactically change it into an expression instead of a declaration.
- There are a variety of syntactic ways to change a function into an expression instead of a declaration.
- Instead of the surrounding `()` you can use a unary operator like `+`, `!`, `-`, `~` or even the lesser known `delete` or `void` operators.
- Each of those would change it into a function expression end enable it to execute.
- By turning a function into an expression we avoid polluting the enclosing scope.
- It is common to see anonymous IIFEs.

```js
var teacher = "Kyle";

// This IIFE is anonymous - never ever use anonymous function expressions!
(function (teacher) {
  console.log(teacher); // Suzy
})("Suzy"); // can also pass in values!

console.log(teacher); // Kyle
```

- Another less common use for IIFEs is to turn statements into an expression.
- If you would like to be able make an assignment to a variable, and have that assignment expression include a try / catch.
- But a try / catch is a statement so it doesn't work in an expression position.
- The next best hack is that we make a variable and assign to it twice:

```js
var teacher;
try {
  teacher = fetchTeacher1(1);
} catch (err) {
  teacher = "Kyle";
}
```

- To make it obvious to the reader of the code that `teacher` only gets assigned once, we can use an IIFE:

```js
var teacher = (function getTeacher() {
  try {
    return fetchTeacher1(1);
  } catch (err) {
    return "Kyle";
  }
})();
```

- IIFEs can be used any place that you need an expression, and any time you need a statement or a scope in an expression position.

### 9.5. Block Scoping

- Scoping that's done with blocks instead of functions.
- Same principle applies as with function scope: we put something inside of a block to hide it - avoid name collision, protect it from misuse, better enable free future refactoring.

```js
var teacher = "Kyle";
/*
(function anotherTeacher() {
  var teacher = 'Suzy';
  console.log(teacher); // Suzy
})();
*/

// instead of the IIFE...
{
  let teacher = "Suzy";
  console.log(teacher);
}

console.log(teacher); // Kyle
```

- You can't use block scope as expressions, but for statements they are OK.
- Using a `var` here would attach itself to the outer / function scope.
- You need to use `let` or `const` instead.
- `let` and `const` were designed to allow declarations inside of a block.
- Blocks`{}` are not scoped on their own, but only when `let` or `const` are used inside of them - `let` and `const` implicitly create the scope.
- Block scoping should be used to reinforce something that you would already naturally want to signal to the reader.

```js
function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
```

- `tmp` signals to the reader this is a temporary variable.
- It will not be reused anywhere else in the code.
- if it was a `var` it would attach itself to the scope of `diff`.
- But we are signalling semantically that the `tmp` belongs to the `if` statement.
- By using `let` you are enforcing what you were already semantically signalling.
- You should use it in places that are already obvious and correct design for you to block scope something.
- You should also be aware when reading existing code that if there is a `let` or `const` inside an `if` statement then it has its own scope and you need to be careful about what you move around things etc.

### 9.6. choosing let or var

- `let` and `const` are not replacements for `var`.
- There are still reasons to use the `var` keyword.

```js
function repeat(fn,n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }
  return result.
}
```

- If you have a variable that belongs to the scope of the function, the correct semantic way to signal that to the reader, is not to use a `let` at the top of the function scope, but to use a `var` because that's what it has always done for 25 years.
- If you were to replace `var result` with `let result`, even though functionally it would still work, it would remove a small amount of important semantic information.
- The reader wouldn't know whether the intent is to only use the variable at the top of the function, or for the entirety of it.
- `let` is supposed to signal a very localized usage.

- If you use a `let` in a place that would otherwise be considered just a block, the variable would attach itself to that block.
- Consider this example:

```js
function lookupRecord(searchStr) {
  try {
    var id = getRecord(searchStr);
  } catch (err) {
    var id = -1;
  }

  return id;
}
```

- If you use `let` inside of a try / catch it wouldn't work in the above example.
- You could declare the variable at the top of the function, but adding more lines of code, the further the declaration is from the assignment the harder it is for the reader to understand.
- It is better to have the option to use `var` in situations where it is warranted.
- Another thing you can do with `var` that you cannot with `let` is use it more than once inside of a scope. Above `var id` is being used twice inside of a function scope, and there are no errors.
- With large functions if the variable declaration at the top and it is assigned to 100 lines down, the reader may not be clear as to which scope it belongs to. Scrolling up 100 lines is not good DX, so reusing `var` to declare again would be clearer.
- So there are both semantic reasons and behavioural reasons that `var` and `let` can coexist in your programs.
- In the history of computer science hardly ever has something been introduced as a complete replacement for something else. It is nearly always an augmentation of what has previously existed.

### 9.7. Explicit let Block

- If you are in the habit of using `let` at the top of functions, and you are only going to use a variable for a few lines of code, rather than throwing it into the top level of the scope, you should create a scope for it:

```js
function formatStr(str) {
  // Explicit let block for collection of variables not needed by the entire function.
  {
    let prefix, rest; // prefix & rest only exist inside these few lines.
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }
  // prefix & rest can't possibly be collided or misassigned here later; they do not exist in this scope.
  if (/^FOO:/.test(str)) {
    return str;
  }

  return str.slice(4);
}
```

### 9.8. const

- `const` does not carry its own weight within the language.
- This means there might be a worth but the cost is not worth it.
- The benefit of `const` is not as great as you are led to believe, and there is a cost to using it.
- It should be used in specific places rather than a general replacement for `var`.
- The cost that comes with `const` is not just limited to JS. Every time it has been introduced to any language, devs have become confused.
- When we think of `const` we think of "constant" and something that doesn't change.
- It actually means a variable that cannot be reassigned.

```js
var teacher = "Suzy";
teacher = "Kyle"; // OK

const myTeacher = teacher;
myTeacher = "Suzy"; // TypeError

const teachers = ["Kyle", "Suzy"];
teachers[1] = "Brian"; // Allowed!
```

- The fact that `const` allows mutations of values as demonstrated the array above, creates all kinds of problems.
- When assigning an array to `const` readers may get the impression that the array won't change.
- You are supposed to use the `const` keyword within a very small block.
- What the `const` keyword is actually saying semantically, is: for the rest of this block I promise it is not going to get reassigned.
- `const` pretends as if it does some major awesome thing for us, but doesn't do much at all.
- Reassignment is not really the cause of many bugs.
- It is a like a night light in a child's bedroom: it protects the child from monsters, but we know there aren't really any monsters.
- Kyle only uses `const` when the value is a primitive and therefore immutable: `string`, `boolean` or `number`.
- And he uses it as a semantic placeholder for those literals. e.g. API URL.
- That's what constants are supposed to be for: to give semantic meaning as placeholders.
- Default to `var`, use `let` where it's useful, and use `const` with immutable primitive values.

### 9.9. Hoisting

- The word hoisting has been thrown around in JS for a long time. However it's only in the last few years that it has appeared in the spec.
- It turns out that hoisting is not actually a real thing!
- The JavaScript engine does not hoist.
- It does not move things around the way it is suggested.
- "Hoisting" is a metaphor that we have invented, an english language convention we have made up to discuss the idea of lexical scope, without thinking about lexical scope.

```js
student;
teacher;
var student = "me";
var teacher = "Kyle";
```

- Hoisting would say that code is moved, but in reality it is not:

```js
var student;
var teacher;

student; // undefined
teacher; // undefined
student = "me";
teacher = "Kyle";
```

- We know the compiler parses variable declarations first, and the variables are initialized at runtime during the second pass.
- We use the lexical scope discussion to apply this concept.
- People don't think about this as two passes, but rather as one pass.
- Hoisting gives a more convenient explanation that there is some magical behaviour, where the JS engine finds those variable declarations and moves them to the top of the scope before execution: which is literally how hoisting is described.
- JS does not do this: it does not move anything around in the code.
- If you want to find variable declarations further down the block, the only way you can do this is with parsing.
- Hoisting is therefore a shorthand, a convention to describe something without getting into the details.
- Hoisting is not necessarily a bad thing, but it's important to understand what really happens to save confusion in the future.
- It is neither the case that functions get moved:

```js
teacher(); // Kyle
otherTeacher(); // ??

function teacher() {
  return "Kyle";
}

var otherTeacher = function () {
  return "Suzy";
};
```

- Hoisting would say that code is moved based on declarations as follows:

```js
function teacher() {
  return "Kyle";
}
var otherTeacher;

teacher(); // Kyle
otherTeacher(); // TypeError

otherTeacher = function () {
  return "Suzy";
};
```

- For the exact same reason variables aren't moved, neither are functions.
- There is however an important distinction between function declarations and function expressions.
- JavaScript only "hoists" declarations, not initializations, and therefore not expressions.
- In the example, the declaration `otherTeacher` is "hoisted", but the function expression is not, so `otherTeacher()` will throw a `TypeError` when we try to run it.
- So to use the form of function where you only assign them to properties or variables, you must have the functions defined before you use them.
- Tip: It's arguably more readable to put executable code at the top of a function so the reader knows what it does straight away, and put all function definitions at the bottom, taking advantage of "hoisting".

### 9.10. Hoisting Example

- If we think about this as the two pass process that it is, of course `teacher` has been made available in the scope of `otherTeacher` before `otherTeacher` has had a chance to run.

```js
var teacher = "Kyle";
otherTeacher(); // otherTeacher is "hoisted"

function otherTeacher() {
  console.log(teacher); // undefined - the variable exists but has no value yet. It was "hoisted".
  var teacher = "Suzy";
}
```

- Almost universally you shouldn't assign to variables earlier in a scope than you declare them.
- Many more people allow function hoisting.
- It can be useful for readability to put executable code at the top, and the functions at the bottom.

```js
// var hoisting?
// usually bad :/
teacher = "Kyle";
var teacher;

// function hoisting?
// actually pretty useful!
getTeacher(); // Kyle

function getTeacher() {
  return teacher;
}
```

### 9.11. let Doesn't Hoist

- Many people claim that `let` doesn't hoist: this claim is **false**!

```js
{
  teacher = "Kyle"; // TDZ Error
  let teacher;
}

var teacher = "Kyle";

{
  console.log(teacher); // TDZ Error
  let teacher = "Suzy"; // If this didn't hoist, then the above line should print "Kyle"
}
```

- There is a difference in the way that `let` and `const` hoist.
- firstly they hoist to a block whereas `var` only hoists to a function.
- Secondly, when the scope is realised at runtime, `var` is initialized to `undefined`, whereas `let` and `const` are `uninitialized`.
- The `TDZ error` exists because of `const`. If `const` was initialized to `undefined` like `var` is, and then it was assigned the value `43`, then technically it would have had two different values at two different times, which academically violates the concept of a `const`. So TC39 decided that they needed to prevent you from accessing a variable earlier in the scope than when it is assigned, so that you can't observe it in that intermediate state.
- And then they decided if that was the case for `const` then it should also be for `let`.
- The spec says:

**_13.3.1 Let and Const Declarations_**
_let and const declarations define variables that are scoped to the running execution context's LexicalEnvironment. **The variables are created when their containing Lexical Environment is instantiated** but may not be accessed in any way until the variable's LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializer is assigned the value of its Initializer's AssignmentExpression **when the LexicalBinding is evaluated, not when the variable is created**. If a LexicalBinding in a let declaration does not have an Initializer the variable is assigned the value undefined when the LexicalBinding is evaluated._

## 10. Closure

- Lexical scope is fundamental foundation to understanding closure.
- One of the most prevalent concepts in all of programming.
- Been in JavaScript since the early days, and is a reason that JS has become so popular today.

### 10.1. What is Closure?

- **Closure is when a function “remembers” its lexical scope even when the function is executed outside that lexical scope.**
- The scope that the function was defined in has conceptually gone.
- But the function returned out of that scope retains a reference to it, and access to the variables that were created within it.

```js
function ask(question) {
  setTimeout(function waitASec() {
    /* question is not a variable that is declared inside of watASec.
     * It is created in the outer scope of the function ask (its parameter).
     * Immediately after we call setTimeout(), the ask() function has finished, so we
     * would assume that any variables created within the scope of ask() would get garbage collected.
     * But the timer is still waiting for 100ms with the function called waitASec in its memory,
     * and waitASec is referencing question, and as a result it keeps that scope alive to
     * preserve access to the question variable. That magic, is called closure.
     * It is said that "the waitASec function has closure over the question variable".
     */

    console.log(question);
  }, 100);
}

ask("What is a closure?"); // What is a closure?
```

- Generally speaking JS engines implement closure as a linkage to the entire scope, not a per variable basis.
- So if you have a variable in scope with data assigned to it, and you create a closure, even if you don't reference the variable that data may not get garbage collected.
- To create closure you just have to create a variable outside, and then just pass the function somewhere.
- It is almost as if closure is a necessary component of a language that is lexically scoped and has first class functions: If when you passed a function it forgot about all it's variables, it wouldn't be very helpful.
- We can also demonstrate closure by returning back a function, instead of passing one.

```js
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is a closure?");

// Some time later...

myQuestion(); // What is a closure?
// myQuestion still knows the content of the question variable because:
// question is closed over by holdYourQuestion, which is assigned to myQuestion.
```

### 10.2. Closing Over Variables

- A common misconception is that closure is a snapshot, and therefore a snapshot of values: capturing some value at a moment in time.
- But closure has nothing to do with values at all - you don't close over a value, rather you close over a variable.
- Closure is a preservation of the linkage to the variable, not a capture of the value.

```js
var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";

myTeacher(); // Suzy because the variable was closed over, not the value 'Kyle'.
```

- The classic situation that causes misunderstanding, is when creating closures inside of a loop.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}
```

- It has the appearance that it is closing over the `i` variable so that we expect the console to print `1, 2, 3`.
- But when we run it it prints `4, 4, 4,`
- Closure preserves access to the variable.
- By the time `setTimeout` releases the function to the event loop, when it is placed on the call stack the value of `i` is already `4`, since the loop has finished running and incremented `i` already.
- To solve this problem we would need to create separate variables in new scopes.

```js
for (var i = 1; i <= 3; i++) {
  let j = i; // will run every time the loop iterates.
  setTimeout(function () {
    console.log(`j: ${j}`);
  }, j * 1000);
}
```

- We are closing over `j` in three separate instances, each time the loop iterates.
- With ES6 is was decided that if you use `let` in the for loop clause, a new `i` for each iteration would be created automatically.

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}
```

- JS automatically wires up the declaration of a new `i` and assigns the value at the time of each iteration.
- This works with `for`, `for of` and `for in`.

### 10.3. The Module Pattern

- To understand what the module pattern is, we need to understand what the module pattern is not.

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("Is this a module?");
// Kyle Is this a module?
```

- This is not the module pattern. This is the **Namespace** pattern.
- Taking a bunch of functions and applying them as properties of an object is effectively collecting them into a namespace.
- Not a syntactic feature of JS but rather an idiom, where we make namespaces with objects.
- The reason this is not the module pattern, is that the module pattern requires the concept of encapsulation.
- _Encapsulation_ is a fancy CS word for the idea of hiding data and behaviour.
- The idea of a module, is that there are things that are public and things that are private.
- There is an idea of visibility.
- We can clearly see in the previous example that the properties and data are public, therefore it is not a module.
- The classic module pattern, sometimes referred to as the revealing module pattern, is described as follows:
- **Modules encapsulate data and behaviour (methods) together. The state (data) of a module is held by its methods via closure.**
- You cannot have a module without closure, that is key.
- The first classic module pattern was codified by Doug Crockford in 2001, and looks like this:

```js
var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  // ***************

  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("This is a module, right?");
// Kyle This is a module, right?
```

- Has two components:

1. Outer enclosing function, in this case an IIFE.
2. Inner function that is closed over the variables.

- The object `workshop` which has access to the inner function `ask` is preserving the scope through closure.
- `ask` is closed over teacher.
- We expose things on an object.
- We could have 100s of other functions that are private and could not be accessed form the outside, but the closed over functions can access everything it wants.
- The critical thing to note is that this usage of closure is actually closing over variables that are designed to change state over time.
- The whole purpose of a module is to track state over time.
- If you have a module that doesn't track state over time, than it's not a module, it's an over-engineered namespace.
- You can also write this as a module factory: every time the function `workshopModule` is called it produces a new instance of our module.

```js
function workshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  // ***************

  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop = workshopModule("Kyle");
workshop.ask("This is a module, right?");
// Kyle This is a module, right?
```

- The module pattern is the certainly the most prevalent and potentially the most important of all code organisation patterns.
- Probably 80-90% of all JS written uses this pattern.
- However you wouldn't call this pattern first class support in the language for the module pattern, you would call it an idiom: a pattern that accomplishes some end goal using the tools we have available.

### 10.4. ES6 Modules and Node.js

- For years there was clamoring for first class support for the module pattern in JS, since it was so important.
- So ES6 modules came to be, but are more of a work in progress!
- There was a process breakdown in that TC39 didn't communicate effectively with the Node.js team to ensure compatibility with npm.
- They have been working on a solution but there are only bad compromises when you get that far down the road.
- One of those compromises is the use of a different file extension: .mjs.
- There is a working group within Node who are working towards full support of ES6 modules in Node.
- You can think of the current implementation as being wrapped in a big function with automatic privacy.
- To make something public, you use the `export` keyword.
- Everything that you export is public, everything you don't export is private.

```js
var teacher;

export default function ask(question) {
  console.log(teacher, question);
}

// ************
import ask from "workshop.mjs";
```

- The other thing to note is that ES6 modules are file based. It is impossible to have more than one module in the same file.
- Without a build process if you wanted to ship to a browser, you would need to load separate files, with all the performance implications.
- The current standard usage is to author in ES6 modules and compile back to the classic pattern, and concatenate in a file to ship (Babel).
- Not only are ES6 modules file based but they are singletons: If you import a module into an application, it only ever runs once. Any additional imports are a reference to that same instance.
- So if you want to have a factory where people can create new instances, you need to use the classic module factory pattern.

### 10.5. ES6 Module Syntax

- There are two major styles of import:

```js
var teacher;

export default function ask(question) {
  console.log(teacher, question);
}

import ask from "workshop.mjs";
ask("This is a default import, right?");
// Kyle This is a default import, right?"

import * as workshop from "workshop.mjs";
ask("This is a namespace import, right?");
// Kyle This is a namespace import, right?"
```

1. **Named import syntax**\
   Technically the exported function is named `default` to the outside and then we decided to name it `ask` when we import it. Now at the top level scope we have an identifier `ask` which is reference bound to the `ask` function inside of the module.

2. **The namespace import**\
   Collect all of the module's contents into a single namespaced variable using `*`, in this case called `workshop`. This is more akin to the way modules have been done classically.

### 10.6. [Modules Exercise](exercises/scope-exercises/modules/ex.js)

## 11. Objects

### 11.1. The this Keyword

- Probably the most perpetually confused of all the JavaScript features.
- In incredibly powerful feature that has frequently been explained and taught incorrectly.
- A function's `this` references the execution context for that call, determined entirely by **how the function was called**.
- Many people think you can look at a function and figure out its `this` reference, but the function definition doesn't matter at all.
- The only thing that matters is how the function is invoked.
- A `this`-aware function can thus have a different context each time it's called, which makes it more flexible & reusable.

```js
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "Why?"); // Suzy Why?
}

otherClass();
```

- By using `.call()` we are saying to use this particular object as the `this` keyword, and invoke the function in that context: `myContext`.
- The same `ask` function could be called in lots of different ways, and we could provide lots of different context objects.
- That's the dynamic and flexible usability of the `this` keyword.
- It exists so we can invoke functions in these different contexts.

### 11.2. Binding the this Keyword

- There are four different ways to invoke a function, and each of them will provide a different answer to what the `this` keyword is.

#### 11.2.1. Implicit Binding

- The first way to invoke a function.
- Because of the call site the `this` keyword will point at the object that is used to invoke it.

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is an implicit binding?");
// Kyle What is an implicit binding?
```

- `workshop.ask` says invoke the `ask` function with the `this` keyword pointing at `workshop`.
- That is exactly how the `this` binding works in all other languages.
- This is the most common and intuitive of the rules, because it decides the method based on what object you call it from.
- The idea of having implicit binding is useful because this is how we share behaviour among different contexts.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?
```

- One function, used in lots of different contexts.
- Recall that lexical scope is fixed and predictable, and not at all affected at runtime.
- Here we have a feature that is not fixed and predictable, that is entirely dynamic and determined at runtime.
- The tradeoff here is very intentional, and what we are getting is the choice between predictable and flexible.
- There are times when the flexibility is a downside, and predictability is preferred.

#### 11.2.2. Explicit Binding

- The second way to invoke a function.
- The `.call` and its cousin the `.apply` method both take as their first argument a `this` context.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
};

var workshop2 = {
  teacher: "Suzy",
};

ask.call(workshop1, "Can I explicitly set context?");
// Kyle Can I explicitly set context?

ask.call(workshop2, "Can I explicitly set context?");
// Suzy Can I explicitly set context?
```

- `ask.call` says invoke the `ask` function with the `this` keyword pointing at `workshop1`.
- Very similar to the first rule in that we are sharing the function among different contexts.
- But here we are sharing the function explicitly rather than implicitly.
- We are saying wherever this function comes from, invoke it in a particular context which I am going to specify.
- There is an extremely common phenomenon to the explicit binding rule regarding losing the `this` binding.
- Sometimes when you pass a function around you find that it can lose it's `this` binding, causing frustration.
- To circumvent this phenomenon we can introduce a sub-rule called **hard binding**.

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?
setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
// Kyle Hard bound this?
```

- With `setTimeout(workshop.ask, 10, 'Lost this?');` you have to imagine what the call site would be when the `ask` function runs.
- It is not going to be `workshop` and because of that `ask` will not be invoked in the `workshop` context.
- The `this` binding is therefore lost and we get `undefined`.
- Technically the `setTimeout` utility is defined by HTML, and would explicitly invoke `ask` with `.call` in the context of global, so in the case of the browser the `window` object.
- The solution is to use `.bind` which removes the flexibility of the feature and forces the function to be invoked in the context specified.
- The `.bind` method doesn't invoke the function, it produces a new function which is bound to a particular specific `this` context.
- How do we deal with this tension? There are times when the flexibility is useful, but sometimes we need predictability.
- If you go to the trouble to write a set of `this`-aware code, and most of the call sites are using the flexible dynamism with only a few occasions that require a hard binding, then you are getting a lot of benefit out of that system. It's a reasonable tradeoff.
- However if you find that nearly all the call sites require hard binding, then it's a sign you should go back to the predictable lexial scope behaviour and use closure i.e. the module pattern.
- Use the right tool for the job: If you want flexibility use the `this` keyword. If you want predictability use closures.

#### 11.2.3. new Keyword Binding

- The third way to invoke a function.
- The new keyword seems as if it has something to do with invoking class constructors.
- It has nothing to do with classes. It is an unfortunate syntactic trick.
- The purpose of the `new` keyword is to invoke a function with the `this` keyword pointing at a whole new empty object.
- The `new` keyword does have other features, but for the purpose of this discussion you could accomplish the same thing with `.call({}, ...);`.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var emptyObject = new ask("What is the new keyword doing here?");
// undefined What is the new keyword doing here?
```

- The `new` keyword does four very specific things which are not particularly obvious when you look at the call site.

1. Create a brand new empty object
2. Link that object to another object ([See prototype chain](#122-the-prototype-chain))
3. Call function with `this` set to the new object
4. If the function does not return an object, assume return of `this`

#### 11.2.4. Default Binding

- The fourth (and final) way to invoke a function.
- The fallback if none of the other three match.
- A plain old function call.
- The fallback as defined in the spec is to default to global.

```js
var teacher = "Kyle";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain() {
  "use strict";
  console.log(this.teacher, question);
}

ask("What is the non-strict-mode default?");
// Kyle What is the non-strict-mode default?

askAgain("What is the strict-mode default?");
// TypeError
```

- In strict mode when you invoke the function with no other `this` binding, the default behaviour is to leave `this` undefined.
- So when you try to access the property `teacher` on `undefined` you get a `TypeError`.
- This is intentional because it is almost certainly an error on your part to define a `this`-aware function and invoke it without any `this`.
- It is almost never the case that you would want `this` to point to global in the same way you wouldn't want global variables.
- Strict mode fixes that for us and tells us we've made an error. You need to use one of the other three ways.

### 11.3. Binding Precedence

- What if you have a crazy call site, where three of the four rules apply?

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined What does this do?
```

- If more than one rule matches a call site, what is the order of precedence?

1. Is the function called by `new`?
2. Is the function called by `call()` or `apply()`?
   Note: `bind()` effectively uses `apply()`
3. Is the function called on a context object?
4. DEFAULT: global object (except strict mode)

### 11.4. Arrow Functions and Lexical this

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
};

workshop.ask('Is this lexical "this"?');
// Kyle Is this lexical this?
```

- The `this` binding when the arrow function callback is invoked, is correctly pointing to the `workshop` object's context.
- This is what we refer to as **lexical this** behaviour.
- Many people have in their minds that an arrow function is hard bound (i.e.`.bind()`) to the parent's `this`. That is not accurate.
- The proper way to think about arrow functions is that they do not define a `this` keyword at all.
- There is no such thing as a `this` keyword in an arrow function.
- If you use a `this` keyword in an arrow function, it is going to behave like any other variable: it will lexically resolve to the next enclosing scope that does define a `this` keyword.
- In this example the `ask` function's `this` is set by the call site, therefore when the callback gets invoked it essentially is closed over the parent scope of `ask` which has a `this` reference to the `workshop` object.

- The [spec](https://www.ecma-international.org/ecma-262/11.0/#sec-arrow-function-definitions-runtime-semantics-evaluation) says:

_An ArrowFunction does not define local bindings for arguments, super, this, or new.target. Any reference to arguments, super, this, or new.target within an ArrowFunction must resolve to a binding in a lexically enclosing environment._

- **If you think incorrectly about how a piece of code works, even if it accidentally works in that moment, your incorrect thinking will systemically lead to more bugs down the line.**
- There is only one fix for that: To think like JavaScript thinks.
- ~~An arrow function is this-bound (aka .bind()) to its parent function~~.
- **An arrow function doesn't define a `this`, so it's like any normal variable, and resolves lexically (aka "lexical `this`").**

### 11.5. Resolving this in Arrow Functions

- We tend to think that curly braces must be scopes.
- Just because there are curly braces around the object doesn't make it a scope.

```js
var workshop = {
  teacher: 'Kyle',
  ask: (question) => {
      console.log(this.teacher, question);
    }
  },
};

workshop.ask('What happened to "this"?');
// undefined What happened to this?

workshop.ask.call(workshop, 'Still no "this"?');
// undefined Still no this?
```

- Objects are not scopes.
- This is a very common mistake and there are 100s of questions on StackOverflow around this misconception.
- `this` would therefore be the global object.
- You have to think about an arrow function as having no `this` and it resolving lexically.
- There are only two scopes in this example: `ask` and global.
- It is unfortunate that we have overloaded the `{}` which makes us think they always create a scope.
- Given the previously discussed problems with arrow functions (anonymous, harder to debug etc.), the only time you should use an arrow function is when you will benefit from lexical this behaviour.
- The arrow function absolutely is useful in this scenario. It actually matches the mental model of what we want; the `this` keyword to behave lexically.
- **Only use `=>` arrow functions when you need lexical this.**
- [eslint plugin](https://github.com/getify/eslint-plugin-proper-arrows) to enforce it!
- If you are going to use an anonymous arrow function to make use of lexical this, then you need to combat those three downsides:

1. Anonymous functions don't have a self-reference.
2. They don't have a name for debugging (assign it to a variable to have it inferred)
3. Have some way to make it obvious to the reader what the purpose of the function is (don't make them read the function body).

- Arrow functions do not introduce a new rule for `this`, which is good. They simply do not have a `this`.

### 11.6. [this Exercise](exercises/objects-exercises/this/ex.js)

### 11.7. ES6 class Keyword

- The class pattern is by far the most prevalent pattern used in JS.
- The `class` keyword is syntactic sugar layered upon the prototype system.
- classes can be defined with or without an extends clause.
- Do not need to use `,` in between methods.

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
// Kyle Is 'class' a class?

reactJS.ask("Is this class OK?");
// Suzy Is this class OK?
```

- If you want to extend one class into another you use the `extends` clause.
- You don't have to redefine any methods because they will be inherited.

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Are classes getting better?");
// Kyle Are classes getting better?
```

- When we instantiate the child class, we can invoke the method `speakUp` as if it was on the object.
- There is also the `super` keyword that allows us to do relative polymorphism.
- If you have a child class that defines a method of the same name as a parent class (called shadowing), you can refer to the parent from the child using `super`.

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  ask(msg) {
    super.ask(msg.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.ask("Are classes super?");
// Kyle ARE CLASSES SUPER?
```

- This is an example of extension of syntactic sugar. Prior to ES6 classes, there was no way to do relative polymorphism.
- If you pay attention to the spec there is a whole bunch of new features coming to classes.
- There is nothing different in classes about how function calls are made or the `this` keyword gets bound.

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100, "Still losing this?");
// undefined Still losing this?
```

- But many developers didn't like this decision, and want JS to force class methods to be auto-bound the way they are in more traditional class-based languages.
- This has caused an explosion of patterns where people want hard bound methods, so what you see a lot of is methods added to the constructor using an arrow function or hard bound method.

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => {
      console.log(this.teacher, question);
    };
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100, 'Is "this" fixed?');
// Kyle Is "this" fixed?
```

- By doing this you are betraying the entire system that classes was built upon.
- The class system is built upon the idea that the methods don't exist on your instances but on the prototypes.
- Also you end up with a function copied to every instance. In reality this is just a terrible version of a module!
- The class system is great if you want to use polymorphism and multiple levels of inheritance, it's just that the vast majority of people use them in this way abandon the flexibility and end up with something that could be better accomplished with the module pattern.

### 11.8. [Classes Exercise](exercises/objects-exercises/class/ex.js)

## 12. ProtoTypes

- Objects that exist in our programs that we can see or we create or interact with, are always created with **constructor calls** via `new`.
- It is not the same as a constructor, but a different term.
- When we use `new` in front of a function call, it's _constructing_ an object to be used for the `this` binding of that function call.
- It is often said a "constructor call" makes an object “based on” its own prototype, but this is not accurate.
- To move away from JavaScript for discussion's sake...
- In computer science foundations of class theory, the most common metaphor to distinguish a class from an instance is that a class is the abstract pattern or blueprint, and the instance is when the blueprint is constructed into a building.
- This infers the assumption that class oriented coding is fundamentally a copy operation.
- There is no one standard pattern for what the class design is, there are lots of different ones.
- But it is also true that the majority of people who write classes in JavaScript have a mental model from Java or C++.
- The relationship between the blueprint and the building only existed during the split second that it was being instantiated.
- The characteristics from the blueprint were copied into the building, and the relationship then ceased to exist.
- When you make an instance of a class, the mental model is that the instance is a copy of all the behaviours, they are inherited.
- When you talk about classes you immediately start talking about parent and child classes.
- Inheritance is also fundamentally a copy operation.
- The metaphor most often used to describe inheritance is the genetic metaphor.
- When many languages' compilers and interpretors implement classes, they actually flatten them for performance reasons, they will literally copy down into the instance, because it is much faster for the instance to have a reference to the function than to look up some dynamic hierarchy chain.
- The hierarchy chain is only maintained for relative polymorphism: called a virtual table (C++).
- In any way you interpret it, computer science foundations of class theory say that the relationship implied by classes is a copy relationship.
- The statement that in JavaScript a "constructor call" makes an object “based on” its own prototype, also implies that the constructor is making a copy of the prototype in the instance.
- But JavaScript doesn't do any copying at all.
- The correct statement would be: A "constructor call" makes an object **linked to** its own prototype.
- Copying and linking are fundamentally and diametrically opposite to each other.
- It can completely change what your expectation of a system is, if your mental model is based on copying, or based on linking.
- It matters what model you are using because a program will break if there is a divergence between your mental model and what the system was actually doing.
- If you are thinking about copying and the system is linking, bugs will occur.
- Kyle has a problem with the notion of taking the class system, which has a design pattern which is fundamentally copy, and putting it on top of a language that doesn't do copies. It doesn't fit.
- It isn't surprising there has been so much trouble making JavaScript look, feel and behave like a class oriented language.

### 12.1. Prototypal Class

- Underneath the sugar, this is what the class system in JavaScript looks like.

```js
// Acts as a constructor function.
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

// When we use the new keyword it will invoke the Workshop function,
// and the object that gets created will be linked to Workshop.prototype
var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

/* It's important to understand that the deepJS object does NOT have an ask method.
 * Instead it is prototype linked to Workshop.prototype, and when we call deepJS.ask()
 * it will delegate one level up the prototype chain from deepJS up to Workshop.prototype,
 * and when it invokes the ask method it is done so in the this context of the deepJS object.
 */

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?
```

- We wouldn't write code like this these days, we would use the built in class system.
- But it is important ti understand what's happening under the hood so that when things break we understand what's going on.

### 12.2. The Prototype Chain

- To understand the prototype chain, we will break down the example which demonstrates what is happening under the hood:

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
reactJS.ask("Isn't 'prototype' ugly?");
```

- At the very top level, the line 0 environment, before your program has even started to run, there is the `Object` fundamental object.
- This is not only an object but also a function with a lot of fundamental utilities, so serves as a namespace with a bunch of methods.
- Also in the line 0 environment, there is an object which is probably the most important in all of JavaScript, but it doesn't have a name.
- We name it by referring to what points at it.
- There is a property on the `Object` function that points to the unnamed object. That property is `prototype`: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
- It has a lot of important utilities, and all non-primitives descend from `Object.prototype`.
- There is one other thing that exists in the line 0 environment; a property that points from `Object.prototype` back to `Object`.
- For this additional property they chose a really perplexing and frustrating name. They chose a name to pretend as if the JavaScript system had classes: it is called `constructor`.
- It implies that the object function is the constructor of the object that points to it, which it isn't.
- That word `constructor` in this fundamental prototype system has no more meaning than the word `foobar`.
- Using the word `constructor` serves to help with the artifice that we are dealing with a class oriented system.

- We create the `Workshop` function.
- This also creates an object, which is referred to by the property that points to it: `prototype`.
- And there is a property that points from the object back to the `Workshop`: `constructor`.
- There is a hidden relationship between `Workshop.prototype` and `Object.prototype`.
- `Workshop.prototype.ask` adds the property `ask` to the the object referenced with `Workshop.prototype`.

- Recall the four things that happen with the `new` keyword:

1. Create a brand new empty object
2. Link that object to another object
3. Call function with `this` set to the new object
4. If the function does not return an object, assume return of `this`

- So with `var deepJS = new Workshop('Kyle');`

1. A new object is created.
2. The new object is linked to the object referenced with `Workshop.prototype`.
3. We invoke the function and run `this.teacher = teacher;`, so the new object gets a property of `teacher`.
4. The function does not return an object, so the new object (`this`) is returned and assigned to the identifier `deepJS`.

The same steps repeat for `var reactJS = new Workshop('Suzy');`

- Next `deepJS.ask("Is 'prototype' a class?");` runs, but `deepJS` doesn't have an `ask` method.
- We are able to call the method because of internal hidden linkage called **the prototype chain** (In the spec they use `[[prototype]]`).
- When we look for a property on an object and it doesn't exist, by default we look at the next object in the prototype chain.
- The object identified with `deepJS` is connected to the object referenced with `Workshop.prototype`, which does have an `ask` method.
- When we invoke the `ask` method and run `console.log(this.teacher, question);` which has a `this` context of `deepJS` since `deepJS` was the call site. It doesn't mater that we found the `ask` method further up the prototype chain on `Workshop.prototype`.
- The same steps repeat for `var reactJS = new Workshop('Suzy');`

- We are able to share a method between numerous objects all because of the `this` behaviour and the prototype chain.
- It is an awesome system, but too limiting to only think about it through the lens of classes.

### 12.3. Dunder Prototypes

- Recall the `constructor` property that points from the `Workshop.prototype` back to `Workshop`.
- Consider the following.

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");

deepJS.constructor === Workshop; // true

deepJS.__proto__ === Workshop.prototype; // true
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true
```

- Why is it that `deepJS.constructor === Workshop` returns `true` if there is no `constructor` property on `deepJS`?
- Because of the same behaviour as with `ask` previously:
- When we look for a property on an object and it doesn't exist, by default we look at the next object in the prototype chain.
- `deepJS` is linked to the object referenced with `Workshop.prototype`.
- `Workshop.prototype` has a `constructor` property that points back to `Workshop`.
- This seems to imply that `deepJS` was constructed by `Workshop`, but we know that the `new` keyword is what actually created it.
- The `Workshop` object almost had nothing to do with it.
- It just happens that these properties exist that create links to infer that a class system has occurred.
- The cool kids in JS like to refer to the `__proto__` property as **dunder proto**.
- `__proto__` doesn't exist on `deepJS` nor `Workshop.prototype` but at the top of the chain `Object.prototype` it does.
- `__proto__` exists on `Object.prototype` but it isn't a property, it is a getter function.
- When the getter function is invoked on `Object.prototype` its `this` keyword is `deepJS` because `deepJS` is the call site.
- The getter of `__proto__` returns the linked `prototype` object, which in the context of `deepJS` is `Workshop.prototype`.

### 12.4. Shadowing Prototypes

- By assigning a function with `deepJS.ask` below we are shadowing, because we have two levels of the prototype chain with the exact same property.

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");

deepJS.ask = function (question) {
  this.ask(question.toUpperCase);
};

deepJS.ask("Oops, is this infinite recursion?");
```

- The `this` of ask will point to the call site as always, which is `deepJS`.
- So we will enter an infinite recursive call of the function `ask`.
- Recall the statement: _If you have a child class that defines a method of the same name as a parent class (called shadowing), you can refer to the parent from the child using `super`._
- So this `this.` doesn't work in place of a `super` here. It is not a relative polymorphic reference.
- How do we go one level up the prototype chain?
- We could use `__proto__`, but if we referenced `this.__proto__.ask` the call site for `ask` would be `Workshop.prototype` because that's what `__proto__` will return as the linked object.
- So we have the following abomination of code as a hack:

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");

deepJS.ask = function (question) {
  this.__proto__.ask.call(this, question.toUpperCase());
};

deepJS.ask("Is this fake polymorphism?");
// Kyle IS THIS FAKE POLYMORPHISM?
```

- We find the method one level up the prototype chain but have to invoke it in the current `this` context.
- This could be referred to as explicit polymorphism!
- And if we needed to go up another level we would need to write `this.__proto__.__proto__ask`!
- When you try to shadow without using the class system, there is no way to do relative polymorphism.
- In class design theory the whole point of having a child class, is that you can inherit something from the parent, override it, and then call `super` to access the parent version of it.
- So we are trying to override and extend the `ask` method outside of the class system and it simply doesn't work.

### 12.5. Prototypal Inheritance

- If we wanted a parent-child relationship in the prototypal style, we could achieve it as follows.

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function (msg) {
  this.ask(msg.toUpperCaseI());
};

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Is this actually inheritance?");
// Kyle IS THIS ACTUALLY INHERITANCE?
```

- We define `AnotherWorkshop` constructor.
- The way we make `AnotherWorkshop` extend or inherit from `Workshop` is `Object.create`.
- We are saying take the original prototype that we initially got `AnotherWorkshop.prototype` which is not what I want, and change where it links to `Workshop.prototype`.
- `object.create` is a utility built into ES5 and it does two things:

1. Create a brand new empty object
2. Link that object to another object

- The same first two steps as the `new` algorithm.
- Although it is an anti-pattern we could also write `AnotherWorkshop.prototype.__proto__ = Workshop.prototype;`.
- The linkage that exists between these objects is a good thing, but we have a bunch of stuff layered on top, with things that look like constructor functions, verbose use of `prototype` everywhere, confusing `new` keyword instances, and all of this artifice is on top of theses three objects linked together.
- It is the objects being linked together that creates all of the power. it enables `JSRecentParts.speakUp(...);` to work.
- `JSRecentParts` has no method `speakUp`. It is found up the prototype chain.
- No matter how far you need to go up the prototype chain, the `this` binding is still controlled at the root by the call site.

### 12.6. Classical vs Prototypal Inheritance

- In classical oriented languages (C++, Java) when you you make a class called `Workshop` and instantiate it, you are conceptually and in some cases physically copying down into those instances.
- And when you create a child class `AnotherWorkshop` you are copying down into that.
- And when you instantiate the child class you are doing more copies.
- The links go from top-to-bottom, left-to-right.
- When you try to do prototypal inheritances, you have a `Workshop.prototype` object, and then you make other objects `deepJS` and `reactJS` which are linked to `Workshop.prototype`.
- And when you make `AnotherWorkshop.prototype` it is linked to `Workshop.prototype`.
- The links go from bottom-to-top, right-to-left.
- This is often referred to as **prototypal inheritance**.
- However the word _prototypal_ doesn't really mean anything to most people. But the word _inheritance_ does have meaning, and most dev's brains have been programmed to think of inheritance as having copy relationships.
- For years JavaScript developers have been confused as to why classes in JS do not work the same as in other languages, which is because the systems are fundamentally different.
- The emotional attachment to the class design pattern has been pandered, by adding extra complexity on top of JavaScript to suit the syntactic sugar desires instead of embracing what JavaScript already is.
- Why not embrace the prototype system, the dynamic `this` nature?
- Instead we keep trying to put all these other things into JavaScript so it can be a class system, but in reality it is not.
- We keep duct taping the language to make it look like classes instead of embracing it for what it truly is.

### 12.7. Inheritance is Delegation

- The prototype system is fantastic, but it is a different design pattern to classes.
- JavaScript ~~“Inheritance”~~ “Behaviour Delegation”.
- That's what JavaScript's prototype system is: a delegation system, not a class system.
- A class system doesn't fit in a system that was designed to be a delegation system.
- It would be better to use the system the way it was designed to work.
- It has been observed, that if you compare a prototypal (delegation) system to a class system, the prototypal system is significantly more powerful than the class system, because you can implement a class system inside of a prototypal system, but you cannot do the reverse.
- So we chose to take a powerful prototypal system, and use it in one very specific way that's not even a particularly good usage of the system, and spent 20 years banging our heads because it doesn't work like it does in other languages.
- The wrong pattern is being used, and sometimes because a framework is making the choice for us.

### 12.8. OLOO Pattern

- What can we do with delegation if we set aside our preconception that classes are the only design pattern that matters?
- Let's look an another way of using the prototype system that has more potential.
- Kyle has coined the term OLOO: **O**bjects **L**inked to **O**ther **O**bjects.
- There are two languages in existence, JavaScript and Lua, wherein you can create an object without any class.
- So if you think about it the only true object oriented languages are JavaScript and Lua.
- But the term object oriented has been assigned to class oriented languages so we are stuck with it.
- Recall the class syntax in JS:

```js
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Are classes getting better?");
// Kyle ARE CLASSES GETTING BETTER?
```

- But remember under the syntactic sugar, what's really happening is that we are implying all these prototypes.

```js
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function (msg) {
  this.ask(msg.toUpperCase());
};

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Isn't this ugly?");
// Kyle ISN'T THIS UGLY?
```

- What if we could code in a style that accomplishes the same thing, but without any of the baggage of thinking or designing with classes, or worrying about super or prototypes, and certainly never needing to use the `new` keyword again. What if we could just link objects to objects?
- Here is the OOLO representation:

```js
var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  },
};

var AnotherWorkshop = Object.assign(Object.create(Workshop), {
  speakUp(msg) {
    this.ask(msg.toUpperCase());
  },
});

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?");
// Kyle BUT ISN"T THIS CLEANER
```

- Everything is just an object.
- We are getting the same benefits of a class system, without the `.prototype`s, the `constructor` functions or the `new` keywords.
- We just have objects linked to other objects.
- `Object.create` creates and links objects for us.
- Line-for-line there is also very little syntactic difference between this style and the class system.
- OLOO exposes to you directly what it is, rather than pretending with an artifice that it is something it is not.
- But how does `Object.create` do that magic?
- This is an old polyfill for `Object.create`.

```js
if (!Object.create) {
  Object.create = function (o) {
    function F() {} // all those constructor functions
    F.prototype = o; // all those .prototypes
    return new F(); // all those new keywords
  };
}
```

- In other words we take all those `constructor` functions, and all those `.prototypes`, and all those `new` keywords and hide them inside of `Object.create`.

### 12.9. Delegation-Oriented Design

- Delegation is a design pattern.
- Design patterns should affect the way that you think about designing your code.
- How should delegation be approached to solve problems differently?
- Imagine you have a login page that you need to construct in your application.
- You are going to have two different controllers:
  - AuthControllerClass: represents the authentication with the server
  - LoginFormControllerClass: represents all the UI components
- The old school way to design this is to ensure both sets of behaviours are both composed or you have access to both.
- So you would have AuthControllerClass as a parent class, LoginFormControllerClass as the child class, and then you instantiate to get a pageInstance which has all the methods from both AuthControllerClass and LoginFormControllerClass present in the instance.
- That would be the inheritance approach: **Composition Thru Inheritance** - the 1980's and 1990's vision of how software should be built.
- Somewhere in the mid to late 90's it was said having inheritance 30 levels deep was an anti-pattern, and instead of Composition Thru Inheritance it should be composition instead of inheritance AKA **composition over inheritance**.
- Get rid of all these vertically linked chains, and have things compose themselves together.
- One way to achieve this is to instantiate the two classes AuthControllerClass and LoginFormControllerClass and have one of them be a property of the other.
- And then it was said it would be ugly with all of these properties, and it would be better to do mixins.
- Mixin composition which says to instantiate the two classes AuthControllerClass and LoginFormControllerClass and copy all the methods from one into the other.
- All of these are solutions to the problem that you want to separate the logic, but they need to be composed for the page to work.
- Delegation's answer to this is:

1. You stop thinking about parent-child and start thinking about peer-to-peer.

```js
var AuthController = {
  authenticate() {
    server.authenticate(
      [this.username, this.password],
      this.handleResponse.bind(this)
    );
  },
  handleResponse(resp) {
    if (!resp.ok) this.displayError(resp.msg);
  },
};

var LoginFormController = Object.assign(Object.create(AuthController), {
  onSubmit() {
    this.username = this.$username.val();
    this.password = this.$password.val();
    this.authenticate();
  },
  displayError(msg) {
    alert(msg);
  },
});
```

- LoginFormController is linked through the prototype chain to AuthController but you could interact with them separately if you wanted to.
- These two separate objects have virtually composed each other over the shared `this` context.
- This is a very different way to think about software design.
- They can call each other's methods as required.
- Because these objects exist independently and are only linked through the the prototype chain, they become much more testable than when dealing with class hierarchies.
- You can mock the AuthController to test the LoginFormController and vice versa.
- If you taking seriously the undertaking of properly understanding JavaScript, then you should think about how to use the language in its effectively designed way.
- Even with all the sugar layered on the class system it is not what JavaScript does inherently.
- What JavaScript does inherently, is prototype delegation.

## 13. Summary

- If for whatever reason you have decided to make your career centred around JavaScript, doesn't it make more sense to know your JavaScript?
- Be more curious, ask more questions, want to know why the code works so you can fix it when it breaks.
- Read the spec one in a while, and understand and have a mental model.
- Through the understanding of JavaScript communicate your ideas and your intent more effectively.
