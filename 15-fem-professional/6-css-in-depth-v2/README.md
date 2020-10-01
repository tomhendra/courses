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
  - [Use Cases: SVG](#use-cases-svg)

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

### Use Cases: SVG

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
