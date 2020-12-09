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
- [3. Static Analysis Testing JavaScript Applications](#3-static-analysis-testing-javascript-applications)
  - [3.1. Lint JavaScript by Configuring and Running ESLint](#31-lint-javascript-by-configuring-and-running-eslint)
  - [3.2. Use the ESLint Extension for VSCode](#32-use-the-eslint-extension-for-vscode)
  - [3.3. Use pre-built ESLint Configuration using extends](#33-use-pre-built-eslint-configuration-using-extends)
  - [3.4. Run ESLint with npm Scripts](#34-run-eslint-with-npm-scripts)
  - [3.5. Format Code by Installing and Running Prettier](#35-format-code-by-installing-and-running-prettier)
  - [3.6. Configure Prettier](#36-configure-prettier)
  - [3.7. Use the Prettier Extension for VSCode](#37-use-the-prettier-extension-for-vscode)
  - [3.8. Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier](#38-disable-unnecessary-eslint-stylistic-rules-with-eslint-config-prettier)
  - [3.9. Validate All Files are Properly Formatted with Prettier](#39-validate-all-files-are-properly-formatted-with-prettier)

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

## 3. Static Analysis Testing JavaScript Applications

- There are static testing tools like TypeScript, ESLint & Prettier to eliminate an entire category of bugs from our projects.

### 3.1. Lint JavaScript by Configuring and Running ESLint

- To install ESLint run `npm install --dev-dependency eslint`.
- If we run `npx eslint .` we will see an error stating that no eslint config has been found.
- Creating a `.eslintrc` file is required to configure ESLint.
- By default ESLint will parse files as if they were ECMA 5 files.
- We can set some basic configuration options.

```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "strict": ["error", "never"],
    "valid-typeof": "error",
    "no-unsafe-negation": "error",
    "no-unused-vars": "error",
    "no-unexpected-multiline": "error",
    "no-undef": "error"
  },
  "env": {
    "browser": true
  }
}
```

- By setting rules to error, the script will actually fail so will stop the build process from completing in CI.
- We can use `warn` instead if migrating a codebase which will stop the script from failing.
- The strict rule is a configurable rule.
- We can add `"strict": ["error", "never"]` if we are using Babel to compile our JS and do not need the `use strict` pragma in our files.
- The `"env": { "browser": true }` tells ESLint which environment we are running in.

### 3.2. Use the ESLint Extension for VSCode

- The plugin improves our experience using ESLint.
- We will see red underlines in our editor for all the places in which we are breaking our rules.
- Warnings are highlighted with yellow underlines.
- We can hit CMD . to reveal a popup menu to assist with fixing the problems inline.
- Running `npx eslint --fix` will run ESLint across the entire project and fix as much as possible for us.

### 3.3. Use pre-built ESLint Configuration using extends

- ESLint has a lot of rules, and even some available from third party packages.
- There are recommended configurations which are a collection of predefined rules.
- In order to use these rulesets we use the `extends` configuration.
- ESLint ships with a default ruleset `eslint:recommended`.

```json
{
  "parserOptions": {
    "ecmaVersion": "2018"
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "strict": ["error", "never"]
  },
  "env": {
    "browser": true
  }
}
```

- Any rules that we do specify will override the ruleset.
- We can also specify multiple rulesets, with the ones specified later overriding the previous.

### 3.4. Run ESLint with npm Scripts

- We can add a lint script to our package.json so that we can run ESLint.

```json
{
  // ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint ."
  }
  // ...
}
```

- But there is a problem here in that if we run `build` our deployable code will be output to the dist directory, and ESLint will throw a bunch of errors on the compiled code.
- To fix this we can specify either which directories to ignore with a `.eslintignore` file.
- However it is often the case that the `gitignore` file lists the same directories, so we can provide a `--ignore-path` flag to tell ESLint use the same file.

```json
{
  // ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path. gitignore ."
  }
  // ...
}
```

### 3.5. Format Code by Installing and Running Prettier

- Prettier is a tool that automatically formats our code.
- Running `npx prettier src/example.js` will output the formatted code to the console.
- To update the file with the formatted changes we add the `write` flag: `npx prettier src/example.js --write`.
- We can add a script to our package.json file with a glob to specify which files to format.

```json
{
  // ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\""
  }
  // ...
}
```

- Note we also used the `--ignore-path` flag which is supported by Prettier too.

### 3.6. Configure Prettier

- Prettier has a [playground](https://prettier.io/playground/) where we can play around with a bunch of settings.
- We can copy the JSON config and paste into a `.prettierrc` file, for example:

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "always",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

### 3.7. Use the Prettier Extension for VSCode

- VSCode has a plugin for prettier but it needs to be configured within the VSCode settings.
- We need to specify the default formatter, and optionally configure to format on save.

```json
{
  "editor.defaultFormatter": "esbenp.pretter-vscode",
  "editor.formatOnSave": true
  // ...
}
```

### 3.8. Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier

- ESLint and Prettier are both great tools, but there is one situation when they can clash.
- That is if there's an ESLint rule that prevents something like having an extra semicolon, but Prettier would automatically fix that for us anyway.
- To prevent this behaviour we can turn off specific rules .

```json
{
  // ...
  "rules": {
    "strict": ["error", "never"],
    "no-extra-semi": "off"
  }
  // ...
}
```

- But there is already a package that handles this for us, by disabling any rules in ESLint that Prettier handles.
- We install it by running `npm install --save-dev eslint-config-prettier`.
- We add this to the `extends` array and we no longer have to be concerned about turning off rules.

```json
{
  // ...
  "extends": ["eslint:recommended", "eslint-config-prettier"]
  //...
}
```

### 3.9. Validate All Files are Properly Formatted with Prettier

- A helpful thing to have in projects is to have a script that validates that the project is in a good state.

```json
{
  // ...
  "scripts": {
    "validate": "npm run lint && npm run build"
  }
  // ...
}
```

- We can also ensure that the files have been properly formatted, for which Prettier exposes a mechanism.

```json
{
  // ...
  "scripts": {
    // ...
    "check-format": "prettier --ignore-path .gitignore --list-different \"**/*.+(js|json)\"",
    "validate": "npm run lint && npm run build"
  }
  // ...
}
```

- We can add this to our validate script too.
- And because there is duplication between scripts we can clean things up and adda common prettier script.

```json
{
  // ...
  "scripts": {
    "lint": "eslint --ignore-path .gitignore .",
    "prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "validate": "npm run check-format && npm run lint && npm run build"
  }
  // ...
}
```

- The `--` tells npm to forward all the remaining arguments to the specified script.
