<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Testing JavaScript</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. Testing Fundamentals](#2-testing-fundamentals)
  - [2.1. Throw an Error with a Simple Test in JavaScript](#21-throw-an-error-with-a-simple-test-in-javascript)
  - [2.2. Abstract Assertions into a JavaScript Assertion Library](#22-abstract-assertions-into-a-javascript-assertion-library)
  - [2.3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework](#23-encapsulate-and-isolate-tests-by-building-a-javascript-testing-framework)
  - [2.4. Support Async Tests with JavaScripts Promises through async await](#24-support-async-tests-with-javascripts-promises-through-async-await)
  - [2.5. Provide Testing Helper Functions as Globals in JavaScript](#25-provide-testing-helper-functions-as-globals-in-javascript)
  - [2.6. Verify Custom JavaScript Tests with Jest](#26-verify-custom-javascript-tests-with-jest)

## 1. Introduction

Learn the smart, efficient way to test any JavaScript application. Your essential guide to flawless testing.

## 2. Testing Fundamentals

It is really important to understand abstractions in order to use our tools effectively. So the course starts with building a miniature version of Jest.

### 2.1. Throw an Error with a Simple Test in JavaScript

- An automated test in JavaScript is code that throws an error when things are unexpected.
- The most fundamental test in JS looks like this.

```js
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
```

```js
let result, expected;

result = sum(3, 7);
expected = 10;
// throws an error when things are unexpected.
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
```

### 2.2. Abstract Assertions into a JavaScript Assertion Library

- The job of a testing framework is to make the error message as useful as possible so we can quickly identify what the problem is and fix it.
- We can create a function to behave like an assertion library.

```js
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

// -------
expect(result).toBe(expected);
```

- The function returns an object which has functions for different assertions we can make on the `actual` input.

### 2.3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework

- One of the limitations of the way that [this test is written](lessons/02-build-a-javascript-assertion-library/index.js) is that as soon as an assertion experiences an error, the other tests are not run.
- And when run, the stack trace doesn't immediately indicate exactly where the error occurs: `sum` or `subtract`.
- A testing framework's job is to help developers identify what's broken as quickly as possible.
- It can do this by providing more helpful error messages, and running all of the tests.
- We can write a function to handle this.

```js
function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}
```

- Then we can call it as follows.

```js
test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});
```

### 2.4. Support Async Tests with JavaScripts Promises through async await

- We can make our callback functions async and use the await keyword to handle asynchronous function tests.

```js
test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});
```

- This approach however does have a problem.
- If we run our test, we are going to see that they both pass, and then after that, we have an `UnhandledPromiseRejectionWarning`, which is the actual error coming from our `sumAsync` function being broken.
- Because the callback is an async function, it will return a promise.
- When the error is thrown from `expect(result).toBe(expected)` being called, it's going to reject that promise.
- If we turn `test` into an async function, and then await that callback, if that promise is rejected, then we'll land in our catch block.

```js
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}
```

If no error is thrown, then we'll continue on inside the try block. This will work for both our synchronous and our asynchronous tests.

### 2.5. Provide Testing Helper Functions as Globals in JavaScript

- These testing utilities are pretty useful and we want to be able to use them throughout our application.
- Most testing libraries make the utilities available globally for this purpose.

```js
// setup-globals.js
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
```

- We can run `node --require ./setup-globals.js ./index.js` to verify all is working and run our tests.

### 2.6. Verify Custom JavaScript Tests with Jest

- The testing framework we've written so far looks remarkably like Jest.
- Rather than run `node --require ./setup-globals.js ./index.js` we can run `npx jest` and Jest will pick up the `jest.test.js` file and run the tests.
- Jest shows us really helpful error messages and even a code frame for exactly where the error originates.
- This is one of the things that makes Jest such an awesome tool, as the error messages are so clear.
