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
  - [3.5. ESLint Setup](#35-eslint-setup)
  - [3.6. ESLint Configuration](#36-eslint-configuration)
  - [3.7. GitIgnore](#37-gitignore)
  - [3.8. Parcel](#38-parcel)
  - [3.9. Installing React & ReactDOM](#39-installing-react--reactdom)
  - [3.10. Separate App into Modules](#310-separate-app-into-modules)
- [4. JSX](#4-jsx)
  - [4.1. Converting to JSX](#41-converting-to-jsx)
  - [4.2. Configuring ESLint for React](#42-configuring-eslint-for-react)
- [5. Hooks](#5-hooks)
  - [5.1. Creating a Search Component](#51-creating-a-search-component)
  - [5.2. Setting State with Hooks](#52-setting-state-with-hooks)
  - [5.3. Best Practices for Hooks](#53-best-practices-for-hooks)
  - [5.4. Configuring ESLint for Hooks](#54-configuring-eslint-for-hooks)
  - [5.5. Calling the Pet API](#55-calling-the-pet-api)
  - [5.6. Breed Dropdown](#56-breed-dropdown)
  - [5.7. Custom Hooks](#57-custom-hooks)
- [6. Effects](#6-effects)
  - [6.1. Declaring the Effect Dependencies](#61-declaring-the-effect-dependencies)
  - [6.2. Run Only Once](#62-run-only-once)

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

- Let's start by writing pure React. No compile step. No JSX. No Babel. No Webpack or Parcel. Just some JavaScript on a page.

### 2.1. Getting Started

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
- There are two types of components, function components and class components.
- This is a function component. We'll see class components shortly.
- A function component must return markup (which is what `React.createElement` generates.)
- These component render functions have to be fast. This function is going to be called a lot. It's a hot code path.
- Inside of the render function, you cannot modify any sort of state. Put in functional terms, this function must be pure. You don't know how or when the function will be called so it can't modify any ambient state.
- `React.createElement` creates one instance of some component. If you pass it a string, it will create a DOM tag with that as the string. - We used `h1` and `div`, those tags are output to the DOM. If we put `x-some-custom-element`, it'll output that (so web components are possible too.)
- The second empty object (you can put `null` too) is for attributes we're passing to the tag or component. Whatever we put in this will be output to the element (like `id` or `style`.)
- `ReactDOM.render` is what takes our rendered App component and puts in the DOM (in our case we're putting it in the `root` element.)
- Notice we're using `React.createElement` with `App` as a parameter to `ReactDOM.render`. We need an instance of `App` to render out.
- `App` is a class of components and we need to render one instance of a class. That's what `React.createElement does`: it makes an instance of a class.

### 2.2. createElement Arguments

- The three parameters that `React.createElement` receives are:

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

- Okay so we can have multiple pets but it's not a useful component yet since not all pets will be Havanese dogs named Luna.
- Let's make it a bit more complicated.

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

- Now we have a more flexible component that accepts props from its parent.
- Props are variables that a parent (`App`) passes to its children (the instances of `Pet`.)
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

- [The project files so far](adopt-me/pure-react/)

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

- Prettier is great to use with Visual Studio Code. Just download [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

- Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it off. In order to do that, set `prettier.requireConfig` to `true` and `editor.formatOnSave` to `true`. This prevents you from running prettier on code that you shouldn't, and inadvertently modifying every line of code!

- So that our tool can know this is a Prettier project, we're going to create a file called `.prettierrc` and put `{}` in it. This lets everyone know this is a Prettier project that uses the default configuration. You can put other configs here if you hold strong formatting opinions.

### 3.5. ESLint Setup

On top of Prettier which takes of all the formatting, you may want to enforce some code styles which pertain more to usage: for example you may want to force people to never use with which is valid JS but ill advised to use.

- Run `npm i -D eslint eslint-config-prettier` to install ESLint in your project development dependencies.
- The difference between Prettier and ESLint is often understandably confused, as there is overlap.
- Prettier is purely concerned with formatting only. It doesn't care what the code actually does.
- ESLint is more concerned with style. What methods are being used, are we being accessibility friendly.
- ESLint can check for formatting too, but it is not as powerful at this as prettier is.
- So we install `eslint-config-prettier` to tell ESLint that Prettier will handle all the formatting correction.

### 3.6. ESLint Configuration

- Now we can configure its functionalities.
- There are dozens of present configs for ESLint. The Airbnb config is very popular, as is the standard config.
- We're going to use a looser one for this class: `eslint:recommended`.
- Let's create an `.eslintrc.json` file to start linting our project.
- Create this file called `.eslintrc.json`.

```json
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

- This is a combination of the recommended configs of ESLint and Prettier.
- This will lint for both normal JS stuff as well as JSX stuff.
- Let's go add this to our npm scripts in `package.json`.

```json
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
```

- With npm scripts, you can pass additional parameters to the command if you want. Just add a `--` and then put whatever else you want to tack on after that. For example, if I wanted to get the debug output from ESLint, we could run `npm run lint -- --debug` which would translate to `eslint **/*.js --debug`.
- We can use our fix trick this way: npm run `lint -- --fix`.
- We're going to both JS and JSX.
- ESLint is a cinch to get working with Visual Studio Code: Just down the [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

- Alternatives to ESLint: JSHint, JSLint.

### 3.7. GitIgnore

- If you haven't already, create a `.gitignore` at the root of your project to ignore the stuff we don't want to commit.
- Go ahead and put this in there:

```
node_modules
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/
```

### 3.8. Parcel

[Parcel](https://parceljs.org) is a relatively new bundler for JavaScript projects. The first three revisions of this workshop all teach Webpack and end up spending a decent amount of time covering how to set it up. Webpack is a fantastic piece of technology and you should definitely consider using it for your large applications; it's been around a long time and has a lot of support.

Webpack is however difficult to setup. With power comes complexity!

That being said, Parcel is an amazing tool with zero-config. It works with everything we want to do out of the box. Since this is a class on React and not build processes, this allows us to focus more on React. Let's go see what it can do for us.

Parcel is going to accept an entry point, crawl through all of its dependencies, and output a single, complete file with all of our code in it. This means we can have large applications with many files and many dependencies. It would be an unmanageable mess. Already our React app has two components in one file: App and Pet. It'd be better if these were in separate files so it'd be easier to keep track of what was where. This is where Parcel can help us.

- Install Parcel by doing `npm i -D parcel-bundler`.

- Now inside of your `package.json` put:

```json
"scripts" {
  "dev": "parcel src/index.html"
}
```

- Now open http://localhost:1234. You should see your site come up. The difference here is now it's being run through Parcel which means we can leverage all the features that Parcel allows us which we will explore shortly.

So how does it work? We gave the entry point, which is `index.html`. It then reads that `index.html` file and finds its dependencies, which are the two React files and the one `App.js` file that we linked to. It's smart enough to detect that those two React files are remote so it doesn't do anything with those, but it sees that `App.js` is local and so it reads it and compiles its dependencies. Right now it has no dependencies so let's fix that.

### 3.9. Installing React & ReactDOM

- First let's fix the `React` and `ReactDOM` dependencies. Right now these are coming from unpkg.com. Unpkg isn't meant to serve production traffic, nor do we want the burden of loading all of our future dependencies this way. It would get messy quickly and we'd have to make a million requests to get all of them by the end (we'll install more later as we go.) Instead, it'd be better if we could pull our dependencies down from npm and include it in our bundle. Let's do that now.

- Run `npm i react react-dom`. This will pull `React` and `ReactDOM` down from npm and put it in your `node_modules` directory.
- Now instead of loading them from unpkg, we can tell Parcel to include them in your main bundle. Let's do that now.

- Delete the two unpkg script tags in `index.html`

- Add to the top of `App.js`.

```js
import React from "react";
import ReactDOM from "react-dom";
```

- Refresh the page and it still works!
- Now our `React` and `ReactDOM` is loading directly from our bundle instead of separate JavaScript files!

### 3.10. Separate App into Modules

- Let's take this a step further.
- Create a new file called `Pet.js` and put this in there:

```js
import React from "react";

export default function Pet({ name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
```

- Go to `App.js`

```js
// at the top, under React imports
import Pet from "./Pet";

// remove Pet component
```

- Load the page again. Still works!
- Now we can separate components into separate files.
- Parcel does more than just this but we'll get to that in future sections.

- Alternatives to Parcel: Webpack, Browserfy, Rollup.

- [The project files so far](adopt-me/tools/).

## 4. JSX

### 4.1. Converting to JSX

So far we've been writing React without JSX, something that nobody that actually does in production. Everyone uses JSX. Brian showed us this way so what JSX is actually doing is demystified to us. It doesn't do hardly anything. It just makes your code a bit more readable.

If we write `React.createElement("h1", { id: "main-title" }, "My Website");`, what are we actually trying to have rendered out? `<h1 id="main-title">My Website</h1>,` right? What JSX tries to do is to shortcut this translation layer in your brain so you can just write what you mean.

Because we are using Parcel, we can now use JSX. Parcel uses Babel to transpile our JSX code into raw React code, like what we have been writing up until this point.

- Let's convert `Pet.js` to using JSX. It will look like this:

```jsx
import React from "react";

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
```

This is far more readable. And if it feels uncomfortable to you to introduce HTML into your JavaScript, Brian invites you to give it a shot until the end of the workshop. By then it should feel a bit more comfortable. And you can always go back to the old way.

However, now you know what JSX is doing for you. It's just translating those HTML tags into `React.createElement` calls. That's it. Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

Notice the strange `{props.name}` syntax: this is how you output JavaScript expressions in JSX. An expression is anything that can be the right side of an assignment operator in JavaScript, e.g. `const x = <anything that can go here>`. If you take away the `{}` it will literally output `props.name` to the DOM.

ESLint is currently failing. We'll fix it at the end.

Notice you still have to import React despite React not being explicitly used. Remember that JSX is compiled to `React.createElement` calls. Anywhere you use JSX, you need to import React.

- So now JSX is demystified a bit, let's go convert `App.js`.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

- Notice we have Pet as a component.
- Notice that the P in Pet is capitalized. It must be. If you make it lowercase, it will try to have pet as a web component and not a React component.

- We now pass props down in the same way that we add attributes to an HTML tag. Pretty cool.

### 4.2. Configuring ESLint for React

- Anywhere that we are using JSX we need to have React in scope, since it is being transpiled to `React.createElement` calls. It is a hard requirement. But ESLint doesn't know that.
- We need to give ESLint a hand to get it to recognize `React` and not yell about `React` not being used.
- Right now it thinks we're importing React and not using because it doesn't know what to do with React. Let's help it.

- Run this: `npm i -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

Update your `.eslintrc.json` to:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    // prettier ones must come at the end
    // because they turn things off in ESLint
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

This is a little more complicated config than Brian used in previous versions of the workshop but this is what he uses in his personal projects and what he'd recommend to us. In previous versions of this workshop, Brian used [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [standard](https://standardjs.com). Feel free to check those out; he finds both of them a bit too prescriptive. Linting is a very opinionated subject, so feel free to explore what you like.

This particular configuration has a lot of rules to help you quickly catch common bugs but otherwise leaves you to write code how you want.

- `babel-eslint` allows ESLint to use the same transpiling library, Babel, that Parcel uses under the hood. Without it, ESLint can't understand JSX.
- `eslint-plugin-import` helps ESLint catch commons bugs around imports, exports, and modules in general.
- `eslint-plugin-jsx-a11y` catches many bugs around accessibility that can accidentally arise using React, like not having an `alt` attribute on an `img` tag.
- `eslint-plugin-react` is mostly common React things, like making sure you import React anywhere you use React.
- `eslint-plugin-react` now requires you to inform of it what version of React you're using. We're telling it with `"version": "detect"` to look at the `package.json` to figure it out.

- [The project files so far](adopt-me/jsx/).

## 5. Hooks

- Hooks are a new feature in React, generally available as of React 16.8.

### 5.1. Creating a Search Component

Now we want to make it so we can modify what our search parameters are.

- Let's make a new route called `SearchParams.js` and have it accept these search parameters.

```jsx
import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
```

- Notice we're using `className` instead of `class` on the HTML element for CSS classes. This is because `class` is a reserved word in JS and JSX is still just JS. So instead they opted to use `className` which is the [name of the JS API](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for interacting with class names.

- Like `className`, `htmlFor` is used because `for` is a reserved word in JS.

- Now let's add it to our routes:

```jsx
// delete Pet import, and add SearchParams
import SearchParams from "./SearchParams";

// in App.js, replace all the Pets
<SearchParams />;
```

- Now navigate to http://localhost:1234 and see that your have one input box that says "Seattle, WA".

### 5.2. Setting State with Hooks

- Try and type in the input box. You'll see that you can't modify it. Why?

When you type in the input, React detects that a DOM event happens. When that happens, React thinks something may have changed so it runs a re-render. Providing your render functions are fast, this is a very quick operation. It then diffs what's currently there and what its render pass came up with. It then updates the minimum amount of DOM necessary.

So if we type in our input and it re-renders, what gets put in the `input` tag? Well, its value is tied to `location` and nothing changed that, so it remains the same. In other words, two way data binding is not free in React.

This is of benefit because you have to think through how data is handled, and being explicit means that the code communicates clearly what is happening.

- Let's make it work. In `SearchParams.js`:

```js
import React, { `useState` } from "react";

// replace location = "Seattle, WA"
const [location, setLocation] = useState("Seattle, WA");

// replace input
<input
  id="location"
  value={location}
  placeholder="Location"
  onChange={(e) => setLocation(e.target.value)}
/>;
```

- This is called a hook and one of the newest features to React and a fundamental shift on how you'll approach writing React.
- A hook is called such (in Brian's head) because it's a hook that gets caught every time the render function gets called. Because the hooks get called in the same order every single time, they'll always point to the same piece of state. Because of that they can be stateful: you can keep pieces of mutable state using hooks and then modify them later using their provided updater functions.
- The argument given to `useState` is the default value. In our case, we gave it `"Seattle, WA"` as our default value.
- `useState` returns to us an array with two things in it: the current value of that state and a function to update that state. We're using a feature of JavaScript called destructuring to get both of those things out of the array.
- We use the `setLocation` function in the `onChange` attribute of the input. Every time the input is typed into, it's going to call that function which calls `setLocation` with what has been typed into the input. When `setLocation` is called, React knows that its state has been modified and kicks off a re-render.
- You can make your own custom hooks; `useState` is just one of many.
- Historically, React has been written using classes with state being on the instance of the component. This is still a supported pattern in React. We'll see how to do it later.

### 5.3. Best Practices for Hooks

- An absolutely key concept for you to grasp is hooks rely on strict ordering.
- As such, **do not put hooks inside if statements or loops**.
- If you do, you'll have insane bugs that involve `useState` assigning state to the wrong variables.
- If you see `useState` returning the wrong piece of state, this is likely what you did.
- Because this concept is so absolutely critical, the React team has provided us with a lint rule to help us not fall into that trap.
- That lint rule relies on us, the developers, to follow the convention of calling our hooks `useXxxxxx`.
- If you're willing to do that, the lint rules will guard you from calling the hooks out of order.

### 5.4. Configuring ESLint for Hooks

- Let's add the ESLint rule. Run `npm i -D eslint-plugin-react-hooks`. Add this to ESLint:

```json
{
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": 2, // 2: error
    "react-hooks/exhaustive-deps": 1 // 1: warn
  },
  "plugins": [
    // ...
    "react-hooks"
  ]
}
```

### 5.5. Calling the Pet API

- Let's next make the animal drop down. In `SearchParams.js`:

```jsx
// under React import
import { ANIMALS } from "@frontendmasters/pet";
/* Parcel is smart enough to grab this from the npm registry automatically on save.
  So we don't need to run npm i @frontendmasters/pet !! */

// under location
const [animal, setAnimal] = useState("");

// under the location label
<label htmlFor="animal">
  Animal
  <select
    id="animal"
    value={animal}
    onChange={(e) => setAnimal(e.target.value)}
    onBlur={(e) => setAnimal(e.target.value)}
  >
    <option />
    {ANIMALS.map((animal) => (
      <option key={animal} value={animal}>
        {animal}
      </option>
    ))}
  </select>
</label>;
```

- You can use `useState` as many times as you need for various pieces of state! Again, this is why ordering is important because React relies on `useState` to be called in strictly the same order every time so it can give you the same piece of state.
- Similar to above. We're using `onChange` and `onBlur` because it makes it more accessible.

### 5.6. Breed Dropdown

- Let's make a third dropdown so you can select a breed as well as an animal.

```jsx
// under your other state inside the component
const [breed, setBreed] = useState("");
const [breeds, setBreeds] = useState([]);

// under the animal label
<label htmlFor="breed">
  Breed
  <select
    disabled={!breeds.length}
    id="breed"
    value={breed}
    onChange={(e) => setBreed(e.target.value)}
    onBlur={(e) => setBreed(e.target.value)}
  >
    <option />
    {breeds.map((breed) => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ))}
  </select>
</label>;
```

So now we have a breed dropdown. The only really new thing we did was use the `disabled` property to disable the dropdown when you don't have any breeds. We're going to use the Petfinder API to request breeds based on the animal selected. If you select `dog`, you want to see poodles, labradors, and chihuahuas and parrots, tabbies, and Maine coons. Petfinder has an endpoint with these breeds if you give it a valid animal. We'll cover how to do that in the next lesson with effects.

### 5.7. Custom Hooks

For now, we're going to make a custom hook of our own. Just like `useState` is a hook, there are a few others like `useEffect` (which we'll use in the next lesson), `useReducer` (for doing Redux-like reducers), `useRef` (for when you need to have programmatic access to a DOM node), and `useContext` (for using React's context which we'll do shortly as well). But like React hooks, we can use these hooks to make our re-usable hooks.

- Let's make a custom hook that creates a stateful dropdown for us so we can avoid duplication of our code.
- Make a new file called `useDropdown.js`. Noticed we prefixed it with `use` because it's a hook. You should follow that convention.

```jsx
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;
```

This looks like we just made the previous dropdowns generic which is exactly what we did. We use hooks internally to keep the state and then we return the component and the state to the user via an array which can destructure later.

- In `SearchParam.js`:

```jsx
// import at the top
import useDropdown from "./useDropdown";

// delete the animal and breed useState calls

// under breeds useState
const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

// replace animal and breed label
<AnimalDropdown />
<BreedDropdown />
```

This extracts out a lot of duplicated logic out into a separate file which can independently maintained and tested which is a big win. Now we have a re-usable stateful dropdown for our entire site! Pretty cool, right?

You will have ESLint errors around un-used variables. This is expected. We'll use them in the next lesson.

- Let's go make it make AJAX requests now!

- [The project files so far](adopt-me/hooks/).

## 6. Effects

We want to make our app be able to read live data about animals to adopt! This data is courteous of Petfinder.com, a wonderful service that provides a free API for adopting animals. Unfortunately, this service is USA-based, so please use USA locations only or else it won't return any results.

Since this Petfinder is a real service and we don't want to hammer their API, we've built a client that heavily caches responses and limits your location to only `Seattle, WA` and `San Francisco, CA`. If you request something else, it'll force you into one of these locations. We do this to cause less load on their servers. In the future this may change.

Occasionally this API has gone down, so the API client can run in offline mode too. In order to run in offline mode, just make sure that `PET_MOCK=mock` is in your environmental variables. To accomplish, let's add this mock ability to our npm scripts.

- Run `npm i -D cross-env` and then add this to our `package.json`'s scripts:
- `"dev:mock": "cross-env PET_MOCK=mock npm run dev",`.
- Now any time you run this `npm run dev:mock` instead of `npm run dev` you'll get mock data and not hit the API. This will work offline and if the API is down or taking too long.

- Let's see how we can handle asynchronous code inside of React.
- In `SearchParams.js`:

```jsx
// at the top import useEffect and the pet client
import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

// add setBreed to the destructured variables
const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

// below the two useDropdown calls
useEffect(() => {
  pet.breeds("dog").then(console.log, console.error);
});
```

- Here we're using an effect to retrieve a list of breeds from the API.
- An effect is run after every render (which happens after state changes).
- We're going to use effects to do things like AJAX calls, modify ambient state, integrate with other libraries, and many other things.
- Basically it's a way to delay work using a promise until after the render happens and to deal with asynchronous side effects.
- Users don't have to wait to see something rendered, rather `useEffect` is scheduled to run after the first render.
- If you're familiar with previous versions of React, effects can take the place of most life cycle methods. In this case we're going to use it instead of `componentDidMount` and `componentDidUpdate`.

- So rather than just having `dog` be the static animal, let's make that dynamic and let's make it actually save the breed it gets.

```jsx
// replace useEffect
useEffect(() => {
  setBreeds([]);
  setBreed("");
  pet.breeds(animal).then(({ breeds }) => {
    const breedStrings = breeds.map(({ name }) => name);
    setBreeds(breedStrings);
  }, console.error);
}, [animal, setBreed, setBreeds]);
```

- Due to JavaScript closures (the fact that state is preserved for various render function calls) we're able to reference `setBreeds` from the outer scope. We use this to update the breed after the successful call to the petfinder API.

### 6.1. Declaring the Effect Dependencies

- The array at the end is peculiar but essential. By default, effects will run at the end of every re-render. This is problematic for us because we're updating breeds, which causes a re-render, which causes another effect, which causes another re-render, etc.
- What you can to prevent this spiral is give it an array of dependencies as a second parameter, so the effect will only happen if one of those dependencies changes.
- In this case, we want to only cause the effect if `animal` changes. However `setBreed` and `setBreeds` are also dependencies of `useEffect`, so ESLint demands these are included in the array too, even though we know they will not change.
- Effects are always called after the first render no matter what.
- We have to pull the strings out of the objects from the API since the dropdown expect a list of strings, hence the map which does just that.

### 6.2. Run Only Once

- If we want the effect to run once after the first render and never again, we simply make the dependency array empty.

```jsx
useEffect(() => {
  //..
}, []);
```

- `useState` and `useEffect` are the two primary hooks we are going to use in our applications.
- They will cover about 90% of our requirements.

- [The project files so far](adopt-me/effects/).
