<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Creative Coding Club: GSAP 3 Express</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. GSAP Object: Tweens & Timelines](#11-gsap-object-tweens--timelines)
  - [1.2. Basic Tween](#12-basic-tween)
  - [1.3. from() & fromTo()](#13-from--fromto)
  - [1.4. Special Properties: Delay & Repeat](#14-special-properties-delay--repeat)
  - [1.5. Special Property: ease](#15-special-property-ease)
  - [1.6. Special Property: Stagger](#16-special-property-stagger)
  - [1.7. Tween Control](#17-tween-control)
  - [1.8. Using the GSAP Documentation](#18-using-the-gsap-documentation)
- [2. Timelines](#2-timelines)
  - [2.1. Basic Timeline](#21-basic-timeline)
  - [2.2. Position Parameter](#22-position-parameter)
  - [2.3. Timeline Controls & Labels](#23-timeline-controls--labels)
- [3. Final Project](#3-final-project)

## 1. Introduction

Bring your webpages, banners, and online games to life with GSAP3. This course for absolute beginners will guide you through the best parts of the GSAP API.

- [Course link](https://www.creativecodingclub.com/courses/gsap-3-express).

### 1.1. GSAP Object: Tweens & Timelines

**The GSAP Object**

- GSAP used to consist of several separate tools:
  - TweenLite
  - TweenMax
  - TimelineLite
  - TimeLineMax
- In version 3.0 these were all consolidated to one `gsap` object.
- The `gsap` object is our access point to everything that the engine does.
- The `gsap` object can:
  - Create animations.
  - Configure settings.
  - Register plugins, eases and effects.
  - Gives global controls over all animations.

Being a beginner course, we will concentrate on the animations part.

- The `gsap` object has 3 main methods for creating Tweens and optionally adding them to timelines.

1. `gsap.to()`
2. `gsap.from()`
3. `gsap.fromTo()`

**Tweens**

- In its simplest form a Tween can change a single property of a single object over time.
- In the example `gsap.to(".star", { x: 750, duration: 3 })` the first parameter is the _target_, and the second is the _vars object_.
- The vars object accepts special properties. `duration` is considered special because it is not an animation property.
- The `x` is shorthand for `translateX()` in CSS.
- One of the most important things to know about GSAP is that every animation has a _virtual playhead_.
- Just like After Effects has a playhead to allow for scrub, GSAP has one too.
- Whenever the playhead of an animation advances, that is when GSAP will apply the changes to the properties that we want.
- Tweens can be moved to any point in time, played forwards, played backwards, paused, restarted and sped up or slowed down over time.
- We can also inspect Tweens by obtaining information programmatically.
- Tweens are powerful. A Tween can change multiple properties of multiple objects over time, with staggered start times.

**Timelines**

- A timeline is a container for multiple _child Tweens_.
- We have a bunch of advanced controls like repeat and delay.
- One of the most powerful things about GSAP Timelines is the advanced sequencing options.
- We can have Tweens overlap. We can insert gaps. We can insert timelines inside of timelines.

### 1.2. Basic Tween

- A basic tween using the `gsap.to` method:

```js
gsap.to("#owl", { x: 400, y: 200, scale: 3, duration: 3 }); // animates the element with a class of “fred” to an x position of 400.
```

- We provide the target which is the object we are moving, in this case an SVG with an ID of `owl`.
- We provide the different properties we want to animate, in this case translate and scale.
- The vars object contains property: value pairs.
- If no `duration` is provided, GSAP will apply a default of 500ms.
- We can change the default with `gsap.defaults({ duration:1 });`.
- In order for the animation to happen, behind the scenes GSAP updates an inline style on the SVG that sets a transform value, which is repeatedly updated at 60FPS.
- There is no set limit to the properties we can animate, but is best for performance to stick to CSS Transform values and opacity because they benefit from hardware acceleration:

  - `x` and `y`
  - `rotation`, `rotationX`, `rotationY` (GSAP is great at 3D)
  - `skewX` and `skewY`
  - `scaleX`, `scaleY`, or just `scale`

- GSAP can animate any numeric property you throw at it.

  - `width` and `height`
  - `backgroundColor` **hyphenated values need to be camelCase**
  - `color`
  - `padding`
  - `left` and `top` (must set `position` to `relative`, `absolute`, or `fixed`)
  - `vh` and `vw`

Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be.

- `gsap.to()` [docs](<https://greensock.com/docs/v3/GSAP/gsap.to()>).
- `gsap.defaults()` [docs](<https://greensock.com/docs/v3/GSAP/gsap.defaults()>).

### 1.3. from() & fromTo()

- `gsap.from()` animates from the values you specify to the object’s natural values.
- To animate from `x` and `y` values of `400`, use:

```js
gsap.from(".fred", { x: 400, y: 400 });
```

- `gsap.fromTo()` animates from the values you specify to the values you specify.
- The 2 objects in the code below are the `from` vars and `to` vars.

```js
gsap.fromTo(".fred", { x: 400, y: 400 }, { x: 200, y: 200 });
```

For best results make sure the `from` vars and `to` vars have the same properties. Mismatches sometimes work but at other times they do not.

- `gsap.from()` [docs](<https://greensock.com/docs/v3/GSAP/gsap.from()>).
- `gsap.fromTo()` [docs](<https://greensock.com/docs/v3/GSAP/gsap.fromTo()>).

### 1.4. Special Properties: Delay & Repeat

- Special properties define how the animation should run and what it should do. Special properties are not animated.

  - `delay`: how much time should transpire before animation begins
  - `repeat`: how many times the animation should repeat
  - `yoyo`: when set to true the animation will play back and forth
  - `repeatDelay`: how much time should transpire between each repeat

- An animation will repeat indefinitely if you set `repeat: -1`.

Using a delay is great for basic sequences with one or two items, but anything more would require a timeline.

### 1.5. Special Property: ease

- Eases can make our animations feel more playful, lifelike or robotic.
- An ease controls the rate of change as your animation plays.
- In simple uses an ease will control whether your animation slows down or speeds up.
- An ease can be applied on the way out (default), on the way in, or both directions.
- The steeper the curve the faster change is taking place.

  - `ease:”bounce”` will bounce on the way out
  - `ease:”bounce.in”` will bounce on the way in
  - `ease:”bounce.inOut”` will bounce on the way in and out

- Some eases can be configured.
- `ease:”back.config(6)”` will have a stronger overshoot.
- Visit the GreenSock [Ease Visualizer](https://greensock.com/docs/v3/Eases).
- For moving objects off screen generally we want ease-in, which starts with 0 speeds up at the end.
- For moving objects into view we generally want ease-out, which will start fast and slow down at the end.
- Eases can dictate the direction of animation, not just the speed.

### 1.6. Special Property: Stagger

- The stagger property allows you to offset the start time of multiple targets in a single tween.
- In GSAP3 you no longer need the `staggerTo()`, `staggerFrom()`, and `staggerFromTo()` methods of GSAP2.

```js
// each image will start 0.2 seconds after the previous one starts.
gsap.to("#owls svg", { y: -100, stagger: 0.2 });
```

- A stagger object gives you greater control over where the staggers start from and how the timing is dispersed.

```js
gsap.to("#owls svg", {
  y: -50,
  stagger: {
    each: 0.2,
    from: "end",
  },
});
```

- `each: 0.2` means there will be 0.2 seconds between the start of each animation.
- If instead you use `amount: 0.2` then all animations will start within 0.2 seconds and be staggered evenly.

### 1.7. Tween Control

- Tweens have a number of methods for controlling playback.

- In order to control a tween you need have way to reference it. Below we set up a variable to reference our tween.

```js
var tween = gsap.to("#owl", { x: 600 });
```

- You can use `let` or `const` instead of `var` based on your preference and level of comfort with JS.
- To prevent a tween from playing automatically you can set its paused special property to true.

```js
var tween = gsap.to("#owl", { x: 600, paused: true });
```

- To play that tween you can later call:

```js
tween.play();
```

### 1.8. Using the GSAP Documentation

- The GSAP Documentation is extremely robust and thorough. It can be a bit overwhelming at first.
- Learn how to navigate them, get to the best parts, and make sense of them.
- Visit the [GSAP Docs](https://greensock.com/docs/v3/GSAP/Tween) and be sure to bookmark them!
- Study the methods and properties of the GSAP object and Tween class. I can't stress enough how important this. There is so much good info in the docs.

## 2. Timelines

- Timelines allow us to control sequences of Tweens easily.
- Without using a timeline, sequences of animations need to be done by adding a delay to each Tween.
- Timelines also enable us to jump to a certain point in the animation sequence, so we don't have to wait for the entire animation sequence to play in order to see any changes we make.
- If we want to repeat the animation sequence, play or pause it, we can't without a timeline.

### 2.1. Basic Timeline

- A timeline is created with `gsap.timeline();`.
- All tweens in a timeline naturally play one after the other.

```js
const timeline = gsap
  .timeline()
  .from("#button-group", { xPercent: 100, duration: 0.2 })
  .from("#title", { opacity: 0, scale: 0, ease: "back" })
  .from("#owls", { autoAlpha: 0 })
  .from("#owls svg", {
    y: 350,
    stagger: {
      each: 0.5,
      from: "edges",
      paused: true,
      repeat: -1,
      yoyo: true,
    },
  });
```

### 2.2. Position Parameter

- The position parameter allows you to offset the start time of tweens in a timeline.
- It can be a relative position i.e. relative to other Tweens, or an absolute position i.e. at a specific time.

```js
var tl = gsap.timeline();
tl.to(object, { y: 300 }, "+=1"); // start 1 second after previous tween ends
tl.to(object, { x: 300 }, "-=1"); // start 1 second before previous tween ends
tl.to(object, { rotation: 90 }, "<"); // start when previous tween begins
tl.to(object, { opacity: 0.5 }, "<1"); // start 1 second after previous tween begins
tl.to(object2, { x: 200 }, 1); // start exactly at a time of 1 (absolute position)
```

### 2.3. Timeline Controls & Labels

- Timelines have the exact same control methods as tween.
- Since we already know how to `play()` a tween we already know how to `play() `a timeline.
- We must first create a reference to our timeline like:

```js
var animation = gsap.timeline();
// later on we can do
animation.play();
animation.pause();
animation.restart();
animation.reverse();
//etc
```

- Labels allow us mark a specific point in time in the timeline.
- We can add a label to a timeline using the `add()` method.

```js
.from("#owls svg", {y:160, stagger:0.5, duration:0.8, ease:"back"}, "+=0.5")
.add("test")
.from("#title", {xPercent:100, duration:1, ease:"bounce"});
```

## 3. Final Project

- See [the project](./final-project).
- [GSAP DevTools](https://greensock.com/gsdevtools?ref=6234) are available for paid members.
- The Flash of Unstyled Content occurs when elements appear before they are styled properly.
- Most commonly this happens when a page renders before the proper font has loaded.
- You’ll see text for a brief second with the wrong font and then it will change.
- In order to give users the quickest loading experience its recommended to load your custom scripts after the closing body tag.
- For our purposes we are using GSAP to animate things in from an opacity of 0, however there is always going to be a brief duration of time after the page is rendered and your JavaScript runs; this is the flash of unstyled content.
- To avoid the flash there are a few steps to take:

  - Hide the <div> that contains all your elements by giving it a css style of visibility:hidden
  - Create gsap animation code that fades in from `autoAlpha:0`
  - Wrap your animation code in an `init()` function.
  - Call the `init()` function after the page loads using a load event listener.

```js
function init() {
  tl.from("#demo", { ease: "linear", autoAlpha: 0 })
    .from("h1", { x: 80, duration: 1 })
    .from("h2", { x: -80, duration: 1 }, "<")
    .from("p", { y: 30 }, "-=0.2")
    .from("button", { y: 50 }, "-=0.4")
    .from(
      "#items > g",
      { scale: 0, transformOrigin: "50% 50%", stagger: 0.1 },
      "-=0.5"
    );
}

window.addEventListener("load", function (event) {
  init();
});
```
