<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript: The Recent Parts</h1>
</div>

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
  - [2.5. Padding & Trimming](#25-padding--trimming)
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
  - [4.5. Nested Object & Array Destructuring](#45-nested-object--array-destructuring)

## 1. Introduction

Learn the latest features in JavaScript with Kyle Simpson, author of the popular, You Don't Know JS, book series. You'll get up to speed with new JavaScript features like tagged template literals, destructuring, iterators, generators, regex improvements and async await.

- [Slides](https://static.frontendmasters.com/resources/2019-03-09-js-recent-parts/js-recent-parts.pdf)

### 1.1. JavaScript New Feature Process

- JavaScript went through a long period of time in the 'dark ages' between ES3 and ES5.
- That was a full decacde from 1999 to 2009 essentially nothing happened in the JavaScript language.
- During that same period of time a lot of things happened in the broader web ecosystem.
- Internet Explorer 6 came out and stagnated for more than 5 years, which caused many people to be frustrated.
- New browsers were created in response to this frustration with the stagnation of the web platform.
- The reason for the stagnation in JavaScrip was due to a lot of political infighting.
- They were trying to work on the ES4 spec, and there were divisions, they couldn't figure things out.
- So everyone back to their neutral sites and no updates happened because they couldn't agree.
- They came back together in 2009 and decided not the have these big factions but rather one JavaScript policy, that nothing gets put in the spec unless everyone agrees it will be faithfully implemented.
- By that point there were many more stakeholders, more browsers both desktop and mobile, and other environments.
- It was decided there should be one unified JavaScript rather than different versions for different browsers like in the IE6 days.
- This was a tremendously important inflection point for the history of JavaScript.
- It signalled that they process was back together, people are agreeing to work towards progress.
- It seemed like ES5 would be the turning point for thing moving forward more rapidly in future.
- And then 2010, 2011, 2012 & 2013 went by and they were still trying to be work out the issues.
- They were the problems of ES4, that they wanted to move JS forward as a full first class programming language.
- They wanted to add lots of features to enable that, and so that JS could be regarded as equal to the other major programming languages.
- So there was a lot of disagreement about each individual feature and so ES6 or ES2015 didn't land until late 2015.
- So from 2009 to 2015 there was another stagnation of 6 years when JS wasn't updated.
- When ES6 eventually landed there was a tonne of new features, over 300.
- Naturally there was a bunch of blow back at such a massive change.
- So there was this push back that said how can we get a process so that JavaScript can evolve without stagnating for 10 or 6 years waiting for features, or dumping a tonne of new features all at once that people can't process easily.
- So they voted to say the healthiest thing for the language is not to stagnate, nor to collect features up into some symbolic thing like version 6 or version 7, but rather to move forward incrementally little-by-little and release updates annually.
- So to reflect this they changed the name of the language so the next update that came wasn't ES7, it was ES2016.
- Then we had ES2017, ES2018, ES2019 and ES2020.
- There is a nuance, in that they vote in the early part of the year, and then by midyear it is officially ratified by ECMA; the organisation that manages the standard.
- Nobody knows when a feature will land until it reaches the final stage.
- There are five stages of the TC39 proposal process from 0 - 4.
- Stage 4 means finished and shipped.
- So anything that reaches stage 4 by the end of that meeting early in the year gets into the spec, and anything at stage 3 or less doesn't.
- So the proposals move independently rather than being kept behind a gate, and they move as fast or slowly as necessary.
- This works well since some features are small and relatively simple to implement, and some are huge and take years to figure out.
- Backwards compatibility requirement creates a tremendous pressure that when something gets added to the language it needs to be really ready.
- So we have a process where we get updates to the language annually where some are small and some are major, and hopefully we never see history repeated with the stagnation and features bombs that have happened in the past.
- There are already threats to JS like Web Assembly where you write code in Go or Rust and skip JavaScript entirely.
- If JavaScript wants to continue to be a vital part of the web it must continue to evolve.

### 1.2. Declarative JavaScript

- There are some important larger narratives that are happening with the evolution of the JavaScript language.
- The most important of those narratives is that JS is moving towards become a more declarative language.
- Declarative means we declare the outcome and allow the abstractions of the language to handle the how.
- The reader is more focused on the what, and more importantly the why.
- That makes code able to communicate better.

### 1.3. Browser Support and Transpilers

- With the rapid changes coming into JavaScript, ma ny devs have concerns about browser support.
- In the same period of time that there was a stagnation for 10 years, there was also a trend of developers being years behind the trailing edge of new features that came out.
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
  - RegExp Improvements
  - async .. await
  - async\* .. yield await

## 2. Strings

### 2.1. Template Strings

- Template perhaps isn't the best word to use, as it implies something that you can reuse multiple times.
- It is better to think about template strings as Interpolated Literals or "Interpoliterals".
- The official term for string concatenation is string interpolation.
- The old way to do this was as follows.

```js
var name = 'Kyle Simpson';
var email = 'getify@gmail.com';
var title = 'Teacher';

var msg =
  'Welcome to this class! Your ' +
  title +
  ' is ' +
  name +
  ', contact: ' +
  email +
  '.';

console.log(msg);
// Welcome to this class! Your Teacher is Kyle Simpson, contact: getify@gmail.com.
```

- This is a feature that has been supported in a variety of other languages prior to JavaScript.
- This is an example of that very imperative approach to code, as to figure out the final string you need to mentally execute out code.
- Template strings let us declare what our final string is, and have variable placeholders for where we want our values to be dropped in.
- Unfortunately the string literal be changed, so a whole new string literal was added to support that automatic interpolation.
- The backtick operator `` ` `` was chosen to indicate a different kind of string within which will be expressions.
- The expression used to delimit is `${}`.

```js
var name = 'Kyle Simpson';
var email = 'getify@gmail.com';
var title = 'Teacher';

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
var name = 'Tom';
var amount = 12.3;
var company = 'Cider Utopia';

var msg = formatCurrency`Hey ${name}, the total value of your order is ${amount}. Thank you for shopping at ${company}.`;

// Hey Tom, the total value of your order is $12.30. Thank you for shopping at Cider Utopia.
```

- There is no operator between `formatCurrency` and the `\``.
- It is a special kind of function call, called a tagged template string / tagged template literal.
- You are declaratively tagging this string to say before it finishes process it with the function `formatCurrency`.

```js
function formatCurrency(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == 'number') {
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

- It is useful to understanding the processing model of tag functions, as there are more interesting things you can do.
- The following is a replacement for `console.log` which rather than printing `[object Object]` or just the error string from a `try catch`, it will print objects as JSON, or Errors as a stack trace string.

```js
function logger(strings, ...values) {
  var str = '';
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] === 'object') {
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
- For example RegEx written on multiple lines with whitespace that is parsed into a normal RegEx by a tag function, n ot retuning a string but an actual regular expression.
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
var str = 'Hello';

str.padStart(5); // 'Hello'

str.padStart(8); // '   Hello'

str.padStart(8, '*'); // '***Hello'

str.padStart(8, '12345'); // '123Hello'

str.padStart(8, 'ab'); // 'abaHello'
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
var str = 'Hello';

str.padEnd(5); // 'Hello'

str.padEnd(8); // 'Hello   '

str.padEnd(8, '*'); // 'Hello***'

str.padEnd(8, '12345'); // 'Hello123'

str.padEnd(8, 'ab'); // 'Helloaba'
```

- If we needed to pad both ends of the string we'd simply call both `padStart` & `padEnd` on the same string.
- The `trim` method has been standard for many years.
- Trims all unicode representations of whitespace.

```js
var str = '   some stuff   \t\t';

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
var firstEmail = first.email !== undefined ? first.email : 'nobody@none.tld';

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : 'nobody@none.tld';
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
