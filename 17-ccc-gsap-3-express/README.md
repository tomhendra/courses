<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Creative Coding Club: GSAP 3 Express</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Tweening Basics](#11-tweening-basics)
    - [1.1.1. GSAP Object: Tweens & Timelines](#111-gsap-object-tweens--timelines)
  - [1.2. Basic Tween](#12-basic-tween)
  - [1.3. from() & fromTo()](#13-from--fromto)
  - [1.4. Special Properties: Delay & Repeat](#14-special-properties-delay--repeat)
  - [1.5. Special Property: ease](#15-special-property-ease)

## 1. Introduction

Bring your webpages, banners, and online games to life with GSAP3. This course for absolute beginners will guide you through the best parts of the GSAP API.

- [Course link](https://www.creativecodingclub.com/courses/gsap-3-express).

### 1.1. Tweening Basics

#### 1.1.1. GSAP Object: Tweens & Timelines

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
