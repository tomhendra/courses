<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>JavaScript30</h1>
</div>

- [1. JavaScript Drum Kit](#1-javascript-drum-kit)
- [2. CSS & JS Clock](#2-css--js-clock)
- [3. CSS Variables](#3-css-variables)
- [4. Array Cardio Day 1](#4-array-cardio-day-1)
- [5. Flex Panel Gallery](#5-flex-panel-gallery)
- [6. Type Ahead](#6-type-ahead)
- [7. Array Cardio Day 2](#7-array-cardio-day-2)
- [8. Fun with HTML5 Canvas](#8-fun-with-html5-canvas)
- [9. Dev Tools Domination](#9-dev-tools-domination)
- [10. Hold Shift to Check Multiple Checkboxes](#10-hold-shift-to-check-multiple-checkboxes)
- [11. Custom Video Player](#11-custom-video-player)
- [12. Key Sequence Detection](#12-key-sequence-detection)
- [13. Slide in on Scroll](#13-slide-in-on-scroll)
- [14. Objects & Arrays: Reference vs Copy](#14-objects--arrays-reference-vs-copy)
- [15. LocalStorage & Event Delegation](#15-localstorage--event-delegation)
- [16. CSS Text Shadow Mouse Move Effect](#16-css-text-shadow-mouse-move-effect)
- [17. Sort without Articles](#17-sort-without-articles)
- [18. Adding Up Times with Reduce](#18-adding-up-times-with-reduce)
- [19. Webcam Fun](#19-webcam-fun)
- [20. Native Speech Recognition](#20-native-speech-recognition)
- [21. Geolocation](#21-geolocation)
- [22. Follow Along Links](#22-follow-along-links)
- [23. Speech Synthesis](#23-speech-synthesis)
- [24. Stick Nav](#24-stick-nav)
- [25. Event Capture, Propagation, Bubbling & Once\](#25-event-capture-propagation-bubbling--once)
- [26. Stripe Follow Along Dropdown](#26-stripe-follow-along-dropdown)
- [27. Click and Drag to Scroll](#27-click-and-drag-to-scroll)

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

### 6. [Type Ahead](06-type-ahead/index-START.html)

- Uses event listeners on an input element to display items from a list of data fetched from an API endpoint, which matches user input.
- RexExp is used to filter the returned data based on the input value.
- Finally the matched input value is highlighted in the list of filtered data using regex and replace.

### 7. [Array Cardio Day 2](07-array-cardio-day-2/index-START.html)

- More familiarization with array methods that come in handy especially when working with data.

### 8. [Fun with HTML5 Canvas](08-fun-with-html5-canvas/index-START.html)

- Uses canvas to draw strokes with varying colour and width.
- Listens for `mousemove`/`mouseout`/`mouseup` events and applies a draw function by using a boolean flag.

### 9. [Dev Tools Domination](09-dev-tools-domination/index-START.html)

- Right click on element in elements panel > break on > attribute modification: launches debugger breakpoint to locate JS which is causes attribute modification.
- Tips on console messages demonstrated in the [HTML file](09-dev-tools-domination/index-START.html).

### 10. [Hold Shift to Check Multiple Checkboxes](10-hold-shift-and-check-checkboxes/index-START.html)

- Selects all checkboxes, listens for click event, loops over checkboxes and uses a flag to mark `checked` to `true` fir each item if `shiftKey` is `true` on the event.

### 11. [Custom Video Player](11-custom-video-player/scripts.js)

- Styling the default HTML video player can be very tricky.
- Here we create a custom HTML video player, using custom functions to build out functionality.

### 12. [Key Sequence Detection](12-key-sequence-detection/index-START.html)

- AKA the Konami code. Detects sequence of keys being entered to trigger an event.
- Listens for `keyup` event and compares an array of values with 'secret code'.

### 13. [Slide in on Scroll](13-slide-in-on-scroll/index-START.html)

- listens on `window` object for `scroll` event and a custom function `checkSlide` to apply a class to trigger the translation of images.
- Uses a `debounce` function to control the amount that `checkSlide` runs, as to not hammer the browser with function calls.

### 14. [Objects & Arrays: Reference vs Copy](14-javascript-references-vs-copying/index-START.html)

- Quick few examples tp demonstrate assignment by reference vs assignment be value.

### 15. [LocalStorage & Event Delegation](15-localstorage/index-START.html)

- Uses the localStorage API to persist list items.
- Listens for `submit` event to add items to the list from input value.
- Uses event delegation to listen on parent `<ul>`.

### 16. [CSS Text Shadow Mouse Move Effect](16-mouse-move-shadow/index-START.html)

- Listens for `mousemove` event and translates text shadow in relation to mouse position.
- Uses `offsetX` and `offsetY` to grab cursor position, with `offsetLeft` and `offsetTop` to compensate for the event firing on nested elements.

### 17. [Sort without Articles](17-sort-without-articles/index-START.html)

- Uses `Array.sort` method but excludes articles "The", "A" or "An" from sorting using a `strip` function and regEx.
- Displays a list of the sorted bands.

### 18. [Adding Up Times with Reduce](18-adding-up-times-with-reduce/index-START.html)

- Use `map` and `reduce` to total up the times of videos from elements generated by YouTube.

### 19. [Webcam Fun](19-webcam-fun/scripts.js)

- Uses webcam output video and paints still images to `<canvas>` periodically for image manipulation.
- Download stills, apply filters, manipulate pixels.

### 20. [Native Speech Recognition](20-speech-detection/index-START.html)

- Uses the speech recognition to API to print to the DOM the results of dictation.

### 21. [Geolocation](21-geolocation/index-START.html)

- Uses `navigator.geolocation` and listens for user position.
- Displays speed and position relative to north with SVG compass.

### 22. [Follow Along Links](22-follow-along-link-highlighter/index-START.html)

- Uses `getBoundingClientRect` to get coords and size to position a highlight over any link on the page.
- Uses `window.scrollY` & `window.scrollX` to compensate for scroll distance when positioning the element.

### 23. [Speech Synthesis](23-speech-synthesis/index-START.html)

- Uses the browser `speechSynthesis` API to synthesise the value of an input.
- Populates dropdown with available voices from the API and calls `speechSynthesis.speak()` on selected option.

### 24. [Stick Nav](24-sticky-nav/index-START.html)

- Fixes navigation at certain scroll point.
- Accounts for the height of the nav element being removed form the document flow when `position: fixed` is applied.

### 25. [Event Capture, Propagation, Bubbling & Once](25-event-capture,-propagation,-bubbling-and-once/index-START.html)\

- Demonstrations of how events work with capture and bubbling.
- Demonstrates use of once to unbind event listener after event fires once.

### 26. [Stripe Follow Along Dropdown](26-stripe-follow-along-nav/index-START.html)

- Transitioned dropdown navigation as proof of concept in matching the Stripe website navigation.
- Demonstrates staggering of `opacity: 0` to `1` and `display: none` to `block` as we cannot maintain opacity transition when both are set simultaneously (this is apparently how React & Angular animations work).

### 27. [Click and Drag to Scroll](27-click-and-drag/index-START.html)

- Listens for mouse events to set the scroll position of a container based on mouse movements when mouse is down.
