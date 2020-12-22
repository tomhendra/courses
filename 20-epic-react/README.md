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

- Read through [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react).
- [Readme 01](react-fundamentals/src/exercise/01.md)
- [Exercise 01](react-fundamentals/src/exercise/01.html)
- [Readme 02](react-fundamentals/src/exercise/02.md)
- [Exercise 02](react-fundamentals/src/exercise/02.html)
