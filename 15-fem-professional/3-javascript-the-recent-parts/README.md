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
var amount = 12.3;

var msg = formatCurrency`The total for your order is ${amount}`;

// The total for your order is $12.30
```

- There is no operator between `formatCurrency` and the `` ` ``
