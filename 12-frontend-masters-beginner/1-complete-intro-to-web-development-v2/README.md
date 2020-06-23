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
