<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript30</h1>
</div>

- [1. JavaScript Drum Kit](#1-javascript-drum-kit)
- [2. CSS & JS Clock](#2-css--js-clock)
- [3. CSS Variables](#3-css-variables)
- [4. Array Cardio Day 1](#4-array-cardio-day-1)
- [5. Flex Panel Gallery](#5-flex-panel-gallery)

No framework vanilla JavaScript course. These tutorials rely heavily upon browser APIs, most of which involve interaction with the page.

We steer clear of opinionated design patterns, frameworks, libraries and any type of abstraction. These things are great and often needed, but can obstruct learning and constrain initial understanding.

### 1. [JavaScript Drum Kit](01-javascript-drum-kit/index-START.html)

- Uses `data-*` HTML attributes and JavaScript attribute selector to play audio and add a class to elements on the `keydown` event.
- Also listens for `transitionend` event to remove the class once the CSS transition has ended.

### 2. [CSS & JS Clock](02-js-and-css-clock/index-START.html)

- Use of the `Date()` API to position clock hands with `transform: rotate`.
- Also demonstrates use of `bezier-timing-function` to transition hands realistically.

### 3. [CSS Variables](03-css-variables/index-START.html)

- CSS variables are updatable with JS. Sass variables get defined at compile time which we can't change after compilation.
- Custom data attributes can be collected in a [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset) object which this exercise uses to apply the suffix `px` with the custom attribute `data-sizing`.
- Modifies CSS variables by using the `name` attribute on selected `<input>` elements, and using `setProperty` to target `:root` CSS variables and interpolate the variable names and values on `change` or `mousemove` events.

### 4. [Array Cardio Day 1](04-array-cardio-day-1/index-START.html)

- Bunch of exercises to practice use of the built-in array methods available in JavaScript.

### 5. [Flex Panel Gallery](05-flex-panel-gallery/index-START.html)

- Uses flexbox to layout columns and JavaScript to apply a class on the `click` event which transitions the `flex-grow` and `font-size` properties.
- Another event listener is added for the `transitionend` event which then applies a second class to transition the upper and lower text on/off viewport.
