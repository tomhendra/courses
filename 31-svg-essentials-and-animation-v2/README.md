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
- [4. GreenSock](#4-greensock)
  - [4.1. Performance & GSAP](#41-performance--gsap)
  - [4.2. TweenMax Syntax](#42-tweenmax-syntax)
  - [4.3. Stagger](#43-stagger)
  - [4.4. GSAP Monster Demo](#44-gsap-monster-demo)
  - [4.5. Cycle Stagger](#45-cycle-stagger)
  - [4.6. Setting CSS Properties](#46-setting-css-properties)
  - [4.7. Comments on D3](#47-comments-on-d3)
  - [4.8. Timeline](#48-timeline)
  - [4.9. Exercise: GSAP](#49-exercise-gsap)
- [5. UI/UX Animation](#5-uiux-animation)
  - [5.1. UI vs Standalone Animation](#51-ui-vs-standalone-animation)
  - [5.2. Social Engineering with Animation](#52-social-engineering-with-animation)
  - [5.3. Context Switching](#53-context-switching)
  - [5.4. Interaction, JS Detection & Scaling](#54-interaction-js-detection--scaling)
  - [5.5. Interaction & GSAP Timeline Functions](#55-interaction--gsap-timeline-functions)
  - [5.6. Draggable](#56-draggable)
  - [5.7. Exercise: Interactive](#57-exercise-interactive)
- [6. GSAP Extras](#6-gsap-extras)
  - [6.1. DrawSVG](#61-drawsvg)
  - [6.2. Motion Along a Path](#62-motion-along-a-path)
  - [6.3. Curviness & Rotation](#63-curviness--rotation)
  - [6.4. Animating Text](#64-animating-text)
  - [6.5. Relative Colour Values](#65-relative-colour-values)
  - [6.6. Exercise: Create a Story](#66-exercise-create-a-story)
  - [6.7. MorphSVG](#67-morphsvg)
  - [6.8. Bonus Demos](#68-bonus-demos)
  - [6.9. Exercise: Shape Morph](#69-exercise-shape-morph)
- [7. Advanced SVGs](#7-advanced-svgs)
  - [7.1. viewBox](#71-viewbox)
  - [svgOrigin](#svgorigin)

## 1. Introduction

This is part of the Frontend Masters Design to Code Track.

Learn to build and optimize SVG – the scalable graphics format for the web that can achieve impressively small file sizes for fast-loading websites. In this course, you'll learn to create immersive graphics and make them alive with animations!

- [Slides 1](https://slides.com/sdrasner/adv-svg-1?token=UCdXy3zz#/5) -- password: svgisawesome!@
- [Slides 2 from GreenSock](https://slides.com/sdrasner/adv-svg-2?token=FxyYIMcu#/1) -- password: svgisawesome!@
- [Slides 3 from GSAP Exrtas](https://slides.com/sdrasner/adv-svg-3?token=IiYk_UQj#/1) -- password: svgisawesome!@
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

## 4. GreenSock

- There are different uses cases, pros and cons for using DOM / Virtual DOM vs Canvas.

| DOM / Virtual DOM                                            | Canvas                                            |
| ------------------------------------------------------------ | ------------------------------------------------- |
| **Pros:**                                                    | **Pros:**                                         |
| Great for UI/UX animation                                    | Dance, pixels, dance!                             |
| Great for SVG that is resolution independent                 | Great for really impressive 3d or immersive stuff |
| Easier to debug                                              | Movement of a tons of objects                     |
| **Cons:**                                                    | **Cons:**                                         |
| Tanks with a lot of objects                                  | Harder to make accessible                         |
| ^ Because of this you have to care about the way you animate | Not resolution independent out of the box         |
|                                                              | Breaks to nothing                                 |

- So what are the right tools for the job?

| CSS / SCSS                                      | GreenSock                                 | React Spring / React Motion                                  |
| ----------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| Small sequences and simple interactions         | Great for sequencing and complex movement | Great for single movements that you'd like to look realistic |
| Once you get more than 3... switch to GreenSock | Cross-browser consistency                 |                                                              |

- Snap.svg is more like jQuery for SVG.
- AnimeJS is a lot like GSAP! But fewer plugins.
- Web Animations API looks great, still waiting on support which has been de-prioritized.
- Velocity is similar to GSAP with less bells and whistles.
- Mo.js won't come out of beta. (Looks dead).
- D3.js was built for data vis but you can do a lot more with it.

### 4.1. Performance & GSAP

- Not all things are created equal.
- We shouldn't be animating with margin, left top etc. because they cause repaints in the browser.
- Transforms are what we should be animating for position changes, but not just for SVG; for everything.
- We should also try to use hardware acceleration wherever possible.
- To force hardware acceleration we can use the _null z transform hack_:

```css
@mixin accelerate() {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.foo {
  @include accelerate();
}
```

- To dig deeper read [Debugging CSS Keyframe Animations](https://css-tricks.com/debugging-css-keyframe-animations/) and [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).
- More tools > Rendering > Paint flashing in Chrome DevTools it will highlight what isn't hardware accelerated.
- Chrome doesn't properly hardware accelerate a lot of SVG DOM nodes.
- GreenSock already has hardware acceleration under the hood.
- Read more in the [Netflix case study](https://eng.wealthfront.com/2015/06/30/implementing-netflix-redesign/).
- Opacity and Transform are the [most animated](https://slides.com/sdrasner/adv-svg-2?token=FxyYIMcu#/8) properties.
- Using CSS keyframes for longer animations can become cumbersome as complexity increases.
- Also keyframes have a stacking order so one thing will happen at a time unless we hack it in a couple of possible ways.. GreenSock just works.
- Killer features in GreenSock:
  - Simple syntax
  - Timelines
  - Nested Timelines
  - Draggable
  - DrawSVG
  - Stagger
  - MorphSVG
- GreenSock solves cross-browser inconsistencies too - see [this example](https://css-tricks.com/svg-animation-on-css-transforms/).

### 4.2. TweenMax Syntax

- TweenMax is a product from GreenSock.
- Syntax: `TweenMax .to/.from/.fromTo ( element, duration { property: amount })`

```js
TweenMax.to("div", 2, {
  scaleY: 0.75,
  scaleX: 1.25,
  y: 100,
  opacity: 0.75,
  ease: Elastic.easeOut,
});
```

- Instead of having to apply animation in one place and define the keyframes in another, GreenSock lets us declare everything in the same place.

**GSAP Cheatsheet**

- The comments are the CSS counterpart.

```js
x: 100; // transform: translateX(100px)
y: 100; // transform: translateY(100px)
z: 100; // transform: translateZ(100px)
// you do not need the null transform hack or hardware acceleration,
// it comes baked in with force3d:true.
// If you want to unset this, force3d:false
scale: 2; // transform: scale(2)
scaleX: 2; // transform: scaleX(2)
scaleY: 2; // transform: scaleY(2)
scaleZ: 2; // transform: scaleZ(2)
skew: 15; // transform: skew(15deg)
skewX: 15; // transform: skewX(15deg)
skewY: 15; // transform: skewY(15deg)
rotation: 180; // transform: rotate(180deg)
rotationX: 180; // transform: rotateX(180deg)
rotationY: 180; // transform: rotateY(180deg)
rotationZ: 180; // transform: rotateZ(180deg)
perspective: 1000; // transform: perspective(1000px)
transformOrigin: "50% 50%"; // transform-origin: 50% 50%
```

- Also the [GreenSock Ease Visualizer](https://greensock.com/ease-visualizer) for a handy tool with ease demos.

### 4.3. Stagger

- In GreenSock it is much simpler to stagger.

**CSS**

```css
@keyframes staggerFoo {
  to {
    background: orange;
    transform: rotate(90deg);
  }
}

.css .bar:nth-child(1) {
  animation: staggerFoo 1s 0.1s ease-out both;
}
.css .bar:nth-child(2) {
  animation: staggerFoo 1s 0.2s ease-out both;
}
.css .bar:nth-child(3) {
  animation: staggerFoo 1s 0.3s ease-out both;
}
.css .bar:nth-child(4) {
  animation: staggerFoo 1s 0.4s ease-out both;
}
.css .bar:nth-child(5) {
  animation: staggerFoo 1s 0.5s ease-out both;
}
.css .bar:nth-child(6) {
  animation: staggerFoo 1s 0.5s ease-out both;
}
```

**Sass**

```scss
@keyframes staggerFoo {
  to {
    background: orange;
    transform: rotate(90deg);
  }
}

@for $i from 1 through 6 {
  .sass .bar:nth-child(#{$i}) {
    animation: staggerFoo 1s ($i * 0.1s) ease-out both;
  }
}
```

**GreenSock**

```js
TweenMax.staggerTo(
  ".gsap .bar",
  1,
  {
    backgroundColor: "orange",
    rotation: 90,
    ease: Sine.easeOut,
  },
  0.1
);
```

- Things like stagger are really complicated to do in CSS animation, and in GSAP are one line of code.

```js
TweenMax.staggerTo(
  ".squares",
  2,
  {
    y: 100,
    backgroundColor: "#4f9d88",
    ease: Elastic.easeOut,
  },
  0.05
);
TweenMax.staggerTo(
  ".squares",
  2,
  {
    rotation: 200,
    delay: 1,
    scale: 0.5,
    backgroundColor: "#72b165",
    ease: Elastic.easeOut,
  },
  0.025
);
```

### 4.4. GSAP Monster Demo

- [This Pen](https://codepen.io/sdras/full/Wramvo) has a demo of a monster using stagger.
- The monster teaches some concepts in GSAP!

### 4.5. Cycle Stagger

- Takes each time we stagger and cycles through different properties instead of keeping them consistent.
- See [this Pen](https://codepen.io/sdras/pen/XmmjQb) and [this article](https://davidwalsh.name/gsap-features) for more info.

### 4.6. Setting CSS Properties

- We can set different CSS properties using `.set`.
- The advantage is that it keeps the CSS manipulation alongside the animation code, which has a couple of benefits:

1. People won't delete our code if it is obvious it is being used for animations.
2. Having the CSS property settings close the animation code helps with workflow.

```js
TweenMax.set(".squares", {
  transformPerspective: 200,
  perspective: 200,
  transformStyle: "preserve-3d",
});

TweenMax.to(
  ".squares",
  2.5,
  {
    rotationX: 230,
    z: -150,
    y: 180,
    opacity: 0.2,
    ease: Power2.easeOut,
  },
  "+=0.2"
);
```

### 4.7. Comments on D3

- GreenSock and D3 play really nicely together.
- We can get everything on the page with D3 and when it is inside the DOM we can manipulate things with GreenSock.
- The only tricky things is making sure D3 has mounted everything, and then we can access it with GreenSock.

### 4.8. Timeline

- Stack tweens
- Set them a little before and after one another
- Change their placement in time
- Group them into scenes
- Add relative labels
- Animate the scenes!
- Make the whole thing faster, move the placement of the whole scene, nesting

**Position Parameter**

```js
var tl = new TimelineLite();
tl.to(".orange", 1, { x: 750 })
  //this just follows the first
  .to(".green", 1, { x: 750 })
  //there is a one second gap between these two tweens due to the incrementor "+=1"
  .to(".blue", 1, { x: 750 }, "+=1")
  //this goes to two seconds in.
  // Using seconds is brittle, as things can break easily if earlier animations take longer.
  // Good for music timing for e.g.
  .to(".red", 1, { x: 750 }, "2")
  // add a relative label at this part of the timeline.
  // very useful for organisation, as we can define events.
  .add("newLabel")
  // tween at 3 seconds past the relative label
  .to(".purple", 1, { x: 750 }, "newlabel+=3");
```

- A simple timeline:

```js
var tl = new TimelineMax();

tl.to(el, 3, {
  fill: "white",
  opacity: 0.3,
  ease: Elastic.easeOut,
});

tl.to(el2, 3, {
  fill: "orange",
  ease: Sine.easeOut,
});
```

- Recommended to always put the eases last, so we know where to look for them.
- Nesting timelines allows us to create master timelines and orchestrate things easier.

```js
//set properties needed for animation outside
TweenMax.set(el, {
  perspective: 400,
});

// the first scene
function sceneOne() {
  var tl = new TimelineMax();

  tl.to(el, 3, {
    fill: "white",
    opacity: 0.3,
    ease: Elastic.easeOut,
  });
  // Don't forget to return the tl !
  return tl;
}

// Create a master timeline
var master = new TimelineMax({ options });
// Add the scene function to the master with a label
master.add(sceneOne(), "labelOnMaster");

// use this while you're working to get to a place in time
// master.seek("labelOnMaster+=2");
```

- As we make more complicated things, this structure comes in really handy.
- Checkout [this Pen](https://codepen.io/sdras/full/ByEWON) for a timeline demo.
- To stop a momentary flash of content before the JS loads, we can hide it with CSS until GreenSock is ready.

```js
//set to hide in CSS
.foo { visibility: hidden; }
//set back in js
TweenMax.set(".foo", {
  visibility: "visible"
});
```

- And we can do percentage-based transforms on SVG.

```js
tl.staggerTo(".box", 0.5, { x: "100%" }, 0.4);
```

- We can do stuff [like this](https://codepen.io/sdras/pen/4e1217f18c4ad55f681316dee44389ac), all fully responsive in every direction.

### 4.9. Exercise: GSAP

Take an SVG, and animate it with GreenSock.
Use a timeline and the position parameter or labels.
There are starter pens for reference in [the repo](https://github.com/sdras/svg-workshop/).

## 5. UI/UX Animation

### 5.1. UI vs Standalone Animation

- Sarah has [a repo](https://github.com/sdras/vue-sample-svg-icons) full of sample icons.

**UI / UX Animation**

- Pieces of the UI move to aid in an informative UX choreography.
- This can typically be done with well placed CSS, some JS to trigger interactions.
- Responsive can be achieved with _good CSS media queries_.
- Also very good for context switching like [this example](https://cssanimation.rocks/list-items/).
- Having things transition or enter between states is better than suddenly appearing.

**Standalone**

- Used to illustrate concepts in the body of the page, either alongside or on it's own.
- Most of the basis of this course is complex standalone animation.
- JavaScript is recommended for much longer implementations (explained later).
- Check out [this example](https://codepen.io/sdras/full/jEjRwo).
- The idea of UI / UX the goal is to be more invisible, and reveal things to the user as they are needed.
- A standalone animation is supposed to grab attention, and draw focus.

### 5.2. Social Engineering with Animation

- [Viget did an experiment](https://www.viget.com/articles/experiments-in-loading-how-long-will-you-wait/) and found that despite some individual variation, novel loaders as a whole had a higher wait time and lower abandon rate than generic ones.
- When considering what type of animation to use, we can think about accents and eases in the same way as accents and palettes.
- For example using eases everywhere but using a bounce when completing an action.

### 5.3. Context Switching

- This [article](https://css-tricks.com/the-importance-of-context-shifting-in-ux-patterns/) for further reading.
- This [demo Pen](https://codepen.io/sdras/full/qOdwdB) uses a bounce as a confirmation of success.
- Another good use of context switching is isolation, as [demonstrated](https://codepen.io/sdras/pen/qOdWEP) with this Pen when you hover over a card. This makes it easier to read the card, as scanning all three at once would be confusing.

### 5.4. Interaction, JS Detection & Scaling

- We can use JS to set SVG DOM attributes.

```js
magLine.setAttribute("x2", 33.1);
magLine.setAttribute("x2", 300);
```

- We can use JS detection for CSS animation, and hook into native events:

  - `animationstart`
  - `animationiteration`
  - `animationend`

- See [this Pen](https://codepen.io/sdras/pen/BzExaO) for a demo.

```js
const select = (s) => document.querySelector(s);

const lil = select('.lilguy'),
      logIt = select('.logIt'),
      log = select('.term-content')

lil.addEventListener('animationstart', onAnimationStart)
lil.addEventListener('animationiteration', onAnimationIteration)
lil.addEventListener('animationend', onAnimationEnd)

logIt.addEventListener('click', () => lil.classList.add('restart')

const onAnimationStart = () => {
  log.textContent = ''
  log.textContent += 'Animation has started. '
}

const onAnimationIteration = () => log.textContent += 'An iteration has fired. '

const onAnimationEnd = () => {
  log.textContent += 'Animation has completed. '
  lil.classList.remove('restart')
}
```

- If we are working on a larger system we can have composable pieces of animation, so they aren't being redefined - Like [this Pen](https://codepen.io/sdras/pen/qqVrxy).

### 5.5. Interaction & GSAP Timeline Functions

- Here are some useful functions for interacting with GSAP Timeline.

```js
tl.pause(); // Pause timeline
tl.resume(); // Continue playback
tl.restart(); // Restart the timeline
tl.play(X); // Play from Xs
tl.play(-X); // Play Xs from end
tl.seek(X); // Go to Xs or 'label'
tl.reverse(); // Reverse playback anytime
tl.timeScale(x); // Speed up/slow down timeline
tl.progress(0.5); // Skip to halfway
```

### 5.6. Draggable

- Draggable is really easy to work with.

```js
Draggable.create(".box", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: "#container",
  throwProps: true,
});
```

- Device-enabled for touchscreen
- Impose bounds- containing units or pixel parameters `bounds: { top:100, left:0, width:1000, height:800 }`
- Momentum: If you have ThrowPropsPlugin you can set throwProps:true
- `Draggable.hitTest()` to sense if elements touch eachother.
- Honours `transform-origin`.
- Still works on transformed elements.
- Lock movement to an axis `lockAxis:true`.
- GPU-accelerated and requestAnimationFrame-driven.
- See Sarah's [Pen demo](https://codepen.io/sdras/pen/gbERKQ) and [this Pen](https://codepen.io/sdras/pen/Qbdmjy).
- [More](https://greensock.com/draggable).
- Rich callback system and event dispatching. Callbacks:

  - `onPress`
  - `onDragStart`
  - `onDrag`
  - `onDragEnd`
  - `onRelease`
  - `onLockAxis`
  - `onClick`

- "this" refers to the Draggable instance itself, so you can easily access its "target" or bounds.
- If you prefer event listeners, Draggable dispatches events:

```js
yourDraggable.addEventListener("dragend", yourFunc);
```

- We can also have droppable login as [this Pen demo](https://codepen.io/GreenSock/pen/GFBvn).
- And there is now snap points in GSAP as [this Pen demo](https://codepen.io/sdras/pen/d37e832bb3655bbc50bb14ea868104e8).
- We can use draggable to control a [Timeline interaction](https://codepen.io/sdras/pen/NqYGZv).

```js
TweenMax.set("#flowers1, #radio, #burst, #magnolia, #flowers2, #starfish, #berries1, #berries2, #berries3, #skulls, #tv, #glitch, #shadow, #lights", {
  visibility: "visible"
})

// the first scene
function sceneOne() {
  var tl = new TimelineMax()

  tl.add("start")
  tl.staggerFromTo($f1, 0.3, {
    scale: 0
  }, {
    scale: 1,
    ease: Back.easeOut
  }, 0.05, "start")
  ...

  return tl
}

var master = new TimelineMax({paused:true})
master.add(sceneOne(), "scene1")

Draggable.create(gear, {
  type: "rotation",
  bounds: {
    minRotation: 0,
    maxRotation: 360
  },
  onDrag: function() {
    master.progress((this.rotation)/360 );
  }
});
```

- And we can do interpolation with style bindings - see [this Pen](https://codepen.io/sdras/pen/jwwpap).
- This changes the [perspective origin](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin).

### 5.7. Exercise: Interactive

Take your last pen and make it interactive.

This could be a button click that starts and stops the animation, this could be a slider that controls the progress, whatever you want to try.

If it's more ambitious, you should make a thumbnail or two for yourself before you begin.

## 6. GSAP Extras

### 6.1. DrawSVG

- If we have a stroke which is dashed, and we make the dash really long.
- The dash offset, i.e. the space in between dashes is an animatable property.
- We can make all sorts of things.

```js
TweenMax.staggerFromTo($draw, 4, { drawSVG: "0" }, { drawSVG: true }, 0.1);
```

- We can achieve this with vanilla JS and even CSS, but the GSAP plugin has a few features that make working with it easier.
- In plain CSS: see [this Pen](https://codepen.io/sdras/pen/8c38ae4121eae5b6dc035e19c48b35b4).
- In plain CSS we have the find the length of the dash, which we can do with the JS method `getTotalLength`.
- However if we have something that is squishy i.e. changes size, the length will change, so we'd have to use CSS variables or JS etc.
- GreenSock handles this for us and can do tonnes of stuff. See [this demo Pen](https://codepen.io/GreenSock/pen/bNdLyR).
- [Here](https://github.com/sdras/vue-weather-notifier) is a Vue demo which demos how to make this work with a framework.

### 6.2. Motion Along a Path

- This is one of the coolest things about SMIL, but the promise of support has a longer tail with GreenSock.
- Backwards compatibility and cross browser even IE!
- SMIL motion along a path will probably continue to be unsupported in IE, but support for this feature will move into CSS.
- However, this is down the line. In the meantime, use GSAP for the widest support.

```js
TweenMax.to(
  $firefly1,
  6,
  {
    bezier: {
      type: "soft",
      values: [
        { x: 10, y: 30 },
        { x: -30, y: 20 },
        { x: -40, y: 10 },
        { x: 30, y: 20 },
        { x: 10, y: 30 },
      ],
      autoRotate: true,
    },
    ease: Linear.easeNone,
    repeat: -1,
  },
  "start+=3"
);
```

- Check out this [demo Pen](https://codepen.io/sdras/pen/MYQxXe).

### 6.3. Curviness & Rotation

- Can just use paths as general coordinates and smooth out the motion between
- Either set the type parameter to soft
- Or for more control set the type to thru (this is the default), and define a curviness value. 0 defines no curviness, 1 is normal, 2 is twice as curvy, etc
- Here is another [demo Pen](https://codepen.io/sdras/pen/PqEPqz).
- Autorotate can be useful. Here is a [demo Pen](https://codepen.io/sdras/pen/aOZOwj).
- For mechanical worlds we wouldn't use this.
- Either autoRotate: true OR `autoRotate: ["x","y","rotation",0,false]`
  - Position property 1 (typically "x")
  - Position property 2 (typically "y")
  - Rotational property (typically "rotation", but can also be “rotationX” or “rotationY”)
  - Number of degrees (or radians/Math.PI) to add to the new rotation at the onset (this is optional)
  - Boolean value indicating whether or not the rotational property should be defined in radians rather than degrees (default is false which results in degrees)

### 6.4. Animating Text

**Split Text**

- Plugin - no dependencies, even on TweenMax
- Support Back to IE8
- Breaks into characters, words or lines
- Honours natural line breaks
- Option to create auto-incrementing classes, i.e. `.char1, .char2, .char3`

```js
var foo = new SplitText("#bar", {
  type: "words",
  //optional
  wordsClass: "word",
});
```

- [Here](https://codepen.io/sdras/pen/VLBdOp) is a demo Pen. but don't animate gradients this way, it is not performant.
- Animate gradients like [this demo](https://codepen.io/sdras/pen/akAWPR), with masks.
- Set perspective and preserve 3D (you can also do this in CSS).

```js
TweenLite.set(cont, {
  transformPerspective: 600,
  perspective: 300,
  transformStyle: "preserve-3d",
  autoAlpha: 1,
});
```

- Define type of SplitText you need first.

```js
var tl = new TimelineLite(),
  doSplitText = new SplitText(cont, {
    type: "words, chars",
  }),
  cWords = doSplitText.words,
  cChars = doSplitText.chars,
  numWords = doSplitText.words.length;
```

- Helper function:

```js
function totesRando(max, min) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
```

- With a for loop. You can even add different points in time to a relative label.

```js
tl.add("start");
for (var i = 0; i < numWords; i++) {
  tl.from(
    cWords[i],
    6,
    {
      z: totesRando(100, 500),
      opacity: 0,
      rotation: totesRando(360, -100),
      ease: Expo.easeOut,
    },
    "start+=" + Math.random() * 0.3
  );
}
```

- [Words can illustrate your story](https://codepen.io/sdras/full/RNWaMX).

### 6.5. Relative Colour Values

- How would we turn a many element scene from day to night?
- HSL Relative Color - see [this](https://codepen.io/sdras/pen/c647706356bf2e1b940d0d5c6fdbe1b4) demo Pen.
- We do this with incrementation.

```js
//button hue
function hued() {
  var ch1 = "hsl(+=110%, +=0%, +=0%)",
  tl = new TimelineMax({
    paused: true
  });

  tl.add("hu");
  tl.to(mult, 1.25, {
      fill: ch1
    }, "hu");
  ...
  tl.to(body, 1.25, {
      backgroundColor: ch1
    }, "hu");

  return tl;
}

var hue = hued();
```

- [Here](https://codepen.io/sdras/pen/YyXewa) is another relative color demo on CodePen.
- [Here](https://codepen.io/sdras/pen/RZGqxR) is another with Vue.
- Top tip: [Native JS alternative](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) to Moment.js.

### 6.6. Exercise: Create a Story

Combine 2 of the effects we just learned to tell a simple story with SVG animation.

- DrawSVG
- Motion Along a Path
- SplitText
- HSL Tween

### 6.7. MorphSVG

- Main principle: Design everything first slowly unveil things.
- Check [this demo](https://codepen.io/sdras/pen/85b34f90de906d707b10e235de5959d5) on CodePen.
- Point from one id to another.

```js
TweenMax.to("#start", 1, {
  morphSVG: { shape: "#end" },
  ease: Linear.easeNone,
});
```

- Convert to path data.

```js
MorphSVGPlugin.convertToPath("circle, rect,
ellipse, line, polygon, polyline");
MorphSVGPlugin.convertToPath("#foo");
```

- Under the hood it is grabbing the path point data in the DOM and using that to change the existing path points.
- If we need to target the first SVG again we can.
- We need to hide the first shape.
- It only works on paths.
- For circles and rectangles etc. we need to convert them to paths to use MorphSVG.
- Another thing we can do is use `shapeIndex` to finely tune the MorphSVG animations.

```js
TweenMax.to("#start", 1, { morphSVG: { shape: "#end", shapeIndex: "1" } });
```

- Default is `shapeIndex: "auto"`.
- Load the extra plugin, and a GUI will appear.
- Usually auto will be correct, but you can pick.
- Use `findShapeIndex(#start, #end)`.

### 6.8. Bonus Demos

- [Candle](https://codepen.io/sdras/pen/gaxGBB)
- [Gooey Menu](https://codepen.io/lbebber/pen/LELBEo)
- [Another candle](https://codepen.io/sdras/pen/EVRJqg)
- [Globe](https://cdpn.io/sdras/debug/VpYeNj)
- [Creepy Scene](https://codepen.io/sdras/pen/zvXbGJ)
- [Bedroom](https://codepen.io/sdras/pen/dPqRmP)

### 6.9. Exercise: Shape Morph

Either create an SVG or use one from here:

- and create a shape morph.
- This can be incorporated into your last pen.

## 7. Advanced SVGs

- Until we learn clipping and masking it is hard to get realistic animations.
- There are a lot of times when we just need to show a piece of something and not the full thing to be realistic.
- The difference between clipping and masking is is really the way that we think about it.
- Clipping is using the geometry of a shape to cut out another shape or image.
- Masking involves transparency and revealing parts of a shape or image.
- For a better explanation about the differences, read [this article](https://css-tricks.com/masking-vs-clipping-use/).
- Illustrator is not very good at exporting clip paths. We get something like the below.

```html
<defs>
  <ellipse id="SVGID_3_" class="st2" cx="276" cy="147" rx="272" ry="147" />
</defs>

<clipPath id="SVGID_4_">
  <use xlink:href="#SVGID_3_" />
</clipPath>
```

- We would animate as follows:

```css
.st4 {
  clip-path: url(#SVGID_4_);
}
```

- But `<use>` tags are hard to animate.
- A better way to write this would be as follows:

```html
<defs>
  <clipPath id="clippy">
    <ellipse cx="276" cy="147" rx="272" ry="147" />
  </clipPath>
</defs>
```

```css
.img {
  clip-path: url(#clippy);
}
```

- We don't even need to use `<defs>` which can be considered like a staging area, to define something will be used later.
- CSS has clip paths but it is not very well supported.
- SVG support for clip paths is much better.
- [Here](https://codepen.io/sdras/pen/xOjAmV) is an animated example Pen.
- [This](https://codepen.io/sdras/pen/YZBGNp) Pen uses clip paths for Wall-E's arm.
- [This](https://codepen.io/sdras/pen/BReNEN) Pen creates a mask out of a gif.

### 7.1. viewBox

- We can find out the coords of something with the native method `getBBox()` and `console.log`.
- We can then create a new viewBox with the information - see [this](https://codepen.io/sdras/pen/512230ed732f9b963ad3e50c8d4dcbb8) example.
- We can use this for data vis and zoom in on a piece of a map - see [this](https://codepen.io/sdras/pen/dXoLEJ) example.
- We can also do flow charts like [this](https://codepen.io/sdras/full/VjvGJM/) example.

### svgOrigin

- svgOrigin is not a real thing, but something that GreenSock gives us.
- We can pick out two points in the SVG and have everything rotate around that. See [this](https://codepen.io/sdras/pen/doZReX) example.
- Be careful with hit tests for SVG as demonstrated in [this](https://codepen.io/sdras/pen/MwxRBL) example.
- Two SVGs can hit each other way before they appear to visually. Use strokes on bounding boxes to debug.
