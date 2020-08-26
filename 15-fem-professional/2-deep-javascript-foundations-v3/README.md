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

## 3. Coercion

- When you think of conversion think of coercion, they are the same as far as JS is concerned.

### 3.1. Abstract Operations

- Abstract operations are the fundamental building blocks of how we deal with type conversion.
- The JavaScript spec says:

**7 Abstract Operations**
These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification.

**7.1 Type Conversion**
The ECMAScript language implicitly performs automatic type conversion as needed. To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. The conversion abstract operations are polymorphic; they can accept a value of any ECMAScript language type. But no other specification types are used with these operations.

The BigInt type has no implicit conversions in the ECMAScript language; programmers must call BigInt explicitly to convert values from other types.

- Abstract operations are not functions that can be invoked. When we call them abstract they are a conceptual operation, so conceptually we need to do a set of algorithmic steps to complete the operation.

#### 3.1.1. ToPrimitive (7.1.1)

- If we have something non-primitive like an object or array, and we need to coerce it into a primitive, we would use the `ToPrimitive` abstract operation.
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
- Array for example have a default `ToString` that serializes the representation of an array as follows.

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
  - `null`
  - `NaN`
  - `false`
  - `undefined`

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

var msg1 = 'There are ';
var msg2 = 'students.';
console.log(msg1 + numStudents + msg2);
// Coerced to a string implicitly!

console.log(`There are ${numStudents + ''} students.`);
// Coerced to a string implicitly!
```

- The spec says that if you use the `+` operator, if either one of the values is a string, the operator prefers string concatenation.

**12.8.3.1 Runtime Semantics: Evaluation**

1. If Type(lprim) is String or Type(rprim) is String, then
   a. Let lstr be ? ToString(lprim).
   b. Let rstr be ? ToString(rprim).
   ...

- You may say you don't want to do these implicit coercions and would rather be explicit about it.

```js
var numStudents = 16;

console.log(`There are ${[numStudents].join('')} students.`);
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
- One of unsung heroes of JS, that it does this boxing and does it well.

**All programming languages have type conversions, because it's absolutely necessary.**

**You use coercion in JS whether you admit it or not, because you have to.**

### 3.4. Corner Cases of Coercion

**Every language has type conversion corner cases**

- People use JavaScript's coercion as ammunition to criticize the language because they don't understand it.
- It is impossible to design a system without corner cases.

```js
Number(''); // 0 OOPS!
Number('  \t\n'); // 0 OOPS!
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
studentsInput.value = '';

Number(studentsInput.value); // 0

studentsInput.value = '  \t\n';

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
- If you ask the reader of code to understand something about the tool so they can understand a line of code, that is ain investment on their part. Ensure that investment pays off beyond that line of code.
- That's part of the problem with not having a great dev culture: not promoting that everyone should understand.
- From someone who's been writing JS for 3 weeks to someone who has 20 years experience, we should all be able to operate on the same codebase and communicate well.

### 4.3. Implicit Coercion

- There is a temptation to believe and a cult feeling among the community that most devs think that implicit mechanisms are magical.
- When something happens that is unexpected it is magical, and we equate this with bad.
- This is part of the reason why anti-coercion perspectives exist, that implicit coercion is the downfall.
- People say this is a weakness if JS and cite other languages as being better.
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

**7.2.15 Abstract Equality Comparison**\
The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is the same as Type(y), then
   a. Return the result of performing Strict Equality Comparison x === y.
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is BigInt and Type(y) is String, then
   a. Let n be ! StringToBigInt(y).
   b. If n is NaN, return false.
   c. Return the result of the comparison x == n.
7. If Type(x) is String and Type(y) is BigInt, return the result of the comparison y == x.
8. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
9. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
10. If Type(x) is either String, Number, BigInt, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
11. If Type(x) is Object and Type(y) is either String, Number, BigInt, or Symbol, return the result of the comparison ToPrimitive(x) == y.
12. If Type(x) is BigInt and Type(y) is Number, or if Type(x) is Number and Type(y) is BigInt, then
    a. If x or y are any of NaN, +∞, or -∞, return false.
    b. If the mathematical value of x is equal to the mathematical value of y, return true; otherwise return false.
13. Return false.

- There is a myth that `==` checks the value and `===` checks the value and type: debunked on line 1!

```js
var studentName1 = 'Frank';
var studentName2 = `${studentName1}`;

var workshopEnrolment1 = 16;
var workshopEnrolment2 = workshopEnrolment1 + 1;

studentName1 == studentName2; // true
studentName1 === studentName2; // true

workshopEnrolment1 == workshopEnrolment2; // true
workshopEnrolment1 === workshopEnrolment2; // true
```

- When the types match `===` is performed in any case.
- You should try to have the value types obvious and ideally have them match as much as possible.

**7.2.16 Strict Equality Comparison**\
The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is different from Type(y), return false.
If Type(x) is Number or BigInt, then
Return ! Type(x)::equal(x, y).
Return ! SameValueNonNumeric(x, y).

- Strict equality in the spec states that if the types are not the same then there is no way the operands could be equal.
- The real difference between loose and strict equality is whether or not we are going to allow any coercion to occur.

```js
var workshop1 = {
  name: 'Deep JS Foundations',
};

var workshop2 = {
  name: 'Deep JS Foundations',
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
- **Like every other operation, do we know the types or not?**]

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

4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is BigInt and Type(y) is String, then
   a. Let n be ! StringToBigInt(y).
   b. If n is NaN, return false.
   c. Return the result of the comparison x == n.
7. If Type(x) is String and Type(y) is BigInt, return the result of the comparison y == x.
8. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
9. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).

- It prefers to reduce everything to numbers to make the comparison.
- This helps to predict the behaviour of the `==` algorithm.

```js
var workshopEnrolment1 = 16;
var workshopEnrolment2 = workshopElement.value;

if (Number(workshopEnrolment1)) === (Number(workshopEnrolment2)) {
  // ..
}
// ASk: What do we know about the types here?
// if we know that at least one is a number, then the == algorithm will coerce to a number.
if (workshopEnrolment1 == workshopEnrolment2) {
  // ..
}
```

- You can structure your code in a way that coercion is a useful and obvious system rather than the complex magic that most people perceive.

- If you use `==` with an operand that's not already a primitive, we invoke the `ToPrimitive` abstract algorithm.

1.  If Type(x) is either String, Number, BigInt, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
2.  If Type(x) is Object and Type(y) is either String, Number, BigInt, or Symbol, return the result of the comparison ToPrimitive(x) == y.

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
- There is no situation where you need to do this, when you can invoked the `ToBoolean` operation implicitly.
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
