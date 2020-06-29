<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Frontend Masters: Complete Intro to Web Development V2</h1>
</div>

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
