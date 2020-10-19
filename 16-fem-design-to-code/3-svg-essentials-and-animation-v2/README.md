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
- [3. CSS Animation](#3-css-animation)
  - [3.1. OPtimizing & Building](#31-optimizing--building)
  - [3.2. Constructing an SVG](#32-constructing-an-svg)
  - [3.3. Starting an SVG](#33-starting-an-svg)
  - [3.4. Prototyping](#34-prototyping)
  - [3.5. Exercise: Planning an Animation](#35-exercise-planning-an-animation)
  - [3.6. Animation Support Breakdown](#36-animation-support-breakdown)
  - [3.7. Why SVG?](#37-why-svg)
  - [3.8. Transform Origin](#38-transform-origin)
  - [3.9. Exercise: Animate an SVG](#39-exercise-animate-an-svg)
  - [3.10. Sprites](#310-sprites)
  - [3.11. Atmospheric & Elemental Motion](#311-atmospheric--elemental-motion)

## 1. Introduction

Learn to build and optimize SVG – the scalable graphics format for the web that can achieve impressively small file sizes for fast-loading websites. In this course, you'll learn to create immersive graphics and make them alive with animations!

- [Slides](https://slides.com/sdrasner/adv-svg-1?token=UCdXy3zz#/5) -- password: svgisawesome!@
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

## 3. CSS Animation

### 3.1. OPtimizing & Building

- We need to understand how to build and optimize an SVG so that it is appropriate for animation.
- If there are a lot of path points it can quickly increase the size of an SVG.
- In Illustrator we can remove points with Object > Path > Simplify.
- If there are curves that have a lot of nodes, we can redraw the curve.
- Drop shadows can cost a lot. Quite often there is a giant .png within the SVG for the shadow. SVG filters / effects can be used instead.
- Sometimes with patterns there can be paths drawn for backgrounds. We can select all (select same is due in AD 1.9) based on colour, delete, and just drop a background in.
- We also need to optimize the output from the Vector Editing software. Take this example.

**Before...**

```html
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In
 . SVG Version: 6.00 Build 0  -->
<svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="218.8px"
  height="87.1px"
  viewBox="0 0 218.8 87.1"
  enable-background="new 0 0 218.8 87.1"
  xml:space="preserve"
>
  <g>
    <path
      fill="#FFFFFF"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M133.1,58.2c0,0,12.7-69.2,24.4-47.5c0,0,4.1,8.6,9.5,0.9
		c0,0,5-10,10.4,0.9c0,0,12.2,32.6,13.6,43c0,0,39.8,5.4,15.8,
15.4c-13.2,5.5-53.8,13.1-77.4,5.9C129.5,76.8,77.5,61.4,133.1,58.2z"
    />
    <path
      fill="#FFFFFF"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M6.7,61.4c0,0-3.3-55.2,20.8-54.8s-7.2,18.1,4.1,29.9
		s8.6-31.2,32.1-15.8S86.7,41,77.2,61.8C70.4,76.8,76.8,79,37.9,
79c-0.4,0-0.9,0.1-1.3,0.1C9,81,40.1,58.7,40.1,58.7"
    />
  </g>
</svg>
```

**After...**

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

- These do the same thing.
- There are optimizing tools to do this for us:
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Peter Collingridge's SVG Editor](https://jakearchibald.github.io/svgomg/)
- [SVG Optimizer](https://github.com/svg/svgo)

### 3.2. Constructing an SVG

- Use the export tool on AI / AD.
- Go to SVGOMG for optimization.
- SVGOMG has fantastic tools where we can view the markup to see the result.
- Checkout the blog post [High Performance SVGS](https://css-tricks.com/high-performance-svgs/) for guides to the options.
- If we draw SVGs by hand they are generally pretty small file sizes to begin with.
- Beware of Round/Rewrite Numbers and Round/Rewrite Paths. These settings will combine multiple paths into one path.

### 3.3. Starting an SVG

- It can be hard to know where to start.
- Sarah's approach is that we get everything in the SVG that we want first.
- Everything that should not be visible initially we hide.
- This way we spend our time brining one thing at a time into the animation and figuring out how that transition works.
- We can compartmentalize with this approach.
- Think about the first and last thing we want to have happen both on the canvas at the same time, and slowly unveil things.
- Use paper and pencil in the first instance. Ugly storyboards save time.
- Storyboards help to reveal ideas about what should happen in the middle, when you have an idea about the start and end.

### 3.4. Prototyping

- Thumbnails: Notes to ourself. Very scratchy and rough just to get ideas out.
- Storyboards: Notes for collaboration. Just high enough fidelity so that other people can understand what it means.
- Low Fidelity prototypes: Show the motion. We can use block shapes just to give an impression of the content.
- We can prototype in code and if the idea gets accepted, we can reuse and improve the code for production.

### 3.5. Exercise: Planning an Animation

Get an SVG from the repo, or freepik.com, or thenounproject.com, or make one yourself
Think of an animation you'd like to make

Create 3 thumbnails to show this interaction just for you.
Create one storyboard that you could use to
communicate with others.

Put the SVG in order so that you can animate it (we'll animate it in the next section)

### 3.6. Animation Support Breakdown

- For img src, object, embed, background url, and iframe, we can only designate animation if inside the SVG.
- But for inline, both SVG animation and interaction are supported.

**Animating with CSS**

```css
@keyframes animation-name-you-pick {
  0% {
    background: blue;
    transform: translateX(0);
  }
  50% {
    background: purple;
    transform: translateX(50px);
  }
  100% {
    background: red;
    transform: translateX(100px);
  }
}
```

Animation Properties - Shorthand:

```css
.ball {
  animation: animation-name-you-pick 2s 2s 3 alternate ease-in-out forwards;
}
```

- `background` doesn't work for SVG, we use `fill`.
- Apply the `fill` to the circle, not whole SVG.

### 3.7. Why SVG?

- Let's look at the star code again:

```html
<polygon
  fill="white"
  stroke="black"
  points="279,5 294,35 328,40 303,62
309,94 279,79 248,94 254,62 230,39 263,35 "
/>
```

- To make a start with divs, we would have to take a div, give a border, expand the border, collapse the div, make everything transparent apart from one border so we have a triangle.

```css
.star {
  height: 0;
  width: 0;
  border: 8rem solid rgb(170, 50, 220);
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
}
```

- Then we would need to duplicate, stack and rotate more divs to make a star pattern.
- SVG is built for drawing on the web, CSS is not.
- Also creating a star with CSS is not the most accessible thing to do.

### 3.8. Transform Origin

- `transform-origin` is the thing can make or break our animation in terms of whether it is believable.
- It is recommended to use percentage values rather than keywords like `top`, `left`, `center` etc. because it is easier to tweak values.

### 3.9. Exercise: Animate an SVG

Take your last SVG and storyboard and make that SVG move!

### 3.10. Sprites

- It is possible to create a sprite sheet out of SVG to achieve something like [this demo](http://responsiveicons.co.uk).
- In the demo the viewBox is being moved.
- With this technique we can do walk cycles like in [this Pen](https://codepen.io/sdras/pen/azEBEZ).
- We cycle through the images using steps.
- To make the effect of the background moving, we have different layers where the closer layers move more fast.
- Another technique we can use is to hide certain SVG elements to reduce fidelity for smaller screens, like in [this Pen](https://codepen.io/sdras/full/xbyopy).
- Quite often we need to randomise things to make animations appear more natural.
- Here we use negative timings to stagger animations.

```css
[class^="star"] {
  animation: blink 2s ease-in-out infinite both;
}

[class^="dot"] {
  animation: blink 5s -3s ease-in-out infinite both;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
```

- Do not apply `width` and `height` to the SVG itself, but instead define it in CSS.

```css
.initial {
  width: 50%;
  float: left;
  margin: 0 7% 0 0;
}
```

- We're using float and percentage here, but we could also use flexbox.
- We then define smaller viewBox `viewBox="0 0 490 474"`.
- Media queries can be written as follows.

```css
[class^="mountain"],
[class^="grass"] {
  transform: skew(1.5deg);
}

@media screen and (min-width: 500px) {
  [class^="mountain"],
  [class^="grass"] {
    transform: skew(2deg);
  }
}
```

- And then we do a viewBox shift with JavaScript, which acts like a window to show and hide the requisite parts of the sprite.

```js
const shape = document.getElementById("svg");

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(widthChange);
  widthChange(mq);
}

const widthChange = (mq) => {
  if (mq.matches) {
    shape.setAttribute("viewBox", "0 0 490 474");
  } else {
    shape.setAttribute("viewBox", "0 490 500 500");
  }
};
```

### 3.11. Atmospheric & Elemental Motion

- Sometimes the character of an animation is the whole atmosphere.
- The dust and particles can be as important as the main focal points.
- It can take use from a flat piece of SVG which moves to something that we feel like we are in the space of.
- Some tips for elemental motion:

  - Further away is less contrast, blurry.
  - Does the air or environment effect movement? Other objects can be used to enhance the effect.
  - Reducing precision allows for understanding.
  - Combine techniques.

- [This Pen](https://codepen.io/sdras/pen/qdLJLJ) uses some techniques to create atmosphere. The fog is created with SVG filters.
- The floating of the robots is done with a shadow that moves in the opposite direction for enhanced realism.

```css
/* mid and mid-sm are the same */
#back {
  opacity: 0.8;
  animation: bkmove 70s linear infinite;
  animation-iteration-count: 3;
}

#teal {
  animation: hover 2s ease-in-out infinite both;
}

#tshadow {
  animation: shadowhover 2s ease-in-out infinite both;
  transform-origin: 50% 50%;
}

#purple {
  animation: hover 2s -0.5s ease-in-out infinite both;
}
/* same shadow */
```

- The heart animation was harder to achieve due to a bug in Safari:

```css
#heart {
  animation: heartpop 2s 1.25s ease-out both;
  transform-origin: 50% 50%;
  transform: scale(0);
  -moz-transform: scale(1); //firefox transform-origin svg bug hack
}

/*had to split the heart animation in two due to a bad safari 
svg bug that doesn't allow for opacity and transform*/
#heartopacity {
  animation: heartopacity 1.5s 1s ease-out both;
  opacity: 0;
}

#floaty {
  opacity: 0.2;
  animation: floataround 3s ease-in-out infinite both;
  transform-origin: 50% 50%;
  animation-iteration-count: 30;
}
```

- Which segues into JavaScript working well for SVG animations. This bug could have been avoided.
- CSS is always going to be a little bit buggy.
- CSS isn't always more performant than JS either.
- RequestAnimationFrame has better hardware acceleration with JS than with CSS for SVG DOM nodes.
