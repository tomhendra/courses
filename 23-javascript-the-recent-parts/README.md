---
title:: JavaScript - The Recent Parts
type:: Course
author:: Kyle Simpson (You Don't Know JS)
completed:: 14/09/20
url:: https://frontendmasters.com/courses/js-recent-parts/
certificate:: No certificate provided
logseq:: false
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>JavaScript: The Recent Parts</h1>

- [1. Introduction](#1-introduction)
  - [1.1. JavaScript New Feature Process](#11-javascript-new-feature-process)
  - [1.2. Declarative JavaScript](#12-declarative-javascript)
  - [1.3. Browser Support and Transpilers](#13-browser-support-and-transpilers)
  - [1.4. Course Overview](#14-course-overview)
- [2. Strings](#2-strings)
  - [2.1. Template Strings](#21-template-strings)
  - [2.2. Tagged Templates](#22-tagged-templates)
  - [2.3. Applying Tagged Templates](#23-applying-tagged-templates)
  - [2.4. Tagged Template Exercise](#24-tagged-template-exercise)
  - [2.5. Padding \& Trimming](#25-padding--trimming)
- [3. Array Destructuring](#3-array-destructuring)
  - [3.1. Refactoring Code Using Destructuring](#31-refactoring-code-using-destructuring)
  - [3.2. Declaration and Assignment](#32-declaration-and-assignment)
  - [3.3. Comma Separation](#33-comma-separation)
  - [3.4. Swapping Variable Values](#34-swapping-variable-values)
  - [3.5. Parameter Arrays](#35-parameter-arrays)
  - [3.6. Nested Array Destructuring](#36-nested-array-destructuring)
- [4. Object Destructuring](#4-object-destructuring)
  - [4.1. Object Assignment Destructuring](#41-object-assignment-destructuring)
  - [4.2. Object Default Assignment](#42-object-default-assignment)
  - [4.3. Nested Object Destructuring](#43-nested-object-destructuring)
  - [4.4. Parameter Objects](#44-parameter-objects)
  - [4.5. Nested Object \& Array Destructuring](#45-nested-object--array-destructuring)
- [5. Further Destructuring](#5-further-destructuring)
  - [5.1. Named Arguments](#51-named-arguments)
  - [5.2. Destructuring \& Restructuring](#52-destructuring--restructuring)
  - [5.3. Destructuring Exercise](#53-destructuring-exercise)
- [6. Array Methods](#6-array-methods)
  - [6.1. find, findIndex](#61-find-findindex)
  - [6.2. includes](#62-includes)
  - [6.3. flat \& flatMap](#63-flat--flatmap)
- [7. Iterators \& Generators](#7-iterators--generators)
  - [7.1. Iterators](#71-iterators)
  - [7.2. Declarative Iterators](#72-declarative-iterators)
  - [7.3. Data Structure Without Iterators](#73-data-structure-without-iterators)
  - [7.4. Generators](#74-generators)
  - [7.5. Iterator \& Generator Exercise](#75-iterator--generator-exercise)
- [8. Regular Expressions](#8-regular-expressions)
  - [8.1. Look Ahead \& Behind](#81-look-ahead--behind)
  - [8.2. Named Capture Groups](#82-named-capture-groups)
  - [8.3. dotall Mode](#83-dotall-mode)
  - [8.4. Regex Exercise](#84-regex-exercise)
- [9. Async Await](#9-async-await)
  - [9.1. Async Functions](#91-async-functions)
  - [9.2. Async Await Exercise](#92-async-await-exercise)
  - [9.3. Async Iteration](#93-async-iteration)
  - [9.4. Async Function Problems](#94-async-function-problems)
  - [9.5. Async Generators with Yield](#95-async-generators-with-yield)
  - [9.6. Async Generator Iteration](#96-async-generator-iteration)
  - [9.7. Conclusion](#97-conclusion)

## 1. Introduction

This is part of the Frontend Masters Professional Track.

Learn the latest features in JavaScript with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll get up to speed with new JavaScript features like tagged template literals, destructuring, iterators, generators, regex improvements and async await.

- [Slides](https://static.frontendmasters.com/resources/2019-03-09-js-recent-parts/js-recent-parts.pdf)

### 1.1. JavaScript New Feature Process

- JavaScript went through a long period of time in the 'dark ages' between ES3 and ES5.
- That was a full decade from 1999 to 2009 essentially nothing happened in the JavaScript language.
- During that same period of time a lot of things happened in the broader web ecosystem.
- Internet Explorer 6 came out and stagnated for more than 5 years, which caused many people to be frustrated.
- New browsers were created in response to this frustration with the stagnation of the web platform.
- The reason for the stagnation in JavaScript was due to a lot of political infighting.
- They were trying to work on the ES4 spec, and there were divisions, they couldn't figure things out.
- So everyone went back to their neutral sites and no updates happened because they couldn't agree.
- They came back together in 2009 and decided not to have these big factions but rather one JavaScript policy, and that nothing gets put in the spec unless everyone agrees it will be faithfully implemented.
- By that point there were many more stakeholders, more browsers both desktop and mobile, and other environments.
- It was decided there should be one unified JavaScript rather than different versions for different browsers like in the IE6 days.
- This was a tremendously important inflection point for the history of JavaScript.
- It signalled that they process was back together, people were agreeing to work towards progress.
- It seemed like ES5 would be the turning point for thing moving forward more rapidly in future.
- And then 2010, 2011, 2012 & 2013 went by and they were still trying to work out the issues.
- They were the problems of ES4, that they wanted to move JS forward as a full first class programming language.
- They wanted to add lots of features to enable that, and so that JS could be regarded as equal to the other major programming languages.
- So there was a lot of disagreement about each individual feature and so ES6 AKA ES2015 didn't land until late 2015.
- So from 2009 to 2015 there was another stagnation of 6 years when JS wasn't updated.
- When ES6 eventually landed there was a tonne of new features, over 300.
- Naturally there was a bunch of blow back at such a massive change.
- So there was this push back that said how can we get a process so that JavaScript can evolve without stagnating for 10 or 6 years waiting for features, or dumping a tonne of new features all at once that people can't process easily.
- So they voted to say the healthiest thing for the language is not to stagnate, nor to collect features up into some symbolic thing like version 6 or version 7, but rather to move forward incrementally little-by-little and release updates annually.
- So to reflect this they changed the name of the language so the next update that came wasn't ES7, it was ES2016.
- Then we had ES2017, ES2018, ES2019 and ES2020.
- There is a nuance, in that they vote in the early part of the year, and then by midyear it is officially ratified by ECMA, which is the organisation that manages the standard.
- Nobody knows when a feature will land until it reaches the final stage.
- There are five stages of the TC39 proposal process from 0 - 4.
- Stage 4 means finished and shipped.
- So anything that reaches stage 4 by the end of that meeting early in the year gets into the spec, and anything at stage 3 or less doesn't.
- So the proposals move independently rather than being kept behind a gate, and they move as fast or slowly as necessary.
- This works well since some features are small and relatively simple to implement, and some are huge and take years to figure out.
- Backwards compatibility requirement creates a tremendous pressure that when something gets added to the language it needs to be really ready.
- So we now have a process where we get updates to the language annually where some are small and some are major, and hopefully we never see history repeated with the stagnation and features bombs that have happened in the past.
- There are already threats to JS like Web Assembly where you write code in Go or Rust and skip JavaScript entirely.
- If JavaScript wants to continue to be a vital part of the web it must continue to evolve.

### 1.2. Declarative JavaScript

- There are some important larger narratives that are happening with the evolution of the JavaScript language.
- The most important of those narratives is that JS is moving towards become a more declarative language.
- Declarative means we declare the outcome and allow the abstractions of the language to handle the how.
- The reader is more focused on the what, and more importantly the why.
- That makes code able to communicate better.

### 1.3. Browser Support and Transpilers

- With the rapid changes coming into JavaScript, many devs have concerns about browser support.
- In the same period of time that there was a stagnation for 10 yeUnfortunately the string literal bears, there was also a trend of developers being years behind the trailing edge of new features that came out.
- There is a sense that some developers feel safer not using new features if they have to support older browsers.
- Transpilers solve this problem, and became popular at the same time as ES6.
- Babel is the most popular.
- Babel takes JavaScript with the latest features, and compiles to an older version of JavaScript which all browsers support.
- If we are not using the new features then we are completely missing out.
- We don't have to learn every new feature, but we should be aware of the pulse and the direction the language is heading.
- We should be trying to use these new features to improve our code.
- There will always be a gap between the latest features of JS and browser support, and transpilers close this gap for us.
- Configuring Webpack is intimidating, but transpilers are the present and future of JS so we should embrace them.

### 1.4. Course Overview

- **JavaScript Versions**
  - ES6 / ES2015
  - ES2016
  - ES2017
  - ES2018
  - ES2019
- **Features**
  - Template Strings
  - String padding/trimming
  - Destructuring
  - Array find() / includes()
  - Array flat() / flatMap()
  - Iterators, Generators
  - Regex Improvements
  - async .. await
  - async\* .. yield await

## 2. Strings

### 2.1. Template Strings

- Template perhaps isn't the best word to use, as it implies something that you can reuse multiple times.
- It is better to think about template strings as Interpolated Literals or "Interpoliterals".
- The official term for string concatenation is string interpolation.
- The old way to do this was as follows.

```js
var name = "Kyle Simpson";
var email = "getify@gmail.com";
var title = "Teacher";

var msg =
  "Welcome to this class! Your " +
  title +
  " is " +
  name +
  ", contact: " +
  email +
  ".";

console.log(msg);
// Welcome to this class! Your Teacher is Kyle Simpson, contact: getify@gmail.com.
```

- This is a feature that has been supported in a variety of other languages prior to JavaScript.
- This is an example of that very imperative approach to code, as to figure out the final string you need to mentally execute out code.
- Template strings let us declare what our final string is, and have variable placeholders for where we want our values to be dropped in.
- Unfortunately the string literal cannot be changed, so a whole new string literal was added to support that automatic interpolation.
- The backtick operator `` ` `` was chosen to indicate a different kind of string within which will be expressions.
- The expression used to delimit is `${}`.

```js
var name = "Kyle Simpson";
var email = "getify@gmail.com";
var title = "Teacher";

var msg = `Welcome to this class! Your ${title} is ${name}, contact: ${email}.`;

console.log(msg);
// Welcome to this class! Your Teacher is Kyle Simpson, contact: getify@gmail.com.
```

- The typical use case is for variables, but you can literally put any code inside the `{}` that you want to.
- Also there is no need for string continuation using a backslash when you want a line break.
- This is typical of the declarative language JavaScript is evolving into: Just write a string and have JS figure it out interpolation.

### 2.2. Tagged Templates

- The template literals have another feature that lets us more fully control the preprocessing: tagged literals.

```js
var name = "Tom";
var amount = 12.3;
var company = "Cider Utopia";

var msg = formatCurrency`Hey ${name}, the total value of your order is ${amount}. Thank you for shopping at ${company}.`;

// Hey Tom, the total value of your order is $12.30. Thank you for shopping at Cider Utopia.
```

- There is no operator between `formatCurrency` and the `` ` ``.
- It is a special kind of function call, called a tagged template string / tagged template literal.
- You are declaratively tagging this string to say before it finishes, process it with the function `formatCurrency`.

```js
function formatCurrency(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += `$${values[i - 1].toFixed(2)}`; // formats the value
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}
```

- `formatCurrency` takes a `strings` array, and `...values` gathers the individual values into an array.
- JavaScript will immediately invoke this function for us, pass all the individual bits of literal strings in one array, and pass all the different values that we have chosen to interpolate in these individual positions into another array.
- So we have two arrays of things and it is up to us how / if we want to put them together.
- In a general sense we are almost always going to use a tag function to produce another string, and loop over the arrays to interpolate them together.
- To make that process easier JavaScript guarantees that the `strings` array will always have one more value than the values `array` would have.
- So if the `values` array contains 3 items, the `strings` array will have 4.
- Tag functions are essentially a way to preprocess the string and do some sort of formatting on it.
- Use cases could include internationalisation for different terminology, or removing escape chars and XSS from user inputs.
- The great news is you almost certainly don't need to write your own tag function, because there are already 100s already written in various libraries.

### 2.3. Applying Tagged Templates

- It is useful to understand the processing model of tag functions, as there are more interesting things you can do.
- The following is a replacement for `console.log` which rather than printing `[object Object]` or just the error string from a `try catch`, it will print objects as JSON, or Errors as a stack trace string.

```js
function logger(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] === "object") {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            str += values[i - 1].stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(values[i - 1]);
            continue;
          } catch (err) {}
        }
      }
      str += values[i - 1];
    }
    str += strings[i];
  }
  console.log(str);
  return str;
}
```

- The following is what it looks like in action.

```js
var v = 42;
var o = { a: 1, b: [2, 3, 4] };

logger`This is my value: ${v} and another: ${o}`;
// This is my value: 42 and another: {"a":1,"b":[2,3,4]}

try {
  nothing();
} catch (err) {
  logger`Caught: ${err}`;
}
// Caught: ReferenceError: nothing is not defined at <anonymous>:8:3
```

- Some people have gone way further with tag functions.
- They don't even have to return a string.
- For example regex written on multiple lines with whitespace that is parsed into a normal regex by a tag function, not retuning a string but an actual regular expression.
- People have made entire programming languages where the interpretor is the tag function.
- JSX requires a compiler because it is not standard JS. Someone decided to write a JSX tag function, that returns the actual DOM object.
- Tagged Templates are incredibly powerful, and a great extension point for writing more declarative JavaScript.

### 2.4. [Tagged Template Exercise](exercises/template-strings/ex.js)

### 2.5. Padding & Trimming

- Now built into the standard lib, so no more custom utils are required.
- String padding was added in ES2017, and string trimming in ES2019.
- The first thing we need to consider is whether to apply padding/trimming to one side or both sides of the string.
- Need to consider RTL languages, so 'left' and 'right' are not the appropriate terms to describe the beginning and end of a string. Instead we have 'start' and 'end'.

```js
var str = "Hello";

str.padStart(5); // 'Hello'

str.padStart(8); // '   Hello'

str.padStart(8, "*"); // '***Hello'

str.padStart(8, "12345"); // '123Hello'

str.padStart(8, "ab"); // 'abaHello'
```

- `padStart` automatically detects if the language is LTR or RTL and pads the start of a string.
- Takes two arguments; the first is required and the second one is optional.
- The first argument is for the length of the string that we want to pad to in total.
- By default it uses the standard ASCII 32 character space, but we can override if we want to use a different character.
- We can also have a multiple character string from which padding characters are pulled.
- If there are not enough characters they wrap and repeat.
- Note the pad source is always form LTR regardless of whether the language is LTR or RTL.
- `padEnd` is formatting in exactly the same way as follows.
- Note the same nuance applies with chars being pulled LTR from the pad source.

```js
var str = "Hello";

str.padEnd(5); // 'Hello'

str.padEnd(8); // 'Hello   '

str.padEnd(8, "*"); // 'Hello***'

str.padEnd(8, "12345"); // 'Hello123'

str.padEnd(8, "ab"); // 'Helloaba'
```

- If we needed to pad both ends of the string we'd simply call both `padStart` & `padEnd` on the same string.
- The `trim` method has been standard for many years.
- Trims all unicode representations of whitespace.

```js
var str = "   some stuff   \t\t";

str.trim(); // 'some stuff'

str.trimStart(); // 'some stuff       '

str.trimEnd(); // '   some stuff'
```

## 3. Array Destructuring

- A complex feature with lots of nuance.
- A cleaner declarative way to do things.
- A good way to think of destructuring is: **De**composing a **structure** into its individual parts.
- The purpose of destructuring as a feature is to assign individual parts from some larger structure.
- A common example of the benefit of destructuring is when you pull in some big JSON object from an API with lots of nesting.

```js
var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : "nobody@none.tld";
```

- This is functional code in that it mechanically works, but far from ideal to communicate the code's intent.
- It's also common that people would document the data structure in a code comment.
- This highly imperative style could be done with the declarative style of destructuring as follows.

```js
var [
  {
    name: firstName, // create variable firstName and assign the value to it
    email: firstEmail = 'nobody@none.tld'; // default value expression
  },
  {
    name: secondName,
    email: secondEmail = 'nobody@none.tld';
  }
] = getSomeRecords();
```

- To the left of the `=` it looks like a JSON object, but that is not what it is.
- Because it is on the LHS of the `=` it is not a value at all, it is actually a pattern.
- It is a syntax that is describing the value that is expected from the right hand side, where we call the `getSomeRecords` API.
- The purpose of the pattern is so that we can assign the individual values as we need them.
- It describes to JavaScript declaratively how it should break down the data structure and make individual assignments for us.
- The pattern does not need to account for the entirety of the value. It only has to account for that part of the value we care about.
- The pattern can describe all of the data structure or just a subset of the necessary structural parts to get at the things we care about.
- This code in it's declarative nature is also self-documenting.
- We are documenting with syntax what we expect the API call to return.

### 3.1. Refactoring Code Using Destructuring

- Destructuring has a process model to it, and by looking at examples we can begin to think like JS.
- By knowing what the equivalent non-destructuring code it will help us predict the outcomes of destructuring.
- This also helps with identifying areas in our code that could benefit from destructuring.

```js
function data() {
  return [1, 2, 3, 4, 5];
}
// imperative
var tmp = data();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);

// destructuring equivalent
var tmp;
var [
  first,
  second = 10, // default assignment is a strict equality check, so only if undefined (not null etc.)
  third,
  ...fourth // rest operator gathers remaining values. Must be at the end of the pattern.
] = (tmp = data());
```

- We can also position the `tmp` variable to hold the entire data structure at the beginning of the statement.
- But changing the chain of assignment order is arguably more confusing.
- There is a situation with objects where this order might be preferred (rather than using parentheses to distinguish from a block).

```js
var tmp = ([first, second, third, ...fourth] = data());
```

### 3.2. Declaration and Assignment

- Assignments aren't inherently related to declarations.
- it is just a convenience that we can do assignment along with declaration.
- So we can declare variables separately.
- Destructuring is about the assignment, not the declaration.

```js
function data() {
  return [1, 2, 3, 4, 5];
}
// imperative
var tmp = data();
var first, second, third, fourth;
first = tmp[0];
second = tmp[1];
third = tmp[2];
fourth = tmp.slice(3);

// destructuring equivalent
var tmp, first, second, third, fourth;
[first, second, third, ...fourth] = tmp = data();
```

- If we can make assignments to variables that are already declared, we can also assign them to anything that is valid to assign to.
- In 'spec speak' that's called a valid left hand side target.

```js
function data() {
  return [1, 2, 3, 4, 5];
}
// imperative
var tmp = data();
var o = {};
o.first = tmp[0];
o.second = tmp[1];
o.third = tmp[2];
o.fourth = tmp.slice(3);

// destructuring equivalent
var tmp;
var o = {};
[o.first, o.second, o.third, ...o.fourth] = tmp = data();
```

### 3.3. Comma Separation

- We can have empty positions which have the affect of not doing any assignment at all.

```js
function data() {
  return [1, 2, 3, 4, 5];
}
// imperative
var tmp = data();
var first = tmp[0];
// var second = tmp[1];
var third = tmp[2];
var fourth = tmp.slice(3);

// destructuring equivalent
var tmp;
var [
  first,
  ,
  // 'array elision'; leaving a hole!
  second,
  third,
  ...fourth
] = (tmp = data());
```

### 3.4. Swapping Variable Values

- For swapping variable values we can use destructuring too.

```js
var x = 10;
var y = 20;
{
  let tmp = x;
  x = y;
  y = tmp;
}
// with destructuring
[y, x] = [x, y];
```

### 3.5. Parameter Arrays

- If we can do array destructuring in our assignments, we can also do so with our parameters.

```js
function data(tmp) {
  var [first, second, third] = tmp;
}

function data([first, second, third]) {
  // ...
}
```

- If the `data` function doesn't return what we expect, we can use an fallback empty array.

```js
function data() {
  return null;
}
// imperative
var tmp = data() || [];

var first = tmp[0];
var second = tmp[1];
var third = tmp[2];
var fourth = tmp.slice(3);

// destructuring equivalent
var tmp;
var [first, second, third, ...fourth] = (tmp = data() || []);
```

- And with parameters we can also use the default value as follows:

```js
function data(tmp = []) {
  var [first = 10, second = 20, third = 30] = tmp;
}

function data([first = 10, second = 20, third = 30] = []) {
  // ...
}
```

- Providing default fallback values is a good habit to get into, as almost always graceful degradation is better than a `TypeError`.

### 3.6. Nested Array Destructuring

```js
function data() {
  return [1, [2, 3], 4];
}
// imperative
var tmp = data() || [];

var first = tmp[0];
var tmp2 = tmp[1] || [];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2];

// destructuring equivalent
var tmp;

var [first, [second, third] = [], ...fourth] = (tmp = data() || []);
```

## 4. Object Destructuring

- Very similar to array destructuring with some nuanced differences.
- With arrays the order is based on index.
- With objects we are dealing with properties so order doesn't matter.

```js
function data() {
  return { a: 1, b: 2, c: 3 };
}
// imperative
var tmp = data();

var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

// destructuring equivalent, the order is source: target
var { a: first, b: second, c: third } = data();
```

- For collecting additional properties, the imperative way would require checking for properties already seen with `Object.keys` and filtering the rest to be collected.
- With destructuring it is much easier using the object rest operator, to collect additional properties into a separate object.

```js
var { a: first, b: second, ...third } = data();
```

- Default assignment also works with objects.

```js
// source: target = default
var { a: first, b: second = 42, third } = data();
```

- A source of confusion concerns the `source: target = default` order.
- With an object literal it is different to destructuring.
- But if you think about identity rather than role, it makes sense.
- If you always remember the property is on the left, it is consistent between the two syntaxes.
- The thing that we are getting it from, or the thing that we are assigning it to, always goes on the right.

```js
// object literal
var o = {
  prop: value,
  target: source, // property is the target, value is the source.
  a: 1,
  b: 2,
  c: 3,
};
// object destructuring
var {
  prop: value,
  source: target, // reversed: property is the source, value is the target.
  a: first,
  b: second,
  c: third,
} = o;
```

### 4.1. Object Assignment Destructuring

- As with arrays we can separate declaration from assignment.
- But there is a caveat, in that because the `{}` is overloaded JS will think it is a new block, with a separate scope.
- In order to distinguish between a destructuring pattern and a block, it was decided that wrapping with `()` would indicate destructuring.

```js
function data() {
  return { a: 1, b: 2, c: 3 };
}
// imperative
var tmp = data();
var first, second, third;

first = tmp.a;
second = tmp.b;
third = tmp.c;

// destructuring equivalent
var first, second, third;
({ a: first, b: second, c: third } = data());
```

- You don't need to use the parentheses if there is anything in front of the statement including a declarator, or a variable to assign the entire data structure to.

```js
var tmp;
var first, second, third;
tmp = { a: first, b: second, c: third } = data();
```

### 4.2. Object Default Assignment

- If the `data` function doesn't return what we expect, to avoid TypeErrors we can use the `||` to provide a graceful fallback.

```js
function data() {
  // return { a: 1, b: 2, c: 3 d:4 };
  return null;
}
// imperative
var tmp = data() || {};

var first = tmp.a;
var second = tmp.b;

// destructuring equivalent
var first, second;

var { a: first, b: second } = data() || {};
```

- With arrays destructuring to skip a property we have to use a comma `,` to indicate the empty space.
- With object destructuring we simply don't list the property that we don't care about.
- If we want to name the variable the same thing as its source, we can do so with shorthand, rather than `{a: a, b: b}`.

```js
function data() {
  return { a: 1, b: 2, c: 3 d:4 };
}
// imperative
var tmp = data() || {};
var a = tmp.a || 42;
var b = tmp.b;

// destructuring equivalent
var { a = 42, b } = data() || {};
```

### 4.3. Nested Object Destructuring

```js
function data() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4,
    },
  };
}
// imperative
var tmp = data() || {};
var a = tmp.a;
var b = tmp.b || {};
var c = b.c;
var d = b.d;

// destructuring equivalent
var { a, b: { c, d } = {} } = data() || {};
```

- The default assignments are very easy to forget especially when destructuring.
- To avoid TypeErrors it is recommended to use a linting rule to ensure they are included.
- There is an ESLint rule to remind you to use defaults on nested patterns.
- It is always better to put defaults values in the inline pattern, and use `{}` or `[]` for the enclosing data structure.
- Using so called default object structure creates potential problems.

```js
var o1 = {
  a: {
    b: 2,
    c: 3,
  },
};

var o2 = {
  a: {},
};

var o3 = {};

// using the recommended inline pattern will avoid TypeErrors,
// and b and c will be assigned the desired default values if b is missing from o1.
var { a: { b = 10, c = 20 } = {} } = o1;
// when using a default object structure, the default values
// will not be assigned if b is missing from o1 -- b will be undefined
var { a: { b, c } = { b = 10, c = 20} } = o1;
// here the default will not get invoked either -- b will be undefined
var { a: { b, c } = { b = 10, c = 20} } = o2;
// the only time the default will be invoked is when a is not present at all.
var { a: { b, c } = { b = 10, c = 20} } = o3;
```

- Partially missing properties could result in the desired default values never being assigned.
- It is strongly recommended to always inline default property assignments, and use an empty `{}` or `[]` as the default for the enclosing object or array.

```js
var { a: { b = 10, c = 20 } = {} } = o1;
```

### 4.4. Parameter Objects

```js
function data(tmp = {}) {
  var { a, b } = tmp;
  // ..
}
```

- Destructuring in the function body is not as declarative as destructuring the parameter directly.
- Of course if the entire data structure is required it would have to be done as above.

```js
function data({ a, b } = {}) {
  // ..
}
```

- When you place an object in the parameter position you are only accounting for one parameter.

### 4.5. Nested Object & Array Destructuring

- With arrays when we use the position to indicate the source, we can only destructure from a position once.
- When dealing with an object we can actually destructure the same property multiple times.

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

var { a, b: b, b: x, b: y, b: z, c } = obj;
```

- This is particularly useful when dealing with sub-objects.

```js
var obj = {
  a: 1,
  b: {
    x: 2,
    y: 3,
    z: 4,
  },
  c: 5,
};

var {
  a,
  b, // destructure the whole object
  b: { x, y, z }, // destructure the object contents
  c,
} = obj;
```

- This also works with arrays within objects, objects within arrays, and any multiply nested combinations that we want.

```js
var obj = {
  a: 1,
  b: [500, 600, 700, { r: 800, t: 900 }],
  c: 5,
};

var {
  a,
  b,
  b: [x, y, z, { r, t }],
  c,
} = obj;
```

## 5. Further Destructuring

- Some examples of a higher level to give a better understanding of destructuring.

### 5.1. Named Arguments

- There is a pattern called named arguments which is an idiom essentially.
- JS doesn't support named arguments, rather they are passed in order.
- But if we declare a function with an object parameter it gives us essentially what are named arguments at the call site.

```js
function lookupRecord(store = "person-records", id = -1) {
  // we have to remember the order of parameters :(
}

function lookupRecord({ store = "person-records", id = -1 }) {
  // arguments are named and destructured
}

lookupRecord({ id: 42 });
```

- This is becoming an extremely popular pattern.
- Kyle's rule of thumb is to use this pattern for every function that has three or more parameters.
- The good thing about named arguments is you don't have to remember the order.
- The downside is that you do have to remember the name.
- To help with this come up with a convention for the common parameters that you use e.g. callbacks always called `cb` or array `arr` etc.
- If we come up with standard conventions and document them for our team, 99% of the problems will go away.

### 5.2. Destructuring & Restructuring

- A common situation is when we have an object that represents some defaults for AJAX, so that we can mix those defaults with some settings whenever we make an AJAX call.

```js
// most common approach using extend
var defaults = {
  url: "https://some.base.url/api",
  method: "post",
  headers: ["Content-Type: text/plain"],
};

console.log(defaults);

// *************************

var settings = {
  url: "https://some.other.url",
  data: 42,
  callback: function (resp) {
    //..
  },
};

// underscore extend
ajax(_.extend({}, defaults, settings));

// or Object.assign
ajax(Object.assign({}, defaults, settings));
```

- So whatever we provide in settings will override the default object properties.
- The problem with this approach is that it is very imperative, and we are relying on the Underscore library's implementation, so would have to check docs for example when using nested objects.
- This is a good use case for destructuring.
- Kyle calls this pattern Destructuring & Restructuring.

```js
function ajaxOptions({
  url = "https://some.base.url/api",
  method = "post",
  data,
  callback,
  headers: [headers0 = "Content-Type: text/plain", ...otherHeaders] = [],
} = {}) {
  return {
    url,
    method,
    data,
    callback,
    headers: [headers0, ...otherHeaders],
  };
}
```

- The function takes an object as its input, and has a whole set of properties it expects to be on that object.
- We create defaults in the destructuring parameter signature.
- We return a restructured object with any defaults set for missing object properties passed to the function.
- This is a more declarative approach and communicates the defaults clearly.
- We use the pattern as follows.

```js
// with no arguments, returns the defaults as an object if necessary.
var defaults = ajaxOptions();

console.log(defaults);

// *************************

var settings = {
  url: "https://some.other.url",
  data: 42,
  callback: function (resp) {
    //..
  },
};
// with an argument it mixes in the defaults with the settings.
ajax(ajaxOptions(settings));
```

- Using this pattern is easier to maintain, as we can go to one function and see all of our defaults in one place.

### 5.3. [Destructuring Exercise](exercises/destructuring/ex.js)

## 6. Array Methods

### 6.1. find, findIndex

- `Array.find` was added in ES6 (ES2015), and `Array.includes` was added in ES2016.
- If we have an array that holds values which are difficult to lookup `Array.find` comes in useful.

```js
var arr = [{ a: 1 }, { a: 2 }];

arr.find(function match(v) {
  return v && v.a > 1;
});
// { a: 2 }

arr.find(function match(v) {
  return v && v.a > 10;
});
// undefined

arr.findIndex(function match(v) {
  return v && v.a > 10;
});
// -1
```

- `find` takes in a function callback, which if returns something truthy will return that actual value that was found.
- Be aware that the value `undefined` is returned when no value is found, but this is indistinguishable from an actual `undefined` value in the array.
- If we need to verify that case, we can use `findIndex` which will return `-1` if no value is found.

### 6.2. includes

- `includes` gives us a better option than using old patterns like below.

```js
var arr = [10, 20, NaN, 30, 40, 50];
// -1 has no meaning and is a sentinel value
arr.indexOf(30) != -1; // true
// ~ was a bizarre way of turning a -1 into a truthy or falsy value
~arr.indexOf(20); // -2 (truthy)
~arr.indexOf(NaN); // -0 (falsy)
```

- These are terrible patterns, but were the best available for a long time.
- Thankfully we now have a method that will tell us `true` or `false` whether something exists.
- If we don't need the actual value, but rather to know whether something exists or not, the best method to use is the `includes` method.

```js
var arr = [10, 20, NaN, 30, 40, 50];

arr.includes(20); // true

arr.includes(60); // false

arr.includes(20, 3); // false

arr.includes(10, -2); // false

arr.includes(40, -2); // true

arr.includes(NaN); // true
```

### 6.3. flat & flatMap

- `find` and `includes` are good examples of helper methods that we may bring in from Lodash or Underscore, instead being brought into the JavaScript standard library.
- Another example of utility library methods being brought into native JS are `Array.flat` and `Array.flatMap`.
- Both of these were added in ES2019.

```js
var nestedValues = [1, [2, 3], [[]], [4, [5]], 6];

nestedValues.flat(0);
// [1, [2, 3], [[]], [4, [5]], 6];

nestedValues.flat(/* default: 1 */);
// [1, 2, 3, [], 4, [5], 6]

nestedValues.flat(2);
// [1, 2, 3, 4, 5, 6]
```

- `flat` takes in a number which defined the level of nesting to flatten.
- If you want to flatten everything give it a large number like `infinity`.
- We shouldn't continue to use utility library methods when there is a built-in equivalent in the language.
- Sometimes we want to do other operations like mapping as well as flatten, as is extremely common in functional programming.
- For example if we need to map an array of values to an array of sub-arrays:

```js
[1, 2, 3].map(function tuples(v) {
  return [v * 2, String(v * 2)];
});
// [[2, "2"], [4, "4"], [6, "6"]]

[1, 2, 3]
  .map(function tuples(v) {
    return [v * 2, String(v * 2)];
  })
  .flat();
// [2, "2", 4, "4", 6, "6"]
// Chaining is less desirable because it creates an intermediary array before flattening.

[1, 2, 3].flatMap(function tuples(v) {
  return [v * 2, String(v * 2)];
});
// [2, "2", 4, "4", 6, "6"]
// maps and flattens in at the same time.
// Note we cannot control the level of flattening.
```

- We tend to think of mapping as only producing a new array as the same number of items as the original.
- With `flatMap` We can turn a mapping operation into something that adds or removes from an array.
- By using a empty array, we are removing compared to the original.

```js
[1, 2, 3, 4, 5, 6].flatMap(function doubleEvens(v) {
  if (v % 2 == 0) {
    return [v, v * 2];
  } else {
    return [];
  }
});
// [2, 4, 4, 8, 6, 12]
```

## 7. Iterators & Generators

- Introduced with ES6 (ES2015).

### 7.1. Iterators

- In ES6 all the basic data types in JavaScript were made iterable.
- Whenever we have some data source, if we would like to consume the values one at a time, one of the most common ways to do so is the iterator pattern.
- We can construct a controller that gives us a view of the data source, and presents values one at a time.
- We construct an object and call `.next` over and over again, and every time we get back the next vale from the data source.

```js
var str = "Hello";
var world = ["W", "o", "r", "l", "d"];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

itl.next(); // { value: "H", done: false }
itl.next(); // { value: "e", done: false }
itl.next(); // { value: "l", done: false }
itl.next(); // { value: "l", done: false }
itl.next(); // { value: "o", done: false }
itl.next(); // { value: undefined, done: true }

it2.next(); // { value: "W", done: false }
// ..
```

- In both the case of the string and array they are iterables, and therefore we can construct an iterator to consume their values.
- `Symbol.iterator` is a special value that finds a location on the string / array / object and produces an iterator from it.
- We get back an iterator and when we call `next` we get back an _iterator result_ with two properties.
- The way the iterator determines that there is nothing else to consume, is that you iterate past the end of the data source until `undefined` is returned.
- Almost all the data structures in JS are now iterables.
- This pattern is rather ugly and manual but there are some nicer patterns we can use.

### 7.2. Declarative Iterators

- If we want to iterate over some data programmatically we can use a looping construct.

```js
var str = "Hello";
// imperative approach - hard to understand
for (
  let it = str[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done && (v = result.value || true);

) {
  console.log(v);
}
```

- In ES6 to consume an iterator, we can use the `for of` loop.

```js
// declarative approach
var str = "Hello";
var it = str[Symbol.iterator]();

for (let v of it) {
  console.log(v);
}
// "H" "e" "l" "l" "o"

for (let v of str) {
  console.log(v);
}
// "H" "e" "l" "l" "o"
```

- The `for of` loop is distinct from the `for in` and the regular `for` loop.
- The `for of` loop takes iterables, meaning things that can be iterated over.
- It iterates over the iterable and gives us the value for each iteration.
- With `var it = str[Symbol.iterator]();` we are making an iterator `it` manually, and we can iterate of an iterator because it is an iteratable.
- We can also iterate over the iterable `str` itself.
- One advantage of making our own iterator is that if it was a function that we wanted to call, or call it from a different location, or pass some arguments to it, we can make our own iterator and iterate over it.
- We can also use the spread operator for iterating.

```js
var str = "Hello";

var letters = [...str];
console.log(letters);
// ["H", "e", "l", "l", "o"]
```

- Both `for of` and `...` are syntactic support for the iterator protocol, which is now a built-in first class citizen in JavaScript.
- This is important because if we expose an iterator for our own custom data structures that adheres to the protocol, then any user of our code can use the syntactic built-in mechanisms for our data structures.
- It creates a standardized way of iterating through data sources.

### 7.3. Data Structure Without Iterators

- There is a problem in what we do with data structures that don't have iterators.
- Not all data structures have iterators.
- The object is a good example.

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let v of obj) {
  console.log(v);
}
// TypeError
```

- It is a TypeError because the `for of` loop tries to access the `Symbol.iterator` location on `obj` which is `undefined`, and trying to execute on `undefined` results in a TypeError.
- It is frustrating that the one data structure most devs use is the one that wasn't made automatically iterable.
- But is not actually that difficult to define our own iterator.
- So if we know that `for of` and `...` try to find something at that position `Symbol.iterator`, then all we need to do is to define one.
- We could crate our own iterator factory function. Every time we call it we would produce a new instance of the iterator.

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next: () =>
        index < keys.length
          ? { done: false, value: this[keys[index++]] }
          : { done: true, value: undefined },
    };
  },
};

[...obj];
```

- The arrow function is used in this particular scenario, because we need the `this` keyword to lexically adopt the parent context.

### 7.4. Generators

- It would be nice if there was a more declarative approach to iterating over an object.
- That leads us to generators.

```js
function* main() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

var it = main();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: 4, done: true }

[...main()];
// [1, 2, 3]
```

- The `*` indicates we are dealing with a special kind of function: a generator.
- This was a new type of function that was added in ES6.
- There are a lot of complexities to generators, but the one thing we need to understand is that when a generator is invoked it doesn't run, but produces an iterator.
- Since that iterator is a standard iterator, has a `.next` method.
- When we call `.next` on an iterator that is attached to a generator, it will give us the value that was yielded out from that generator.
- The new keyword `yield` allows the generator to produce additional values every time it is iterated over.
- The `return` keyword is used for the last value to define there is nothing left to iterate over.
- There is however a gotchya in using the `return` keyword inside a generator:
- When `[...main()];` consumes the iterator according the protocol, as soon as it sees `done: true` it stops, and assumes we have iterated past the last value which has the effect of throwing away the value `4`.
- If we are making our own iterators using a generator, we must ensure to use the `yield` keyword to ensure the values are received according to the iterator protocol.
- It is generally considered bad practice to `return` a value from a generator.
- To turn this into a declarative loop pattern we could use the following approach.

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

[...obj];
// [1, 2, 3]
```

- We can use `for of` inside the iterator because `Object.keys` returns an array which is iterable.
- `this` would be the object itself, so `this[key]` would be the value which we `yield` out.
- If we wanted to yield out just he `key` we could.
- If we wanted to yield out both the keys and values, we could define something called entries, where we yield a tuple `[key, this[key]]`.
- We have `Object.values` to iterate over an object's values.
- We have `Object.keys` to iterate over an object's keys.
- And we have `Object.entries` to iterate over an object's entries and give us an array of tuples.
- So all we have to do on our data structures is define those three iterators ourselves.
- This makes it easy for someone to consume our data structure.
- It is a good idea to not only create the default iterator as in the previous example, but to expose any other way that would be useful for someone to iterate over our data structure.

### 7.5. [Iterator & Generator Exercise](exercises/iterators-generators/ex.js)

## 8. Regular Expressions

- As of ES2018 a set of very helpful changes were added to help with regular expressions.
- The three key changes were Look Ahead & Behind, Named Capture Groups and dotall Mode.

### 8.1. Look Ahead & Behind

- Look aheads have been in JS for many years, and allow us to check for patterns.
- A look ahead is an assertion that says when I match something, it only matches if something immediately afterwards also matches.
- Common assertions that we might use are for the beginning and end of a string, using the anchors `^` and `$` respectively.
- The idea of assertions in regex is that in addition to the match, something else also has to be true.

```js
var msg = "Hello World";

msg.match(/(l.)/g);
// ["ll", "ld"]

msg.match(/(l.)$/g);
// ["ld"]

msg.match(/(l.)(?=o)/g);
// A positive look ahead -- only match if the l is followed by an o
// ["ll"]

msg.match(/(l.)(?!o)/g);
// A negative look ahead -- only match if the l is NOT followed by an o
// ["lo", "ld"]
```

- If we can do look aheads, it makes sense that we also sometimes want to do look behinds.
- Unfortunately for all of JavaScript's history, it hasn't supported look behinds.

```js
var msg = "Hello World";

msg.match(/(?<=e)(l.)/g);
// A positive look behind -- only match if the l is preceded by an e
// ["ll"]

msg.match(/(?<!e)(l.)/g);
// A positive look behind -- only match if the l is NOT preceded by an e
// ["lo", "ld"]
```

### 8.2. Named Capture Groups

- Another feature that has been introduced.
- In order to understand named capture groups, we need to understand regular capture groups.
- In regex `()` are not only grouping operators, they are also capturing operators.
- A capture group is a way to have a sub part of the pattern pulled out in a separate way.
- Up until Named Capture groups we have always had to use numeric references to those groups.
- This resulted in counting parenthesis and hard to manage long regex.
- By using `?<usefulName>` we can give the capture groups a useful name.

```js
var msg = "Hello World";

msg.match(/.(l.)/);
// ["ell", "ll"]

msg.match(/([jkl])o Wor\1/);
// ["lo Worl", "l"]

msg.match(/(?<cap>l.)/).groups;
// { cap: ll }

msg.match(/(?<cap>[jkl])o Wor\k<cap>/);
// ["lo Worl", "l"]

msg.replace(/(?<cap>l.)/g, "-$<cap>-");
// "He-ll-o Wor-ld"

msg.replace(/(?<cap>l.)/g, function re(...args) {
  var [, , , , { cap }] = args;
  return cap.toUpperCase();
});
// "HeLLo WorLD"
```

### 8.3. dotall Mode

- ES2018 also introduced dotall mode, which is a new flag that you can add to the end of your regex.
- We can use `s` to turn on dotall mode.
- Historically the `.` operator is able to match any character except it doesn't match across newlines.

```js
var msg = `
  The quick brown fox
  jumps over the
  lazy dog`;

msg.match(/brown.*over/);
// null

msg.match(/brown.*over/s);
// ["brown fox\njumps over"]
```

### 8.4. [Regex Exercise](exercises/regex/ex.js)

## 9. Async Await

- One of the most highly anticipated features of ES2017.
- Promises were introduced in ES6 and allowed us to represent a future value in a time independent way, allowing us to specify chains of asynchronous steps.

```js
fetchCurrentUser()
  .then(function onUser(user) {
    return Promise.all([
      fetchArchivedOrders(user.id),
      fetchCurrentOrders(user.id),
    ]);
  })
  .then(function onOrders([archivedOrders, currentOrders]) {
    // ..
  });
```

- This was the accepted way to do things instead of nested callback hell.
- This was a much nicer syntax than the callback pattern, but promise chaining is now often considered as an anti-pattern.

### 9.1. Async Functions

- Enter the sync-async (with generators) pattern.

```js
runner(function* main() {
  // fetch the current user, and yield out the result once the promise has resolved.
  var user = yield fetchCurrentUser();
  // fetch archived and current orders, and yield out the result once both promises have resolved.
  var [archivedOrders, currentOrders] = yield Promise.all([
    fetchArchivedOrders(user.id),
    fetchCurrentOrders(user.id),
  ]);
});
```

- Because there is an iterator protocol attached to the generator, it can pause itself with the `yield` keyword.
- `runner` is a utility that facilitates the pausing.
- All promise utility libraries such as [co](https://github.com/tj/co), [koa](https://koajs.com) or [bluebird](http://bluebirdjs.com/docs/getting-started.html) have a utility that is able to run generators as if they're this synchronous / asynchronous tradeoff pattern.
- If you `yield` out a promise it will wait for the promise to resolve before resuming the generator.
- This is what we call the **sync-async** pattern.
- We could follow this pattern starting with ES6 because we had promises and generators.
- The problem was that we had to rely on the library `runner` utility to pause and resume the iterator for us.
- Almost as soon as this pattern became popular, there was demand for a native JavaScript implementation.
- And so the async function was introduced.

```js
async function main() {
  var user = await fetchCurrentUser();

  var [archivedOrders, currentOrders] = await Promise.all([
    fetchArchivedOrders(user.id),
    fetchCurrentOrders(user.id),
  ]);
}

main();
```

- The `async` function uses the `await` keyword instead of the `yield` keyword.
- It does the same thing in that it locally pauses while the promise finishes resolving, and once it finishes it gives us the value back.
- We have as a result a synchronous style of assignments as opposed to the nested promise chains of before.
- We don't need the `runner` utility to call the function for us, we can just call it ourselves with `main()`.
- Essentially the `runner` utility was implemented in the JS engine, and we now have this `async await` syntax for it.
- The `async await` function shipped in ES2017.

### 9.2. [Async Await Exercise](exercises/async-await/ex.js)

### 9.3. Async Iteration

- There are some issues with async functions.
- For example, if you try to run a function and pass it to `forEach` and inside of it use the `await` keyword, it would fail.

```js
async function fetchFiles(files) {
  var prs = files.map(getFile);

  prs.forEach(function each(pr) {
    console.log(await pr);
  });
}
```

- The reason it fails is that the `await` keyword has to be used inside of an `async` function, not a regular function.
- So how can we do this 'deep awaiting' when we have a function boundary?
- Passing the `async` function to `forEach` presents a problem in that `async` functions come back with promises, and `forEach` does not know what to do with a promise.
- So you would iterate over a bunch of promises but they would not be waiting for each other.
- There is a conceptually missing piece to the puzzle, in that we need a asynchronous iterator, able to pause automatically at each iteration and wait for a promise before it comes back.
- All of our native JS iterators are synchronous. They don't know they should pause when they encounter a promise.
- As an illustration of how to solve this, Kyle has built a library called [fasy](https://github.com/getify/fasy) which provides us with eager asynchronous iterator functions.

### 9.4. Async Function Problems

- There are other problems that need to be considered.
- These issues taken together as a whole are one of the reasons Kyle still uses generators with a runner on occasion.

1. The `await` keyword only knows what to do with actual real promises.

   - It would be nice to be able to use `await` with custom promises that don't have the same `then` functionality or for a thunk (function representation of a future value).
   - The `await` keyword is not extensible in any way, it only knows what to do with 'thenables' and promises.
   - With a generator and gen-runner we are free to `yield` and pause on any future representation of future values that we need to.

2. Scheduling (Starvation).

   - Promises were implemented with the microtask queue, which achieves asynchrony by not having to wait on other event handlers.
   - They are scheduled to run on the next 'tick' separately from the event loop which essentially means they are cutting the line.
   - So any other event handlers that are waiting to fire on the event loop don't get a chance as long as there is something in the microtask queue.
   - The effect of this is certain patterns can result in an infinite loop where a promise keeps adding to the microtask queue, never letting anything in the event loop resolve: known as starvation.
   - This creates a form of DOS, deadlock, and much work has been done in the wider computer science community to tackle the problem.
   - The solution to this problem was already available, and the algorithm could have been designed to be more robust for the JS implementation.

3. External Cancellation

   - Async functions are essentially black boxes that once they start it is impossible to externally cancel them.
   - It will continue to spin on the microtask queue until everything has finished running.
   - We have potentially one of the most important additions to JS without any way to cancel externally.
   - Many other languages use cancellation tokens on which we can call abort to stop an asynchronous function running (fetch already has this feature built-in).
   - Every asynchronous function frontend or backend, in any situation, should have a cancellation mechanism, at the very least a timeout.
   - **NOTE:** [...](https://ckeditor.com/blog/Aborting-a-signal-how-to-cancel-an-asynchronous-task-in-JavaScript/)WHATWG prepared their own solution and introduced it directly into the DOM in the form of [AbortController](https://dom.spec.whatwg.org/#aborting-ongoing-activities)

### 9.5. Async Generators with Yield

- Async functions allow us to implement the sync-async pattern syntactically, which is much better than promise chains.
- There is however a conceptual limitation in that the `await` keyword is essentially a pull operation.
- We are pulling a value from a promise that may or may not resolve after some amount of time.
- But pulling is often half of what we need to do.
- If we take the example of generators, they are able to push values out so that those values can be consumed elsewhere.
- What's conceptually missing is that we would like to be able to pull and push in the same type of function.
- A generator can only push, and an async function can only pull, what we would really like is an async generator.
- In ES2018 this was added to the spec. We can use both `yield` for pushing and `await` for pulling in the same function.

```js
async function fetchURLs(urls) {
  var results = [];

  for (let url of urls) {
    let resp = await fetch(url);
    if (resp.status == 200) {
      let text = await resp.text();
      results.push(text.toUpperCase());
    } else {
      results.push(undefined);
    }
  }

  return results;
}
```

- We are trying to loop through a set of URLs, fetch out the responses, get the text asynchronously and push to an array.
- There is no way for us to pull from some AJAX call and then push out the result out immediately.
- We have to collect everything into an array and return all the results at once.
- this is fine for a few URLs, but what if there were 1000?
- It would be nice if we could lazily push a response out each time we get a response.
- And if we lazily push it out, something else could lazily and asynchronously consume the data source.
- Theoretically if we switched from an async function to a generator, we could support that.

```js
function* fetchURLs(urls) {
  for (let url of urls) {
    let resp = yield fetch(url);
    if (resp.status == 200) {
      let text = yield resp.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}
```

- Because we can use a runner we can use the `yield` keyword as a pull mechanism with a promise `yield fetch(url)`.
- And in the same function we are using `yield` as a push mechanism to something that might be consuming it with `yield text.toUpperCase().
- You could theoretically write a runner where if you use `yield` with a promise it waits, but if you use `yield` with anything else it sends it out to an iterator interface.
- But conceptually this is bad programming to overload the `yield` keyword to mean two different things.
- It is confusing and would be hard to read, determining what the `yield` keyword was doing in different places.
- This is the motivation for having a function type that can use both `yield` for pushing and `await` for pulling.
- So that's where we get async generators: The combination of async and generator functions.

```js
async function* fetchURLs(urls) {
  for (let url of urls) {
    let resp = await fetch(url);
    if (resp.status == 200) {
      let text = await resp.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}
```

### 9.6. Async Generator Iteration

- Not only are async generators semantically cleaner code, they also produce a different kind of interface for how you would work with them.
- As opposed to an async function which we call, and get back a single promise that waits to resolve until it has all the results for us, when we call an async generator, what we get back is a special kind iof iterator, so we can consume its results as it has them.
- So we should be able to wire up an async generator with a `for ...of` loop: but it doesn't quite work like that.

```js
async function* fetchURLs(urls) {
  var prs = urls.map(fetch);

  for (let pr of prs) {
    let resp = await pr;
    if (resp.status == 200) {
      let text = await resp.text();
      yield text.toUpperCase();
    } else {
      yield undefined;
    }
  }
}
```

- If we were to pull all the urls and results upfront and use the `yield` keyword as we went along, what would the consumption loop look like? Perhaps like the following.

```js
for (let text of fetchURLs(favouriteSites)) {
  console.log(text);
}
```

- There is a problem in that `fetchURLs` will return an iterator but we don't know what the iteration result is because it is asynchronous.
- When we call `.next` on an async generator, what we actually get back is a promise for an iterator result.
- The difference between getting an iterator result back that had a promise as its value, versus getting back a promise as a result, is significant.
- If we get back an iterator result with a promise as the value, we would know immediately whether it has finished by `{done: false}` or `{done: true}`.
- But what if we can't know whether we are done yet until after we get the result back. Then we don't want an iterator result with a promise, we want a promise for the iterator result.
- That is the difference between a synchronous iteration of promises and an asynchronous iteration, which we actually want.
- Consider the following example.

```js
var it = fetchURLs(favouriteSites);

while (true) {
  let res = it.next();
  if (res.done) break;
  let text = res.value;

  console.log(text);
}
```

- `res` is going to be a promise, so there will never be a `.next` which conceptually is why the previous example fails.
- So what about a `while(true)` loop with an `await` in it.

```js
async function main(favouriteSites) {
  var it = fetchURLs(favouriteSites);

  while (true) {
    let res = await it.next();
    if (res.done) break;
    let text = res.value;

    console.log(text);
  }
}
```

- The difference is the first consumption loop is trying to go through the results immediately, but cannot because we don't know where we have a next iteration or not, and the second is doing one iteration and waiting for the result, then another iteration and waiting for the result. etc.
- This is an effective way to **asynchronously iterate** lazily.
- But we want a nice clean syntactic way to express this natively: Enter the `for of await` loop.

```js
async function main(favouriteSites) {
  for await (let of fetchURLs(favouriteSites)) {
    console.log(text);
  }
}
```

- This is a `for...of` loop over an asynchronous iterator.
- Under the covers the loop is awaiting the results of the iterator result before it decides whether to do another iteration.

### 9.7. Conclusion

- So we now have generators which can push out values immediately, or lazily.
- We have async functions which can pull values asynchronously.
- Then we have things like Facy for eager asynchronous iteration.
- And we have the fourth quadrant to push and pull at the same time, so we can have lazy asynchronous iteration.
