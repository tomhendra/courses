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
