<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Frontend Masters: Complete Intro to Web Development V2</h1>
</div>

1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#javascript)

## Introduction

An introduction to web development with Brian Holt, of Microsoft.

Course notes: https://btholt.github.io/intro-to-web-dev-v2/

- Programming is hard, there is no right speed.
- You either get something or not, and both are OK.
- Don't be afraid to Google things. It is a skill! This course teaches you how to Google.
- Copy and pasting code is fine. Make your code work then figure out how it works.
- You have to ignore some things and realise that you will come back later and more deeply understand things.
- Accept that your brain has limited capacity. You can't learn anything at once.
- Entry level jobs are out there, but you'll need to work hard and compete for them.
- If you repeatedly hear a term then it's worth researching, otherwise just ignore it.
- This course covers HTML, CSS and JavaScript.
- HTML & CSS are declarative - they don't need to be 'run'. You state them and the computer interprets what you state.
- A website is analogous to a house:
  - HTML is the raw building materials.
  - CSS is the blueprint: Rules to describe where you want things to go. The style and presentation.
  - JavaScript is like a smart house functionality. Interactions with things.
  - The Server is like the pizza delivery place, which delivers pizza to your house based on what you order.

### Tools

- If you find a tool that works for you go with it. Don't just go for something shiny and new just because it's popular.
- Browser, Code editor, Terminal.
- The terminal emulator is the actual window in your operating system; it itself doesn't execute or understand your commands you're sending to it.
- The shell is the code running inside of the terminal emulator. e.g. bash, zsh, fish etc.

### Resources

- Be careful what resources you trust when Googling for things.
- HTML, CSS or JavaScript: MDN is the holy grail.
- CSS Tricks.
- Video content: Frontend Masters. Also Frontend Handbook.
- Library or Framework: GitHub repo or documentation.
- Questions: Stack Overflow.

## HTML

