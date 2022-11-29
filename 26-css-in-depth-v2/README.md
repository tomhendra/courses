---
title:: CSS In-Depth, v2
type:: Course
author:: Estelle Weyl
completed:: 05/10/20
url:: https://frontendmasters.com/courses/css-in-depth-v2/
certificate:: No certificate provided
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>CSS In-Depth, v2</h1>

- [1. Introduction](#1-introduction)
- [2. Selectors](#2-selectors)
  - [2.1. Basic Selectors \& CSS Levels](#21-basic-selectors--css-levels)
  - [2.2. Specificity Introduction](#22-specificity-introduction)
  - [2.3. Relational Selectors \& Combinators](#23-relational-selectors--combinators)
  - [2.4. Attribute Selectors](#24-attribute-selectors)
  - [2.5. User Interface Selectors](#25-user-interface-selectors)
  - [2.6. Structural Selectors](#26-structural-selectors)
  - [2.7. nth-of-type Selectors](#27-nth-of-type-selectors)
  - [2.8. Root, Empty and Blank](#28-root-empty-and-blank)
  - [2.9. Negation, Matching \& Parent](#29-negation-matching--parent)
  - [2.10. Linguistic Pseudo Classes](#210-linguistic-pseudo-classes)
  - [2.11. Link Locations and User Actions](#211-link-locations-and-user-actions)
  - [2.12. Specificity](#212-specificity)
- [3. Pseudo Elements](#3-pseudo-elements)
  - [3.1. Introduction](#31-introduction)
  - [3.2. Before, After \& Generated Content](#32-before-after--generated-content)
  - [3.3. Selection \& More Pseudo-Elements](#33-selection--more-pseudo-elements)
- [4. Generated Content](#4-generated-content)
  - [4.1. Before \& After](#41-before--after)
  - [4.2. Counters](#42-counters)
  - [4.3. Quotes \& Attributes](#43-quotes--attributes)
  - [4.4. Images](#44-images)
  - [4.5. Strings \& Special Characters](#45-strings--special-characters)
  - [4.6. Icon Accessibility](#46-icon-accessibility)
  - [4.7. Design Elements](#47-design-elements)
- [5. Media Queries](#5-media-queries)
  - [5.1. Syntax \& Punctuation](#51-syntax--punctuation)
  - [5.2. Browser Capability, @supports](#52-browser-capability-supports)
  - [5.3. Viewport](#53-viewport)
  - [5.4. Use Cases: Hyphenations](#54-use-cases-hyphenations)
  - [5.5. Use Case: Columns](#55-use-case-columns)
  - [5.6. Use Cases: SVG](#56-use-cases-svg)
- [6. Colours \& Appearance](#6-colours--appearance)
  - [6.1. Colors: RGB, HSL \& HEX](#61-colors-rgb-hsl--hex)
  - [6.2. Opacity vs Alphatransparency](#62-opacity-vs-alphatransparency)
  - [6.3. Appearance](#63-appearance)
- [7. Flexbox](#7-flexbox)
  - [7.1. Browser Support \& Overview](#71-browser-support--overview)
  - [7.2. Setup Flex Container \& Flex Items](#72-setup-flex-container--flex-items)
  - [7.3. Understanding Flexbox](#73-understanding-flexbox)
  - [7.4. Flex Container Properties](#74-flex-container-properties)
  - [7.5. Flex Item Properties](#75-flex-item-properties)
  - [7.6. Flexibility \& Shorthand](#76-flexibility--shorthand)
- [8. Tables](#8-tables)
  - [8.1. Overview \& Semantics](#81-overview--semantics)
  - [8.2. Captions](#82-captions)
  - [8.3. Table Borders \& Spacing](#83-table-borders--spacing)
  - [8.4. Other Table Properties](#84-other-table-properties)
  - [8.5. Styling a Table](#85-styling-a-table)
- [9. Grid](#9-grid)
  - [9.1. Flexbox vs Grid](#91-flexbox-vs-grid)
  - [9.2. Grid Basics](#92-grid-basics)
  - [9.3. Display Property](#93-display-property)
  - [9.4. Columns \& Rows](#94-columns--rows)
  - [9.5. Fraction Unit \& Repeat Notation](#95-fraction-unit--repeat-notation)
  - [9.6. Adding Gutters](#96-adding-gutters)
  - [9.7. Positioning Grid Items](#97-positioning-grid-items)
  - [9.8. Grid Row \& Column Naming](#98-grid-row--column-naming)
  - [9.9. Grid Item Properties](#99-grid-item-properties)
  - [9.10. The 'Holy Grail' of grid layout.](#910-the-holy-grail-of-grid-layout)
  - [9.11. Named Template Areas](#911-named-template-areas)
  - [9.12. Align \& Justify Items](#912-align--justify-items)
  - [9.13. Align \& Justify Content](#913-align--justify-content)
  - [9.14. Track Sizing \& Auto Flow](#914-track-sizing--auto-flow)
  - [9.15. More Grid Resources](#915-more-grid-resources)
- [10. Backgrounds \& Borders](#10-backgrounds--borders)
  - [10.1. Background Properties \& Color](#101-background-properties--color)
  - [10.2. Background Image](#102-background-image)
  - [10.3. Background Image Future](#103-background-image-future)
  - [10.4. Repeat, Attachment \& Position](#104-repeat-attachment--position)
  - [10.5. Clip, Origin \& Size](#105-clip-origin--size)
  - [10.6. Background Shorthand](#106-background-shorthand)
  - [10.7. Border Color, Style \& Width](#107-border-color-style--width)
  - [10.8. Border Radius \& Border Image](#108-border-radius--border-image)
- [11. Gradients](#11-gradients)
  - [11.1. Linear \& Radial Gradient Syntax](#111-linear--radial-gradient-syntax)
  - [11.2. Color Stops](#112-color-stops)
  - [11.3. Color Hints](#113-color-hints)
  - [11.4. Gradient Directions](#114-gradient-directions)
  - [11.5. Stripes with Repeat Linear Gradient](#115-stripes-with-repeat-linear-gradient)
  - [11.6. Radial Gradients \& Position](#116-radial-gradients--position)
  - [11.7. Shape, Size \& Sizing KeyTerms](#117-shape-size--sizing-keyterms)
  - [11.8. Radial Gradients: color-stops \& color-hints](#118-radial-gradients-color-stops--color-hints)
- [12. Transforms](#12-transforms)
  - [12.1. 2D Transform Functions](#121-2d-transform-functions)
  - [12.2. Function \& Transform Order](#122-function--transform-order)
  - [12.3. 3D Transform Functions \& Properties](#123-3d-transform-functions--properties)
  - [12.4. Perspective \& Perspective Origin](#124-perspective--perspective-origin)
  - [12.5. Backface Visibility \& Box](#125-backface-visibility--box)
- [13. Transitions](#13-transitions)
  - [13.1. Animatable Properties](#131-animatable-properties)
  - [13.2. Events \& Transition Examples](#132-events--transition-examples)
- [14. Animations](#14-animations)
  - [14.1. @Keyframes](#141-keyframes)
  - [14.2. Naming Animations \& Specificity](#142-naming-animations--specificity)
  - [14.3. Timing Functions](#143-timing-functions)
  - [14.4. Steps](#144-steps)
  - [14.5. Iteration Count \& Delay](#145-iteration-count--delay)
  - [14.6. Direction, Shorthand \& Fill Mode](#146-direction-shorthand--fill-mode)
  - [14.7. Stopping Animations \& Events](#147-stopping-animations--events)

## 1. Introduction

This is part of the Frontend Masters Professional & Design to Code Tracks.

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

### 9.1. Flexbox vs Grid

- Flexbox is for when we want 2D layouts, and works brilliantly.
- Grid allows us to create more complex layouts with better control for the alignemnt of elements.

### 9.2. Grid Basics

To undersrtand grid we need to start with terminology.

- Grid lines: The vertical and horizontal lines that divide the grid and separate the columns and rows. Start counting at 1, not 0.
- Grid cell: A single child or unit of a CSS grid.
- Grid area: Any rectangular space surrounded by four grid lines. Can contain any number of grid cells.
- Grid track: The space between two grid lines. This space can be horizontal or vertical: a grid row or grid column.
- Grid row: A horizontal grid track.
- Grid column: A vertical grid track.
- Gutter: Space between two rows and two columns.

Grid properties declared on the parent:

- `grid-template-columns`
- `grid-template-rows`
- `grid-template-areas`
- `grid-template` (shorthand)
- `grid-column-gap`
- `grid-row-gap`
- `grid-gap`

- `justify-items`
- `align-items`
- `justify-content`
- `align-content`
- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`
- `grid`

### 9.3. Display Property

The `display` property accepts the `grid` and `inline-grid` properties to enable grid.

### 9.4. Columns & Rows

Defines the columns and rows of the grid with a space-separated list of values representing the track size.

- `grid-template-columns:` `none` | `<track-list>`| `<auto-track-list>`
- `grid-template-rows`: `none` | `<track-list>` | `<auto-track-list>`
  - `<track-list>` = `<line-name>?` [ `<track-size>` | `<track-repeat>` ]
  - `<track-size>` - can be a length, a percentage, or a fraction of the free space (`fr`) in the grid.
  - `<line-name>` - ident or string.

```css
grid-template-columns: 200px 1fr max-content minmax(min-content, 1fr);
```

We can mix units! That's the power of grid! Or, at least one of the powers.

```css
grid-template-columns:
  150px 150px 150px;
  repeat(3, 150px);
  275px repeat(2, 150px);
  100px repeat(2, 1fr) 2fr;

grid-template-rows:
  150px 150px 150px;
  repeat(3, 150px);
  275px repeat(2, 150px);
  100px 1fr 2fr;
```

We can also name grid lines.

- We can name none, some or all of the lines.
- To name, put brackets around the ident.

```css
grid-template-columns: [start] 150px 150px 150px [end];
```

### 9.5. Fraction Unit & Repeat Notation

- `fr`: Fraction Unit. Describes a fraction of the **available** space.
- `repeat()`: Repeat notation: `repeat(# of repeats, length)`.

```css
ol {
  grid-template-columns: repeat(2, 2fr) repeat(3, 1fr) 3fr;
  grid-template-rows: 2fr 125px repeat(2, 4em);
}
```

Values for `grid-template-columns` and `grid-template-rows` are:

- _length_ or _percentage_: % are relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If size of container depends on the size of its tracks, the % is treated as auto.
- _flex_: `fr`: Positive `fr` value specifying the track’s flex factor. Each `fr`'ed track takes a share of the remaining space in proportion to its flex factor.
- `max-content`: Equal to the largest of the max-contents in the grid track.
- `min-content`: Equal to the largest of the min-contents in the grid track.
- `minmax(min, max):` A size between min and less. If max < min, then max is ignored and `minmax(min,max)` is treated as min.
- `auto`: As a maximum, identical to max-content. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track.
- `fit-content(length or percent)`: Represents the formula min(max-content, max(auto, argument)), which is calculated similar to auto (i.e. `minmax(auto, max-content)`), except that the track size is clamped at argument if it is greater than the auto minimum.

### 9.6. Adding Gutters

Gutter size: global spacing between grid items with:

- `grid-column-gap`: Vertical space between columns.
- `grid-row-gap`: Horizontal space between rows.
- `grid-gap`: Shorthand for `grid-row-gap` and `grid-column-gap`, in that order. Can take one or two lengths or percentages.

Only a single size for each axis.

```css
grid-column-gap: 20px;
grid-row-gap: 1em;
grid-gap: 1em 20px;
```

Grid Steps:

1. Create grid container with the `display` property.
2. Optional: Create columns and rows with either:
   - `grid-template-columns`, and
   - `grid-template-rows`
     or
3. Optional: add a gutter with `grid-gap` or `grid-column-gap` and `grid-row-gap`.

### 9.7. Positioning Grid Items

Item positioning properties:

```css
.myItem {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 5;
}
```

- `grid-row` is shorthand for `grid-row-start` and `grid-row-end`.
- `grid-column` is shorthand for `grid-column-start` and `grid-column-end`.

```css
.myItem {
  grid-row: 2 / 4;
  grid-column: 2 / 5;
}
```

- We can also use `grid-area` to specify an area of the grid for the item to occupy.
- The values accepted map to `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end`

```css
.myItem {
  grid-area: 2 / 2 / 4 / 5;
}
```

### 9.8. Grid Row & Column Naming

The `grid-template-rows` & `grid-template-columns` CSS properties define the line names and track sizing functions of the grid rows/columns.

```css
ol {
  grid-template-columns: [start] repeat(6, 1fr) [end];
}
.myItem {
  grid-column-start: [start];
  grid-column-end: [end];
}
```

### 9.9. Grid Item Properties

- `grid-column-start`
- `grid-column-end`
- `grid-column`
- `grid-row-start`
- `grid-row-end`
- `grid-row`
- `grid-area`
- `justify-self`
- `align-self`

### 9.10. The 'Holy Grail' of grid layout.

```css
body {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 3em 1fr 1.5em;
  grid-gap: 1em;
}
header {
  grid-row: 1/2;
  grid-column: 1/4;
}
footer {
  grid-row: 3/4;
  grid-column: 1/4;
}
```

### 9.11. Named Template Areas

- We can describe the grid with named areas instead of using numbers.

```css
body {
  grid-template-areas:
    "header header header"
    "nav article aside"
    "footer footer footer";
}
```

```css
header {
  grid-area: header;
}
nav {
  grid-area: nav;
}
article {
  grid-area: article;
}
aside {
  grid-area: aside;
}
```

### 9.12. Align & Justify Items

- Very similar to the flexbox discussion.

Container Properties:

- `justify-items`
- `align-items`
- `justify-content`
- `align-content`
- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`
- `grid`

Item properties:

- `justify-self`
- `align-self`

**Row alignment**: `justify-items` property accepts the following values for grid.

- `normal`
- `stretch`
- `baseline`
- `start`
- `end`
- `center`
- `flex-end`
- `flex-start`
- `legacy`
- `safe`
- `unsafe`
- `left`
- `right`
- `center`
- `self-end`
- `self-start`
- `start`
- `stretch`
- `unset`

**Column alignment**: `align-items` property accepts the following values for grid.

- `baseline`
- `center`
- `end`
- `flex-end`
- `flex-start`
- `left`
- `normal`
- `right`
- `safe`
- `self-end`
- `self-start`
- `start`
- `stretch`
- `unsafe`

Aligns content of all the grid cells to the content within each cell.
Individual grid cell content alignment can be overwritten with `align-self` and `justify-self`.

**Do both**: `place-items` property.

```css
place-items: <align-items> <justify-items>;
```

- Shorthand for `align-items` and `justify-items`.
- Order matters! `align-items` is first.
- If only one value is declared, will be applied to both.

### 9.13. Align & Justify Content

- Defines how the items are aligned with respect to the grid if the size of all the items combined is not the same size as the container.

`justify-content` accepts the following values for grid.

- `baseline`
- `center`
- `end`
- `flex-end`
- `flex-start`
- `left`
- `normal`
- `right`
- `space-around`
- `space-between`
- `space-evenly`
- `start`
- `stretch`
- `safe`
- `unsafe`

`align-content` accepts the following values for grid.

- `baseline`
- `center`
- `end`
- `flex-end`
- `flex-start`
- `left`
- `normal`
- `right`
- `space-between`
- `space-evenly`
- `start`
- `stretch`
- `safe`
- `unsafe`

Tip: `auto` track sizes (and only `auto` track sizes) can be stretched by the `align-content` and `justify-content` properties.

### 9.14. Track Sizing & Auto Flow

When items are placed outside of the tracks defined by `grid-template-rows`, `grid-template-columns` and `grid-template-areas`, implicit grid tracks are added. These properties size those tracks.

- `grid-auto-columns:`
- `grid-auto-rows:`
- `grid-auto-flow:`

### 9.15. More Grid Resources

- [Grid by Example](https://gridbyexample.com) - Rachel Andrew
- [Layout Lab](https://labs.jensimmons.com) - Jen Simmons

## 10. Backgrounds & Borders

### 10.1. Background Properties & Color

Background properties:

- `background-color `
- `background-image`
- `background-repeat`
- `background-attachment`
- `background-position`
- `background-clip`
- `background-origin`
- `background-size`
- `background shorthand`

Border properties:

- `border-color`
- `border-style`
- `border-width`
- `border shorthand`
- `border-radius`

Border Images:

- `border-image-source`
- `border-image-slice`
- `border-image-width`
- `border-image-outset`
- `border-image-repeat`
- `border-image shorthand`

**background-color**.

- Use any of the color types.
- Always declare when declaring background images.
- Declare only once in a shorthand declaration.

```css
background-color: white;
background-color: #fff;
background-color: #ffffff;
background-color: #ffffffff;
background-color: rgb(255, 255, 255);
background-color: rgb(100%, 100%, 100%);
background-color: rgba(255, 255, 255, 1);
background-color: rgba(100%, 100%, 100%, 1);
background-color: hsl(0, 100%, 100%);
background-color: hsla(0, 100%, 100%, 1);
background-color: transparent;
background-color: currentColor;
```

### 10.2. Background Image

Old School: `background-image`.

```css
background-image: none | <uri> | inherit;

background-image: url(path/aSingleImage.jpg);
```

Often part of background shorthand with:

- `background-repeat`
- `background-attachment`
- `background-position`
- `background-color`

Don't use `background` shorthand for risk of setting any of 8 properties to default values.

**background image tips:**

- Make sure there's enough contrast with text.
  - add drop shadow.
- Include a background color.
- Doesn't print by default.
- Not accessible.

**multiple background-image:**

```
none | [<image>]# | inherit

<image> = <url> | <image()> | <image-set()> |
          <element()> | <cross-fade()> | <gradient>
```

```css
background-image: url(green.gif), url(blue.gif);
```

- Comma separated.
- Layered front to back.
- Include background-color.

**Not widely supported:**

- `cross-fade()`: The ability to crossfade images.
- `image-set()`: The ability to create a set of images.

`background-image` value types:

- `none`
- `<url>`
- `<gradient>`
- `<image()>` (Not widely supported)
- `<element()>` (Not widely supported)
- `<image-set()>` (Not widely supported)
- `<cross-fade()>` (Not widely supported)

```css
background-image: none

background-image: url(singleImage.png)
background-image: url(firstImage.jpg), url(secondImage.jpg)
background-image: url(data:image/gif;base64,fOulrS123hEAAa517sdfQfda...)
background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='200'><circle cx='55' cy='190' r='25' fill='#FFF' /></svg>");

background-image: linear-gradient(to bottom, green, blue)
background-image: radial-gradient(circle, green, blue)
```

```css
background-image: image('ico_sprite.jpg#xywh=32,64,16,16')
background-image: image("try1.svg", 'try2.png' , "try3.gif")

background-image: element('#someID')
```

### 10.3. Background Image Future

`url()` values:

```css
url(singleImage.png);

url(multipleImages.gif), url(otherGif.gif)

url(SVGImages.svg);

url(sprite.png#xywh=40,0,20,20);
image(sprite.png#xywh=40,0,20,20);

url(data:image/gif;base64,fOulrS123hEAAa517sdfQfdafsPFRjuy187xxRM221...)

url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='200'><circle cx='55' cy='190' r='25' fill='#FFF' />^lt;path d='M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z' fill='#666'/><path d='M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z' fill='#666'/></svg>");
```

- Media fragment will not break backwards... hash will be ignored.

**Other background-image syntax:**

Allows the use of any element, including `<canvas>` where images can be used.

```css
background-image: -moz-element("#someID");
background-image: element("#someID");
```

Define which portion of the image to show:

```css
background-image: -moz-image-rect(url(ico_sprite.jpg), 32, 64, 16, 16);
background-image: image("ico_sprite.jpg#xywh=32,64,16,16");
```

**Unsupported Syntax (future!!)**

Fallback in case your images doesn't load:

````css
background-image: image("try1.svg", "try2.png", "try3.gif", blue) ```;
````

Flip the image if the direction is rtl:

```css
background-image: image("arrow.png" rtl);
```

### 10.4. Repeat, Attachment & Position

The `background-repeat` repeats a backgroudn image! The property accepts the following values.

- `repeat`: Tiled as often as needed to cover background.
- `no-repeat`: Placed once, not tiled or repeated.
- `repeat-x`: Tiled along X axis only (Equivalent to `repeat no-repeat`).
- `repeat-y`: Tiled along Y axis only (Equivalent to `no-repeat repeat`).
- `space`: Repeated as often as will fit without being clipped, spaced out evenly.
- `round`: Repeated as often as will fit without being clipped then scaled so no space in between.

Should accept 2 values (H & V).
Tip: Include `background-repeat: no-repeat;` in your reset CSS.

The `background-attachment` attaches a background image. It accepts `fixed` | `local` | `scroll` values.

The `background-position` property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

```css
div {
  background-position: 75% 75%;
}
div:after {
  top: 75%;
  left: 75%;
}
```

- We can also makew the position relative to any corner.

```css
background-position: right 50px bottom 50px;
```

### 10.5. Clip, Origin & Size

The `background-clip` property sets whether an element's background extends underneath its border box, padding box, or content box.

- The accepted values are `border-box` | `padding-box` | `content-box`.
- We can also clip text (not yet fully supported):

```css
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

The `background-origin` property sets the background's origin: from the border start, inside the border, or inside the padding.

- The accepted values are `border-box` | `padding-box` | `content-box`.

The `background-size` property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

- Use for creating gradients backgrounds.
- Needed for hiDPI images.
- ‘contain’ grows/shrinks to fully fit.
- ‘cover’ grows to min size that covers 100% of height & width.
- The accepted values are:
- `auto`: image is actual size.
- `cover`: image maintains aspect ratio, covering entire element even if that means part of the image is cut off.
- `contain`: image maintains aspect ratio, fitting the entire image into the element even if that means part of the background is showing or the image repeats.
- `length`: image maintains aspect ratio, growing or shrinking so that the width is the length defined.
- `auto length`: image maintains aspect ratio, growing or shrinking so that the height is the length defined.
- `length length`: image **does not necessarily** maintain its aspect ratio, height and width both grow or shrink to the length defined.

### 10.6. Background Shorthand

```
background:
 img position / size repeat attachment origin clip,
 img position / size repeat attachment box{1,2} bgcolor;

background:
 url(topImg.jpg) 0 0 / 30px 30px repeat scroll border-box content-box,
 url(botImg.jpg) 15px 15px / 30px 30px fixed border-box #609;
```

**DO NOT USE BACKGROUND SHORTHAND!**

- The syntax is too complicated.
- And it is easy to overwrite everything by styling additional properties afterwards.

### 10.7. Border Color, Style & Width

The `border-color` property.

- Use any of the color types.

```css
border-color: white;
border-color: #fff;
border-color: #ffffff;
border-color: #ffffffff;
border-color: rgb(255, 255, 255);
border-color: rgb(100%, 100%, 100%);
border-color: rgba(255, 255, 255, 1);
border-color: rgba(100%, 100%, 100%, 1);
border-color: hsl(0, 100%, 100%);
border-color: hsla(0, 100%, 100%, 1);
border-color: transparent;
border-color: currentColor; /* default */
```

The `border-style` property accepts the following values.

- `none`: No border. As if border-width: 0; except with border-image.
- `hidden`: Same as none, but relevant in border-collapsed tables.
- `dotted`: Round dots.
- `dashed`: Square-ended dashes.
- `solid`: a single solid line.
- `double`: Two parallel solid lines. Only relevant if `border-width` >= 3px. line + space + line = `border-width` value.
- `groove`: Shadow effect using two colors on each side, with a slightly lighter and darker than the border-color value. Top / left half of each side darker.
- `ridge`: Looks as if it were coming out of the canvas. Bottom / Right darker.
- `inset`: Looks sunken into page. Top and left border are made darker, bottom and right are lighter.. Treated as ridge in border-collapsed tables.
- `outset`: Looks as if popping out of page. Bottom and right are darker. Top and left border are lighter.. Treated as groove in border-collapsed tables.

The `border-width` accepts `(length)` | `thin` | `medium` | `thick` | `inherit {1,4};`

- Up to 4 values Top Right Bottom Left (TRouBLe).
- Nothing new here.

The `border` shorthand property:

```css
border: width style color;

border-left: width style color;
border-top: 5px dashed rgba(217, 68, 11, 0.8);
```

- style is REQUIRED.
- width defaults to `medium`.
- color defaults to `currentColor`.
- Beware when using transitions as we can end up with 8 transition end events.

### 10.8. Border Radius & Border Image

The `border-radius` property accepts number, px or %.

```css
border-radius: 0;
border-radius: 20px;
border-radius: 50%;
```

We can style each corner individually.

```css
border-top-left-radius
border-top-right-radius
border-bottom-right-radius
border-bottom-left-radius
```

And we can create shapes.

```css
.circle {
  border-radius: 50%;
}
.oval {
  border-radius: 50%;
}
.different {
  border-radius: 10px 30px;
}
.elliptical {
  border-radius: 10px / 30px;
}
.uglier {
  border-radius: 10px 35px 20px 15px / 30px 35px 5px 5px;
}
```

The `border-image` property accepts `source` || `slice` / `width` / `outset` || `repeat`;

`border-image` is actually the shorthand, for which the underlying properties are:

- `border-image-source`: `none` | `url()` | `<image>`
- `border-image-slice`: `<number>` | `XX% {1,4}` && `fill`
- `border-image-width`: `<length>` | `XX%` | `<number> `| `1` | `auto {1,4}`
- `border-image-outset`: `<length>` | `<number>` `{1,4}`
- `border-image-repeat`: `stretch` | `repeat` | `round` `{1,2}`

Check out the border image [tool](https://border-image.com) and [tutorial](https://www.sitepoint.com/css3-border-image/).

## 11. Gradients

- A gradient is actually an image.
- It can be used anywhere that we can use an image in CSS.
  - `background-image`, `list-style-type`, `border-image`, `content`, `cursor`.
- There are 4 Gradient Types:
  - `linear-gradient()`
  - `radial-gradient()`
  - `repeating-linear-gradient()`
  - `repeating-radial-gradient()`
- There is another newer type too which is not yet fully supported:
  - `conic-gradient()`
  - `repeating-conic-gradient()`

### 11.1. Linear & Radial Gradient Syntax

`linear-gradient([<angle>| to <side-or-corner>,]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

Things to remember:

1. Use 'to' with keyterms.
2. `0deg` is to top.
3. Angles go clockwise.

`radial-gradient([<shape>|| <size> at <position>]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

Things to remember:

1. Use 'at' with position.
2. Position is center of gradient.
3. If shape is specified as circle or omitted, the size can be a length/percent.

### 11.2. Color Stops

A color stop is when we either provide the gradient with a color, or a color and where it should be located.

`<color> [<length> || <percentage>]?`

- Color?
- Length? Any length unit.
- Percent? relative to gradient line which is relative to image size.
- Omitted? 0%, 100%, or evenly distibuted in between.
- Duplicate? Hard color stop.
- Out of Order? previous declared value.

```css
.slide {
  background-image: linear-gradient(
    red 0vh,
    orange 20vh,
    yellow 40vh,
    green 60vh,
    blue 80vh,
    purple 100vh
  );
}
```

We can also have hard stops by duplicating them, and use `background-size` to control the perceived compactness.

```css
.slide {
  background-image: linear-gradient(
    red 20%,
    orange 20%,
    orange 40%,
    yellow 40%,
    yellow 60%,
    green 60%,
    green 80%,
    blue 80%
  );
  background-size: 20%;
}
```

We can use negative values to spread the gradient.

```css
.slide {
  background-image: linear-gradient(rebeccapurple, palegoldenrod),
    linear-gradient(rebeccapurple -50%, palegoldenrod 150%);
  background-size: 5% 100%, 100%;
  background-repeat: no-repeat;
}
```

### 11.3. Color Hints

- Midpoint of transition between 2 stops.
- Length? Any length unit.
- Percent? relative to gradient line which is relative to image size.
- Hard Stop? Use 0%.
- Point is relative to the 0 (zero) mark, not from the previous color stop.

```css
linear-gradient(rebeccapurple, palegoldenrod);
linear-gradient(rebeccapurple, 50%, palegoldenrod);
linear-gradient(rebeccapurple, 20%, palegoldenrod);
linear-gradient(rebeccapurple, 80%, palegoldenrod);
```

Demo:

```css
.slide {
  background-image: linear-gradient(
      red,
      orange 20vh,
      yellow 40vh,
      green 60vh,
      blue 80vh,
      purple
    ), linear-gradient(red, 0, orange 20vh, 0, yellow 40vh, 0, green 60vh, 10vh, blue
        80vh, 0%, purple);
  background-size: 5% 100%, 100%;
  background-repeat: no-repeat;
}
```

### 11.4. Gradient Directions

**to <side-or-corner>**

Keyterm Directions:

`linear-gradient([<angle>| to <side-or-corner>,]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

- Gradient progresses toward the declared side or corner.

`to [left | right]` || `[top | bottom]`

Options:

- `to top`
- `to bottom` (default)
- `to left`
- `to right`
- `to top left`
- `to top right`
- `to bottom left`
- `to bottom right`

**Angles**

Keyterm Directions:

`linear-gradient([<angle>| to <side-or-corner>,]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

- Gradient progresses the declared angle.
- Degrees go clockwise, starting at 12:00.
  - top: 0%;
  - right: 90%;
  - bottom: 180%;
  - left: 270%;
- 0deg is the same as to top
- 45% is **NOT** the same as to top right
- deg is required

```css
background: linear-gradient(142deg, rebeccapurple 50%, palegoldenrod 50%);
```

### 11.5. Stripes with Repeat Linear Gradient

We can create stripes with a standard linear gradient, but we need to calculate the angles.

```css
background-color: rebeccapurple;
background-image: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.2) 25%,
  rgba(255, 255, 255, 0) 25%,
  rgba(255, 255, 255, 0) 50%,
  rgba(255, 255, 255, 0.2) 50%,
  rgba(255, 255, 255, 0.2) 75%,
  rgba(255, 255, 255, 0) 75%,
  rgba(255, 255, 255, 0) 100%
);
background-size: 100px 100px;
background-repeat: repeat;
```

It is much easier to achieve with repeating linear gradient.

```css
.rainbow {
  background-image: repeating-linear-gradient(
    145deg,
    red 0,
    red 20px,
    orange 20px,
    orange 40px,
    yellow 40px,
    yellow 60px,
    green 60px,
    green 80px,
    blue 80px,
    blue 100px,
    purple 100px,
    purple 120px
  );
}
```

Repeating Linear Gradient Syntax:

`repeating-linear-gradient([<angle>| to <side-or-corner>,]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

Things to remember:

1. Use 'to' with keyterms.
2. Angles go counter clockwise.
3. 0deg is from left.
4. Width is last specified color-stop's position minus the first specified color-stop's position.
5. Color stops repeat indefinitely.
6. Border color-stops will create hard transitions if gradient doesn't start and end with the same color.

### 11.6. Radial Gradients & Position

Radial gradients have two things in common with linear gradients, which are color stops and color hints.

Radial gradient synytax:

`radial-gradient([<shape>|| <size> at <position>]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

Things to remember:

1. Use 'at' with position.
2. Position is center of gradient.
3. If shape is specified as circle or omitted, the size can be a length/percent.

```css
.slide {
  background-image: radial-gradient(
    ellipse at 20% 30%,
    palegoldenrod 0%,
    rebeccapurple 100%
  );
}
```

Position:

- Same values as `background-position`.
- Include 'at'.
- Location of gradient center point.
- There are no angles, so it is called a gradient ray, not a gradient line.

### 11.7. Shape, Size & Sizing KeyTerms

Two options:

1. circle
2. ellipse (default)

Declared explicitly, or implied via size declaration.

- Circle: single length value: radius.
- Ellipse: two length values: width height (in that order).
- Percentage size is only for ellipses.

```css
.slide {
  background-image: radial-gradient(
    ellipse at 20% 20%,
    black 1%,
    1%,
    palegoldenrod 2%,
    50%,
    rebeccapurple 50%
  );
}
```

Sizing With Keywords:

- `closest-side`:
  - circle: gradient ray end touches closest side.
  - ellipse: vertical ray touches closest of top or bottom edge.
  - horizontal ray touchest closest of right or left side.
- `farthest-side`:
  - circle: gradient ray end touches furthest side.
  - ellipse: vertical ray touches furthest of top or bottom edge.
  - horizontal ray touchest furthest of right or left side.
- `closest-corner`:
  - circle: radius is length from center of circle (position) to closest corner.
  - ellipse: gradient ray touches corner closest to center while maintaining aspect ratio.
- `farthest-corner`:
  - Default
  - circle: radius is length from center of circle (position) to furthest corner.
  - ellipse: gradient ray touches corner furthest from center while maintaining aspect ratio.
- `contain` (same as `closest-side`) - **Deprecated**
- `cover` (same as `farthest-corner`) - **Deprecated**

```css
.slide {
  background-image: radial-gradient(
    circle farthest-corner at bottom 40px right 50px,
    black 1%,
    1%,
    palegoldenrod 2%,
    98%,
    rebeccapurple 98%
  );
}
```

### 11.8. Radial Gradients: color-stops & color-hints

```css
.slide {
  background-image: radial-gradient(
    circle closest-side at 100px,
    red 0%,
    orange 20%,
    40% yellow 40%,
    60% green 60%,
    80% blue 80%,
    100% purple 100%
  );
}
```

Repeating Radial Gradient Syntax:

`repeating-radial-gradient([<shape>|| <size> at <position>]? [<color-stop>[, <color-hint>]?, ]# <color-stop>)`

Things to remember:

1. Repeats the radial gradient after the 100% mark.
2. Has no impact when 'furthest-corner' is used or defaults for gradient size.
3. Use 'at' with position.
4. Position is center of gradient.
5. If shape is specified as circle or omitted, the size can be a length/percent.

```css
.slide {
  background-image: repeating-radial-gradient(
    circle closest-side at 100px,
    red 0%,
    orange 20%,
    yellow 40%,
    green 60%,
    blue 80%,
    purple 100%
  );
}
```

## 12. Transforms

The `transform` attribute defines a list of transform definitions that are applied to an element and the element's children.

### 12.1. 2D Transform Functions

The following functions can be provided to `transform` for 2D.

- `translate(<length>[, <length>])`:
  Specifies a 2D translation by the vector `[x, y]`, where `x` is the `translation-value` parameter for the `x` axis and `y` is the optional translation value along the `y` axis parameter. If `y` is not provided, `y == 0`.
- `translateX(<length>)`:
  Specifies a translation by the given amount in the `X` direction.
- `translateY(<length>)`:
  Specifies a translation by the given amount in the `Y` direction.
- `scale(<number>[, <number>])`:
  Specifies 2D scaling operation by the [sx,sy]. If `sy` is not provided, `sy` will equal `sx` (growsing or shrinking with the same scale). `Scale(1, 1)` or `scale(1)` leaves an element in it's default state. `Scale(2, 2)` or `scale(2)` causes the element to appear twice as wide and twice as tall as its default size, taking up 4-times the original area.
- `scaleX(<number>)`:
  Specifies a scale operation using the `[sx, 1]` scaling vector, where `sx` is given as the parameter.
- `scaleY(<number>)`:
  Specifies a scale operation using the `[1, sy]` scaling vector, where `sy` is given as the parameter.
- `rotate(<angle>)`:
  Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the `transform-origin` property. For example, `rotate(90deg)` would cause elements to appear rotated one-quarter of a turn in the clockwise direction.
- `skewX(<angle>)`:
  specifies a skew transformation along the `X` axis by the given angle.
- `skewY(<angle>)`:
  Specifies a skew transformation along the `Y` axis by the given angle.
- `matrix(<num>, <num>, <num>, <num>, <num>, <num>)`:
  Generally machine generated, specifies a 2D transformation in the form of a transformation matrix of six values. `matrix(a,b,c,d,e,f)` is equivalent to applying the transformation matrix `[a b c d e f]`.

Things to Note:

- Take advantage of `transform-origin`.
- Multiple values are SPACE separated (no commas).
- The order of the values matters.
- 3D transforms are hardware accelerated.
- Play with [Westciv's Transform Tool](https://westciv.com/tools/transforms/index.html).
- Matrix is another syntax
- [More about transforms](http://www.standardista.com/css3/css3-transform-property-and-the-various-transform-functions).

### 12.2. Function & Transform Order

Order of transform functions matters: if you rotate first, your translate direction will be on the rotated axis!

- Usually we want to translate first, and then rotate.

### 12.3. 3D Transform Functions & Properties

- `translate(<x-length>[, <y-length>])`:
  Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter. If `<ty>`  is not provided, ty has zero as a value.
- `translate3d(<x>, <y>, <z>)`:
  Specifies a 3D translation by the vector `[tx,ty,tz]`, with `tx`, `ty` and `tz` being the first, second and third translation-value parameters respectively.
- `translateX(<x-length>), translateY(<y-length>)`:
  Specifies a translation by the given amount in the `X` or `Y` direction.
- `translateZ(<z-value>)`:
  Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the `translateZ` `translation-value`, and if present are evaluated as `0`.
- `scale(<number>[, <number>])`:
  Specifies a 2D scale operation by the `[sx,sy]` scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.
- `scale3d(<number>, <number>, <number>)`:
  Specifies a 3D scale operation by the `[sx,sy,sz]` scaling vector described by the 3 parameters.
- `scaleX(<number>), scaleY(<number>)`:
  Specifies a scale operation using the `[sx,1,1]` or `[1,sy,1]` scaling vector, where `sx` or `sy` is given as the parameter respectively.
- `scaleZ(<number>)`:
  Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.
- `rotate(<angle>)`:
  Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the `transform-origin` property.
- `rotate3d(<number>, <number>, <number>, <angle>)`:
  Specifies a clockwise 3D rotation by the angle specified in last parameter about the `[x,y,z]` direction vector described by the first 3 parameters. If the direction vector is not of unit length, it will be normalized. A direction vector that cannot be normalized, such as `[0, 0, 0]`, will cause the rotation to not be applied. This function is equivalent to:

  ```css
  matrix3d(1 + (1-cos(angle))*(x*x-1), -z*sin(angle)+(1-cos(angle))*x*y, y*sin(angle)+(1-cos(angle))*x*z, 0, z*sin(angle)+(1-cos(angle))*x*y, 1 + (1-cos(angle))*(y*y-1), -x*sin(angle)+(1-cos(angle))*y*z, 0, -y*sin(angle)+(1-cos(angle))*x*z, x*sin(angle)+(1-cos(angle))*y*z, 1 + (1-cos(angle))*(z*z-1), 0, 0, 0, 0, 1)
  ```

- `rotateX(<angle>)`:
  Specifies a clockwise rotation by the given angle about the X axis.
- `rotateY(<angle>)`:
  Specifies a clockwise rotation by the given angle about the Y axis.
- `rotateZ(<angle>)`:
  Specifies a clockwise rotation by the given angle about the Z axis.
- `skewX(<angle>),skewY(<angle>)`:
  Specifies a skew transformation along the X axis or Y axis by the given angle.
- `skew(<angle> [, <angle>])`:
  Specifies a skew transformation along the `X` and `Y` axes. The first angle parameter specifies the skew on the `X` axis. The second angle parameter specifies the skew on the `Y` axis. If the second parameter is not given then a value of `0` is used for the `Y` angle (ie. no skew on the `Y` axis).
- `matrix(<number>{6})`:
  Specifies a 2D transformation in the form of a transformation matrix of six comma separated values. `matrix(a,b,c,d,e,f)` is equivalent to `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, e, f, 0, 1)`.
- `matrix3d(<number>{15})`:
  Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 comma separated values in column-major order.
- `perspective(<number>)`:
  Specifies a perspective projection matrix. This matrix maps a **viewing cube** onto a pyramid whose base is infinitely far away from the viewer and whose peak represents the viewer's position. The viewable area is the region bounded by the four edges of the viewport (the portion of the browser window used for rendering the webpage between the viewer's position and a point at a distance of infinity from the viewer). **The depth**, given as the parameter to the function, represents the distance of the `z=0` letters from the viewer. Lower values give a more flattened pyramid and therefore a more pronounced perspective effect. The value is given in pixels, so a value of 1000 gives a moderate amount of foreshortening and a value of 200 gives an extreme amount. The matrix is computed by starting with an identity matrix and replacing the value at row 3, column 4 with the value -1/depth. The value for depth must be greater than zero, otherwise the function is invalid.

3D Transform related Properties:

- `perspective:` `none` | `length`:
  Same as `transforms: perspective(value)` except it applies to the positioned or transformed children of the element, not the element itself.
- `transform-origin:` `length` | `keyterm {1,3}`:
  The centerpoint of the transform.
- `transform-style:` `flat` | `preserve-3d`:
  How to handle nested elements are rendered in 3D space.
- `perspective-origin:` pos relative to parent:
  Defines the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
- `backface-visibility:` `visible` | `hidden`:
  When an element is flipped, is the content that is flipped away from user visible or not.

### 12.4. Perspective & Perspective Origin

Screens are flat. 3D requires perspective. There are two ways to declare perspective.

1. `transform: perspective(100)` ...
2. `perspective: 100`

Difference: with the parent property, all the transformed elements share the same perspective. with the function, each transformed element has it's own perspective.

The `perspective()` Function:

`transform: perspective(40px) rotateX(10deg);`

- The `perspective()` function must come first.
- Smaller numbers have a bigger impact

The `perspective` Property:

```css
.child {
  transform: rotateX(10deg);
}
.parent {
  perspective: 40px;
}
```

- Generally, if we are dealing with one element, apply perspective to the child, and if dealing with multiple elements apply it to the parent.

The `perspective-origin` Property:

- Property on parent element - doesn't work on the child.
- Positions the perspective relative to parent, defining the origin for the perspective property.
- Sets the `X` and `Y` position at which the viewer appears to be looking at the children of the element.

```css
.one,
.two {
  perspective: 100px;
}
.one:after,
.two:after {
  transform: rotateX(45deg);
}
.one {
  perspective-origin: top left;
}
.two {
  perspective-origin: top right;
}
```

**`transform-origin` property:**

Specifies the `x` and `y` position of the origin, relative to the transform object.

```
transform: perspective(40px) rotateX(10deg);
transform-origin: top left;
```

- Keyword positions: `left`, `right`, `bottom`, `top`, `center`
- Length values
- Percentage values
- Default is `50% 50%` (or `center center`)
- Supported in all browsers that support transform. Prefixed if transform is prefixed.

### 12.5. Backface Visibility & Box

`transform-style:` `flat` | `preserve-3d`:

How to handle nested elements are rendered in 3D space.

- Default is `flat`
- Set on parent element
- Only works if the following are set to their default values:
  - `overflow`
  - `clip`
  - `clip-path`
  - `filter`
  - `mask-border-source`
  - `mask-image`
  - `mix-blend-mode`

`backface-visibility` Property:

Hide/show the bacckface of a transformed element.

```css
one:after,
.two:after {
  transform: rotateX(180deg);
}
.one:after {
  backface-visibility: visible;
}
.two:after {
  backface-visibility: hidden;
}
```

The `transform-box` property:

Defines the layout box, to which the transform and transform-origin properties relate to. `(FF, Ch 64, O 51)`.

- `border-box`:
  Border box as reference box.
- `fill-box`:
  Uses the object bounding box as reference box.
- `view-box`
  Nearest SVG viewport as reference box. If viewBox attribute exists, the reference box is at the viewBox 0 0, and the width and height are those of the viewBox attribute.

## 13. Transitions

Enables the transition of properties from one state to the next over a defined length of time.

A transition in its simplest form:

```css
a {
  color: green;
}
a:hover {
  color: orange;
}
```

We can even change the transition period.

```css
a {
  color: green;
  transition: 1s;
}
a:hover {
  color: orange;
}
```

There are several transition properties.

- `transition-property:` properties (or 'all' default) that transition
- `transition-duration:` s or ms it takes to transition
- `transition-timing-function:` bezier curve of transition
- `transition-delay:` `s` or `ms` before transition starts
- `transition:` shorthand for 4 transition properties

```css
code {
  color: black;
  font-size: 85%;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 2s ease-in 50ms;
}
code:hover {
  color: red;
  font-size: 120%;
  background-color: rgba(255, 255, 255, 0.8);
}
```

**Top tip:** Add a 50ms delay to transitions to ensure the hover is intentional and not just a mouse drag. 50ms is not long enough for a user to noticce the delay.

### 13.1. Animatable Properties

What can be transitioned? - Anything that has intermediate values.

These can be animated...

```css
code {
  opacity: 1;
}
code:halfway {
  opacity: 0.5;
}
code:hover {
  opacity: 0;
}
```

These **cannot** be animated...

```css
code {
  display: block;
}
code:halfway {
  display: ???;
}
code:hover {
  display: none;
}
```

What can be transitioned? - 2 values that have REAL intermediary values.

These can be animated...

```css
code {
  font-size: 100%;
}
code:halfway {
  font-size: 110%;
}
code:hover {
  font-size: 120%;
}
```

These **cannot** be animated...

```css
code {
  height: auto;
}
code:halfway {
  height: ???;
}
code:hover {
  height: 1000px;
}
```

Transitionable Properties:

- `background-color`
- `background-position`
- `border-color`
- `border-width`
- `border-spacing`
- `bottom`
- `clip`
- `color`
- `crop`
- `font-size`
- `font-weight`
- `height`
- `left`
- `letter-spacing`
- `line-height`
- `margin`
- `max-height`
- `max-width`
- `min-height`
- `min-width`
- `opacity`
- `outline-color`
- `outline-offset`
- `outline-width`
- `padding`
- `right`
- `text-indent`
- `text-shadow`
- `top`
- `vertical-align`
- `visibility`
- `width`
- `word-spacing`
- `z-index`

Transition Features (or Limitations):

- Single Iteration.
- Reverse goes to initial state.
- No granular control.
- Limited methods of initiation.
- Can't force them to finish.

### 13.2. Events & Transition Examples

Every single property that has a transition that ends will throw an event.

- Event thrown only when transition completes
- transitionend for EVERY property
- transitionend for each long-hand property within a shorthand

In the following example...

```css
table {
  border: 1px black solid;
  transition: border 1s linear 50ms;
}
table:hover {
  border: 5px red solid;
}
```

Events will be thrown for each of these properties.

- `border-top-color`
- `border-right-color`
- `border-bottom-color`
- `border-left-color`
- `border-top-width`
- `border-right-width`
- `border-bottom-width`
- `border-left-width`

Real-world example: Animated navigation.

```css
nav ul li {
  list-style-type: none;
}
nav > ul > li {
  display: inline-block;
  position: relative;
}
nav ul ul {
  transform: scale(1, 0);
  transform-origin: top center;
  transition: 0.2s linear 50ms;
  position: absolute;
  top: 100%;
}
nav li:hover ul {
  transform: scale(1, 1);
}
```

```html
<nav>
  <ul>
    <li>
      About
      <ul>
        <li>Me</li>
        <li>You</li>
        <li>Them</li>
        <li>Nobody</li>
      </ul>
    </li>
    <li>
      Posts
      <ul>
        <li>Door Post</li>
        <li>Wall hanging</li>
        <li>Stair Banister</li>
        <li>Washington</li>
      </ul>
    </li>
    <li>
      Topics
      <ul>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>SEO</li>
      </ul>
    </li>
    <li>
      Events
      <ul>
        <li>Party</li>
        <li>Dinner</li>
        <li>Hike</li>
        <li>Foo Camp</li>
      </ul>
    </li>
  </ul>
</nav>
```

## 14. Animations

With transiitions we can only do a single animation, but animations can have single, many or infinite iterations.

- Single or bi-directional.
- Granular control.
- Can be initiated on page load.
- Has more robust JS Hooks.
- Can be paused.
- Lowest priority in UI Thread.

Animation Essentials:

- `@keyframes`
- `animation-name`
- `animation-duration`
- `animation-timing-function`
- `animation-iteration-count`
- `animation-direction`
- `animation-play-state`
- `animation-delay`
- `animation-fill-mode`
- `animation` (shorthand)

### 14.1. @Keyframes

Naming the keyframe animation:

`@Keyframes` `animation_name` ...

- Identifier
- Unquoted
- Characters [a-zA-Z0-9], -, \_ and ISO 10646 characters U+00A0 and higher
- ISO 10646 = Universal Character Set = Unicode standard
- [-_a-zA-Z0-9\u00A0-\u10FFFF]
- Can't start [0-9], -- , or hyphen+digit
- Can contain escaped:
- Q&A! may be written as Q\&A\! or Q\26 A\21

Don't use keyterms!

```css
div {
  animation: ✏️ infinite 3s alternate;
}
@keyframes ✏️ {
  from {
    background-color: #030;
  }
  to {
    background-color: #393;
  }
}
```

We can also use `%` instead of `from` and `to`:

```css
@keyframes writing {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
  }
}
```

- Don't forget the `%`, it is required.
- Don't quote the animation name.

We can animate multiple properties.

```css
@keyframes W {
  0% {
    left: 0;
    top: 0;
  }
  25%,
  75% {
    top: 400px;
  }
  50% {
    top: 50px;
  }
  100% {
    left: 80%;
    top: 0;
  }
}
```

Duplicate Keyframes are allowed.

```css
div {
  animation: duplicate infinite 20s alternate;
  background-color: red;
  opacity: 1;
}
@keyframes duplicate {
  45% {
    background-color: green;
  }
  45% {
    opacity: 0.3;
  }
  55% {
    background-color: blue;
  }
  55% {
    opacity: 0.7;
  }
}
```

We can animate CSS transforms, which is usually what we want to do.
We don't want to animate `top` and `left` as before, because we are repainting the page.

```css
@keyframes gettingThePencil {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(0.5, 0.5);
  }

  100% {
    transform: translate3d(600px, 400px, 0) rotate(80deg) scale(1.2, 1.2);
  }
}
```

When we use `transform` it is handled by the GPU and works much better.

### 14.2. Naming Animations & Specificity

In order to use an animation, we need to assign it to something with `animation-name`.

```css
/* base CSS */
.pencil {
  width: 100px;
  text-align: right;
  border-bottom: 10px solid;
}
.pencil::after {
  content: "✎";
  position: absolute;
  bottom: -20px;
  right: -10px;
}
```

```css
/* animation CSS */
@keyframes drawALine {
  0% {
    width: 0;
    color: green;
  }
  100% {
    width: 100%;
    color: blue;
  }
}
```

```css
/* assignment of the animation */
.pencil {
  animation-name: drawALine;
  animation-duration: 3s;
}
```

Order of precedence: The last animation wins.
Specificity: Animations will override IDs, and `!important` is ignored in Keyframes.

### 14.3. Timing Functions

One of the two most complex topics in animations.
Timing functions can also be used with transitions.

```css
.pencil {
  animation-name: drawALine;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}
```

Accepted values are:

- `ease`
- `ease-in`
- `ease-in-out `
- `step-start `
- `step-end `
- `steps( X, start` | `end)`
- `linear`
- `ease-out`
- `cubic-bezier(x1, y1, x2, y2)`

Use [cubic-bezier.com](https://cubic-bezier.com) to grab cubic beziers.

### 14.4. Steps

The previous timing function values disucssed were all cubuc beziers, used for smooth animations.
Usually we want our animations to be smooth, but steps can be useful for things like character animation.
We can specify how many steps an animation should take to get from 0% to 100%.

```css
#psy {
  width: 225px;
  height: 400px;
  background-image: url(sprite.png);
  animation: gangham 4s steps(23, start) infinite, movearound 15s alternate
      infinite steps(23, start);
}
@keyframes gangham {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -5175px 0;
  }
}
@keyframes movearound {
  0% {
    transform: translatex(-300px);
  }
  100% {
    transform: translatex(300px);
  }
}
```

### 14.5. Iteration Count & Delay

`animation-iteration-count` defines how many times we want our animation to run. The default is 1.

```css
.pencil {
  ...
  animation-name: drawALine;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 3;
}
```

We can also set a partial iteration.

```css
div {
  animation: width 10s linear 5s;
  animation-iteration-count: 0.25;
}
@keyframes width {
  0% {
    height: 500px;
    width: 500px;
  }
  100% {
    height: 100px;
    width: 100px;
  }
}
```

We can delay our animations with `animation-delay`.

```css
.pencil {
  animation-name: drawALine;
  animation-duration: 8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
  animation-delay: 2s;
}
```

### 14.6. Direction, Shorthand & Fill Mode

We can control the direction of our animations.

```css
.pencil {
  ...
  animation-name: drawALine;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 5;
  animation-direction: normal
}
```

There are four accepted values:

- `normal`
- `alternate`
- `reverse`
- `alternate-reverse`

We can use the shorthand `animation`. This...

```css
.pencil {
  animation-name: drawALine;
  animation-duration: 5s;
  animation-delay: 100ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 5;
}
```

Can be written as this...

```css
.pencil {
  animation: drawALine 5s ease-in-out 100ms 5;
}
```

The most complex part to understand is `animation-fill-mode`.

It defines what the animation does during the time that the animation delay expires, and what happens after the 100% mark (or 0% if reversed) is reached.

- `none`: Go back to the default as if the animation wasn't attached.
- `forwards`: Wherever the animation ends, stop there.
- `backwards`: During the animation delay, stop at the 0% mark.
- `both`: Do both forwards and backwards.

```css
.pencil {
  animation-name: gettingThePencil;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-delay: 2s;
  animation-fill-mode: none;
}
```

```css
.pencil {
  animation: gettingThePencil 3s ease-in-out 1s forwards;
}
```

### 14.7. Stopping Animations & Events

We can control when an animation plays with `animation-play-state: paused` | `running`.

```css
.pencil {
  transform-origin: center 300px;
  animation: writingInCircles 3s linear infinite;
}
.pencil:hover {
  animation-play-state: paused;
}
```

```css
@keyframes writingInCircles {
  100% {
    transform: rotate(360deg);
  }
}
```

There are some events within the animation API that can be captured.

- `animationstart`
- `animationend`
- `animationiteration`

```js
el.addEventListener(
  "animationend",
  function (event) {
    console.log("Animation Ended");
  },
  false
);
```

Starting next animation at end of previous:

```js
el.addEventListener( 'animationend',
    function( event ) {
        el.removeClassName('newClass');
        setTimeout("el.addClassName('newClass')", 100ms)
    },
    false );
```
