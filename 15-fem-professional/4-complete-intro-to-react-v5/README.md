<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>The Complete Intro to React</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. Pure React](#2-pure-react)
  - [2.1. Getting Started](#21-getting-started)
  - [2.2. createElement Arguments](#22-createelement-arguments)
  - [2.3. Reusable Components](#23-reusable-components)
  - [2.4. Passing in Component Props](#24-passing-in-component-props)
  - [2.5. Destructuring Props](#25-destructuring-props)
- [3. Tools](#3-tools)
  - [3.1. npm & Generating a package.json file](#31-npm--generating-a-packagejson-file)
  - [3.2. Prettier](#32-prettier)
  - [3.3. npm / Yarn Scripts](#33-npm--yarn-scripts)
  - [3.4. Prettier Setup](#34-prettier-setup)
  - [3.5. Eslint](#35-eslint)

## 1. Introduction

Learn to build real-world applications using modern React! Much more than an intro, you’ll start from the ground up, getting all the way to using the latest features in React, including hooks, effects, context, and portals. Throughout the course, you’ll piece together tools from the entire React ecosystem (like Reach Router) to build a full application to browse adoptable pets.

- [Course repo](https://github.com/btholt/complete-intro-to-react-v5)
- [Course notes](https://btholt.github.io/complete-intro-to-react-v5/)

- The course is modular.
- Each section of the course moves forward in one commit on GitHub.
- It is recommended to use [Sourcetree](https://www.sourcetreeapp.com), clone the course repo, and to checkout the commits in order to move between sections of the course.
- The 🌳 symbol in the notes defines where there is a new commit.
- React is not doing black magic, it is just regular old JavaScript function calls.
- If we understand the problem our tools solve, them we embrace the complexity because it gives us ease of use.

## 2. Pure React

### 2.1. Getting Started

- Let's start by writing pure React. No compile step. No JSX. No Babel. No Webpack or Parcel. Just some JavaScript on a page.
- Create your project directory. Create an `index.html` and put it into a `src/` directory inside of your project folder.
- In `index.html` put:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Adopt Me</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
    <script>
      // Your code is going to go here
    </script>
  </body>
</html>
```

- Now open this file in your browser.
- On Mac, hit ⌘ (command) + O in your favourite browser, and on Windows and Linux hit CTRL + O to open the Open prompt.
- Navigate to wherever you saved the file and open it. You should see a line of text saying "not rendered".

- We're adding a root div. We'll render our React app here in a sec.
- It doesn't have to be called root, just a common practice.
- We have two script tags.

  - The first is the React library. This library is the interface of how to interact with React; all the methods (except one) will be via this library. It contains no way of rendering itself though; it's just the API.
  - The second library is the rendering layer. Since we're rendering to the browser, we're using React DOM. There are other React libraries like React Native, React 360 (formerly React VR), A-Frame React, React Blessed, and others. You need both script tags. The order is not important.

- The last script tag is where we're going to put our code. This script tag must come after the other two.
- You'll need to grab the [CSS file](https://raw.githubusercontent.com/btholt/complete-intro-to-react-v5/master/src/style.css) and put it in the `src` directory.
- In the last script tag, put the following.

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

- The first thing we do is make our own component, `App`. React is all about making components. And then taking those components and making more components out of those.
- There are two types of components, function components and class components. This is a function component. We'll see class components shortly.
- A function component must return markup (which is what `React.createElement` generates.)
- These component render functions have to be fast. This function is going to be called a lot. It's a hot code path.
- Inside of the render function, you cannot modify any sort of state. Put in functional terms, this function must be pure. You don't know how or when the function will be called so it can't modify any ambient state.
- `React.createElement` creates one instance of some component. If you pass it a string, it will create a DOM tag with that as the string. - We used `h1` and `div`, those tags are output to the DOM. If we put `x-some-custom-element`, it'll output that (so web components are possible too.)
- The second empty object (you can put `null` too) is for attributes we're passing to the tag or component. Whatever we put in this will be output to the element (like `id` or `style`.)
- `ReactDOM.render` is what takes our rendered App component and puts in the DOM (in our case we're putting it in the `root` element.)
- Notice we're using `React.createElement` with `App` as a parameter to `ReactDOM.render`. We need an instance of `App` to render out.
- `App` is a class of components and we need to render one instance of a class. That's what `React.createElement does`: it makes an instance of a class.

### 2.2. createElement Arguments

- The three parameters that `React.createElement` gets are:

1. What kind of element we want: string or composite component (a component we create).
2. All the attributes we want to give the component.
3. The children: singular or an array.

### 2.3. Reusable Components

- React is very flexible, and has 0 opinions on how you organise your project.
- Let's separate this out from a script tag on the DOM to its own script file (best practice.)
- Make a new file in your `src` directory called `App.js` and cut and paste your code into it.

Modify your code so it looks like:

```js
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

- To make an element have multiple children, just pass it an array of elements.
- We created a second new component, the `Pet` component. This component represents one pet. When you have distinct ideas represented as markup, that's a good idea to separate that it into a component like we did here.
- Since we have a new Pet component, we can use it multiple times! We just use multiple calls to React.createElement.
- In `createElement`, the last two parameters are optional. Since Pet has no props or children (it could, we just didn't make it use them yet) we can just leave them off.
- If you're seeing console warnings about keys, ignore it for now.

### 2.4. Passing in Component Props

Okay so we can have multiple pets but it's not a useful component yet since not all pets will be Havanese dogs named Luna. Let's make it a bit more complicated.

```js
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

- Now we have a more flexible component that accepts props from its parent. Props are variables that a parent (`App`) passes to its children (the instances of `Pet`.)
- Now each one can be different! Now that is far more useful than it was since this `Pet` component can represent not just Luna, but any `Pet`.
- This is the power of React! We can make multiple, re-usable components.
- We can then use these components to build larger components, which in turn make up yet-larger components.
- This is how React apps are made!

### 2.5. Destructuring Props

- Writing `props.` in React gets very old very quickly.
- We can destructure the props to pull out the separate variables.

```js
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
```

- [Code so far](adopt-me/2-pure-react/)

## 3. Tools

- Nobody writes React as we have so far in reality.
- There are always tools involved.

### 3.1. npm & Generating a package.json file

- npm does not stand for Node Package Manager. It is, however, the package manager for Node. (They don't say what it stands for.)
- It also has all the packages in the front end scene.
- npm makes a command line tool, called `npm` as well.
- `npm` allows you to bring in code from the npm registry which is a bunch of open source modules that people have written so you can use them in your project.
- Whenever you run `npm install react` (don't do this yet), it will install the latest version of React from the registry.

- In order to start an npm project, run `npm init` at the root of your project. If you don't have Node.js installed, please go install that too.
- When you run `npm init` it'll ask you a bunch of questions. If you don't know the answer or don't care, just hit enter. You can always modify `package.json` later. This will allow us to get started installing and saving packages.

**Code Quality**

- It's important to keep quality high when writing code.
- In reality we want the machine to do as much work as possible so we can focus more on architecture and problem-solving and less on syntax and style.
- While there are many tools that can help you keep code quality high, Prettier and Eslint are core.

### 3.2. Prettier

Prettier is an amazing tool from the brain of James Long. James, like many of us, was sick of having to constantly worry about the style of his code: where to stick indents, how many, when to break lines, etc etc. Coming from languages like Go, Reason, or Elm where all that is just taken care of by the tooling for the language, this quickly wears. James did something about it and made a tool to take care of it: Prettier.

Prettier is a really fancy pretty printer. It takes the code you write, breaks it down in to an abstract syntax tree (AST) which is just a representation of your code. It then takes that AST, throws away all of your code style you made and prints it back out using a predefined style. Since you no longer have control of the style of your code, you no longer have to think about it at all. Your code is always consistent, as is the code from the rest of your team. As Brian likes to put it: if your brain is a processor, you get to free up the thread of your brain that worries about code styles and readability: it just happens for you. Don't like semicolons? Don't write them! It puts them in for you.

Prettier has a few configurations but it's mostly meant to be a tool everyone uses and doesn't argue/bikeshed about the various code style rules. [Here they are](https://github.com/prettier/prettier#api). Prettier can also understand flow and TypeScript.

There really aren't any alternatives for Prettier. The alternative is just not to use a formatter. ESLint's `--fix` flag would be the closest thing.

### 3.3. npm / Yarn Scripts

- It can be painful to try to remember the various CLI commands to run on your project.
- You can put CLI commands into it and then run the name of the tag and it'll run that script.
- Let's go see how that works. Put the following into your `package.json`.

- First run `npm i -D prettier`. `-D `means it's for development only and won't be deployed to production.

```json
"scripts": {
	"format": "prettier --write \"src/**/*.{js,jsx}\"",
},
```

- Now you can run `yarn format` or `npm run format` and it will run that command. This means we don't have to remember that mess of a command and just have to remember `format`.

### 3.4. Prettier Setup

- Prettier is great to use with Visual Studio Code. Just download [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode&WT.mc_id=reactintro-github-brholt).

- Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it off. In order to do that, set `prettier.requireConfig` to `true` and `editor.formatOnSave` to `true`. This prevents you from running prettier on code that you shouldn't, and inadvertently modifying every line of code!

- So that our tool can know this is a Prettier project, we're going to create a file called `.prettierrc` and put `{}` in it. This lets everyone know this is a Prettier project that uses the default configuration. You can put other configs here if you hold strong formatting opinions.

### 3.5. Eslint