- Basic building blocks are tags.
- Thoughtful usage of appropriate tags assists with screen readers and search engine ranking.
- [Full list of elements on MDN.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- Use `<img>` when image is relative to content. CSS can be used to display images for purely aesthetic purposes.
- An element is one instance of a tag.
- Attributes are additional pieces of information that you can attach to HTML tags.
- Classes are a special type of attribute, can be applied to any tag, allowing them to be targeted by CSS.
- IDs are global attributes that must be unique in the document. Useful to anchor sections of document.

### Naming tags

- Generally you should name things semantically. Name things after what they do, not what they look like.
- If things change in teh future, classnames based on appearances may be inappropriate.
- CSS uses kebab-case to keep class names readable when they are in the browser.

### Meta HTML

- Information for configuring websites that are hidden from the user.
- `<meta>` tag is used to describe metadata that cannot be represented by other HTML meta-related elements, like `<base>`, `<link>`, `<script>`, `<style>` or `<title>`.
- Metadata is — in its very simplest definition — data that describes data. For example, an HTML document is data, but HTML can also contain metadata in its `<head>` element that describes the document — for example who wrote it, and its summary.

## CSS

- A series of rules to apply styles to HTML.
- Components of the rules are: Selector, Property, Value.
- Various units px, em, rem - see [this article](https://css-tricks.com/the-lengths-of-css/) for more explanations.
- Parent styles will affect children styles depending on which styles are applied.
- Always apply styles to classes, never apply them to tags directly, unless literally every single tag should be styled in that same way.

### The Cascade

- If the same selector is used more than once, the selector that is used last takes precedence.
- Avoid using this ability of CSS where-ever possible. It'll save you hours-and-hours of debugging!
- Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied - [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

### IDs & !important

- Don't use these!
- They are wrecking balls and are way too powerful.
- Lazy developers use these to override specificity rather than understanding the codebase properly.

### Pseudo classes & Elements

- Change how elements look based on certain events that happen in the DOM like :hover & :focus, :first-child etc.
- [This article](https://css-tricks.com/pseudo-class-selectors/) from CSS Tricks goes more in depth about pseudo classes.
- For info about pseudo elements check out [this article](https://css-tricks.com/almanac/selectors/a/after-and-before/) also from CSS Tricks.

### Layout

- Every tag in CSS has a display property associated with it by default. You can override & change the display property.
- `inline`: displays inline e.g. `<span>`
- `block`: takes up the entire line e.g. `<div>` & allows control over the height, width, padding, margins, etc.
- `inline-block`: behaves like inline but still allows control over the height, width, padding, margins, etc.
- `flex` & `inline-flex`: Similar to block in that it affects the tags around it, however it gains some new super power on how its interior tags are laid out.
- `grid` and `inline-grid`: More advance display mode that allow you more power to layout tags inside of them.
- `table`: Make something act like a table. In general, use the <table></table> tag instead of using CSS to make things act like tables.

### Height, Width, Padding, Border, and Margin

- These properties cannot be manipulated if something is `display: inline`. Be careful of that.
- Something that is a block or block-like is made up from these properties.
- [MDN Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

### Floats

- The old bullet-proof method of layouts.
- The idea behind float is to push an element as far left or right as possible, and once it's out of space, go to the next line.
- They have peculiar behaviour that's tough to understand.

### Flexbox

- `display: flex;` is a display mode for CSS.
- You are controlling the children of the container set to `display: flex`, rather than the children themselves as with float, where the child elements are set to `float: left` for example.
- Externally, it acts just like block.
- Likewise there is a `inline-flex` which acts just like `display: inline-block` externally.
- CSS Tricks have an [amazing article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) about Flexbox.
- Resources:
  - [Flexbox Zombies](https://geddski.teachable.com/p/flexbox-zombies)
  - [Flexbox Froggy](https://flexboxfroggy.com)

## JavaScript

### Fundamentals

- What is code? Code is for humans first and computers second.
- It's really difficult to come back to code. Write code for maintenance.
- Do everything you can do to make code more readable, plain, easier to understand. Less code is not the best way.
- Code is communication.
- JavaScript is single threaded - can only do one thing at a time.

### Numbers, Strings and Booleans

- Numbers, Strings and Booleans are types.
- Numbers are numbers! Integers and floats are not separated.
- Strings are a combination of letters always within "", '' or ``.
- Booleans are a state of true or false.

### Control flow

- Conditional statements provide control flow.
- Can use `else if` to ask additional questions.

```js
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log('Cool, now I have a lot of nachos to myself.');
} else if (friendsAtYourParty >= 4) {
  console.log('Perfect amount to play some Mario Kart.');
} else {
  console.log('Wooooo turn on the dance music!');
}
```

### Loops

- Execute something multiple times.
- Run code blocks repeatedly while a condition is true.

```js
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  // run this block multiple times
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);

// Same can be achieved using for loop
let friendsAtMyParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtMyParty++;
}
console.log(friendsAtMyParty);
```

### Functions

- A function is a piece of reusable code.

```js
function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet('Tom', 'Hendra', 'Lord', 'Salutations'));
console.log(greet('Jack', 'Sparrow', 'Captain', 'A-hoy'));
```

### Scope

- Every time you call a function, it has its own scope.
- Other things can't peek into it; it just has its own little workspace for it to work with.
- Once its done, any variable that you haven't explicitly held on to or returned at the end is discarded.

```js
function addFive(number) {
  const someVariable = "you can't see me outside this function";
  console.log(someVariable); // in scope
  return number + 5;
}

addFive(10);
console.log(someVariable); // undefined, out of scope
```

### Objects

- A data object of key / value pairs.
- Keys must be unique.
- Used in conjunction with functions they're very powerful.

```js
const person1 = {
  name: 'Tom',
  ageRange: '25-35',
};
const person2 = {
  name: 'Jack',
  ageRange: '65-75',
};

function suggestMusic(person) {
  if (person.ageRange === '25-35') {
    console.log("We think you'll like Daft Punk your crazy millenial.");
  } else if (person.ageRange === '65-75') {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      'Uh, maybe try David Bowie? Everyone likes David Bowie, right?'
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
```

### Context

- In the simplest form, anywhere you are in JavaScript you have a context you are in.
- You can reference that context by using `this`. If I just reference `this` from the outermost layer, it'll be the global object, which in the browser is something called window.
- A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`.

```js
const me = {
  name: {
    first: 'Tom',
    last: 'Hendra',
  },
  location: {
    streetNumber: 500,
    street: 'Fakestreet',
    city: 'Seattle',
    state: 'WA',
    zipCode: 55555,
    country: 'USA',
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
            ${this.location.streetNumber} ${this.location.street}
            ${this.location.city}, ${this.location.state} ${this.location.zipCode}
            ${this.location.country}`;
  },
};

console.log(me.getAddress());
```

### Arrays

- Objects are un-ordered collections of data using keys and values.
- Arrays, in contrast, are ordered collections of data.
- Arrays start at index of 0.

```js
const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]); // Monday
console.log(daysOfTheWeek[1]); // Tuesday
console.log(daysOfTheWeek[6]); // Sunday
```

### The DOM (Document Object Model)

- The DOM is basically a collection of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.
- `document` refers to the current HTML page, and is a globally available variable in the browser that you use to interact with the HTML and CSS.

### Events & Listeners

- An event is created every time certain events happens like when a user clicks something or when they type something.
- We respond to these events by having what are called event listeners.

```js
<button class="event-button">Click me!</button>
<script>
  const button = document.querySelector('.event-button');
  button.addEventListener('click', function() {
    alert("Hey there!");
  });
```

```jsx
<style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />
<script>
  const input = document.querySelector('.color-input');
  const paragraph = document.querySelector('.color-box');

  input.addEventListener('change', function () {
    paragraph.style.backgroundColor = input.value;
  });
</script>
```

### Event Delegation

- If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do.
- Instead what is sometimes easier to do is to use what's called **event bubbling**.
- When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element.

```jsx
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
<script>
  document.querySelector('.button-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') { // Only button being clicked fires event (not clicking div)
      alert(`You clicked on button ${event.target.innerText}`);
    }
    event.stopPropagation(); // stops event bubbling further than button-container.
  });
</script>
```
