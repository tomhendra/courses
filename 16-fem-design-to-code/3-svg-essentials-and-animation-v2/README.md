<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>SVG Essentials & Animations v2</h1>
</div>

- [1. Introduction](#1-introduction)
- [2. SVG Anatomy Overview](#2-svg-anatomy-overview)
  - [2.1. SVG Support & Performance](#21-svg-support--performance)
  - [2.2. The Antidote to Positioning in CSS](#22-the-antidote-to-positioning-in-css)
  - [2.3. Overview of the SVG DOM](#23-overview-of-the-svg-dom)
  - [2.4. Platonic Shapes](#24-platonic-shapes)
  - [2.5. viewBox & Responsive](#25-viewbox--responsive)
  - [2.6. preserveAspectRatio](#26-preserveaspectratio)
  - [2.7. Paths, Groups & Polylines](#27-paths-groups--polylines)
  - [2.8. Animated Bezier Curves & Temple Literals](#28-animated-bezier-curves--temple-literals)
  - [2.9. Accessibility](#29-accessibility)

## 1. Introduction

Learn to build and optimize SVG – the scalable graphics format for the web that can achieve impressively small file sizes for fast-loading websites. In this course, you'll learn to create immersive graphics and make them alive with animations!

- [Slides](http://slides.com/sdrasner/adv-svg-1) -- password: svgisawesome!@
- [Repo](https://github.com/sdras/svg-workshop).

## 2. SVG Anatomy Overview

- Crisp on any display.
- Fewer HTTP requests to handle. Inline SVG does away with HTTP requests altogether.
- Easily scalable for responsive.
- Small file size **if** we design for performance.
- Easy to animate with the navigable DOM.
- Easy to make accessible.
- Fun!

### 2.1. SVG Support & Performance

- Support is [excellent](https://caniuse.com/?search=SVG).
- Image performance is really important, as they constitute over 60% of page weight.
- If we really want to care for our site's performance, we need to know how to optimize correctly.
- SVGs are perfect for loaders. When they are optimized correctly, the file size can be tiny.

### 2.2. The Antidote to Positioning in CSS

- Positioning in SVG is really simple to do. It is much harder with CSS.
- We can even control a real text element with SVG and scale it easily like [this Pen](https://codepen.io/chriscoyier/pen/YyxKea).
- And we can use SVG for page transitions. [Here is a Pen](https://codepen.io/sdras/pen/gWWQgb) using React and GSAP.

### 2.3. Overview of the SVG DOM

- Platonic Shapes
- viewBox
- preserveAspectRatio
- Grouping
- Drawing Paths
- SVG on Export

### 2.4. Platonic Shapes

- SVG is like looking at a piece of graph paper that is infinite in all directions.
- We can place things anywhere on the graph paper with `x` and `y` coordinates.
- The viewBox is like a little window that focuses on a part of the graph paper.
- Here we have a square, a circle, a star and some lines.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="450px"
  height="100px"
  viewBox="0 0 450 100"
>
  <rect x="10" y="5" fill="white" stroke="black" width="90" height="90" />
  <circle fill="white" stroke="black" cx="170" cy="50" r="45" />
  <polygon
    fill="white"
    stroke="black"
    points="279,5 294,35 328,40 303,62 309,94 
279,79 248,94 254,62 230,39 263,35 "
  />
  <line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6" />
  <line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95" />
</svg>
```

- The `x="0px"` and `y="0px"` are unnecessary and can be omitted.
- `width="450px"` and `height="100px"` can be removed and applied with CSS.
- `viewBox="0 0 450 100"` positions the window on the graph paper.
- A lot of things in SVG and even just in the DOM will start with `x y width height` which is what `0 0 450 100` represents.
- With a circle we are drawing the `x` and `y` points from the centre of the circle, and giving it a value for `r` as the radius.
- This is great for D3 as we can increase radius to represent data but keep the circles in the same position anchored at the centre.
- Polygons have an array of values in the order of `x y x y x y` etc.
- Polygons will automatically close the shape, so the last value in the array is penultimate.

### 2.5. viewBox & Responsive

- If we change the width of the SVG, we are dealing with the same piece of graph paper.
- It is just that the grid becomes smaller.

```html
<svg viewBox="0 0 450 100"></svg>
```

```css
svg {
  width: 450px;
}

svg {
  width: 250px;
}
```

- If we move something outside of the viewBox, it will be clipped out.
- This means we can clip and mask on the fly if we want.
- We can do things like [this Pen](https://codepen.io/sdras/pen/XJKJZL) where clouds are moved outside of the viewBox.

### 2.6. preserveAspectRatio

- We will probably never need this.
- Default: `preserveAspectRatio=”xMidYMid meet”`
- This default uniformly scales, like `background-size: cover;` in CSS.
- Align the `____` of the element's viewBox with the `____` value of the viewport.
- Takes Three Parameters, well, two, technically: `<align>` `<meetOrSlice>`:

| `x____` | `y____` | `____`  |
| ------- | ------- | ------- |
| `Min`   | `Min`   | `Meet`  |
| `Mid`   | `Mid`   | `Slice` |
| `Max`   | `Max`   |         |

- Or `none`
- See the [slides](http://slides.com/sdrasner/adv-svg-1?token=UCdXy3zz#/25) for a visuals.
- `Meet` means the SVG will constrain within the viewBox, so no shapes are going to be cut off.
- `Slice` is intuitive, it means the corners of the SVG meet the edges of the frame, and shapes will be cut off.
- `Meet`:
  - Entire viewBox is visible within viewport.
  - The viewBox is scaled up as much as possible, meeting other criteria.
  - viewBox < viewport.
- `Slice`:
  - Entire viewport is covered by the viewBox.
  - The viewBox is scaled down as much as possible, meeting other criteria.
  - viewBox > viewport
- `none` takes all of the constraints out and the viewBox will expand to whatever the size of the viewport is, non-uniformly.
- [Here](https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html) is Sara Soueidan's excellent demo.

### 2.7. Paths, Groups & Polylines

- Paths look confusing but they do have a rhyme and reason to them.
- Take this example:

```html
<svg viewBox="0 0 218.8 87.1">
  <g fill="none" stroke="#000">
    <path
      d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6 18.8 0 20.6"
    />
    <path
      d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 0 12.2 
32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z"
    />
  </g>
</svg>
```

- The `g` is just like a `<div>`, it is a group. It is a way of grouping multiple objects.
- Grouping is really good for SVG because we can have tonnes of parts that can all be grouped to make a scene or object.
- Note that one of the paths ends with `z`. This is what closes the path. The other path is open.
- The `<path>` always starts with `d` for drawing, and the value starts with `M` for move to.
- Groups can also be used to apply fill and stroke to the paths contained within them, if the paths themselves don't have anything specified.
- We can add classes and move multiple things at once.
- Polylines looks like polygons, except they are not closed.
- [Here](https://codepen.io/netsi1964/full/pJzWoz) is a cool Pen demo for exploring paths.

**Path data**

| Path Letter | Path Meaning                                | Description                                       |
| ----------- | ------------------------------------------- | ------------------------------------------------- |
| `M`, `m`    | moveTo                                      | Start of the path, start of a new path            |
| `L`, `l`    | lineTo                                      | Draw a line to the following x y coords           |
| `H`, `h`    | Horizontal line drawn from current position | Draw a horizontal line to the following x coord   |
| `V`, `v`    | Vertical line drawn from current position   | Draw a horizontal line to the following y coord   |
| `Z`, `z`    | Join the end of a path                      | Join the end of the path to the start of the path |

- Letters in lowercase means relative positioning, and uppercase means absolute positioning.

**Curve commands**

| Curve Letter | Curve Type                                                       | Description                                               |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------- |
| `C`, `c`     | Cubic-bezier                                                     | The most common. Uses control points to specify the curve |
| `S`, `s`     | Reflecting cubic-bezier                                          | The same thing as `c` but reflected                       |
| `Q`, `q`     | Quadratic bezier - where both sides share the same control point | Only have to think about the one point                    |
| `T`, `t`     | Command control point that's been reflected                      | The same thing as `q` but reflected                       |
| `A`, `a`     | Elliptical arc                                                   | Not very common. Very complicated!                        |

- See the [slides](http://slides.com/sdrasner/adv-svg-1?token=UCdXy3zz#/36) for a visual guide to the curve types.
- To really dig in more check out [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Curve_commands) or [buy this book](https://www.oreilly.com/library/view/svg-essentials-2nd/9781491945308/).
- This [Pen](https://codepen.io/anthonydugois/pen/mewdyZ) is awesome for playing around to understand paths better. It really is **very** good.

### 2.8. Animated Bezier Curves & Temple Literals

- One of the limitations of cubic bezier curves is that they have just two control points.
- We can do so much more with additional control points as illustrated in [this demo](https://www.jasondavies.com/animated-bezier/).
- We can combine template literals with SVG path points to create generative effects.
- E.g. Plot the points: M x-coord y-coord L x-coord y-coord.

```js
function plotter(points, startX) {
  var pathArr = [],
    pathpoints = [];
  for (i = 0; i <= inc; i++) {
    pathpoints.push(points + (i * (points * 2) + points));
    pathArr.push(` ${startX} ${pathpoints[i]}`);
  }
  return pathArr;
}

rope1.setAttribute("d", `M ${plotter(50, start1)}`.join(" L"));
```

### 2.9. Accessibility

- This is the basic accessibility pattern we should follow:

```html
<svg
  aria-labelledby="An awesome SVG with a unique title per page"
  id="svg"
  role="presentation"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 765 587"
>
  <title id="An awesome SVG with a unique title per page" lang="en">
    Icons that illustrate Global Warming Solutions
  </title>
</svg>
```

- Title for elements in the SVG DOM.
- ID because it is necessary for screen readers to pick up the title.
- Role to let the screen reader know whether to traverse.
- Lang so that if someone is using a screen reader in a different language it will automatically translate it.
- To go further, see [this resource](https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/), with support charts.
- And also [this article](https://css-tricks.com/accessible-svgs/) by Heather Migliorisi, who did a tonne of research in her free time to write this article for the community.
