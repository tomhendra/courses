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
  - [3.10. Avoid Common Errors by Installing and Configuring TypeScript](#310-avoid-common-errors-by-installing-and-configuring-typescript)
  - [3.11. Make ESLint Support TypeScript Files](#311-make-eslint-support-typescript-files)
  - [3.12. Validate Code in a pre-commit git Hook with husky](#312-validate-code-in-a-pre-commit-git-hook-with-husky)
  - [3.13. Auto-format All Files and Validate Relevant Files in a pre-commit Script with lint-staged](#313-auto-format-all-files-and-validate-relevant-files-in-a-pre-commit-script-with-lint-staged)
  - [3.14. Run Multiple npm Scripts in Parallel with npm-run-all](#314-run-multiple-npm-scripts-in-parallel-with-npm-run-all)
- [4. JavaScript Mocking Fundamentals](#4-javascript-mocking-fundamentals)
  - [4.1. Override Object Properties to Mock with Monkey-patching in JavaScript](#41-override-object-properties-to-mock-with-monkey-patching-in-javascript)
  - [4.2. Ensure Functions are Called Correctly with JavaScript Mocks](#42-ensure-functions-are-called-correctly-with-javascript-mocks)
  - [4.3. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn](#43-restore-the-original-implementation-of-a-mocked-javascript-function-with-jestspyon)
  - [4.4. Mock a JavaScript module in a test](#44-mock-a-javascript-module-in-a-test)
  - [4.5. Make a shared JavaScript mock module](#45-make-a-shared-javascript-mock-module)
- [5. Configure Jest for Testing JavaScript Applications](#5-configure-jest-for-testing-javascript-applications)
  - [5.1. Install and Run Jest](#51-install-and-run-jest)

## 1. Introduction

Learn the smart, efficient way to test any JavaScript application. Your essential guide to flawless testing.

## 2. Testing Fundamentals

Do you know what a testing framework does? Do you know what makes a testing framework different from a testing or assertion library? The best way to use a tool effectively is to understand how it works. And the best way to understand how a tool works is by making it yourself!

In this short course, we’ll learn how testing frameworks and assertion libraries work by building our own, simple version of each.

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

- One of the limitations of the way that [this test is written](./01-testing-fundamentals/lessons/02-build-a-javascript-assertion-library/index.js) is that as soon as an assertion experiences an error, the other tests are not run.
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

There are a tonne of ways your application can break. One of the most common sources of bugs is related to typos and incorrect types. Passing a string to a function that expects a number, or falling prey to a common typo in a logical statement are silly mistakes that should never be made, but this happens all the time.

We could write a comprehensive suite of automated tests for our entire codebase to make certain mistakes like this never happen, but that would likely be too much work and slow development down to be worth the benefit. Luckily for us, there are tools like ESLint, TypeScript, Prettier, and more which we can use to satisfy a whole category of testing with a great developer experience.

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
  ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint ."
  }
  ...
}
```

- But there is a problem here in that if we run `build` our deployable code will be output to the dist directory, and ESLint will throw a bunch of errors on the compiled code.
- To fix this we can specify either which directories to ignore with a `.eslintignore` file.
- However it is often the case that the `gitignore` file lists the same directories, so we can provide a `--ignore-path` flag to tell ESLint use the same file.

```json
{
  ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path. gitignore ."
  }
  ...
}
```

### 3.5. Format Code by Installing and Running Prettier

- Prettier is a tool that automatically formats our code.
- Running `npx prettier src/example.js` will output the formatted code to the console.
- To update the file with the formatted changes we add the `write` flag: `npx prettier src/example.js --write`.
- We can add a script to our package.json file with a glob to specify which files to format.

```json
{
  ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "lint": "eslint --ignore-path .gitignore .",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|json)\""
  }
  ...
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
  ...
}
```

### 3.8. Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier

- ESLint and Prettier are both great tools, but there is one situation when they can clash.
- That is if there's an ESLint rule that prevents something like having an extra semicolon, but Prettier would automatically fix that for us anyway.
- To prevent this behaviour we can turn off specific rules .

```json
{
  ...
  "rules": {
    "strict": ["error", "never"],
    "no-extra-semi": "off"
  }
  ...
}
```

- But there is already a package that handles this for us, by disabling any rules in ESLint that Prettier handles.
- We install it by running `npm install --save-dev eslint-config-prettier`.
- We add this to the `extends` array and we no longer have to be concerned about turning off rules.

```json
{
  ...
  "extends": ["eslint:recommended", "eslint-config-prettier"]
  //...
}
```

### 3.9. Validate All Files are Properly Formatted with Prettier

- A helpful thing to have in projects is to have a script that validates that the project is in a good state.

```json
{
  ...
  "scripts": {
    "validate": "npm run lint && npm run build"
  }
  ...
}
```

- We can’t force everyone on the project to use the prettier integration for their editor.
- But we can ensure that the files have been properly formatted, for which Prettier exposes a mechanism: the `--list-different` flag that will throw an error when code is not up to the standard of our project.

```json
{
  ...
  "scripts": {
    ...
    "check-format": "prettier --ignore-path .gitignore --list-different \"**/*.+(js|json)\"",
    "validate": "npm run lint && npm run build"
  }
  ...
}
```

- We can add this to our validate script too.
- And because there is duplication between scripts we can clean things up and adda common prettier script.

```json
{
  ...
  "scripts": {
    "lint": "eslint --ignore-path .gitignore .",
    "prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json)\"",
    "format": "npm run prettier -- --write",
    "check-format": "npm run prettier -- --list-different",
    "validate": "npm run check-format && npm run lint && npm run build"
  }
  ...
}
```

- The `--` tells npm to forward all the remaining arguments to the specified script.

### 3.10. Avoid Common Errors by Installing and Configuring TypeScript

- ESLint can check for a lot of things, but it’s not a great tool for checking the types of variables that flow through our application.
- For this we need a tool like TypeScript.
- We use the TypeScript compiler - tsc - to verify that the types in our project are correct.
- We want to configure TypeScript so we can be explicit about what we want it to do with a tsconfig.json file.

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "noEmit": true
  }
}
```

- `baseUrl` tells TypeScript where to look for files.
- `noEmit` tells TypeScript not to compile our code as we already have Babel doing that job for us.
- We also need to add the `ts` and `tsx` file extensions to the build & prettier scripts.
- We can add a new script to run tsc, and add this to our validate script.

```json
{
  ...
  "scripts": {
    "build": "babel src --extensions .js,.ts,.tsx --out-dir dist",
    ...
    "prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json|ts|tsx)\"",
    "check-types": "tsc",
    ...
    "validate": "npm run check-types && npm run check-format && npm run lint && npm run build"
  }
  ...
}
```

- However we'll still get an error, because Babel doesn't know how to parse TypeScript by default.
- For this we need to run `npm install --save-dev @babel/preset-typescript` and add to our `.babelrc` presets:

```json
{
  "presets": [..."@babel/preset-typescript"]
}
```

### 3.11. Make ESLint Support TypeScript Files

- ESLint doesn't support TypeScript out of the box, but fortunately it is easy to configure because of the [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) project.
- There are also a lot of rules that we don’t need ESLint to bother checking because TypeScript will prevent those problems in the first place.
- To get the two to integrate we need to run `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser`.
- To configure ESLint to run across TypeScript files we need to edit our lint script to include the `ts` & `tsx` file extensions by adding `--ext .js,.ts,.tsx`.

```json
{
  "scripts": {
    ...
    "lint": "eslint --ignore-path .gitignore --ext .js,.ts,.tsx ."
    ...
  }
  ...
}
```

- To configure ESLint to parse TypeScript files, we need to edit the `.eslintrc` file.
- Since we are running ESLint across other files apart from TypeScript, we want to keep our original config, and so we can use ESLint's overrides configuration property.

```js
{
  ...
  "overrides": [
    {
      "files": "**/*.+(ts|tsx)",
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "plugins": ["@typescript-eslint/eslint-plugin"],
      "extends": [
        // pre-built plugin configurations
        "plugin:@typescript-eslint/eslint-recommended", // disables rules from ESLint that TypeScript renders unnecessary.
        "plugin:@typescript-eslint/recommended", // specific rules from the typescript-eslint plugin sometimes useful for TS files e.g. interfaces.
        "eslint-config-prettier/@typescript-eslint" // disables rules from typescript-eslint that are not actually necessary.
      ]
    }
  ]
}
```

### 3.12. Validate Code in a pre-commit git Hook with husky

- As handy as our validate script is it would be better if we could make sure that happens before anyone commits code.
- Husky creates a hooks directory inside the git directory with a bunch of files to handle pre-commit checks.
- To configure Husky we can create a `.huskyrc` file.

```json
{
  "hooks": {
    "pre-commit": "npm run validate"
  }
}
```

- Any time we commit, git will run the pre-commit script which Husky stores in the directory it created, and in turn it will run the validate script.
- If the validate script doesn't pass, the commit won't be created.
- We can override the pre-commit with `--no-verify`.
- Looking at the hooks directory that Husky creates can give us an idea of what we can do with Husky.

### 3.13. Auto-format All Files and Validate Relevant Files in a pre-commit Script with lint-staged

- We can automatically format the files on commit and only check the relevant files with ESLint.
- We can use `lint-staged` to run scripts on the files that are going to be committed as part of our pre-commit hook.
- Install with `npm install --save-dev lint-staged`.
- We can create a config file `.lintstagedrc`:

```json
{
  "*.js": ["eslint"],
  "*.+(js|json|ts)": ["prettier --write", "git add"]
}
```

- `lint-staged` will forward on the files specified to the scripts that we specify.
- Husky is in charge of running scripts on commit, so rather than running the validate script we can run `lint-staged`.
- But since lint-staged is only taking care of linting and formatting, we also need to add our type checking

```json
{
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged && npm run build"
  }
}
```

- The cool thing about lint-staged is that it only runs on files that have changed.
- And we've configured it to add files back that have been changed by prettier (git add step is [not required](https://github.com/okonet/lint-staged#v10) from v10).
- lint-staged can even manage patched changes, so if we are only committing part of the file it will only update the part of the file that is being changed.
- Using lint-staged improves DX for everyone working on the project, since they don't need to have prettier configured for their editor in order for all code committed to be formatted according to the agreed style guide.

### 3.14. Run Multiple npm Scripts in Parallel with npm-run-all

- Our validate script is really handy, but there is a lot going on and it takes a while.
- It would be nice if we could run all these commands at the same time.
- `npm-run-all` allows scripts to be run in parallel.
- Install with `npm install --save-dev npm-run-all`.
- We can then update teh validate script.

```json
{
  ...
  "scripts": {
    ...
    "validate": "npm-run-all --parallel check-types check-format lint build"
  }
  ...
}
```

- Our script now runs a lot faster!

## 4. JavaScript Mocking Fundamentals

When running unit tests, you don’t want to actually make network requests or charge real credit cards. That could… get expensive… and also very, very slow. So instead of running your code exactly as it would run in production, you can modify how some of your JavaScript modules and functions work during tests to avoid test unreliability (flakiness) and improve the speed of your tests. This kind of modification can come in the form of stubs, mocks, or generally: “test doubles.”

There are some great libraries and abstractions for mocking your JavaScript modules during tests. The Jest testing framework has great mocking capabilities built-in for functions as well as entire modules. To really understand how things are working though, let’s implement some of these features ourselves.

### 4.1. Override Object Properties to Mock with Monkey-patching in JavaScript

- We are using `getWinner` which we can imagine is a third party machine learning service that has a testing environment we don't control and is unreliable so we want to mock it out for tests.
- We want to mock put this function so we don't have to run it in our tests.

```js
const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
```

- If we run our test, it will sometimes fail and sometimes pass, due to the `Math.Random` being used in `getWinner`.
- We can mock the function out so it always returns player 1.

```js
utils.getWinner = (p1, p2) => p1;
```

- This makes our test _deterministic_.
- We know that `thumbWar` will operate normally considering our mock for `getWinner`.
- An important part of mocking is that we clean up after ourselves so that we don't impact other tests that may not want to mock, or do so in a different way.

```js
const originalGetWinner = utils.getWinner;
//...
// cleanup
utils.getWinner = originalGetWinner;
```

- This is called _monkey patching_ - we are taking the utils modules and overriding the `getWinner` property so we can make this call deterministic for our tests, and then we are cleaning up after ourselves so that other tests that may want to use this module can do so in its unmodified state.

See the final file: [monkey-patching.js](./03-js-mocking-fundamentals/src/no-framework/monkey-patching.js).

### 4.2. Ensure Functions are Called Correctly with JavaScript Mocks

- It would be nice if we could make some more assertions about how `getWinner` is called, to ensure that it is always being called with `player1` and `player2`, because we could actually break the implementation and our tests couldn't catch it.
- For example if we remove `player2` in the call to `getWinner` in `thumb-war.js` our test will still pass even though the implementation is definitely wrong.
- We will leave `player2` removed and expose this bug in our tests.
- Jest has a function built-in `jest.fn()` which we can provide with an implementation.
- This is a _mock function_ and it keeps track of what arguments it is called with.
- In `mock-fn.js` we can use this function and make an assertion to expose the bug.

```js
utils.getWinner = jest.fn((p1, p2) => p1);
...
expect(utils.getWinner).toHaveBeenNthCalledWith(
  1,
  "Kent C. Dodds",
  "Ken Wheeler"
);
// Test fails!
```

- Adding `player2` back into the call to `getWinner` in `thumb-war.js` now passes the test as expected.
- We could improve things by making assertions about how the function is called.

```js
...
expect(utils.getWinner).toHaveBeenCalledTimes(2);
expect(utils.getWinner).toHaveBeenNthCalledWith("Kent C. Dodds", "Ken Wheeler");
expect(utils.getWinner).toHaveBeenNthCalledWith(
  1,
  "Kent C. Dodds",
  "Ken Wheeler"
);
expect(utils.getWinner).toHaveBeenNthCalledWith(
  2,
  "Kent C. Dodds",
  "Ken Wheeler"
);
...
```

- But we can improve things even further by inspecting what `utils.getWinner` actually is.
- Using `console.log(utils.getWinner)` reveals that it is a function with a whole bunch of properties on it.
- The `mock` property is an object that has a `calls` property which is an array that holds all the arguments that this function is called with.
- We can inspect with `console.log(utils.getWinner.mock.calls)` property and use what it holds in our test, which covers us for all of these previous assertions.

```js
...
expect(utils.getWinner.mock.calls).toEqual([
  ["Kent C. Dodds", "Ken Wheeler"],
  ["Kent C. Dodds", "Ken Wheeler"],
]);
/*
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    "Kent C. Dodds",
    "Ken Wheeler"
  );
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    "Kent C. Dodds",
    "Ken Wheeler"
  );
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    "Kent C. Dodds",
    "Ken Wheeler"
  );
*/
```

- We could implement the `jest.fn()` function ourselves to understand what's going on.

```js
function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}
```

- Our function accepts an implementation and returns that implementation with the arguments passed to the function.
- It also keeps track of all the arguments that it is called with, so we can make an assertion about how it is called.

### 4.3. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn

- Having to keep track of the original `getWinner` and restoring it at the end of our test is annoying.
- Jest exposes another utility to help with this called `spyOn`.

```js
...
jest.spyOn(utils, "getWinner");
...
```

- We pass it the utils as the object, and `getWinner` as the method.
- We no longer need to keep an eye on `getWinner` and can use the restore method instead.

```js
...
// cleanup
// utils.getWinner = originalGetWinner;
utils.getWinner.mockRestore();
...
```

- We have a specific implementation that we want to use for our mock function.
- Mock functions have an additional method on them called `mockImplementation` to which we can pass our mock implementation.

```js
...
utils.getWinner.mockImplementation((p1, p2) => p1);
...
```

- We could implement this ourselves as follows:

```js
/...
function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}
spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((p1, p2) => p1);
...
// cleanup
utils.getWinner.mockRestore();
```

### 4.4. Mock a JavaScript module in a test

- What we are doing with `spyOn` is still a form of monkey patching and it works because the `thumbWar` module is using `utils.getWinner`.
- It only works because we are using common JS, and in a ES modules situation monkey patching won't work.
- We need to take things further so we can mock the entire module.
- Jest allows us to do this with the `Jest.mock` API.
- The first argument is the path to the module that we are mocking relative to where `jest.mock` is being called.
- The second argument is a module factory function that returns the mocked version of the module.

```js
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});
```

- With that we can remove the two previous lines and change the cleanup as follows.

```js
// jest.spyOn(utils, "getWinner");
// utils.getWinner.mockImplementation((p1, p2) => p1);

// cleanup
// utils.getWinner.mockRestore();
utils.getWinner.mockReset();
```

- `Jest.mock` works because Jest is in control of the entire module system.
- We can simulate that same kind of control in our own implementation by using the `require.cache`.
- If we `console.log(require.cache)` before the `require` statements we will see a big object with keys that are paths to modules, and the value is a module object.
- We can make an entry in the require cache, so that when we require the utils module, our cached version is required rather than the file.

```js
const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};
```

- Now we can get rid of all the `spyOn` functionality and change our cleanup:

```js
// cleanup
delete require.cache[utilsPath];
```

- Any other modules that want to use the utils can do so without having trouble with our module mocking that out.
- This is not something that we would normally want to do but it is similar to how things are working in Jest.
- Jest has total control over the module system, and I can do special things like this.
- For us, we have control over the module system using the `require.cache`.
- We can preload the `require.cache` with the mock module that we want to have loaded when thumb-war requires the utils module.
- In Jest, we can put this `jest.mock` call anywhere, and Jest will ensure that our mock is used when the thumb-war requires the utils module.

### 4.5. Make a shared JavaScript mock module

- Often with modules that we want to mock in one file we'll probably want top mock in multiple files.
- Jest enables this with a mocks directory.
- We create a directory `__mocks__` and within it a file named as the module that we want to mock.

```js
module.exports = {
  getWinner: jest.fn((p1, p2) => p1),
};
```

- Then we can remove the second argument from `jest.mock` and Jest will automatically pick up the mock file we created.

```js
...
jest.mock("../utils");
...
```

- We could implement this ourselves as shown in [external-mock-module.js](./03-js-mocking-fundamentals/no-framework/external-mock-module.js) and [utils.js](19-testing-javascript/03-js-mocking-fundamentals/src/__no-framework-mocks__/utils.js).
- Again this isn't exactly what Jest is doing since it has total control over the modules system.
- So when our code requires the utils module, whether that be in our test file or our implementation file, Jest will provide the proper mock for it.

## 5. Configure Jest for Testing JavaScript Applications

Jest is a fully featured testing framework with a developer experience that is second to none. It’s remarkably simple and flexible at the same time. For simple use cases, you often don’t need to configure anything, install and enjoy the built-in coverage and watch mode support.

In a real-world application though, you’ll often have needs specific to your application, especially when testing browser-based applications. You'll need to handle Webpack loaders, dynamic imports, and custom module resolution which Node.js does not support.

In this course we’ll go over ways you can optimize your Jest configuration to make testing real-world JavaScript applications a delight. We’ll cover what’s already been mentioned in addition to Babel support, code coverage, how to make watch mode even more helpful, and how to run test suites with entirely different configurations.

### 5.1. Install and Run Jest

- To add Jest to an existing project: `npm install --save dev jest`.
- Now we can add a test script to our `package.json`.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

- We can create a directory in src `__tests__` and a `example.js` file within.

```js
test("it works", () => {});
```

- We can then run `npm run test` or `npm test` or `npm t` to run our tests.
- There is no configuration required for this to work with Jest.
- We can also name our files `example.test.js` which Jest will pick up automatically.
- But Kent prefers the separation of tests using the `__tests__` directory, but he does locate the directory close to the file that's being tested.
- Note that `travis.yml` triggers the `setup` script, which in turn runs `validate`. We want to include testing in our `validate` script.

```json
{
  "scripts": {
    "test": "jest",
    "validate": "npm run lint && npm run test && npm run build"
  }
}
```
