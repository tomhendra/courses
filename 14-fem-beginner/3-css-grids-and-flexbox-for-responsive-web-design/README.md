<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>CSS Grids & Flexbox for Responsive Web Design</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Defining Responsive Design](#11-defining-responsive-design)
- [Floats](#floats)

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

## Floats

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
