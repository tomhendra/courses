<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Testing JavaScript</h1>
</div>

- [1. Testing Fundamentals](#1-testing-fundamentals)
  - [1.1. Throw an Error with a Simple Test in JavaScript](#11-throw-an-error-with-a-simple-test-in-javascript)
  - [1.2. Abstract Assertions into a JavaScript Assertion Library](#12-abstract-assertions-into-a-javascript-assertion-library)
  - [1.3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework](#13-encapsulate-and-isolate-tests-by-building-a-javascript-testing-framework)
  - [1.4. Support Async Tests with JavaScripts Promises through async await](#14-support-async-tests-with-javascripts-promises-through-async-await)
  - [1.5. Provide Testing Helper Functions as Globals in JavaScript](#15-provide-testing-helper-functions-as-globals-in-javascript)
  - [1.6. Verify Custom JavaScript Tests with Jest](#16-verify-custom-javascript-tests-with-jest)
- [2. Static Analysis Testing JavaScript Applications](#2-static-analysis-testing-javascript-applications)
  - [2.1. Lint JavaScript by Configuring and Running ESLint](#21-lint-javascript-by-configuring-and-running-eslint)
  - [2.2. Use the ESLint Extension for VSCode](#22-use-the-eslint-extension-for-vscode)
  - [2.3. Use pre-built ESLint Configuration using extends](#23-use-pre-built-eslint-configuration-using-extends)
  - [2.4. Run ESLint with npm Scripts](#24-run-eslint-with-npm-scripts)
  - [2.5. Format Code by Installing and Running Prettier](#25-format-code-by-installing-and-running-prettier)
  - [2.6. Configure Prettier](#26-configure-prettier)
  - [2.7. Use the Prettier Extension for VSCode](#27-use-the-prettier-extension-for-vscode)
  - [2.8. Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier](#28-disable-unnecessary-eslint-stylistic-rules-with-eslint-config-prettier)
  - [2.9. Validate All Files are Properly Formatted with Prettier](#29-validate-all-files-are-properly-formatted-with-prettier)
  - [2.10. Avoid Common Errors by Installing and Configuring TypeScript](#210-avoid-common-errors-by-installing-and-configuring-typescript)
  - [2.11. Make ESLint Support TypeScript Files](#211-make-eslint-support-typescript-files)
  - [2.12. Validate Code in a pre-commit git Hook with husky](#212-validate-code-in-a-pre-commit-git-hook-with-husky)
  - [2.13. Auto-format All Files and Validate Relevant Files in a pre-commit Script with lint-staged](#213-auto-format-all-files-and-validate-relevant-files-in-a-pre-commit-script-with-lint-staged)
  - [2.14. Run Multiple npm Scripts in Parallel with npm-run-all](#214-run-multiple-npm-scripts-in-parallel-with-npm-run-all)
- [3. JavaScript Mocking Fundamentals](#3-javascript-mocking-fundamentals)
  - [3.1. Override Object Properties to Mock with Monkey-patching in JavaScript](#31-override-object-properties-to-mock-with-monkey-patching-in-javascript)
  - [3.2. Ensure Functions are Called Correctly with JavaScript Mocks](#32-ensure-functions-are-called-correctly-with-javascript-mocks)
  - [3.3. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn](#33-restore-the-original-implementation-of-a-mocked-javascript-function-with-jestspyon)
  - [3.4. Mock a JavaScript module in a test](#34-mock-a-javascript-module-in-a-test)
  - [3.5. Make a shared JavaScript mock module](#35-make-a-shared-javascript-mock-module)
- [4. Configure Jest for Testing JavaScript Applications](#4-configure-jest-for-testing-javascript-applications)
  - [4.1. Install and Run Jest](#41-install-and-run-jest)
  - [4.2. Compile Modules with Babel in Jest Tests](#42-compile-modules-with-babel-in-jest-tests)
  - [4.3. Configure Jest’s Test Environment for Testing Node or Browser Code](#43-configure-jests-test-environment-for-testing-node-or-browser-code)
  - [4.4. Support Importing CSS files with Jest’s moduleNameMapper](#44-support-importing-css-files-with-jests-modulenamemapper)
  - [4.5. Support using Webpack CSS Modules with Jest](#45-support-using-webpack-css-modules-with-jest)
  - [4.6. Generate a Serializable Value with Jest Snapshots](#46-generate-a-serializable-value-with-jest-snapshots)
  - [4.7. Test an Emotion Styled UI with Custom Jest Snapshot Serializers](#47-test-an-emotion-styled-ui-with-custom-jest-snapshot-serializers)
  - [4.8. Support Custom Module Resolution with Jest moduleDirectories](#48-support-custom-module-resolution-with-jest-moduledirectories)
  - [4.9. Configure Jest to Run Setup for All Tests with Jest setupFilesAfterEnv](#49-configure-jest-to-run-setup-for-all-tests-with-jest-setupfilesafterenv)
  - [4.10. Support a Test Utilities File with Jest moduleDirectories](#410-support-a-test-utilities-file-with-jest-moduledirectories)
  - [4.11. Use Jest Watch Mode to Speed Up Development](#411-use-jest-watch-mode-to-speed-up-development)
  - [4.12. Step through Code in Jest using the Node.js Debugger and Chrome DevTools](#412-step-through-code-in-jest-using-the-nodejs-debugger-and-chrome-devtools)
  - [4.13. Configure Jest to Report Code Coverage on Project Files](#413-configure-jest-to-report-code-coverage-on-project-files)
  - [4.14. Analyze Jest Code Coverage Reports](#414-analyze-jest-code-coverage-reports)
  - [4.15. Set a Code Coverage Threshold in Jest to Maintain Code Coverage Levels](#415-set-a-code-coverage-threshold-in-jest-to-maintain-code-coverage-levels)
  - [4.16. Report Jest Test Coverage to Codecov through TravisCI](#416-report-jest-test-coverage-to-codecov-through-travisci)
  - [4.17. Run Jest Watch Mode by Default Locally with is-ci-cli](#417-run-jest-watch-mode-by-default-locally-with-is-ci-cli)
  - [4.18. Run Tests with a Different Configuration using Jest’s --config Flag and testMatch Option](#418-run-tests-with-a-different-configuration-using-jests---config-flag-and-testmatch-option)
  - [4.19. Support Running Multiple Configurations with Jest’s Projects Feature](#419-support-running-multiple-configurations-with-jests-projects-feature)
  - [4.20. Run ESLint with Jest using jest-runner-eslint](#420-run-eslint-with-jest-using-jest-runner-eslint)
  - [4.21. Test Specific Projects in Jest Watch Mode with jest-watch-select-projects](#421-test-specific-projects-in-jest-watch-mode-with-jest-watch-select-projects)
  - [4.22. Filter which Tests are Run with Typeahead Support in Jest Watch Mode](#422-filter-which-tests-are-run-with-typeahead-support-in-jest-watch-mode)
  - [4.23. Run Only Relevant Jest Tests on Git Commit to Avoid Breakages](#423-run-only-relevant-jest-tests-on-git-commit-to-avoid-breakages)

## 1. Testing Fundamentals

Do you know what a testing framework does? Do you know what makes a testing framework different from a testing or assertion library? The best way to use a tool effectively is to understand how it works. And the best way to understand how a tool works is by making it yourself!

In this short course, we’ll learn how testing frameworks and assertion libraries work by building our own, simple version of each.

### 1.1. Throw an Error with a Simple Test in JavaScript

In this lesson, we’ll get the most fundamental understanding of what an automated test is in JavaScript. A test is code that throws an error when the actual result of something does not match the expected output.

Tests can get more complicated when you’re dealing with code that depends on some state to be set up first (like a component needs to be rendered to the document before you can fire browser events, or there needs to be users in the database). However, it is relatively easy to test pure functions (functions which will always return the same output for a given input and not change the state of the world around them).

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

### 1.2. Abstract Assertions into a JavaScript Assertion Library

Let’s add a simple layer of abstraction in our simple test to make writing tests easier. The assertion library will help our test assertions read more like a phrase you might say which will help people understand our intentions better. It will also help us avoid unnecessary duplication.

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

### 1.3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework

One of the limitations of the way that [this test is written](./01-testing-fundamentals/lessons/02-build-a-javascript-assertion-library/index.js) is that as soon as one of these assertions experiences an error, the other tests are not run. It can really help developers identify what the problem is if they can see the results of all of the tests.

Let’s create our own test function to allow us to encapsulate our automated tests, isolate them from other tests in the file, and ensure we run all the tests in the file with more helpful error messages.

- When the test is run, the stack trace doesn't immediately indicate exactly where the error occurs: `sum` or `subtract`.
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

### 1.4. Support Async Tests with JavaScripts Promises through async await

Our testing framework works great for our synchronous test. What if we had some asynchronous functions that we wanted to test? We could make our callback functions async, and then use the await keyword to wait for that to resolve, then we can make our assertion on the result and the expected.

Let’s make our testing framework support promises so users can use async/await.

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

### 1.5. Provide Testing Helper Functions as Globals in JavaScript

These testing utilities that we built are pretty useful. We want to be able to use them throughout our application in every single one of our test files.

Some testing frameworks provide their helpers as global variables. Let’s implement this functionality to make it easier to use our testing framework and assertion library. We can do this by exposing our test and expect functions on the global object available throughout the application.

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

### 1.6. Verify Custom JavaScript Tests with Jest

Up to this point we’ve created all our own utilities. As it turns out, the utilities we’ve created mirror the utilities provided by Jest perfectly! Let’s install Jest and use it to run our test!

- Rather than run `node --require ./setup-globals.js ./index.js` we can run `npx jest` and Jest will pick up the `jest.test.js` file and run the tests.
- Jest shows us really helpful error messages and even a code frame for exactly where the error originates.
- This is one of the things that makes Jest such an awesome tool, as the error messages are so clear.

## 2. Static Analysis Testing JavaScript Applications

There are a tonne of ways your application can break. One of the most common sources of bugs is related to typos and incorrect types. Passing a string to a function that expects a number, or falling prey to a common typo in a logical statement are silly mistakes that should never be made, but this happens all the time.

We could write a comprehensive suite of automated tests for our entire codebase to make certain mistakes like this never happen, but that would likely be too much work and slow development down to be worth the benefit. Luckily for us, there are tools like ESLint, TypeScript, Prettier, and more which we can use to satisfy a whole category of testing with a great developer experience.

### 2.1. Lint JavaScript by Configuring and Running ESLint

The static code analysis and linting tool ESLint is the de-facto standard for linting JavaScript projects. In this lesson we’ll see how to install, run, and configure it for your preferences.

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

### 2.2. Use the ESLint Extension for VSCode

Whatever editor you use, chances are there’s probably some plugin or extension you can use to integrate ESLint and your editor to get a nice in-editor experience using ESLint so you don’t have to run the ESLint script to check your code and instead can identify issues as you’re writing and editing your code. Let’s take a look at what you can do with the ESLint Extension for VSCode.

- The plugin improves our experience using ESLint.
- We will see red underlines in our editor for all the places in which we are breaking our rules.
- Warnings are highlighted with yellow underlines.
- We can hit CMD . to reveal a popup menu to assist with fixing the problems inline.
- Running `npx eslint --fix` will run ESLint across the entire project and fix as much as possible for us.

### 2.3. Use pre-built ESLint Configuration using extends

ESLint has a tonne of rules you can configure for your project. But who has time to do all that? This is why ESLint has an extends configuration which you can use to base your own configuration off of other configurations. Let’s add all of ESLint’s built-in recommended rules to our project and override just the ones we want to change.

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

### 2.4. Run ESLint with npm Scripts

Let’s add an npm script called lint so we can run ESLint whenever we want with the proper command line flags.

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

### 2.5. Format Code by Installing and Running Prettier

The code formatting tool prettier can help you avoid a lot of useless time spent formatting code and arguing about code formatting with your co-workers. It can also help you catch subtle issues with your code that you may not notice otherwise. In this lesson we’ll learn how to install and run prettier.

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

### 2.6. Configure Prettier

Prettier is a pretty opinionated tool, but it does allow for some customization. In this lesson we’ll check out the prettier playground and see what options we want to enable in our project’s `.prettierrc` file.

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

### 2.7. Use the Prettier Extension for VSCode

Running prettier manually is great, but it’d be even better if we could just run prettier anytime we save our file. Whatever editor you use, there’s likely a plugin or extension for it to integrate with prettier. Let’s try out the Prettier Extension for VSCode.

- The plugin for prettier needs to be configured within the VSCode settings.
- We need to specify the default formatter, and optionally configure to format on save.

```json
{
  "editor.defaultFormatter": "esbenp.pretter-vscode",
  "editor.formatOnSave": true
  ...
}
```

### 2.8. Disable Unnecessary ESLint Stylistic Rules with eslint-config-prettier

Because prettier can automatically fix a lot of stylistic issues in our codebase, it’s not necessary to have eslint check for those and it can actually be kind of annoying if it does. So let’s see how we can use eslint-config-prettier to disable all rules that are made irrelevant thanks to prettier.

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

### 2.9. Validate All Files are Properly Formatted with Prettier

You can’t force everyone on your project to use the prettier integration for their editor, so let’s add a validation script to verify that prettier has been run on all project files.

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

### 2.10. Avoid Common Errors by Installing and Configuring TypeScript

ESLint can check for a lot of things, but it’s not a great tool for checking the types of variables that flow through your application. For this you’ll need a type-checking tool like Flow or TypeScript. Let’s see how we can configure our project to work with TypeScript.

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

### 2.11. Make ESLint Support TypeScript Files

ESLint does not have support for TypeScript out of the box, but luckily adding support for TypeScript is straightforward thanks to the [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) project. And now that we have TypeScript, there are a lot of rules that we don’t need ESLint to bother checking because TypeScript will prevent those problems in the first place! Let’s get these two tools integrated.

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

### 2.12. Validate Code in a pre-commit git Hook with husky

We have a few checks we’ll run in continuous integration when someone opens a pull request, but it’d be even better if we could run some of those checks before they even commit their code so they can fix it right away rather than waiting for CI to run. Let’s use husky’s precommit script to run our validation.

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

### 2.13. Auto-format All Files and Validate Relevant Files in a pre-commit Script with lint-staged

Rather than failing when a developer has failed to format their files or run linting on all the files in the project on every commit, it would be even better to just automatically format the files on commit and only check the relevant files with eslint. Let’s use `lint-staged` to run scripts on the files that are going to be committed as part of our precommit hook.

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

### 2.14. Run Multiple npm Scripts in Parallel with npm-run-all

We use npm scripts a lot, and that validate script is a great way to bring everything together. But with the way these tools work, we can run them all at the same time and things will work just as well. This will speed up our script runtime a lot, so let’s use `npm-run-all` to make that happen.

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

## 3. JavaScript Mocking Fundamentals

When running unit tests, you don’t want to actually make network requests or charge real credit cards. That could… get expensive… and also very, very slow. So instead of running your code exactly as it would run in production, you can modify how some of your JavaScript modules and functions work during tests to avoid test unreliability (flakiness) and improve the speed of your tests. This kind of modification can come in the form of stubs, mocks, or generally: “test doubles.”

There are some great libraries and abstractions for mocking your JavaScript modules during tests. The Jest testing framework has great mocking capabilities built-in for functions as well as entire modules. To really understand how things are working though, let’s implement some of these features ourselves.

### 3.1. Override Object Properties to Mock with Monkey-patching in JavaScript

Mocking allows our tests to be deterministic and ensure that we will get the expected result every time.

The most naïve approach to mocking in JavaScript is to override an object’s properties in the test. This is pretty simple and straightforward, but also fairly limited. In this lesson, we’ll monkey patch our `getWinner` function to always return the same winner every time the function is called. After the test is run, we’ll clean up the mock and assign the original function implementation back to `getWinner`.

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

### 3.2. Ensure Functions are Called Correctly with JavaScript Mocks

Often when writing JavaScript tests and mocking dependencies, you’ll want to verify that the function was called correctly. That requires keeping track of how often the function was called and what arguments it was called with. That way we can make assertions on how many times it was called and ensure it was called with the right arguments.

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

### 3.3. Restore the Original Implementation of a Mocked JavaScript Function with jest.spyOn

With our current usage of the mock function, we have to manually keep track of the original implementation so we can clean up after ourselves to keep our tests idempotent. Let’s see how `jest.spyOn` can help us avoid the bookkeeping and simplify our situation.

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

### 3.4. Mock a JavaScript module in a test

So far we’re still basically monkey-patching the utils module which is fine, but could lead to problems in the future, especially if we want to mock a ESModule export which doesn’t allow this kind of monkey-patching on exports. Instead, let’s mock the entire module so when our test subject requires the file they get our mocked version instead.

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

### 3.5. Make a shared JavaScript mock module

Often you’ll want to mock the same file throughout all the tests in your codebase. So let’s make a shared mock file in Jest's `__mocks__` directory which Jest can load for us automatically.

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

## 4. Configure Jest for Testing JavaScript Applications

Jest is a fully featured testing framework with a developer experience that is second to none. It’s remarkably simple and flexible at the same time. For simple use cases, you often don’t need to configure anything, install and enjoy the built-in coverage and watch mode support.

In a real-world application though, you’ll often have needs specific to your application, especially when testing browser-based applications. You'll need to handle Webpack loaders, dynamic imports, and custom module resolution which Node.js does not support.

In this course we’ll go over ways you can optimize your Jest configuration to make testing real-world JavaScript applications a delight. We’ll cover what’s already been mentioned in addition to Babel support, code coverage, how to make watch mode even more helpful, and how to run test suites with entirely different configurations.

### 4.1. Install and Run Jest

We start in a small, but real-world application that’s built with webpack and React. We’ll go over installing the Jest testing framework locally to our project, adding an npm script to make it easy to run, and adding an example test file.

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

### 4.2. Compile Modules with Babel in Jest Tests

Jest automatically loads and applies our babel configuration. However, because our project takes advantage of tree shaking with Webpack, our Babel configuration disables compiling modules. For Jest to work on our code, we need to make sure that our Babel configuration compiles modules during our tests. We’ll use the `NODE_ENV` environment variable to generate the proper configuration.

- To test something more meaningful we can look at the [utils.js](19-testing-javascript/04-configure-jest/src/shared/utils.js) file which contains the `getFormattedValue` function.
- We can create a `__test__` directory nearby containing a `utils.js` file to match what we want to test.
- But the test will fail with `SyntaxError: Cannot use import statement outside a module`.
- The issue is that Jest runs in Node but Node does not support import statements.
- In our app we are compiling import statements using Webpack, which Webpack understands by default.
- We have configured Webpack further with Babel Loader, so it'll compile everything else that isn't supported by the browsers that we don't support.
- The trick here is that in our Babel RC, we've configured `@babel/preset-env` to not compile modules so that Webpack can manage them.
- Jest is automatically picking up this Babel configuration and applying it to our test code.
- However, because we have Babel configured to not compile modules, it is causing our problem.
- If we remove that configuration and then try to run `npm t` again, it wil work, but we're not going to get the benefits of tree shaking with Webpack.
- We want to have our cake and eat it too.
- Instead we're going to use `isTest` to check the environment for `test`.

```js
const isTest = String(process.env.NODE_ENV) === "test";
```

- We're in a test environment if the node `ENV` equals `test` which Jest sets for us automatically.
- If we are in `test`, then we want to compile the modules to commonjs, so it works in node.
- Otherwise, we won't compile it at all and Webpack will take over.

```js
module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    '@babel/preset-react',
    [
    ...
```

- This is one of the really cool things about jest, that it allows you to get a really long way before you have to start worrying about configuring this framework.

### 4.3. Configure Jest’s Test Environment for Testing Node or Browser Code

In our application we’re testing code that should run in the browser, but Jest is intended to test JavaScript that runs in the browser or in node. Let’s create a custom Jest config file so we can customize the test environment.

- Jest simulates the browser in Node using something called JS DOM for free.
- We can prove this with `console.log(window)` and running `npm t`.
- The utils that we are testing can run in Node or browser because there is nothing that relies specifically on the browser.
- So we can perform our tests in the Node environment to save ourselves a little time in the process because there's a little performance hit to set up JS DOM.
- If we run `npm t -- --env=node` than our tests will run in the Node env and we'll get an error on `console.log(window)` becuase `window` doesn't exist.
- To Configure this so we don't have to pass the flag every time we can create a `jest.config.js` file:

```js
module.exports = {
  testEnvironment: "jest-environment-node",
};
```

- Now, if we run `npm t`, that configuration will be read automatically, and jest doesn't bother setting up jsdom for our test.
- If we want to be explicit about including `jsdom`, then we can replace node with `jsdom`.
- Kent likes to be explicit in particular for this project since it relies on browser APIs, and it is good to make sure that our tests are as close to reality as possible by simulating a global browser environment.

### 4.4. Support Importing CSS files with Jest’s moduleNameMapper

In most real-world applications using webpack, you’re likely using a few loaders. In this lesson we’ll see how to make Jest load our modules properly with a moduleNameMapper so we can test our code that makes use of these loaders.

- We can create a new test file `auto-scaling0text.js`:

```js
import React from "react";
import { render } from "@testing-library/react";
import AutoScalingText from "../auto-scaling-text";

test("renders", () => {
  render(<AutoScalingText />);
});
```

- We need to `npm i @testing-library/react` as a dev dependency.
- When we run `npm t` however the test fails.
- Jest tells us there is an unexpected `.` and points to `import styles from './auto-scaling-text.module.css'` and specifically the CSS class `.auto-scaling-text`.
- What's causing the syntax error is that Jest is trying to require this file like it is a commonJS module, but it is a CSS file.
- To solve this we will use Jest’s moduleNameMapper, so that we can map modules that end with `.css` to a different mocked version of the module so it can be stubbed out and we can require the file in our tests.
- We will create a new file `style-mock.js` in a `test` directory in the root which exports an empty object.

```js
module.exports = {};
```

- And in our `jest.config.js` file we can configure moduleNameMapper.

```js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
};
```

- This method is fine for us as it is pretty uncommon to test CSS anyway, and if we did then visual regression testing would be a better fit.
- The reason that this works in our application is because we have webpack configured to handle CSS files with the CSS-loader and the style-loader.
- Webpack is managing this for our application and we simply needed to make Jest manage the same thing for our test.

### 4.5. Support using Webpack CSS Modules with Jest

If you’re using CSS modules with Webpack, then we can improve our moduleNameMapper to improve our experience and capabilities testing our components by including the css module property name in our tests using `identity-obj-proxy`.

- To take things a step further we can get the `debug` method from the `render` call in `auto-scaling-text.js`.

```js
test("renders", () => {
  const { debug } = render(<AutoScalingText />);
  debug();
});
```

- When we run `npm t` this will output the rendered DOM nodes to the terminal.

```html
<body>
  <div>
    <div data-testid="total" style="transform: scale(1,1);" />
  </div>
</body>
```

- Comparing the output to the the actual component, `ref={nodeRef}` is expectedly missing since it would not get output to the DOM.
- But there is one thing missing that is expected and that is `className={styles.autoScalingText}`.
- This is not being output because `styles` is getting mapped to `style-mock.js` which is an empty object.
- If we had some logic in the className being applied it would be nice to have this available to be tested.
- It would be nice if we could see the className output even though Webpack will replace it with a generated className at build time.
- We can install a util to handle this: `npm i --save-dev identity-obj-proxy` - and add to our `jest.config.js`:

```js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
};
```

- This tells Jest when we find modules that end in `.module.css` to use `identity-obj-proxy` as the mock module for that particular dependency.
- `identity-obj-proxy` will return a string for the path of the particular module that was accessed.
- If we run `npm t` again we will see the output contains `class="autoScalingText"`.
- Even if we are not loading the styles into JS DOM we cna at least make assertions on the className that's being applied for our CSS modules.
- Note that order does matter, in that the `.module.css` files would match first with regular `.css` files using our empty object file mock.

### 4.6. Generate a Serializable Value with Jest Snapshots

Snapshot testing is a way to simplify writing and maintaining assertions. As noted in the Jest documentation: “The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. Jest uses pretty-format to make snapshots human-readable during code review. On subsequent test runs Jest will simply compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.” Let’s see how these work and in what situations we can and should use them.

This lesson uses a simple demo before hopping into the application code testing DOM nodes. This example code isn't available.

- The example uses an array of Superheroes with a function that filters them based on whether they have the ability to fly.

```js
const superheroes = [
  { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
  { name: "Apogee", powers: ["gravity control", "fly"] },
  { name: "Blazestone", powers: ["fire control", "pyrotechnic discharges"] },
  { name: "Frozone", powers: ["freeze water"] },
  { name: "Mr. Incredible", powers: ["physical strength"] },
  { name: "Elastic Girl", powers: ["physical strength"] },
  { name: "Violet", powers: ["invisibility", "force fields"] },
  { name: "Dash", powers: ["speed"] },
  // { name: "Jack-Jack", powers: ["shapeshifting", "fly"] },
];

export function getFlyingSuperheroes() {
  return superheroes.filter((hero) => {
    return hero.powers.includes("fly");
  });
}
```

- If we want to test this function we'd write something like this:

```js
import { getFlyingSuperheroes } from "../superheroes";

test("returns superheroes that can fly", () => {
  const flyingHeroes = getFlyingSuperheroes();
  expect(flyingHeroes).toEqual([
    { name: "Dynaguy", powers: ["disintegration ray", "fly"] },
    { name: "Apogee", powers: ["gravity control", "fly"] },
  ]);
});
```

- To get the expected output, we could either manually check or `console.log(flyingHeroes)` and run our test.
- But later if Jack-Jack is added to our list then the test would fail.
- So we would need to repeat the `console.log(flyingHeroes)` and add Jack-Jack to our test.
- But this manual process of console.logging and copying the output to make the assertion is arduous.
- Snapshots do all of this work for us.

```js
test("returns superheroes that can fly", () => {
  const flyingHeroes = getFlyingSuperheroes();
  expect(flyingHeroes).toMatchSnapshot();
});
```

- When we run our test, Jest will create a snapshot file ending in `.snap` in a `__snapshots__` directory.
- Jest takes the object that we pass to the assertion, and serializes it into a string which it saves into the file.
- The string output is basically the same as our copy / paste from the console.log except we didn't have to do this manually.
- When we add Jack-Jack and rerun our test, the fail message states that the snapshot doesn't match.
- We can update our snapshots with `npm test -- -u` which runs `jest -u`.
- A snapshot lives in two locations: the assertion and the value that Jest creates in the file. So we want to commit the snapshot file too.
- One of the problems with snapshots is that they can get very long, and also being in a separate file is harder to review.
- If we change `toMatchSnapshot` to `toMatchInlineSnapshot` Jest will insert the snapshot inside our test code when we run our test.

```js
test("returns superheroes that can fly", () => {
  const flyingHeroes = getFlyingSuperheroes();
  expect(flyingHeroes).toMatchInlineSnapshot(`
    Array [
      Object {
        name: "Dynaguy",
        powers: Array [
          "disintegration ray",
          "fly"
        ]
      },
      Object {
        name: "Apogee",
        powers: Array [
          "gravity control",
          "fly"
        ],
      },
    ],
  }`
);
```

- The other good thing about the snapshot inline is that we don't forget about it, and we are naturally encourages to keep it smaller.
- The test will fail because of the obsolete snapshot, which Jest will clean up automatically for us when we run `npm t -- -u`.

Let's see snapshots apply to DOM nodes in our app.

- We can create a `calculator-display.js` file in our `__test__` directory for our test.
- `container` is a DOM node, and we can look at `console.log(container.innerHTML)`.
- We could take a snapshot of this but the output is a single line, so a change to anything on the DOM node would invalidate the entire snapshot.
- Jest has built-in capability to snapshot and serialize DOM nodes.

```js
import React from "react";
import { render } from "@testing-library/react";
import CalculatorDisplay from "../calculator-display";

test("renders", () => {
  const { container } = render(<CalculatorDisplay value="0" />);
  expect(container.firstChild).toMatchInlineSnapshot();
});
```

- Jest will take a snapshot of the DOM node and serialize it into well formatted HTML.
- Note that using inline snapshots requires prettier to be installed in the project because Jest is updating the code in the test file and it wants to make sure not to change more than it has to with regard to formatting.

### 4.7. Test an Emotion Styled UI with Custom Jest Snapshot Serializers

Part of the power of snapshots is the ability to provide custom serializers. Let’s check out how to use `@emotion/jest` to include our emotion CSS styles in our React component snapshots so we can be made aware of the impact of our CSS changes on our components.

- Our inline snapshot currently has a generated class name: `css-lq9ahq-calculator-display--CalculatorDisplay`.

```js
test("renders", () => {
  const { container } = render(<CalculatorDisplay value="0" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="css-lq9ahq-calculator-display--CalculatorDisplay"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `);
});
```

- In our source code we are using the css prop from Emotion.
- If we change anything in our source code the test would fail and the error would be unhelpful.
- It would be nice if we could see that value in our snapshot rather than the generated class name, and get a more helpful snapshot error.
- To assist we can `npm i --save-dev @emotion/jest` which is a snapshot serializer.
- Now we need to configure Jest to use it.

```js
// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
  snapshotSerializers: ["@emotion/jest/serializer"],
};
```

- When we run `npm t` our test will fail as our snapshot is wildly different.
- Instead of the generated class name we have `.emotion-0` which indicates the first emotion class name in our snapshot.
- We can run `npm t -- -u` to update our snapshot.
- Now if we make a change to the emotion CSS we will see exactly what impact our change had on the snapshot.

### 4.8. Support Custom Module Resolution with Jest moduleDirectories

Webpack’s `resolve.modules` configuration is a great way to make common application utilities easily accessible throughout your application. We can emulate this same behaviour in Jest using the `moduleDirectories` configuration option.

- Add a new test file for `__tests__/calculator.js`.

```js
import React from "react";
import { render } from "@testing-library/react";
import Calculator from "../calculator";

test("renders", () => {
  render(<Calculator />);
});
```

- When we run `npm t` we get an error: ` Cannot find module 'calculator-display' from 'calculator.js'`.
- The problem is that we have Webpack configured so that we can import anything that is in a `shared` directory as if it were a node module.

```js
// webpack.config.js
...
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  },
...
```

- However this doesn't work in Node and Jest is basing its resolve algorithm based on how Node resolves modules.
- We need to tell Jest how we want modules to be resolved.

```js
// jest.config.js
const path = require('path');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: { ... },
  ...
}
```

### 4.9. Configure Jest to Run Setup for All Tests with Jest setupFilesAfterEnv

Often you’ll have some setup that you want to run before your tests start. Let’s see how we can use the setupFilesAfterEnv configuration in Jest to take care of test boilerplate and establish a good testing environment for our tests.

- We have updated the `calculator.js` test file to do something more useful.

```js
test("the clear button switches from AC to C when there is an entry", () => {
  const { getByText } = render(<Calculator />);
  const clearButton = getByText("AC");

  fireEvent.click(getByText(/3/));
  expect(clearButton.textContent).toBe("C");

  fireEvent.click(clearButton);
  expect(clearButton.textContent).toBe("AC");
});
```

- If we break something in the source code our test will fail but the error message won't be very clear as to what is going on.
- There is a code frame which explains a bit more, but it would be nice if we could make assert an assertion to say we want clearButton's text content to be some value.
- Then our error message could be more explicit and say _you expected this button to have a textContent of..._
- To accomplish this we can install an assertion library: `npm i --save-dev @testing-library/jest-dom`.
- Now we can import to use in our test.

```js
import * as jestDOM from "@testing-library/jest-dom";
```

- This `jestDOM` object is just a bunch of `expect` extensions.
- We can add these new assertions by using the `extend` utility.

```js
expect.extend(jestDOM);
```

- Now we can rewrite our test.

```js
test("the clear button switches from AC to C when there is an entry", () => {
  const { getByText } = render(<Calculator />);
  const clearButton = getByText("AC");

  fireEvent.click(getByText(/3/));
  expect(clearButton).toHaveTextContent("C");

  fireEvent.click(clearButton);
  expect(clearButton).toHaveTextContent("AC");
});
```

- Now our test assertion is cleaner and the error message if we break the source code os clearer.
- This is great but we don't want to repeat this boilerplate for every test.
- So `jest-dome` exposes a module that we can import called `extend-expect` which will do `expect.extend(jestDOM);` for us so we can remove it.

```js
import * as jestDOM from "@testing-library/jest-dom/extend-expect";
```

- But it would be even better if we didn't need the import every time, but rather have it run before any of the test files are run.
- We can do this with our `jest.config.js` file:

```js
setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
```

- These are the files that Jest will run after it sets up the testing environment.
- We can now remove the import `import * as jestDOM from '@testing-library/jest-dom/extend-expect` and our tests will continue to pass.
- Now Jest will automatically import that file into all of our test files.

### 4.10. Support a Test Utilities File with Jest moduleDirectories

Every large testbase has common utilities that make testing easier to accomplish. Whether that be a custom render function or a way to generate random data. Let’s see how we can make accessing these custom utilities throughout the tests easier using Jest’s moduleDirectories feature.

- We now have a `ThemeProvider` in `app.js` and `calculator-display.js` now uses a styled div where the user can switch between light and dark modes.
- However we need to adapt our tests as `calculator-display.js` is being rendered in isolation from the required `ThemeProvider`.
- Our test is unaware of the theme, therefore the properties in it will be undefined and our snapshot will fail.
- In the real world the component will be rendered within the `ThemeProvider` so our test needs to do the same.
- We can import `ThemeProvider` and theme in our test and nest our component within the `ThemeProvider`.

```js
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'

test('renders', () => {
  const {container} = render(
    <ThemeProvider theme={dark}>
      <CalculatorDisplay value="0" />
    </ThemeProvider>,
  )
  expect(container.firstChild).toMatchInlineSnapshot(
    ...
    )
})
```

- This is great but if we wanted to use the `rerender` method to test with a different value, we'd have to render within the `ThemeProvider` again.
- So what we can do instead is make a wrapper and pass it into the options object to the render method.

```js
test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {
    wrapper: Wrapper,
  })
  expect(container.firstChild).toMatchInlineSnapshot(
    ...
    )
})
```

- This abstraction is nice, but we don't want to have to write it for every test that uses `ThemeProvider`.
- We don't want to think about `ThemeProvider` at all, and the same applies for a router or redux provider or and context provider.
- We would like to be able to say to render component in the test environment how it is in the app and the `Wrapper` ca be responsible for rendering the component with whatever provider is required.
- We could make our own customer render function which behaves pretty much the same as the Testing Library render function.

```js
function renderWithProviders(ui, options) {
  return render(ui, {wrapper: Wrapper, ...options})
}

test('renders', () => {
  const {container} = renderWithProviders(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(
    ...
    )
})
```

- And what would be better still is if we could just change the `render` import to a custom one and use regular `render`.

```js
import {render as rtlRender} from '@testing-library/react'

...

function render(ui, options) {
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(
    ...
    )
})
```

- Now as for as the test is concerned this is just a regular render, and the function manages wrapping the providers for all of the app.
- We can extract this somewhere else to make it reusable by creating a new file `test/calculator-test-utils.js`:

```js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";
import { dark } from "../src/themes";
import propTypes from "prop-types";

function Wrapper({ children }) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
}

Wrapper.propTypes = {
  children: propTypes.node,
};

function render(ui, options) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export { render };
export * from "@testing-library/react";
```

- Now everyone can use `test/calculator-test-utils.js` just like they would use `@testing-library/react` except with a render function that automatically wraps all of the providers that our app requires.
- We can now import our custom `render` function and remove unused imports so our test file now looks like this:

```js
import React from 'react'
import {render} from '../../../test/calculator-test-utils'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(...)
})
```

- And all of our test pass!
- We can now use our utils in place of `@testing-library/react` except... we don't want all those `../../../`.
- We want to be able to import our custom function as if it were a Node module.
- We can make a change in `jest.config.js` `moduleDirectories` to facilitate this:

```js
const path = require("path");

module.exports = {
  ...
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    "shared",
    path.join(__dirname, "test"),
  ],
  ...
};
```

- We can now replace all instances in the codebase of `@testing-library/react` with `calculator-test-utils` and all works as expected.
- To handle the ESLint warning about no unresolved imports from `eslint-plugin-import` there is a resolver specifically for Jest: `npm i --save-dev eslint-import-resolver-jest`.
- And we can amend our `eslintrc.js` overrides to include the `__tests__` directories:

```js
const path = require('path')

module.exports = {
  ...
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    {
      files: ['**/__test__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
```

- The import resolver for ESLint will now look up that configuration file, and see there is a config for moduleDirectories, and modules will be resolved the way that Jest resolves modules.
- Another thing to do is to specify the test dir in paths & include in our `jsconfig.json` file.

```json
{s
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "*": ["src/*", "src/shared/*", "test/*"]
    }
  },
  "include": ["src", "test/*"]
}
```

- That will allow us to hit F12 to go right to the relative file in VSCode.
- One last thing we can do is customize the render method further.
- We are currently rendering the `ThemeProvider` and don't get to choose the theme to display.
- We want to expose a nice API that we can pass options to.
- We can move our Wrapper inside the custom render function, spread the rest of the options, and pluck off the theme.

```js
function render(ui, { theme = themes.dark, ...options }) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  Wrapper.propTypes = {
    children: propTypes.node,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}
```

- In our test we can pass in the light theme as an option.

```js
test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />, {theme: light})
  expect(container.firstChild).toMatchInlineSnapshot(...)
})
```

- Now if we run `npm t` our snapshot fails as expected as we are now using the light theme.

### 4.11. Use Jest Watch Mode to Speed Up Development

As the codebase grows it makes our test runs take longer and longer. Naturally people will run the tests less frequently to avoid waiting. With Jest’s powerful and interactive watch mode we can easily run the tests that we want to focus on without having to run all the tests in the codebase.

- It would be nice if we didn't have to run our test script every time we make a change ot the code.
- That's exactly what the `watch` flag does for us.
- We can add a script for this.

```js
// package.json
"test:watch": "jest --watch",
```

- Jest will look up in git which files have changed since the last commit, and based on the changes it will run the tests that are relevant to those changes files.
- A handy option to use is `i` to update snapshots interactively. It can sometimes be handy to review a bunch of snapshot changes and this interactive mode helps.
- Also `f` to only run failed tests makes it much easier to focus in on tests that are failing and reduce the output as we debug and add console.log statements.

### 4.12. Step through Code in Jest using the Node.js Debugger and Chrome DevTools

Sometimes it can be a real challenge to determine what’s going on when testing your code. It can be really helpful to step through your code in a debugger. In this lesson we’ll see how to use Jest’s `--runInBand` flag with node’s `--inspect-brk` to debug our tests in Chrome’s debugger.

- Although Jest will output the result of `console.log` statements when we rin our tests, it would be nice if we could step through our code like we can in the browser.
- What we really want to do is to be able to add a `debugger` statement in our test and have our browser DevTools stop there.
- Node has a special flag built-in to it `--inspect-brk` which means will Node will start up a process and before running any of the code it will add a breakpoint.
- We can then hook up Chrome debugger to debug that Node process.
- The process we want to debug is `jest` but we can't just pass that to Node because Node wouldn't know what to do with it, so we need to pass a path to the Jest binary.
- So our script looks like this.

```js
// package.json
"test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js"
```

- Jest actually runs all tests in parallel, which won't work well with what we are truing to do because it spawns new Node processes.
- So we add the `--runInBand` to our script to ensure that all tests are run within the same Node process so we can debug that process with our Chrome DevTools.
- And adding the `--watch` flag makes the development experience much easier.

```js
// package.json
"test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch"
```

- Now if we run `npm run test:debug` we see the following output:

```bash
Debugger listening on ws://127.0.0.1:9229/7a7aa030-59b3-4ff8-844d-956408af19fb
For help, see: https://nodejs.org/en/docs/inspector
```

- If we go to Chrome and type `chrome://inspect` we will be presented with a special page that show available debugger sessions, one of which being Node.
- Clicking on `inspect` opens the Chrome debugger.
- We can alternatively open DevTools & click on the Node icon to open the dedicated DevTools for Node.

### 4.13. Configure Jest to Report Code Coverage on Project Files

Jest comes with code coverage reporting built-into the framework, let’s see how quick and easy it is to add code coverage reporting to our project and take a look at the generated report.

- As we write more tests it is useful to be able to know how much of the project is tested and which areas could use some more tests.
- If we add the `--coverage` flag to our test script and run `npm t` Jest will automatically generate a coverage report.
- Part of what this does is create a coverage directory with all the coverage info.
- We can open this in a browser: `open coverage/lcov-report/index.html` and browse the codebase to see what test cases are missing.
- The only problem is that the test directory containing our utils is being included, which will skew the coverage numbers for our app.
- We don't need to know how well our test utilities are covered!
- Also the `app.js` and `index.js` are not being included in the report.
- We can solve this by adding `collectCoverageFrom` to our Jest configuration file.

```js
// jest.config.js
module.exports = {
  ...
  collectCoverageFrom: ['**/src/**/*.js'],
}
```

- This will now collect coverage from the `src` directory and excludes tests by default.
- Now we have an accurate report and have a much better idea of how well tested our application is.
- On a large application the difference will be stark.
- One more thing to do is to add the `coverage` directory to our `.gitignore` file because they are not useful to be committed to source control.

### 4.14. Analyze Jest Code Coverage Reports

You may have an idea of what Code Coverage is, but let’s take a quick look at how it’s recorded so we can understand how to analyze code coverage reports.

- The way that Jest knows how parts of the codebase is not covered by tests is with a plugin called `babel-plugin-istanbul`.
- Jest uses Babel transform our code under coverage to instrument the code and keep track of what is going on.
- Understanding how the code is instrumented can help us better interpret the coverage reports.
- Rewatch the [video](https://testingjavascript.com/lessons/jest-analyze-jest-code-coverage-reports) for Kent's explanation.

### 4.15. Set a Code Coverage Threshold in Jest to Maintain Code Coverage Levels

Wherever you are at with code coverage you generally don’t want that level to go down. Let’s add coverage thresholds globally as well as in specific files to ensure we never drop below a certain level of coverage.

- It would be nice if we could stop people from adding untested code that reduces our coverage, especially for important parts of the codebase.
- We can do this by adding to our Jest config file.
- The four elements of code coverage are statements, branches, functions & lines.

```js
// jest.config.js
module.exports = {
  ...
    coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 29,
      lines: 29,
    },
  },
}
```

- If we run `npm t` and the thresholds are not met, Jest will throw errors.
- Kent likes to specify 2% below the current level to allow for some flexibility.
- As people add new lines to our codebase they need to make sure they add some tests so they don't break the threshold and ultimately break the build.
- One very important thing to note is that it is not a perfect metric for confidence.
- Not all lines in our codebase are equal. There could be one file that gets used all over the codebase and is super important.
- We can add another property to the `coverageThreshold` object which allows us to specify thresholds for a particular file.

```js
// jest.config.js
module.exports = {
  ...
    coverageThreshold: {
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
```

### 4.16. Report Jest Test Coverage to Codecov through TravisCI

The coverage report generated by Jest is fantastic, but it’d be great to track that coverage over time and be able to review that coverage at a glance, maybe even put it up on a display in the office! Codecov.io is a fantastic service that can consume our code coverage report and it integrates great with GitHub. Let’s see how we can extend our existing Travis build configuration to send the coverage report to Codecov.io.

- Whichever CI tool we use wil probably work with Codecov.
- To make Codecov work we add to our `.travis.yml` file: `after_script: npx codecov@4`
- This will automatically search for the coverage info and upload it to Codecov servers.
- Of course we'll need to sign up with Codecov.
- Now we can access the Codecov dashboard and get insights into test coverage over time, and we can inspect the coverage reports right from the dashboard.

### 4.17. Run Jest Watch Mode by Default Locally with is-ci-cli

In CI, we don’t want to start the tests in watch mode, but locally we normally want to run the tests in watch mode. We can have separate scripts, but it’d be great to not have to remember which script to run locally. Let’s use `is-ci-cli` to run the right script in the right environment when running the test script.

- It is also a lot to type `npm run test:watch` every time.
- It would be really nice if we could just run `npm t` to run Jest with watch mode locally and with coverage on CI.
- To solve this we can run `npm i --save-dev is-ci-cli`.
- We can create a new script `test:coverage` and put our `jest --coverage` script there.
- For the `test` script we add `is-ci \"test:coverage\" "\test:watch\"`.
- Now we can run `npm t` and we don't need to worry about the environment.
- We can verify this is working by manually setting the CI environment variable to 1: `CI=1 npm t` and see the coverage output.
- If we want to run `test:coverage` explicitly we can.
- It is a lot nicer to be able to run `npm t` and the script that is relevant to the environment we are running in.

### 4.18. Run Tests with a Different Configuration using Jest’s --config Flag and testMatch Option

Sometimes you may have situations where configuration needs to be different for certain tests. In this lesson we’ll take a look at how we could create a custom configuration for tests that are intended to run in a node environment.

- If we want to run some of our code on the server-side we would want a test that only runs on the server-side with no JS DOM setup.
- So we could create a `__server_tests__` directory and add a test for `auto-scaling-text.js` where we use ReactDOMServer to render it to a string.
- And we'd only want to run this file in the Node environment rather than the JS DOM environment.
- To make this work we need to do a few things.
- Move the `jest.config.js` file to our `test` directory and rename it to `jest-common.js`. This will be the common config between server and client side.
- Create `jest.client.js` and `jest.common.js` files in the `test` directory.
- For `jest.server.js` we want to override the `coverageDirectory` because we don't want these coverage directories writing over each other, specify the test environment and the directory for our server tests.

```js
// jest.server.js
const path = require("path");

module.exports = {
  ...require("./jest-common"),
  testEnvironment: "jest-environment-node",
  coverageDirectory: path.join(__dirname, "../coverage/server"),
  testMatch: ["**/__server_tests__/**/*.js"],
};
```

- For `jest.client.js` we want to move the following configurations from `jest-common.js`.

```js
// jest.client.js
module.exports = {
  ...require("./jest-common"),
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  snapshotSerializers: ["@jest/emotion/serializer"],
  coverageThreshold: {
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
    "./src/shared/utils.js": {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
};
```

- And for `jest-common.js` we need to update the paths.

```js
const path = require("path");

module.exports = {
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "..src"), // path to src is one dir up so ..src
    "shared",
    path.join(__dirname), // the config is now in the test directory so we only need __dirname
  ],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.css$": require.resolve("./style-mock.js"), // style-mock is relative to this file so we don't need to specify the test dir
  },
  collectCoverageFrom: ["**/src/**/*.js"],
};
```

- Now we can tell Jest to use these different configurations on the command line.
- But if we run our client tests with `npx jest --config test/jest.client.js` we will get `No tests found, exiting with code 1`.
- This is because Jest will look for all files that match the `testMatch` in the same directory as the Jest config.
- We therefore need to specify the path to root in `jest-common.js`.

```js
module.exports = {
  rootDir: path.join(__dirname, '..'),
  ...
}
```

- Now all of our tests are found and run as expected if we run `npx jest --config test/jest.client.js` or `npx jest --config test/jest.server.js`.
- And we can verify that our server tests are indeed running in a totally browser free environment by running `console.log(window)` in our test file and seeing the expected error as window is undefined.
- Now we have verified that our tests are able to run independently in two separate environments.
- We just have to write a tonne of npm scripts to get this to work.
- So replace this...

```js
scripts: {
  ...
  "test": "is-ci \"test:coverage\" \"test:watch\"",
  "test:coverage": "jest --coverage",
  "test:watch": "jest --watch",
  "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch",
  ...
}
```

- With this...

```js
scripts: {
  ...
  "test": "is-ci \"test:coverage\" \"test:watch:client\"",
  "test:coverage": "npm run test:coverage:client && npm run test:coverage:server",
  "test:coverage:client": "jest --config test/jest.client.js --coverage",
  "test:coverage:server": "jest --config test/jest.server.js --coverage",
  "test:watch:client": "jest --config test/jest.client.js --watch",
  "test:watch:server": "jest --config test/jest.server.js --watch",
  "test:debug:client": "node --inspect-brk ./node_modules/jest/bin/jest.js --config test/jest.client.js --runInBand --watch",
  "test:debug:server": "node --inspect-brk ./node_modules/jest/bin/jest.js --config test/jest.server.js --runInBand --watch",
  ...
}
```

- The one last thing we need to do is update our `.eslintrc.js` for `jestConfigFile` to point to `jest-common.js` in the `test` directory so ESLint can resolve our modules properly.

```js
module.exports = {
  ...
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: path.join(__dirname, './test/jest-common.js'),
      },
    },
  },
  ...
}
```

- Now if we run `npm t` Jest will start our client-side tests in watch mode, and if we run `CI=1 npm t` Jest will run both client and server-side tests with coverage turned on.

### 4.19. Support Running Multiple Configurations with Jest’s Projects Feature

Sometimes you may find it useful to have more than one configuration in a project (for example, running some tests in a node environment and others in the jsdom environment). In this lesson we’ll learn about Jest’s projects feature to have Jest run both of these configurations at once.

- Having all of those scripts is madness! Adding all of this complexity just to run a test in a different environment is crazy.
- Jest supports running multiple configurations in a single test run.
- So we can revert to how our scripts were previously setup and make Jest support this.

```js
scripts: {
  ...
  "test": "is-ci \"test:coverage\" \"test:watch\"",
  "test:coverage": "jest --coverage",
  "test:watch": "jest --watch",
  "test:debug": "node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch",
  ...
}
```

- We will add a `jest.config.js` at the root of our app again. That means we can update our `eslintrc.js` to how it was before.

```js
module.exports = {
  ...
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: path.join(__dirname, './jest.config.js'),
      },
    },
  },
  ...
}
```

- In our `jest.config.js` we require `jest-common.js`, move `collectCoverageFrom` from `jest-common.js` and `coverageThreshold` from `jest.client.js`.
- The combining of these two configurations has the effect of combining the coverage report.
- To make this all work together we add the `projects` configuration object so our `jest.config.js` is now as follows.

```js
// jest.config.js
module.exports = {
  ...require("./test/jest-common"),
  collectCoverageFrom: ["**/src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
    "./src/shared/utils.js": {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: ["./test/jest.client.js", "./test/jest.server.js"],
};
```

- Now `npm t` runs all of our tests, including our server test, so our tests are being run in two totally separate environments.
- And if we run `CI=1 npm t` coverage will be collected from all of our test runs and the coverage report will be unified across all of the tests for both configurations.
- If we have a lot of tests it is difficult to see quickly which tests come from which configuration.
- So we can add `displayName: 'client'` / `displayName: 'server'` to the respective config files to add nice labels.

### 4.20. Run ESLint with Jest using jest-runner-eslint

Jest is more than a testing framework. It’s a highly optimized, blazing fast platform with incredible parallelization for running tasks across many files in our project. It has a capability to run more than just tests. We can bring these features to our linting as well. Let’s see how we can bring our favourite Jest features (like watch mode) to ESLint with jest-runner-eslint.

- One of the awesome features of Jest is to specify a custom runner.
- Run `npm i --save-dev jest-runner-eslint`.
- With that installed create a new file in the `test` directory `jest.lint.js`.

```js
const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  displayName: "lint",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/**/*.js"],
};
```

- But we don't want to include the JavaScript files in coverage and dist directories.
- So we want to use the `--ignore-path` flag for cli as with our `lint` script.
- We can configure this inside `package.json` underneath our scripts.

```js
{
  ...
  "jest-runner-eslint": {
    "cliOptions": {
      "ignorePath": "./.gitignore"
    }
  },
  ...
}
```

- Now if we run `npx jest --config ./test/jest.lint.js` it will run linting across all of the files in our project.
- The cool thing about having all of this configured is that we can add it to our `projects` config in `jest.config.js`.

```js
module.exports = {
  ...
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ],
}
```

- Now we can update our `lint` script to `jest --config test/jest.lint.js`.
- And we can remove `npm run lint` from the `validate` script because it will happen naturally through the `test` script.
- Now get the Jest benefits of watch mode and to only lint changes since the last commit.
- This can be really handy in large projects where a tonne of linting is being done, to scope linting down to only files with changes.

### 4.21. Test Specific Projects in Jest Watch Mode with jest-watch-select-projects

It’s great that we can run multiple projects in our watch mode and that we can scope the tests down to specific tests, but sometimes it’s nice to be able to quickly switch between projects in watch mode. Let’s see how this works with jest-watch-select-projects.

- As good as it is to run all of our linting and tests together, it could get noisy as our codebase grows.
- It would be great if we could specify which configuration we want tested while in watch node.
- The good thing about watch mode is that it is pluggable. We can run `npm i --save-dev jest-watch-select-projects`.
- Now we can edit our `jest-common.js` config as follows.

```js
module.exports = {
  ...
  watchPlugins: ['jest-watch-select-projects'],
}
```

- Now when we run `npm t` we get a new option capital `P` and we can select which project we want to run tests for.

### 4.22. Filter which Tests are Run with Typeahead Support in Jest Watch Mode

Jest’s watch mode is pluggable and `jest-watch-typeahead` is one plugin that you definitely don’t want to live without. It enhances the watch mode experience to help you know which tests will be run based on your filter. Making it even easier to run only the tests you’re concerned with running as you develop your codebase.

- It would be nice if we could get some sort of feedback when typing out the filter pattern in watch mode.
- We can run `npm i --save-dev jest-watch-typeahead` to assist with this.
- This comes with two watch plugins that we can add to our `jest-common.js` config.

```js
module.exports = {
  ...
  watchPlugins: [
    ...
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
```

- Now when we type `p` in watch mode and filter we get nice feedback while we type a pattern to filter by.

### 4.23. Run Only Relevant Jest Tests on Git Commit to Avoid Breakages

Running the project tests on commit is a great way to avoid breaking the application accidentally and leverage the mechanism for confidence you have from your testbase. However, as the testbase grows this can take a very long time and slow productivity down. Let’s see how Jest is capable of running only the tests and linting only the files that are affected by the files we’re committing with `husky` and `lint-staged` to speed up our local test runs as well as help us avoid accidentally committing code that breaks our application.

- Install dependencies with `npm i --save-dev husky lint-staged`.
- We can configure both of these in our `package.json`.

```js
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && npm run build"
    }
  },
  "lint-staged": {
    "**/*.+(js|json|css|html|md)": [
      "prettier",
      "jest --findRelatedTests",
    ]
  },
  ...
}
```

- We want `npm run build` to run on all files not just changed ones so this is separated form `lint-staged`. Depending in build time this may be handled by CI.
- `jest --findRelatedTests` will run all of the tests that are related to the files that are being changed at the time of the commit.
- Now when we commit our tests will be run on files that have been changed to stop anything broken reaching production.
- This gives us a tonne of confidence that the code we push is formatted, linted & tested.
