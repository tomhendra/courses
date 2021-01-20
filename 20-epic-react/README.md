<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Epic React</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Steps](#11-steps)
  - [1.2. Setup](#12-setup)
  - [1.3. Tips](#13-tips)
  - [1.4. Tests](#14-tests)
  - [1.5. Approach](#15-approach)
- [2. React Fundamentals](#2-react-fundamentals)
  - [2.1. Hello World](#21-hello-world)
  - [2.2. Intro to Raw React APIs](#22-intro-to-raw-react-apis)
  - [2.3. Using JSX](#23-using-jsx)
  - [2.4. Creating Custom Components](#24-creating-custom-components)
  - [2.5. Styling](#25-styling)
  - [2.6. Forms](#26-forms)
  - [2.7. Rendering Arrays](#27-rendering-arrays)
- [3. React Hooks](#3-react-hooks)
  - [3.1. useState: Greeting](#31-usestate-greeting)
  - [3.2. useEffect: Persistent State](#32-useeffect-persistent-state)
  - [3.3. Lifting State](#33-lifting-state)
  - [3.4. useState: Tic Tac Toe](#34-usestate-tic-tac-toe)
  - [3.5. useRef and useEffect: DOM interaction](#35-useref-and-useeffect-dom-interaction)
  - [3.6. useEffect: HTTP requests](#36-useeffect-http-requests)
- [4. Advanced React Hooks](#4-advanced-react-hooks)
  - [4.1. useReducer: simple Counter](#41-usereducer-simple-counter)
  - [4.2. useCallback: custom hooks](#42-usecallback-custom-hooks)
  - [4.3. useContext: simple Counter](#43-usecontext-simple-counter)
  - [4.4. useLayoutEffect: auto-scrolling textarea](#44-uselayouteffect-auto-scrolling-textarea)
  - [4.5. useImperativeHandle: scroll to top/bottom](#45-useimperativehandle-scroll-to-topbottom)
  - [4.6. useDebugValue: useMedia](#46-usedebugvalue-usemedia)
- [5. Advanced React Patterns](#5-advanced-react-patterns)
  - [5.1. Context Module Functions](#51-context-module-functions)

## 1. Introduction

Confidently Ship Well-Architected Production Ready React Apps Like a Pro.

### 1.1. Steps

Each module in the course follows a pattern:

1. Read the welcome text for the module.
2. Watch the welcome video!
3. Clone a git repository for the module.
4. Install the dependencies.
5. Open the cloned code in VSCode.
6. Run the application code in the repository.
7. Watch the intro video for the first exercise.
8. Switch to VSCode and do the exercise.
9. Watch the solution video.
10. Do the extra credit exercises and watch those solutions as well.

### 1.2. Setup

The module repo needs to be retain git (as opposed to dumping a downloaded package in the coursework repo) because Kent explains that a git commit is made automatically on setup of the module to "make Jest watch mode work nicely", so submodules will be used instead of cloning the repos.

```sh
git submodule add https://github.com/kentcdodds/<module-name>.git
git submodule update --init --recursive
cd <module-name>
npm run setup --silent
```

### 1.3. Tips

Ignore config and markdown files, and focus on the exercises.

The idea isn't necessarily that you finish these exercises. It's more that you open your mind to what's possible and what problems we're trying to solve.

Each exercise has comments in it to help you get through the exercise. These fun emoji characters are here to help you!

- Kody the Koala 🐨 will tell you when there's something specific you should do.
- Matthew the Muscle 💪 will indicate what you're working with an exercise.
- Chuck the Checkered Flag 🏁 will indicate that you're working with a final version.
- Marty the Money Bag 💰will give you specific tips (and sometimes code) along the way.
- Hannah the Hundred 💯 will give you extra challenges you can do if you finish the exercises early.
- Olivia the Owl 🦉 will give you useful tidbits/best practice notes and a link for elaboration and feedback.
- Dominic the Document 📜 will give you links to useful documentation.
- Berry the Bomb 💣 will be hanging around anywhere you need to blow stuff up (delete code).
- Peter the Product Manager 👨‍💼 helps us know what our users want.
- Alfred the Alert 🚨 will occasionally show up in the test failures with potential explanations for why the tests are failing.

### 1.4. Tests

Most of the exercises do have tests and they can help through the material. You don't have to run the test if you don't want to, but they can help!

Running the tests: `npm test` or `npm t`

This will start Jest in watch mode. You choose the file that you want using the P key on your keyboard. Read the output and play around with it.

The tests are there to help you reach the final version, however sometimes you can accomplish the task, and the tests still fail if you implement things differently than I do in Kent's solution, so don't look to them as a complete authority.

Initially, all tests will pass, that's not what you want. You want the test to tell you that you haven't finished the exercise yet. You're going to want to disable the final import and enable the exercise file.

### 1.5. Approach

The process that Kent recommends is first watching the intro video for each exercise, and also reading through the instructions.

Kent is also going to suggest that you open the exercise on an isolated page. And put it side by side with your code editor.

- Have tests running with `npm test`.
- Open the dev tools with the tab open to the console.
- Before you watch the solution, work through the exercise.
- You can do the exercise and extra credits and then watch all the solution videos. Or watch the solution videos between each exercise and - extra credits. It's up to you, however you learn best.

**Extra Credit**

- There is no starting point for the extra credits, and the extra credits have less handholding.
- You can work through that extra credit on your own, or you can watch the solution videos.

**Learning is hard**

- You might have to Google things, that's actually expected.

**Workshop Dev Tools**

All of the workshops have dev tools. They're not really relevant for lots of the exercises, but they'll be useful with many of the exercises that work with HTTP calls.

Workshop Dev Tools Features

- Change how long HTTP calls take
- Simulate Request failures

**General Tip**

Make sure to take breaks as you work through Epic React. Each one of these workshops is at least four hours of just workshop time.

Kent recommends https://icanhazdadjoke.com in between breaks!

## 2. React Fundamentals

It is really important to get an understanding of what an abstraction does. The fundamentals section gets us comfortable with what React does behind the scenes.

**Perquisites**

- Read through [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react).

### 2.1. Hello World

- [Readme 01](react-fundamentals/src/exercise/01.md)
- [Exercise 01](react-fundamentals/src/final/01.html)
- [Exercise 01: Extra-1](react-fundamentals/src/final/01.extra-1.html)

### 2.2. Intro to Raw React APIs

- [Readme 02](react-fundamentals/src/exercise/02.md)
- [Exercise 02](react-fundamentals/src/final/02.html)
- [Exercise 02: Extra-1](react-fundamentals/src/final/02.extra-1.html)

### 2.3. Using JSX

- [Readme 03](react-fundamentals/src/exercise/03.md)
- [Exercise 03](react-fundamentals/src/final/03.html)
- [Exercise 03: Extra-1](react-fundamentals/src/final/03.extra-1.html)
- [Exercise 03: Extra-2](react-fundamentals/src/final/03.extra-2.html)

### 2.4. Creating Custom Components

- [Readme 04](react-fundamentals/src/exercise/04.md)
- [Exercise 04](react-fundamentals/src/final/04.html)
- [Exercise 04: Extra-1](react-fundamentals/src/final/04.extra-1.html)
- [Exercise 04: Extra-2](react-fundamentals/src/final/04.extra-2.html)
- [Exercise 04: Extra-3](react-fundamentals/src/final/04.extra-3.html)
- [Exercise 04: Extra-4](react-fundamentals/src/final/04.extra-4.html)
- [Exercise 04: Extra-5](react-fundamentals/src/final/04.extra-5.html)

### 2.5. Styling

- [Readme 05](react-fundamentals/src/exercise/05.md)
- [Exercise 05](react-fundamentals/src/final/05.js)
- [Exercise 05: Extra-1](react-fundamentals/src/final/05.extra-1.js)
- [Exercise 05: Extra-2](react-fundamentals/src/final/05.extra-2.js)

### 2.6. Forms

- [Readme 06](react-fundamentals/src/exercise/06.md)
- [Exercise 06](react-fundamentals/src/final/06.js)
- [Exercise 06: Extra-1](react-fundamentals/src/final/06.extra-1.js)
- [Exercise 06: Extra-2](react-fundamentals/src/final/06.extra-2.js)
- [Exercise 06: Extra-3](react-fundamentals/src/final/06.extra-3.js)

### 2.7. Rendering Arrays

- [Readme 07](react-fundamentals/src/exercise/07.md)
- [Exercise 07](react-fundamentals/src/final/07.js)
- [Exercise 07: Extra-1](react-fundamentals/src/final/07-extra-1.js)

## 3. React Hooks

**Perquisites**

- Watch Kent's [Why React Hooks Video](https://youtu.be/zWsZcBiwgVE).

### 3.1. useState: Greeting

- [Readme 01](react-hooks/src/exercise/01.md)
- [Exercise 01](react-hooks/src/final/01.js)
- [Exercise 01: Extra-1](react-hooks/src/final/01.extra-1.js)

### 3.2. useEffect: Persistent State

- [Readme 02](react-hooks/src/exercise/02.md)
- [Exercise 02](react-hooks/src/final/02.js)
- [Exercise 02: Extra-1](react-hooks/src/final/02.extra-1.js)
- [Exercise 02: Extra-2](react-hooks/src/final/02.extra-2.js)
- [Exercise 02: Extra-3](react-hooks/src/final/02.extra-3.js)
- [Exercise 02: Extra-4](react-hooks/src/final/02.extra-4.js)
- [Hook Flow Diagram](react-hooks/src/examples/hook-flow.png)
- [Hook Flow Demo](react-hooks/src/examples/hook-flow.js)

### 3.3. Lifting State

- [Readme 03](react-hooks/src/exercise/03.md)
- [Exercise 03](react-hooks/src/final/03.js)
- [Exercise 03: Extra-1](react-hooks/src/final/03.extra-1.js)

### 3.4. useState: Tic Tac Toe

- [Readme 04](react-hooks/src/exercise/04.md)
- [Exercise 04](react-hooks/src/exercise/04.js)
- [Exercise 04: Extra-1](react-hooks/src/final/04.extra-1.js)
- [Exercise 04: Extra-2](react-hooks/src/final/04.extra-2.js)
- [Exercise 04: Extra-3](react-hooks/src/final/04.extra-3.js)

### 3.5. useRef and useEffect: DOM interaction

- [Readme 05](react-hooks/src/exercise/05.md)
- [Exercise 05](react-hooks/src/exercise/05.js)

### 3.6. useEffect: HTTP requests

- [Readme 06](react-hooks/src/exercise/06.md)
- [Exercise 06](react-hooks/src/exercise/06.js)
- [Exercise 06: Extra-1](react-hooks/src/final/06.extra-1.js)
- [Exercise 06: Extra-2](react-hooks/src/final/06.extra-2.js)
- [Exercise 06: Extra-3](react-hooks/src/final/06.extra-3.js)
- [Exercise 06: Extra-4](react-hooks/src/final/06.extra-4.js)
- [Exercise 06: Extra-5](react-hooks/src/final/06.extra-5.js)
- [Exercise 06: Extra-6](react-hooks/src/final/06.extra-6.js)
- [Exercise 06: Extra-7](react-hooks/src/final/06.extra-7.js)
- [Exercise 06: Extra-8](react-hooks/src/final/06.extra-8.js)

## 4. Advanced React Hooks

### 4.1. useReducer: simple Counter

- [Readme 01](advanced-react-hooks/src/exercise/01.md)
- [Exercise 01](advanced-react-hooks/src/exercise/01.js)
- [Exercise 01: Extra-1](advanced-react-hooks/src/final/01.extra-1.js)
- [Exercise 01: Extra-1](advanced-react-hooks/src/final/01.extra-2.js)
- [Exercise 01: Extra-1](advanced-react-hooks/src/final/01.extra-3.js)
- [Exercise 01: Extra-1](advanced-react-hooks/src/final/01.extra-4.js)

### 4.2. useCallback: custom hooks

- [Readme 02](advanced-react-hooks/src/exercise/02.md)
- [Exercise 02](advanced-react-hooks/src/final/02.js)
- [Exercise 02: Extra-1](advanced-react-hooks/src/final/02.extra-1.js)
- [Exercise 02: Extra-2](advanced-react-hooks/src/final/02.extra-2.js)
- [Exercise 02: Extra-3](advanced-react-hooks/src/final/02.extra-3.js)

### 4.3. useContext: simple Counter

- [Readme 03](advanced-react-hooks/src/exercise/03.md)
- [Exercise 03](advanced-react-hooks/src/exercise/03.js)
- [Exercise 03: Extra-1](advanced-react-hooks/src/final/03.extra-1.js)
- [Exercise 03: Extra-2](advanced-react-hooks/src/final/03.extra-2.js)

### 4.4. useLayoutEffect: auto-scrolling textarea

- [Readme 04](advanced-react-hooks/src/exercise/04.md)
- [Exercise 04](advanced-react-hooks/src/exercise/04.js)

### 4.5. useImperativeHandle: scroll to top/bottom

- [Readme 05](advanced-react-hooks/src/exercise/05.md)
- [Exercise 05](advanced-react-hooks/src/exercise/05.js)

### 4.6. useDebugValue: useMedia

- [Readme 06](advanced-react-hooks/src/exercise/06.md)
- [Exercise 06](advanced-react-hooks/src/exercise/06.js)
- [Exercise 06: Extra-1](advanced-react-hooks/src/final/06.extra-1.js)

## 5. Advanced React Patterns

**Perquisites**

- Watch Kent's [video](https://egghead.io/lessons/javascript-implement-inversion-of-control).
- Read Kent's [blog post](https://kentcdodds.com/blog/inversion-of-control) on inversion of control.
- The more experience you have with building React abstractions, the more helpful this workshop will be for you.

### 5.1. Context Module Functions

- [Readme 01](advanced-react-patterns/src/exercise/01.md)
- [Exercise 01](advanced-react-patterns/src/exercise/01.js)
