<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>CSS Grids & Flexbox for Responsive Web Design</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Defining Responsive Design](#11-defining-responsive-design)
- [2. Floats](#2-floats)
- [3. Flexbox](#3-flexbox)
  - [3.1. History & Browser Support](#31-history--browser-support)
  - [3.2. Flexbox Properties](#32-flexbox-properties)
  - [3.3. Flexbox Grid](#33-flexbox-grid)
- [4. Responsive Images](#4-responsive-images)
  - [4.1. Picturefill for Backwards Compatibility](#41-picturefill-for-backwards-compatibility)
- [5. CSS Grid](#5-css-grid)
  - [Grid Browser Compatibility](#grid-browser-compatibility)
  - [Syntax](#syntax)

## 1. Introduction

Responsive Web Design course with Jen Kramer of Harvard University extension School.
[Course Link](https://frontendmasters.com/courses/css-grids-flexbox/).

### 1.1. Defining Responsive Design

- **Responsive Design** consists of three characteristics according to [its definition](https://alistapart.com/article/responsive-web-design/) by Ethan Marcotte.

1. Flexible grid-based layout
   - Grid is made up of number of columns.
2. Media queries (CSS3)
   - With media queries the browser reports screen resolution.
   - Based on current width, serve a stylesheet with layout for that width.
3. Images that resize
   - Images should change size based on screen resolution.
   - Many ways of managing responsive images, client side and server side, including new html 5.1 `<picture>` tag.
   - No JavaScript involved.

## 2. Floats

- One of the original methods for layout in web design.
- Only every intended to float an image on a web page.
- A hack from the start, right after table-based layout!
- Features rows and cells.
- Rows clear the floats on the cells.
- _"If you float, you must clear"._
- Source ordering determines display on the page, though some minor rearrangement is possible.
- Major disadvantage: equal column heights.

```css
.row::after {
  content: '';
  display: table;
  clear: both;
}

.col-1 {
  float: left;
  margin-left: 4%;
  width: 20%;
}

/* tablet */
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .col-1 {
    width: 44%;
  }
}

/* mobile */
@media only screen and (max-width: 479px) {
  .col-1 {
    width: 98%;
    margin: 1%;
    float: none;
  }
}
```

- There can be layout problems with floats.
- Columns of different heights don't wrap appropriately.
- This can be resolved with JS using a column equalizer script.

```css
/* Rearranging the columns */
[class*="col-"] { /* attribute selector */
  position: relative;
}

.col-push-1 {
  left: 26%;
}

.col-pull-3 {
  left -74%;
}
```

## 3. Flexbox

- The first layout elements - but not designed to layout whole web pages.
- Features flex-containers (row) and flex-items (cells). Both are required for Flexbox to work.
- Excels at vertical centering and equal heights.
- Very easy to reorder boxes.
- Major disadvantages:
  - Wasn't designed to be locked down for layouts. Works in 1 dimension only.
  - Browser support and syntax is challenging.
- Flex-container is either row or column, which affects the main axis / cross axis.

### 3.1. History & Browser Support

- Three versions of flexbox:
  - 2009: `display: box;`
  - 2011: `display: flexbox;` ("tweener" syntax - between original and current)
  - 2016: `display: flex;`
- Prefixing may still be required depending on browser support desired.

```css
ul {
  display: -webkit-flex: /* targets Chrome, Safari */
  display: -ms-flexbox: /* targets IE10 */
  display: flex;
}
```

- Current support [99.03%](https://caniuse.com/#feat=flexbox)

### 3.2. Flexbox Properties

- Parent (Flex Container)

  - `display: flex | inline-flex;`
  - `flex-direction: row | row-reverse | column | column-reverse;`
  - `flex-wrap: wrap | nowrap | wrap-reverse;`
  - `flex-flow` (shorthand for `flex-direction` and `flex-wrap`)
  - `justify-content` (main axis): `flex-start | flex-end | center | space-between | space-around | space-evenly;`
  - `align-items` (cross axis - adjust to individual sizes): `flex-start | flex-end | center | baseline | stretch;`
  - `align-content` (cross axis - adjust to largest item): `flex-start | flex-end | center | stretch | space-between | space-around;`

- Children (Flex Items)

  - `order: <integer>;`
  - `flex-grow: <number>;`
  - `flex-shrink: <number>;`
  - `flex-basis: <length> | auto;`
  - `flex: shorthand for grow, shrink, and basis (default: 0 1 auto)`
  - `align-self: overrides alignment set on parent`

- Never use `width` on flex items: use `flex-basis`. `width` is an absolute number whereas `flex-basis` is more flexible.

### 3.3. Flexbox Grid

- Popular libraries like [Bootstrap 4](https://getbootstrap.com/docs/4.5/layout/grid/) and [Flexbox Grid](http://flexboxgrid.com) use flexbox-based grid systems.
- See [exercises with flexbox grid for examples](exercises/3-flexbox-grid/begin).

## 4. Responsive Images

- Images that resize.
- Images should change size based on screen resolution.
- There are several approaches.
  - Can load a big images and let it scale (not good).
  - Server-side (good).
  - Client-side: Load several images and display the appropriate size for the device being used (not good).
  - Client-side: Let JavaScript decide (better).
  - Use the `<picture>` tag (even better). Picturefill polyfill can help backwards compatibility with IE.

```html
<picture>
  <source srcset="img/peace-pie-original.jpg" media="(min-width: 1200px)" />
  <source srcset="img/peace-pie-500.jpg" media="(min-width: 800px)" />
  <img src="img/peace-pie-150.jpg" alt="The original giant peace pie" />
</picture>
```

### 4.1. Picturefill for Backwards Compatibility

- [GitHub repo](https://github.com/scottjehl/picturefill).
- Current support is [95%](https://caniuse.com/#feat=picture).

## 5. CSS Grid

- Built into CSS specification (now a recommendation).
- No "row" markup required.
- Grid is designed to work in two dimensions.
- Use Flexbox for UI elements, but use Grid for major layout.

### Grid Browser Compatibility

- Currently at [95.83%](https://caniuse.com/#feat=css-grid).
- Polyfills & fallbacks:
  - Old grid spec: https://github.com/codler/Grid-Layout-Polyfill
  - New grid spec: https://github.com/FremyCompany/css-grid-polyfill
  - @supports: https://developer.mozilla.org/en-US/docs/Web/CSS/@supports
  - Rachel Andrew: https://rachelandrew.co.uk/css/cheatsheets/grid-fallbacks

### Syntax

```html
<div class="wrapper">
  <div class="col-1"></div>
  <div class="col-2"></div>
  <div class="col-3"></div>
  <div class="col-4"></div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-gap: 10px;
}
```

- Positioning cells:

```css
.col-1 {
  grid-column: 1 / 2;
}

.col-2 {
  grid-column: 2 / 3;
}

.col-3 {
  grid-column: 3 / 4;
}

.col-4 {
  grid-column: 4 / 5;
}
```
