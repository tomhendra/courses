<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>CSS In Depth v2</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. Selectors](#2-selectors)
  - [2.1. Basic Selectors & CSS Levels](#21-basic-selectors--css-levels)
  - [2.2. Specificity Introduction](#22-specificity-introduction)
  - [2.3. Relational Selectors & Combinators](#23-relational-selectors--combinators)
  - [2.4. Attribute Selectors](#24-attribute-selectors)
  - [2.5. User Interface Selectors](#25-user-interface-selectors)
  - [2.6. Structural Selectors](#26-structural-selectors)
  - [2.7. nth-of-type Selectors](#27-nth-of-type-selectors)
  - [2.8. Root, Empty and Blank](#28-root-empty-and-blank)
  - [2.9. Negation, Matching & Parent](#29-negation-matching--parent)
  - [2.10. Linguistic Pseudo Classes](#210-linguistic-pseudo-classes)
  - [2.11. Link Locations and User Actions](#211-link-locations-and-user-actions)
  - [2.12. Specificity](#212-specificity)
- [3. Pseudo Elements](#3-pseudo-elements)
  - [3.1. Introduction](#31-introduction)
  - [3.2. Before, After & Generated Content](#32-before-after--generated-content)
  - [3.3. Selection & More Pseudo-Elements](#33-selection--more-pseudo-elements)
- [4. Generated Content](#4-generated-content)
  - [4.1. Before & After](#41-before--after)
  - [4.2. Counters](#42-counters)
  - [4.3. Quotes & Attributes](#43-quotes--attributes)
  - [4.4. Images](#44-images)
  - [4.5. Strings & Special Characters](#45-strings--special-characters)
  - [4.6. Icon Accessibility](#46-icon-accessibility)
  - [4.7. Design Elements](#47-design-elements)
- [5. Media Queries](#5-media-queries)
  - [5.1. Syntax & Punctuation](#51-syntax--punctuation)
  - [5.2. Browser Capability, @supports](#52-browser-capability-supports)
  - [5.3. Viewport](#53-viewport)
  - [5.4. Use Cases: Hyphenations](#54-use-cases-hyphenations)
  - [5.5. Use Case: Columns](#55-use-case-columns)
  - [5.6. Use Cases: SVG](#56-use-cases-svg)
- [6. Colours & Appearance](#6-colours--appearance)
  - [6.1. Colors: RGB, HSL & HEX](#61-colors-rgb-hsl--hex)
  - [6.2. Opacity vs Alphatransparency](#62-opacity-vs-alphatransparency)
  - [6.3. Appearance](#63-appearance)
- [7. Flexbox](#7-flexbox)
  - [7.1. Browser Support & Overview](#71-browser-support--overview)
  - [7.2. Setup Flex Container & Flex Items](#72-setup-flex-container--flex-items)
  - [7.3. Understanding Flexbox](#73-understanding-flexbox)
  - [7.4. Flex Container Properties](#74-flex-container-properties)
  - [7.5. Flex Item Properties](#75-flex-item-properties)
  - [7.6. Flexibility & Shorthand](#76-flexibility--shorthand)
- [8. Tables](#8-tables)
  - [8.1. Overview & Semantics](#81-overview--semantics)
  - [8.2. Captions](#82-captions)
  - [8.3. Table Borders & Spacing](#83-table-borders--spacing)
  - [8.4. Other Table Properties](#84-other-table-properties)
  - [8.5. Styling a Table](#85-styling-a-table)
- [9. Grid](#9-grid)

## 1. Introduction

In this course, Estelle Weyl (MDN) shows you the full capabilities of CSS3. Deep-dive into the essential features of CSS, while also exploring new CSS features you probably didn't know existed. Learn CSS Selectors and Specificity, style web forms, learn visual effects like gradients, transforms, animations and transitions, use Flexbox and CSS Grid... and more!

- [Slides](https://estelle.github.io/cssmastery)

- CSS is the presentation layer of the web.
- Best practice is to use an external style sheet.
- You can place css in the html document head, which will increase performance since css is blocking.
- However if you have a multi-page site you should always use external stylesheets to take advantage of caching.
- Inline styles are possible but should not be used.
- Why use external stylesheets:
  - Allows reusability
  - Eases maintainability
  - Changes are sitewide
  - Changes are instantaneous
  - Interchangeable presentation layer

## 2. Selectors

### 2.1. Basic Selectors & CSS Levels

- There are three selectors that have been around forever.

1. `#ID` - ID selector
2. `.class` - Class selector
3. `E` - Element selector

- An ID can be targeted with HTML and JS.
- We should reserve the ID for JS.
- We want to always use the lowest specificity when targeting an element, so start with the element, then go more specific.
- To target something more specific, use class.

In CSS level 1, there were six different ways of targeting elements.

1. `E` - Element selector
2. `E F` - Descendent selector (combinator using space)
3. `:link`
4. `:active`
5. `.class`
6. `#ID`

In level 2, we got two more combinators, a bunch of attribute selectors, pseudo-elements and some extras.

- `E > F` which targets the direct child.
- `E + F` which targets the adjacent sibling after.
- `*`
- `E[attribute]`
- `E[attribute=value]`
- `E[attribute~=value]`
- `E[attribute|=value]`
- `:first-child`
- `:lang(en)`
- `:focus`
- `:hover`
- `:visited`
- `:before`
- `:after`
- `:first-letter`
- `:first-line`

In CSS level 3 we were given a load more.

- `::before`
- `::after`
- `::first-letter`
- `::first-line`
- `E[attribute^=value]`
- `E[attribute$=value]`
- `E[attribute*=value]`
- `E ~ F`
- `:root`
- `E:last-child`
- `E:only-child`
- `E:nth-child(n)`
- `E:nth-last-child(n)`
- `E:first-of-type`
- `E:last-of-type`
- `E:only-of-type`
- `E:nth-of-type(n)`
- `E:nth-last-of-type(n)`
- `E:empty`
- `E:not(selector)`
- `E:target`

The in the UI specification / Selectors #4 we got UI selectors.

- `E:enabled`
- `E:disabled`
- `E:checked`
- `E:default`
- `E:valid`
- `E:invalid`
- `E:in-range`
- `E:out-of-range`
- `E:required`
- `E:optional`
- `E:read-only`
- `E:read-write`

There are more selectors in level 4, some of which are not yet supported.

- `:blank`
- `:indeterminate`
- `:placeholder-shown`
- `:not(s1, s2)`
- `:matches(s1, s2)`
- `:has(rs1, rs2)`
- `[foo="bar" i]`
- `:dir(ltr)`
- `:lang(zh, *-hant)`
- `:any-link`
- `:scope`
- `:current`
- `:focus-ring`
- `:drop`
- `:drop(active)`
- `:drop(valid)`
- `:drop(invalid)`
- `:user-error`
- `E >> F`
- `F || E`
- `:nth-column(n)`
- `:nth-last-column(n)`

Plus some 'maybes'...

- `::selection`
- `:scope-context()`
- `:current(s)`
- `:past`
- `:future`
- `:host`
- `:host()`
- `:host-context()`
- `::shadow`
- `::content`

And some that were removed...

- `:column(selector)`
- `E /foo/ F`
- `E! > F`
- `:local-link`
- `:nth-match()`

- When we hear 'CSS3' there is no actual one specification.
- There was CSS level 1, then level 2, then 2.1, and finally CSS 3 was actually broken down into modules.
- There will never be a CSS4, as everything is now modular. The modules go from 1-4.
- The full list of CSS selectors is available [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

### 2.2. Specificity Introduction

- We will discuss specificity in terms of `0-0-1`, where specificity goes from left-to-right, where right is the lowest _weight_.
- `1-0-0` - ID selector.
- `0-1-0` - Class selector.
- `0-0-1` - Element selector.
- The `*` selector, or global selector, has no value: `0-0-0`.
- Combinators, like `~`, `>` and `+` have no value: `0-0-0`.

### 2.3. Relational Selectors & Combinators

- The _descendent_ combinator is a space ` `.
  - `ul li` selects every `li` that is a descendent of a `ul`.
- The _child_ combinator is a `>`.
  - `ul > li` selects every `li` that is a direct child of a `ul`.
- The _adjacent sibling_ combinator is a `+`.
  - `li.someClass + li` selects every `li` which is a sibling immediately after a `li` with a class of `.someClass`.
- The _general sibling selector_ is a `~`.
  - `li.someClass ~ li` selects every `li` which is a sibling in any place after a `li` with a class of `.someClass`.
- Any CSS selector can be targeted with the JavaScript Selectors API.

```js
var el = document.querySelector("#bar");
var child = el.querySelectorAll(".foo");
child = document.querySelectorAll("#bar .foo");
```

### 2.4. Attribute Selectors

- Originally we had the attribute selector `element[attribute]` which selects elements containing the named attribute.
- CSS2 gave us a few more.
  - `E[attr]`: Element `E` that has the attribute `attr` with any value.
  - `E[attr="val"]`: Element `E` that has the attribute `attr` with the exact, case-sensitive (if value is case-sensitive) value `val`.
  - `E[attr|=val]`: Element `E` whose attribute `attr` has a value `val` or begins with `val` with or without a `-` afterwards.
  - e.g. `p[lang|="en"]` would match `<p lang="en-us">` and `<p lang="en-uk">`
- And CSS3 introduced more.
  - `E[attr^=val]`: Element `E` whose attribute `attr` starts with the value `val`.
  - `E[attr$=val]`: Element `E` whose attribute `attr` ends with the value `val`.
  - `E[attr*=val]`: Element `E` whose attribute `attr` has the value `val` anywhere within the content.

```css
a[href^="mailto"] {
  /* email icon for any link that is an email */
  background-image: url(emailicon.gif);
}

a[href^="http"]:after {
  /* print actual external link to the page */
  content: " (" attr(href) ")";
}

a[href$="pdf"] {
  /* PDF icon for any link that is a PDF */
  background-image: url(pdficon.gif);
}

a[href$="pdf"]:after {
  /* Indicate explicitly that the link is a PDF */
  content: " (PDF)";
}
```

- In HTML5 attribute values are not case sensitive.
- But there are some case-sensitive situations for example creating strings ourselves, like class and ID names.
- In CSS selectors level 4 we have the `i` for _insensitivity_ and `s` for _sensitivity_.
  - `E[attr="bar" i]` / `E[attr="bar" s]`

### 2.5. User Interface Selectors

- In HTML we can have elements that are enabled or disabled and checked or not checked.
- We have the following UI pseudo-classes.

  - `:enabled`
  - `:disabled`
  - `:checked`
  - `:indeterminate` (Level 4)

- CSS updates immediately, which we can use to update a label colour when a checkbox is checked.

```css
input[type="checkbox"]:checked + label {
  color: red;
}
```

- The form-related pseudo-classes are as follows:

  - `:default`
  - `:valid`
  - `:invalid`

  - `:required`
  - `:optional`

  - `:in-range`
  - `:out-of-range`

  - `:read-only`
  - `:read-write`

  - `:placeholder-shown`

  - `:user-error` or `:user-invalid`

- We can use these selectors for form validation visual cues.

```css
input:valid {
  border: 1px solid green;
}
input:invalid {
  border: 1px solid red;
}
input:required,
input[aria-required="true"] {
  border-width: 5px;
}
input:optional {
  border-width: 10px;
}
input:out-of-range {
  background-color: pink;
}
input:in-range {
  background-color: lightgreen;
}
```

```html
<input type="number" min="5" max="7" required aria-required="true" />
<input type="number" min="0" step="0.1" max="10" />
```

- Understanding the attributes we have in HTML, we can make CSS much more powerful.

### 2.6. Structural Selectors

- An HTML page has a certain structure.
- Structural selectors target elements on the page based on their relationships to other elements in the DOM.
- The CSS updates dynamically if page updates with JS or user interaction.

  - `:root`
  - `:empty`
  - `:blank`
  - `:nth-child()`
  - `:nth-last-child()`
  - `:first-child`
  - `:last-child`
  - `:only-child`
  - `:nth-of-type()`
  - `:nth-last-of-type()`
  - `:first-of-type`
  - `:last-of-type`
  - `:only-of-type`

- The first, last, & only selectors can be a source of bugs, since they can be confusing.
- Be cautious and refer to MDN for these selectors.

  - `:first-child`
  - `:last-child`
  - `:only-child`
  - `:first-of-type`
  - `:last-of-type`
  - `:only-of-type`

### 2.7. nth-of-type Selectors

- nth pseudo-classes allows to select elements using `odd`, `even` or an equation.

  - `:nth-child(3n+1)`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
  - `:nth-last-child(odd)`: every odd element
  - `:nth-of-type(5)`: the 5th element
  - `:nth-last-of-type(3n)`: every 3rd element

### 2.8. Root, Empty and Blank

- The pseudo-class `:root` selects the root element, which in HTML is `<html>`.
  - Declare `font-size` on `:root` if using `rem` units.
  - Style `:root` only if showing `<head>`.
  - In CSS level 4, define Defining Variables on root.
- `E:empty` selects any element that is empty.

```html
<E />
<E></E>
<E><!-- this is a comment --></E>
<E title="this is an empty element" />
```

- `E:blank` selects elements with whitespace, but it is not yet supported.
- Firefox has support through `:-moz-whitespace-only`.

```html
<E> <!-- has white space --> </E>
```

### 2.9. Negation, Matching & Parent

- _Negation_ is handled by `E:not(s1)` which negates whatever is inside the the parentheses.
- Note: `s1` denotes a simple selector which is without spaces or combinators.
- `:not` itself has no specificity, it is what is inside the parens that gives weight.
- We can pass a list of arguments but this is only currently supported in Safari: `:not(s1, s2)`.
- For other browsers we can chain: `:not(s1):not(s2)`.
- _Matching_ is done with `:matches()/:is()/:any()` depending on browser support: See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:is).
- `E:is(s1, s2)`: takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list.
- The _parent_ selector is `:has` which isn't supported yet.
- `header:has(h1, h2, h3, h4, h5, h6)`: contains a header.

### 2.10. Linguistic Pseudo Classes

- The `:lang()` CSS pseudo-class matches elements based on the language they are determined to be in.
- The `:dir()` CSS pseudo-class matches elements based on the directionality of the text contained in them.

### 2.11. Link Locations and User Actions

- Link Pseudo Classes: `a` with an `href` attribute can be selected with `a:link` or `a:visited`.
- User Action Pseudo Classes: `:hover`, `:active` & `:focus`.
- Note: always style `:focus` when you style `:hover` because some people get to the element with the mouse, and some with the keyboard.
- Drag and Drop Pseudo Classes:
  - `:drop` targets while the user is “dragging”. Unfortunately, `dropzone` attribute is not yet supported.
  - `:drop(active)`: current drop target for the drag operation.
  - `:drop(valid)`: drop target is valid for the object currently being dragged, like correct filetype.
  - `:drop(invalid)`: drop target is invalid for the object currently being dragged, i.e. doesn't accept the filetype of object being dragged.
- The `:target` CSS pseudo-class represents a unique element (the target element) with an id matching the URL's fragment.
- The `:scope` CSS pseudo-class represents elements that are a reference point for selectors to match against.
- In CSS, `:scope` is the `:root`, since we don't have scoped CSS yet.
- Grid-structural selectors with column combinators [are coming](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator), which will allow matching of grid cells.
- [Time-Dimensional](https://www.w3.org/TR/selectors-4/#time-pseudos) and [Video & Audio](https://www.w3.org/TR/selectors-4/#video-state) selectors are other upcoming features.

### 2.12. Specificity

- A good visual guide to specificity is [SpeciFISHity](http://specifishity.com/specifishity.pdf).
- `0-0-0`: Global selector.
- `1-0-0`: ID selector.
- `0-1-0`: Class selector (Also attribute selector & pseudo-class).
- `0-0-1`: Element Selector.
- The `*` selector, or global selector, has a specificity of `0`.
- Combinators, like `~`, `>`, `>>`, ` ` (space), and `+` have no value.
- `:not` has no value, but the parameter selector does.
- We should always avoid `!important`. There are are some hacks we can use instead.

```css
/* instead of this... */
.disabled {
  cursor: default !important;
}
p.btn {
  cursor: pointer;
}

/* do this... but always comment! */
.disabled.disabled.disabled {
  cursor: default;
}
p.btn {
  cursor: pointer;
}
```

- Hacking specificity with IDs.

```css
/* instead of this... */
#TheirWidget {
  background-color: blue !important;
}
#3rdPartyWidget {
  background-color: white;
}
/* do this... but always comment! */
#TheirWidget#TheirWidget {
  background-color: blue;
}
#3rdPartyWidget {
  background-color: white;
}
```

- Hack in case of emergency.

```css
a:not(#idDoesNotExist#idDoesNotExist#idDoesNotExist) {
  color: blue;
}
```

- In the worst case scenario, we can overwrite `!important`.
- This is a pretty horrible hack!

```css
li {
  color: white !important;
}
/* Hack of the dirtiest order */
li {
  animation: color forwards;
}
@keyframes color {
  100% {
    color: #f50;
  }
}
```

## 3. Pseudo Elements

### 3.1. Introduction

- There are several pseudo-elements and from CSS 2.1 they have had two preceding colons.

  - `::first-line`
  - `::first-letter`
  - `::selection` (not in specification)
  - `::before`
  - `::after`

- _Pseudo-classes_ select elements that already exist.
- _Pseudo-elements_ create "faux" elements we can style.

### 3.2. Before, After & Generated Content

- `::before` and `::after` can add content to the page that doesn't exist.
- We have to always add the `content` property, or there is nothing to style.
- There are also some future pseudo-elements that are not yet fully supported:

  - `::selection`
  - `::inactive-selection`
  - `::spelling-error`
  - `::grammar-error`
  - `::marker`
  - `::placeholder`
  - `::content`

### 3.3. Selection & More Pseudo-Elements

- The only reason to disable `::selection` is on a mobile device where we want to disable the native behaviour of long tap (copy/paste etc).

  ```css
  .thisSlide {
    -webkit-tap-highlight-color: #bada55;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  ```

- But don't do this, because it is 'assholetic'!
- Many, many more pseudo-elements with prefixes currently treated as a shadow DOM.

  - `::-webkit-progress-bar`
  - `::-webkit-progress-value`
  - `::-webkit-meter-even-less-good-value`
  - `::-webkit-inner-spin-button` / `outer-spin-button`
  - `::-webkit-validation-bubble` / `arrow-clipper` / `arrow` / `message`

- Top tip: Use the DevTools to discover all sorts of shadow DOM stuff (Computed Styles > Show All).

## 4. Generated Content

### 4.1. Before & After

- Most people think that `::before` and `::After` are actually before and after the element.
- But there is almost like a faux span that wraps all three.
- You get 2 free stylable faux elements for every non-empty element.

```css
element::before {
  /* the only 'required' attribute */
  content: "";
}

element::after {
  /* without "content:", you have no content */
  content: "";
}
```

- The accepted values for `content` are as follows:
  - `none`: Same as no content property declared.
  - `normal`: Same as no content property declared.
  - `string`: A string of text. Can be combined with URL, counter, attr(x), quotes, etc.
  - `image`: URL of a resource, usual an image.
  - `counter`: 'counter(name), counter(name, style), 'counters(name, string)' or 'counters(name, string, style)'. 'name' is a string, but not 'none', 'inherit' or 'initial'.
  - `open-quote` / `close-quote`: The appropriate string set in the quotes property.
  - `no-open-quote` / `no-close-quote`: Does not include quotes, but increments the level of nesting for quotes.
  - `attr(X)`: Displays the value of the attribute 'X'.

### 4.2. Counters

- For counter to work we need to give it a name. Here we've called it `sections`.

```css
body {
  counter-reset: sections;
}
header h1.sectiontitle:before {
  content: "Part " counter(sections) ": ";
  counter-increment: sections;
}
```

- Every time we hit a section, we reset the counter to 0.
- The counter will then increment each time it encounters a header.

### 4.3. Quotes & Attributes

- Quotes allow us to specify the style of quotation marks in a nested pattern.

```css
/* Specify pairs of quotes for two levels in two languages */
:lang(en) > q {
  quotes: '"' '"' "'" "'";
}
:lang(fr) > q {
  quotes: "«" "»" "’" "’";
}

/* Insert quotes before and after Q element content */
q::before {
  content: open-quote;
}
q::after {
  content: close-quote;
}
```

- HTML elements can have any number of attributes.
- `attr( attrName )` will print the value of an attribute as a string, but is not interpolated.
- This is a future feature.
- We can use the returned attribute values as content.

```css
a[href^="http"]:hover {
  position: relative;
}
a[href^="http"]:hover:after {
  content: attr(href); /* content */
  position: absolute;
  top: 1em;
  left: 0;
  background-color: black;
  color: white;
  padding: 3px 5px;
  line-height: 1;
}
```

### 4.4. Images

```cs
.showMe {
	position:relative;
}
.showMe:hover::after {
	position:absolute;
	content: url(attr(data-url)); /* doesn't work, because returned value is not interpolated */
	content: url(estelle.svg); /* does work :) */
	width: 200px;
	height:200px; color: blue;
	bottom: -39px;
	left: 20px;
}
```

### 4.5. Strings & Special Characters

- To generate content we need to have the content attribute with a value.

```css
element:before {
  content: "REQUIRED";
}

element:before {
  content: ""; /* empty */
  content: " (.pdf) "; /* any text */
  content: "\2603"; /* unicode & any special characters */
  content: " (" attr(href) ")"; /* attributes */
  content: counter(name);
  counter-increment: name; /* counters */
}
```

### 4.6. Icon Accessibility

- Google Material icons support ligatures for rendering of an icon glyph simply by using its textual name.
- The textual names can be used with `content`.

```css
[class|="material-icons"]:after {
  /* content: "\e84e"; */
  content: "accessibility";
  color: red;
}
.material-icons {
  font-size: 3rem;
}
```

- Accessibility of Generated Content.
  - Generated content can enhance but should not change actual content. It should not be relied upon, as it is part of the presentation layer.
  - Separation of concerns: content vs presentation.
  - All browsers except IE exposes generated content.
  - Generated content is factored into element's [accessible name computation](https://w3c.github.io/accname/).
  - There is no way to put `alt` onto generated content, but in the future we will be able to: `content: url(question.svg) / "More Information";`

### 4.7. Design Elements

- A nice trick for a CSS tooltip:

```css
p[data-tooltip="true"] {
  border-bottom: 1px solid;
  text-decoration: none;
  line-height: 1;
  display: inline;
  z-index: 0;
}
p[data-tooltip="true"]:hover {
  position: relative;
}
p[data-tooltip="true"]:hover:before {
  content: attr(title);
  position: absolute;
  top: 45px;
  left: 0;
  background-color: #c7573a;
  color: white;
  max-width: 10em;
  min-width: 5em;
  font-style: normal;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  z-index: 100;
}
p[data-tooltip="true"]:hover:after {
  content: "";
  position: absolute;
  bottom: -10px;
  border: 15px solid;
  position: absolute;
  left: 20px;
  border-color: transparent transparent #c7573a;
}
```

```html
<i title="'Cause tool tips are awesome" data-tooltip="true">tooltip</i>
```

- As well as the tooltip, we can create thought bubbles.

```css
.thought,
.thought:before,
.thought:after {
  border-radius: 50%;
  border: 5px solid blue;
  background-color: white;
  position: relative;
}
.thought:before,
.thought:after {
  content: "";
  position: absolute;
  left: 20%;
  bottom: -30px;
  height: 40px;
  width: 40px;
}
.thought:after {
  left: 12%;
  bottom: -50px;
  height: 20px;
  width: 20px;
}
```

- We can make [all sorts of shapes](https://css-tricks.com/the-shapes-of-css/) with CSS.
- Here is a nice article about [amazing stuff we can do](https://css-tricks.com/pseudo-element-roundup/) with pseudo-elements.

## 5. Media Queries

- In CSS 2.1 we were given media queries, which allowed us to specify which device was to be used to present our content.

1. all
2. aural
3. handheld
4. braille
5. embossed
6. print
7. projection
8. screen
9. tty
10. tv

- We want to present content differently based on the device that is being used to view it.
- For that we have media queries.

```css
/* If something is 480px wide or smaller, then use this CSS */
@media screen and (max-width: 480px) {
  selector {
    /* small screen */
    property: value;
  }
}

@media screen and (orientation: landscape) {
  selector {
    /* landscape properties */
    property: value;
  }
}

@media screen and (orientation: portrait) {
  selector {
    /* portrait properties */
    property: value;
  }
}

@media screen and (min-device-pixel-ratio: 1.5) {
  selector {
    /* properties for higher resolution screens */
    property: value;
  }
}
```

- When want to always use the same aspect ratio, but not target specific breaks i.e. the size of different devices.
- We should choose breakpoints that make sense for the particular design.

Media query properties ([spec](https://www.w3.org/TR/css3-mediaqueries/#media1)):

- `(min/max)-width:` viewport width
- `(min/max)-height:` viewport height
- ~~`(min/max)-device-width:` screen width~~
- ~~`(min/max)-device-height:` screen height~~
- `orientation:` portrait(h>w) | landscape(w>h)
- `(min/max)-aspect-ratio:` width/height
- ~~`(min/max)-device-aspect-ratio:` device-width/height~~
- `(min/max)-resolution:` 72dpi | 100dpcm

The following other media query properties are not used for web development so are just for information.

- `(min/max)-color:`
- `(min/max)-color-index:`
- `(min/max)-monochrome:` 0 | 1+
- `scan:` progressive | interlace (tv)
- `grid:` 0 | 1 (grids (like tty) or bitmap)

Media Features ([MDN]I(https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)):

- `width`
- `height`
- `aspect-ratio`
- `orientation`
- `resolution`
- `scan`
- `grid`
- `update`
- `overflow-block`
- `overflow-inline`
- `color`
- `color-gamut`
- `color-index`
- `display-mode`
- `monochrome`
- `inverted-colors`
- `pointer`
- `hover`
- `any-pointer`
- `any-hover`
- `light-level`
- `scripting`
- ~~`device-width`~~
- ~~`device-height`~~
- ~~`device-aspect-ratio`~~

Resolution Units:

- `dpi`: dots per inch (72, 96)
- `dpcm`: dots per centimeter (`1dpcm` ≈ `2.54dpi`)
- `dppx`: dots per pixel
- `1dppx` = 96dpi (default resolution of images)
- Note: `0` is invalid. `O` is not equal to `0dpi`, `0dpcm`, or `0dppx`.

High Resolution Implementation.

- Safari v. Everyone Else:

```css
/* Safari */
-webkit-min-device-pixel-ratio: 2
/* Everyone else */
min-resolution: 2dppx
min-resolution: 192dpi
```

- dppx fallback:

```css
min-resolution: 192dpi;

@media (-webkit-min-device-pixel-ratio: 2 /* safari */),
  (min-resolution: 192dpi /* everyone else */) {
  color: red;
}
```

### 5.1. Syntax & Punctuation

- "only" leaves out older browsers.

```css
media="only print and (color)"
```

- "and" - both parts must be true.

```css
media="only screen and (orientation: portrait)"
```

- "not" - if untrue.

```css
media="not screen and (color)"
```

- Comma separates selectors - any part can be true.

```css
media="print, screen and (min-width: 480px)"
```

range v. discrete v. boolean

- `min-`
- `max-`
- `>=`
- `>`
- `<`

```css
@media (min-width: 600px) {
}
@media (max-width: 600px) {
}
@media (width >= 600px) {
}
@media (width > 600px) {
}
@media (width < 600px) {
}
@media (width: 600px) {
}
```

### 5.2. Browser Capability, @supports

- If a browser supports a feature, use this CSS.

```css
@supports (display: flex) {
  /* rules for browsers supporting un-prefixed flex box */
}
```

### 5.3. Viewport

- What is the size of the window and how should content be displayed.
- It is so important and necessary it should always be used.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- The options for `content` are:

  - `width`
  - `height`
  - `initial-scale`
  - `maximum-scale`
  - `minimum-scale`
  - `user-scalable`

- The only time we should use `maximum-scale` / `minimum-scale` is when creating a game, otherwise the viewport won't scale.
- This would prevent the user from using the browsers' zoom feature.

```css
@viewport {
  width: device-width;
  zoom: 0.5;
}
```

- The available properties are:

  - `min-width`
  - `max-width`
  - `width`
  - `min-height`
  - `max-height`
  - `height`
  - `zoom `
  - `min-zoom `
  - `max-zoom`
  - `user-zoom`
  - `orientation`

- If `<meta>` is set to disable zoom, there is no delay on `onClick` events.
- If `<meta>` is set to disable zoom, you're a jerk!

Mobile Specific CSS to prevent OS defaults from interfering with a game:

- Tap Highlight Color

```css
-webkit-tap-highlight-color: #bada55;
```

- Prevent Select & Hold dialogue

```css
-webkit-user-select: none;
```

- Prevent Images Dialog

```css
-webkit-touch-callout: none;
```

- Prevent accidental OS popups (panning)

```css
-ms-touch-action: none;
```

### 5.4. Use Cases: Hyphenations

- `<WBR>` is an HTML element which we can use anywhere we want a word break.
- `&Shy;` is the HTML character entity equivalent.
- In CSS we use `hyphens: auto;`.

```css
@media screen and (min-width: 38em) {
  #content {
    padding: 0 21%; /* trick for less padding on smaller screens */
  }
  p {
    hyphens: auto;
  }
}
```

### 5.5. Use Case: Columns

- Columns work using the following properties.

  - `column-count: 6;`
  - `column-width: 17em;`
  - `column-rule: 1px solid #bbb;`
  - `column-gap: 1.8em;`

- Note that `column-width` is a minimum width.

```css
#content {
  columns: 8em 3; /* shorthand for all 4 properties */
}
h1 {
  column-span: all; /* we can span columns too! */
}
```

### 5.6. Use Cases: SVG

- Generally in media queries using `screen`, `width` refers to the device screen width.
- With SVGs `width` refers to the container of the SVG.

```css
:root {
  background-image: url(circle.svg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 70%;
}
```

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="400">
 <g>
  <title>Simple SVG + mediaqueries
   <defs>
    <style>
      @media screen and (max-width: 100px) {
         #circle { fill: #bada55;}
     }
    </style>
   </defs>
  <circle cx="200" cy="200" r="150" id="circle" />
 </g>
</svg>
```

## 6. Colours & Appearance

### 6.1. Colors: RGB, HSL & HEX

- Color formats: all of the following are white!

```css
color: white;
color: #fff;
color: #ffffff;
color: #ffffffff;
color: rgb(255, 255, 255);
color: rgb(100%, 100%, 100%);
color: rgba(255, 255, 255, 1);
color: rgba(100%, 100%, 100%, 1);
color: hsl(0, 100%, 100%);
color: hsla(0, 100%, 100%, 1);
color: transparent;
color: currentColor; /* current colour of the text */
```

- There are a tonne of named colours.

````css
#F0F8FF /* aliceblue */
#FAEBD7 /* antiquewhite */
#00FFFF /* aqua/cyan */
#7FFFD4 /* aquamarine */
#F0FFFF /* azure */
#F5F5DC /* beige */
#FFE4C4 /* bisque */
#000000 /* black */
#FFEBCD /* blanchedalmond */
#0000FF /* blue */
#8A2BE2 /* blueviolet */
#A52A2A /* brown */
#DEB887 /* burlywood */
#5F9EA0 /* cadetblue */
#7FFF00 /* chartreuse */
#D2691E /* chocolate */
#FF7F50 /* coral */
#6495ED /* cornflowerblue */
#FFF8DC /* cornsilk */
#DC143C /* crimson */
#00FFFF /* cyan/aqua */
#00008B /* darkblue */
#008B8B /* darkcyan */
#B8860B /* darkgoldenrod */
#A9A9A9 /* darkgray/darkgrey */
#006400 /* darkgreen */
#BDB76B /* darkkhaki */
#8B008B /* darkmagenta */
#556B2F /* darkolivegreen */
#FF8C00 /* darkorange */
#9932CC /* darkorchid */
#8B0000 /* darkred */
#E9967A /* darksalmon */
#8FBC8F /* darkseagreen */
#483D8B /* darkslateblue */
#2F4F4F /* darkslategray/darkslategrey */
#00CED1 /* darkturquoise */
#9400D3 /* darkviolet */
#FF1493 /* deeppink */
#00BFFF /* deepskyblue */
#696969 /* dimgray/dimgrey */
#1E90FF /* dodgerblue */
#B22222 /* firebrick */
#FFFAF0 /* floralwhite */
#228B22 /* forestgreen */
#FF00FF /* fuchsia/magenta */
#DCDCDC /* gainsboro */
#F8F8FF /* ghostwhite */
#FFD700 /* gold */
#DAA520 /* goldenrod */
#808080 /* gray/grey */
#008000 /* green */
#ADFF2F /* greenyellow */
#F0FFF0 /* honeydew */
#FF69B4 /* hotpink */
#CD5C5C /* indianred */
#4B0082 /* indigo */
#FFFFF0 /* ivory */
#F0E68C /* khaki */
#E6E6FA /* lavender */
#FFF0F5 /* lavenderblush */
#7CFC00 /* lawngreen */
#FFFACD /* lemonchiffon */
#ADD8E6 /* lightblue */
#F08080 /* lightcoral */
#E0FFFF /* lightcyan */
#FAFAD2 /* lightgoldenrodyellow */
#D3D3D3 /* lightgray/lightgrey */
#90EE90 /* lightgreen */
#FFB6C1 /* lightpink */
#FFA07A /* lightsalmon */
#20B2AA /* lightseagreen */
#87CEFA /* lightskyblue */
#778899 /* lightslategray/lightslategrey */
#B0C4DE /* lightsteelblue */
#FFFFE0 /* lightyellow */
#00FF00 /* lime */
#32CD32 /* limegreen */
#FAF0E6 /* linen */
#800000 /* maroon */
#66CDAA /* mediumaquamarine */
#0000CD /* mediumblue */
#BA55D3 /* mediumorchid */
#9370DB /* mediumpurple */
#3CB371 /* mediumseagreen */
#7B68EE /* mediumslateblue */
#00FA9A /* mediumspringgreen */
#48D1CC /* mediumturquoise */
#C71585 /* mediumvioletred */
#191970 /* midnightblue */
#F5FFFA /* mintcream */
#FFE4E1 /* mistyrose */
#FFE4B5 /* moccasin */
#FFDEAD /* navajowhite */
#000080 /* navy */
#FDF5E6 /* oldlace */
#808000 /* olive */
#6B8E23 /* olivedrab */
#FFA500 /* orange */
#FF4500 /* orangered */
#DA70D6 /* orchid */
#EEE8AA /* palegoldenrod */
#98FB98 /* palegreen */
#AFEEEE /* paleturquoise */
#DB7093 /* palevioletred */
#FFEFD5 /* papayawhip */
#FFDAB9 /* peachpuff */
#CD853F /* peru */
#FFC0CB /* pink */
#DDA0DD /* plum */
#B0E0E6 /* powderblue */
#800080 /* purple */
#663399 /* rebeccapurple */
#FF0000 /* red */
#BC8F8F /* rosybrown */```
````

- The following colour names have been deprecated.

  - `ActiveBorder`
  - `ActiveCaption`
  - `AppWorkspace`
  - `Background`
  - `ButtonFace`
  - `ButtonHighlight`
  - `ButtonShadow`
  - `ButtonText`
  - `CaptionText`
  - `GrayText`
  - `Highlight`
  - `HighlightText`
  - `InactiveBorder`
  - `InactiveCaption`
  - `InactiveCaptionText`
  - `InfoBackground`
  - `InfoText`
  - `Menu`
  - `MenuText`
  - `Scrollbar`
  - `ThreeDDarkShadow`
  - `ThreeDFace`
  - `ThreeDHighlight`
  - `ThreeDLightShadow`
  - `ThreeDShadow`
  - `Window`
  - `WindowFrame`
  - `WindowText`

- All colours used to be `RGB`.
- With Hexidecimal, the first two digits are `R`, the second two are `G`, and the third two are `B`.
- We can use numbers 0 (no colour) to 255 (complete saturation of colour).
- Or we can use %.

```css

#40BFAC
rgb(64,191,172)
rgb(25%,75%,67%)
```

- `HSLA` extends `HSL` to have alphatransparency.

  - The hue is on scale of 0-360.
  - Saturation & Lightness are %.
  - Alpha is 0.00 to 1

- `RGBA` extends `RGB` to have alphatransparency.
- There is a hexidimal version too which can be expressed as `#RRGGBBAA`.

```
100% — FF
 95% — F2
 90% — E6
 85% — D9
 80% — CC
 75% — BF
 70% — B3
 65% — A6
 60% — 99
 55% — 8C
 50% — 80
 45% — 73
 40% — 66
 35% — 59
 30% — 4D
 25% — 40
 20% — 33
 15% — 26
 10% — 1A
  5% — 0D
  0% — 00
```

- Color Tips

  - `transparent` == `rgba(0, 0, 0, 0);`
  - `CurrentColor` == current Text color
  - Accessibility: Color is NOT the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a - visual element.

### 6.2. Opacity vs Alphatransparency

- Alphatransparency is changing the `colour` so that it is not fully opaque.
- If alphatransparency is applied to text for example, the shadow and background will still be visible.
- Opacity affects the text, the shadow, the background, the whole element and makes it transparent.

AlphaTransparency Tips

- Used in RGBA & HSLA colors.

```css
rgba(58, 103, 171, 0.5);
hsla(216, 49%, 45%, 0.5);
```

- Transparent Shadows.

```css
.trans {
  box-shadow: -10px 10px rgba(0, 0, 0, 0.3);
  text-shadow: 0 21px 1px rgba(0, 0, 0, 0.3);
}
```

- Solid Shadows look much less realistic.

```css
.solid {
  box-shadow: -10px 10px #999;
  text-shadow: 0 21px 1px #999;
}
```

### 6.3. Appearance

- `appearance`: Changes the appearance of buttons and other controls to resemble native controls.
- It is always better to use the `<button>` element than a `div` etc. for semantics.
- There are a lot of properties and values for `appearance`: see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance).
- Looking at webkit / moz styles will reveal more options.

## 7. Flexbox

- With flexbox what was once complex became easy.

### 7.1. Browser Support & Overview

- Flexbox is now [widely supported](https://caniuse.com/?search=flexbox) and is super easy to use.

```css
ul {
  display: flex;
  padding: 3px;
  align-items: baseline;
  justify-content: center;
}

ul > li {
  text-align: center;
  flex: auto;
}
```

- The 'holy grail' of layout:

```css
body {
  display: flex;
  flex-flow: column;
}
main {
  display: flex;
  flex: 1;
}
article {
  flex: 1;
}
nav {
  order: -1;
}
```

- We should always code the HTNML in the order that we want search engines and screen readers to parse it.
- We can change the CSS to display it however we want afterwards.

### 7.2. Setup Flex Container & Flex Items

The components of Flexbox are:

1. Creation: `display`
2. Direction: `flex-flow` (`flex-direction`, `flex-wrap`)
3. Alignment: `justify-content`, `align-items`, `align-self`, a`lign-content`
4. Ordering: `order`
5. Flexibility: `flex` (`flex-grow`, `flex-shrink`, `flex-basis`)

The flexible box properties are:

- `display`: Values include `flex`, `inline-flex`. Used on parent to create the flex container.
- `align-content`: `flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `stretch` | `space-evenly`.
- `align-items`: `flex-start` | `flex-end` | `center` | `baseline` | `stretch`.
- `align-self`: `auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`.
- `flex`: Shorthand for `flex-basis`, `flex-grow`, and `flex-shrink`, or `none`.
- `flex-basis`: The basis by which the flex-items flex. default: `auto`.
- `flex-direction`: Set the containers axis for its children with `row` | `row-reverse` | `column` | `column-reverse` on the parent.
- `flex-flow`: Shorthand for `flex-direction` and `flex-wrap` properties.
- `flex-grow`: Positive number determines how much flex item will grow relative to other flex items in flex container when positive free space is distributed. default is `1` for container. `0` for children. Positive only.
- `flex-shrink`: Positive number determines how much flex item will shrink relative to other flex items in flex container when negative free space is distributed. default is `1`.
- `flex-wrap`: To determine whether the boxes are single line or wrap, and the direction, use `nowrap` | `wrap` | `wrap-reverse`.
- `justify-content`: `flex-start` | `flex-end` | `center` | `space-between` | `space-around` | `space-evenly`.
- `min-height`: Default is `auto` not `0`.
- `min-width`: Default is `auto` not `0`.
- `order`: Integer. Controls order of flex item within flex container.

Steps:

1. Add `display: flex;` to the parent of the elements to be flexed.
2. Set `flex-direction` to horizontal or vertical
3. Set `flex-wrap` to control wrap direction

The `display` property accepts a tonne of values, of which `flex` and `inline-flex` apply to flexbox:

- `inline`
- `block`
- `list-item`
- `inline-list-item`
- `inline-block`
- `flex`
- `inline-flex`
- `grid`
- `inline-grid`
- `table`
- `inline-table`
- `table-row-group`
- `table-header-group`
- `table-footer-group`
- `table-row`
- `table-cell`
- `table-column-group`
- `table-column`
- `table-caption`
- `ruby`
- `ruby-base`
- `ruby-text`
- `ruby-base-container`
- `ruby-text-container`
- `contents`
- `none`
- `flow`
- `flow-root`

**What is a flex item?**

Flex items:

- All non-absolutely positioned direct descendent child nodes.
- Generated Content.
- anonymous flex items => non-empty text nodes. Best to always use elements in our HTML.

Not flex items:

- :`:first-line` & `::first-letter`.
- white space.

Kind of:

- absolutely/fixed positioned elements.

**Flex Impacted CSS Properties**

Changed Properties:

- `margin`: adjacent margins in CSS collapse. In flex they do not.
- `min-width` & `min-height`: default is `auto`, not `0`.
- `visibility: collapse;`

Ignored Properties:

- `column-*` properties
- `float`
- `clear`
- `vertical-align`

### 7.3. Understanding Flexbox

`flex-direction` property:

- `row` (default)
- `row-reverse`
- `column`
- `column-reverse`

`flex-wrap` property:

- `nowrap` (default)
- `wrap`
- `wrap-reverse`
- Purpose: is everyting on one line, or can it wrap if necessary?

`flex-flow` property:

- Shorthand for `flex-direction` and `flex-wrap`.
- Advisable to use this shorthand so that we remember both properties.

```css
body > div {
  display: flex;
  flex-flow: row-reverse wrap;
}
div > div {
  flex: 10%; /* evenly sized items */
}
```

### 7.4. Flex Container Properties

- The properties that impact the flex container, which is the parent.
- We can control the children partially using properties of the flex container.

`justify-content` property:

How to distribute the space if the sum of the widths / heights of the items on the **main axis** is not equal to the container.

- `flex-start` (default)
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `space-evenly`

`align-items` property:

How to distribute the space if the sum of the widths / heights of the items on the **cross axis** is not equal to the container.

- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch` (stretch)

`align-content` property:

How to distribute the space between multiple flex containers on the **main axis**.

- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `stretch` (default)
- `space-evenly`

### 7.5. Flex Item Properties

- We can also control flex items individually.

`align-self` property:

We can override the container's `align-items` property on a per flex item basis.

- `auto` (default)
- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch`

`order` property:

The default value is `0`. Anything lower will come before those without set values. Anything above will come after.

```css
div:nth-of-type(3n) {
  order: -1;
}
```

In terms of accessibility we should think about how the elements are defined in the HTML.

1. Source Order
2. Tab order
3. Right to Left languages

### 7.6. Flexibility & Shorthand

There are three properties that are part of the `flex` shorthand:

- `flex-grow`: How to divide the extra space. Non-negative number. default: 1.
- `flex-shrink:` How to shrink if there's not enough room. Non-negative number. default: 1.
- `flex-basis`: The basis on which the item is allowed to grow; the starting size before free space is distributed.
  - length value, content or auto.
  - If set to auto, the basis is the flex item’s content size, and the remaining space is divided among the growth factors.
  - If set to 0, the basis is 0, and 100% of the width of the flex item is divided among the growth factors.

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
.item:nth-of-type(odd) {
  flex: 1 0 220px; /* flex shorthand */
}
```

## 8. Tables

### 8.1. Overview & Semantics

- We used to use tables for layout, before flexbox was introduced.
- But tables are still important for the presentation of data.

Appopriate uses for presentation of data using tables would be:

- Presenting
- Comparing
- Sorting
- Calculating
- Cross Referencing

The markup looks like this:

```htnml
<table>
  <caption>Table Description</caption>
  <colgroup>
    <col/>
  </colgroup>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th></th>
    </tr>
  </tfoot>
</table>
```

### 8.2. Captions

- Specifies the title of table.
- Always the first child of a `<table>`.
- Can be positioned on top or bottom with `caption-side`.
- In FF, can be top, bottom, left or right of table.
- Can be styled.
- CSS: Inherits from `table`.

`caption-side` property:

- Put on the `<table>`, not the` <caption>`.

Supported in all browsers:

- `caption-side: top; `
- `caption-side: bottom;`

Experimental:

- `caption-side: left;`
- `caption-side: right;`
- `caption-side: top-outside;`
- `caption-side: bottom-outside;`

In the specification:

- `caption-side: inline-start;`
- `caption-side: inline-end;`

Deprecated:

- `<table align="left | top | right | bottom">`

We can style captions like any other HTML element.

### 8.3. Table Borders & Spacing

- By default there is spacing between `table` and `td`.
- We can control this with `border-collapse: separate` (default) | `collapse` | `inherit`.
- When the borders are collapsed `border-spacing` can control the amount of space between borders.
- `border-spacing: <length> <length>?;`

```css
table,
td,
th {
  border: none;
}
table {
  border-spacing: 5px 10px;
}
```

- one length: vertical and horizontal padding are the same.
- two lengths: first is horizontal, second is vertical.
- Note: not TRouBLe.
- Irrelevant if `border-collapse: collapse`.
- Empty space is part of the table, not the column, tbody, row or cell.

### 8.4. Other Table Properties

We can hide emoty cells.

- `empty-cell: show` | `hide`.
- Similar to:

```css
td:empty,
th:empty {
  visibility: none;
}
```

- Ignored if `border-collapse: separate`.
- Applies to elements with diplay of `table-cell`.
- Property of `table` or the cells themselves.

We can also vertically align.

`vertical-align:` `baseline` | `sub` | `super` | `text-top` | `text-bottom` | `middle` | `top` | `bottom` | `<percentage>` | `<length>`

- `baseline`: Aligns the baseline of the cell with the baseline of all other cells in the row that are baseline-aligned.
- `top`: Aligns the top padding edge of the cell with the top of the row.
- `middle`: Centers the padding box of the cell within the row.
- `bottom`: Aligns the bottom padding edge of the cell with the bottom of the row.
  - Applied to thead, tfoot, tbody, tr, td, th, but not table.
  - Negative values are ok
  - Additional values (`sub`, `super`, t`ext-top`, `text-bottom`, `<length>` and `<percentage>`) equal baseline.

The `display` property can be used twith the following elements.

```
display: table;
display: table-row-group;
display: table-header-group;
display: table-footer-group;
display: table-row;
display: table-cell;
display: table-column-group;
display: table-column;
display: table-caption;
```

```css
.parent {
  display: table;
}
.child {
  display: table-cell;
  vertical-align: baseline;
}
```

### 8.5. Styling a Table

We can apply limited styles to `<col>` elements.

```html
<table>
  <caption>
    2017–18 Primera División: Player of the week
  </caption>
  <colgroup>
    <col class="week" />
    <col class="player" />
    <col class="club" />
    <col class="stat" />
  </colgroup>
  <thead>
    ....
  </thead>
</table>
```

```css
col.week {
  background-color: pink;
}
col.player {
  background-color: gray;
}
col.club {
  background-color: pink;
}
col.stat {
  background-color: gray;
}
```

- The most effective way to improve the appearance of tables is with spacing and removing things.
- Less is more.

## 9. Grid
