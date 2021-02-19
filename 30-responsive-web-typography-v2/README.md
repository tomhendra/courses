<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Responsive Web Typography V2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Responsive Type Overview](#11-responsive-type-overview)
  - [1.2. Typography 101](#12-typography-101)
  - [1.3. Anatomy of Letterforms](#13-anatomy-of-letterforms)
  - [1.4. Type Styles, Selection & Pairing](#14-type-styles-selection--pairing)
  - [1.5. Web Fonts Performance](#15-web-fonts-performance)
  - [1.6. Progressive Enhancement](#16-progressive-enhancement)
  - [1.7. Flash of Unstyled Text](#17-flash-of-unstyled-text)
  - [1.8. Proportion](#18-proportion)
  - [1.9. Letter Spacing Polish](#19-letter-spacing-polish)
  - [1.10. Web Font Tips & Tricks](#110-web-font-tips--tricks)
  - [1.11. Responsive Variable Fonts](#111-responsive-variable-fonts)
  - [1.12. Variable Fonts Browser Support](#112-variable-fonts-browser-support)
  - [1.13. The Evolution of Variable Fonts](#113-the-evolution-of-variable-fonts)
  - [1.14. Variable Font Resources](#114-variable-font-resources)
- [2. Implementation](#2-implementation)
  - [2.1. Common Font Issues](#21-common-font-issues)
  - [2.2. Coding Web Fonts](#22-coding-web-fonts)
  - [2.3. Typography for Reading](#23-typography-for-reading)
  - [2.4. Set Root Min & Max Font Size](#24-set-root-min--max-font-size)
  - [2.5. CSS Variables](#25-css-variables)
- [3. The Future of Web Typography](#3-the-future-of-web-typography)
  - [3.1. Pulling from History](#31-pulling-from-history)
  - [3.2. OpenType Features](#32-opentype-features)
  - [3.3. Text-First Design](#33-text-first-design)
  - [3.4. Adding Font Features](#34-adding-font-features)
  - [3.5. Editorial Design](#35-editorial-design)

## 1. Introduction

This is part of the Frontend Masters Design to Code Track.

In this course, Jason Pamental demonstrates type fundamentals to create better user experiences on mobile and desktop. Following along with the course, you'll learn how to implement web fonts and create a modern, scalable typographic system. Plus, Jason gives an overview of variable fonts, a type file standard developed to reduce page weight with smaller font sizes and achieve more flexible designs than ever before!

- [Slides](https://slides.com/frontendmasters/responsivetypography).
- [Repo](https://github.com/jpamental/rwt-vf-workshop-full).
- [Book](https://www.oreilly.com/library/view/responsive-typography/9781491907085/).

### 1.1. Responsive Type Overview

**Responsive Typography: Four Simple Steps**

- **Performance**:
  - If we don't deal with performance, we don't get to get createive.
  - We don't have a lot of time before users bounce.
  - We need to think about not just what we are loading, but how we are loading it.
  - Select fonts with care, load what we need and don't block the page draw.
- **Progressive**:
  - Web fonts are not supported on many devices.
  - If we don't implement web fonts correctly, some users might not get content at all.
  - We need to embrace FOUT but do so in a way that gets content on the screen and still gives a solid experience.
  - Plan for the future, tune up the loading process & fallback fonts to minimize FOUT.
- **Proportion**:
  - This is one of the most important things.
  - We don't need to have a heading as big on the small screen as it is on the desktop.
  - We must scale proportion.
  - Small screens demand subtle scale.
- **Polish**:
  - There are lots of frameworks that can be used to get up and running.
  - But it is the small details that sets our work apart.
  - Design _IS_ the details: OpenType and then some.

When thinking about a design system it is the perfect time to consider how type will move and scale. Even big corporations don't consider this properly, and there are few design systems on [styleguides.io](http://styleguides.io) that demonstrate it.

We can achieve more typographically on the web than in some cases we can in print, especially with variable fonts.

### 1.2. Typography 101

- The simplest definition of typography is deciding and putting into practice what type we are using in a given project.
- For a typographic system we need to make some decisions about what rules we apply.
- Choices of typography are very powerful: The can evoke a place in time or a particular style.
- Letterforms are a powerful way for us to make an emotional connection between the viewer and the content we are trying to represent.
- The web gives us the power to do things like change the hight of descenders for smaller devices so it looks better.

### 1.3. Anatomy of Letterforms

- Serif fonts are nearly always used in books.
- Sans serif was introduced in the early parts of the 20th century.
- Sans serif were originally very popular on screens since the 90's because the fine detail in serif fonts got lost on the monitors of the time.
- There are many parts to a letterform: see the [slides](https://slides.com/frontendmasters/responsivetypography#/37).
- Learning about all these parts would take a whole day. What's more important is what works together.
- To make decisions about how to pair fonts, look for similarities in overall shape.
- Having similarities in some areas of the geometry and some differences will help to create a good pairing.

### 1.4. Type Styles, Selection & Pairing

- There are quite a few other classifications in addition to **serif** and **sans serif**.
  - **Slab serif**: Works really nicely for large headlines.
  - **Monospaced**: Every letter takes up the same space. Great for code.
  - **Display**: Better at large size, doesn't work as body copy.
  - **Script**: Popular for wedding invites but less on the web. [Magpie Paperworks](https://www.magpiepaperworks.com/portfolio-type/fonts/) do some nice ones which are a cross with handwriting.
  - **Blackletter**: Not that popular on the web. Used for newspaper names commonly.
  - **Handwriting**: Does what is says on the tin.
- For interesting type inspiration Google vintage posters.
- Another way to look for pairings is typefaces by the same designers. If they are drawn by the same hand, there will be similarities.
- Don't be afraid to use serifs on the web for body copy. Modern screens do a good job of rendering them.
- Serifs create connections between letters which helps the type to flow.
- Always use the brand typeface for clients. It creates the unconscious connection to the brand.
- There is a lot of sameness on the web (Open Sans).
- The best way to stand out is to use something different.
- Most techniques used in print can be done on with CSS, and some things can only be done digitally.

### 1.5. Web Fonts Performance

- Performance matters.
- Part of performance is making good choices.
- We should only include what we need.
- If we want to include more than 3 or 4 weights and styles, it starts to impact performance.
- A _typeface_ is a family, It includes a range of weights and styles.
- A _font_ is one instance of a typeface, like bold.
- Each font has a performance cost, so budget wisely.
- In order to get the page rendered and get some content on screen, fonts are going to have an impact.
- A designer's responsibility lies in the while experience, not just what looks good.
- Font assets can be cached, so if handled properly will only need to be downloaded once.

### 1.6. Progressive Enhancement

- Creating a good baseline experience for any user, any device and any browser.
- The HTML document is the core, being marked up semantically.
- If you can view just the plain HTML and read it, with hierarchy that makes sense, that's the litmus test.
- The premise of progressive enhancement is that we are delivering something that functions, and everything else is an enhancement.
- CSS is an enhancement to make the layout better.
- The fonts are another enhancement.

### 1.7. Flash of Unstyled Text

- When web fonts were first implemented, browsers would always show the fallback before the custom fonts loaded.
- `font-display: swap` allows the fallback font to be rendered first, and the web fonts once they are downloaded.
- The following classes are used as convention: `.wf-inactive` and `.wf-active`. Both TypeKit and fonts.com inject these classes.
- We can use these classes ourselves for consistency.
- We can apply `font-size`, `line-height` and `letter-spacing` to the inactive fonts to help re-flow.
- That way when the web fonts load the content doesn't move around.

```css
/* This CSS results in a blank screen load */
body {
  font-family: "Trade Gothic", helvetica, arial;
}

/* This CSS allows content, then fonts */

.wf-inactive body {
  font-family: helvetica, arial;
}
```

- And truthfully we only need to worry about what's above the fold. Everything will load before the user scrolls.

### 1.8. Proportion

- Think about how to create a modular scale across small screens to large ones to maintain hierarchy without compromising the UX.
- The Elements of Typographic Style is like the bible for designers but is focused on print.
- We need to get away from the print-centred mindset about what the proportions need to be.
- We should use breakpoints in a mobile-first context in order to implement the scale.
- When we have fewer elements visible, we can be more subtle.
- When we get to a large screen there are so many more things going on, so headings need to stand out more.
- A more modern scale could look [like this](https://slides.com/frontendmasters/responsivetypography#/94) as a starting point.

### 1.9. Letter Spacing Polish

- Don't forget fit and finish.
- Kerning is the space between letters.
- By default browsers tend to set type very loosely. Reducing the kerning can bring type more together.
- There are libraries that ensure all quotation marks and apostrophes are correct, and widows and orphans are handled.
- Widowtamer.js is an example.

### 1.10. Web Font Tips & Tricks

- Large blocks of centred text are hard to read.
- our eye needs to travel back to read the next line, and we need to know where that's going to be.
- Anything longer than a couple of lines centred will be hard to read.
- The maximum line length is also important.
- 65-75 characters per line is what we should be aiming for. 38em is about the sweet spot for a `p { max-width: 38em; }`.
- CSS3 brings character counts: `ch` and `cx` are related to character height and width, but are not of great value.
- Use `em` or `rem` but not `px`.
- Pixels are technically a reference not an actual pixel. Every device does something different based on the reference pixel.
- `em` is always 16 pixels, and always works.
- `rem` is great for setting a consistent width or height for body copy.
- `rem` is always relative to the root, usually 16 pixels, or whatever we set the html or body to be.
- `em` is always relative to the parent, and that's where people get into trouble with `em`.
- Sometimes however we want font size relative to the container.
- For example, sizing margin on a button relative to the text size that is on the button.
- This makes sense, we want the size to flex and grow with the text of the button, not the root size.
- If someone resizes the text under an accessibility setting, everything scales smoothly together with `em` and `rem`.
- Also if the browser pixel reference changes, our design will still work.
- The only place where pixels belong is maybe in a border thickness.
- If we never use lorem ipsum in our design, we will never all victim to unpredictable behaviour.
- Use real words instead like from Moby-Dick.
- Beware when converting fonts for the web. The font will be inferior, and may breach the license terms through modification.
- A lot of work goes into making fonts work well for the web.
- Spend the money and get a proper WOFF2 font, which has the best feature support and compression.

### 1.11. Responsive Variable Fonts

- In 2016 OpenType 1.8 specification introduced variable fonts.
- MS, Apple, Google & Adobe all collaborated on this.
- The spec involves different registered and custom axes of variation.
- There were two previous attempts at this which were not successful.
- Variable fonts are a single file that can behave like many files.
- We get all the different variations if the type designer has built them in to the typeface itself and exposed them.
- This is not modifying a font, it is only affecting what has deliberately been put there by the typeface designer.
- Registered axes are meant to map back to concepts that we already know.
- These axes don't have to be a continuum, then can have steps in between.
- There are five registered axes.

1. Weight: `font-variation-settings: 'wght' 88;`
2. Width: `font-variation-settings: 'wdth' 265;`
3. Slant: `font-variation-settings: 'slnt' 20;`
4. Italic: `font-variation-settings: 'ital' 1;`
5. Optical size: `font-variation-settings: 'opsz' 12;`

- A typeface designer can expose a custom axis for any property they want.
- As long as it follows the four letter abbreviation and a number range.
- One common custom axis is grade, which affects the contrast between the text and the background without changing the physical space.
- With these variations we challenge what a typeface is, because we can change so much that the emotional tie can be affected.

### 1.12. Variable Fonts Browser Support

- [Current support is good](https://caniuse.com/?search=variable%20fonts).
- For browsers that don't support variable fonts, the font should still display, but it won't vary.

### 1.13. The Evolution of Variable Fonts

- The W3C has a discussion on [GitHub](https://github.com/w3c/csswg-drafts/issues?q=is:issue+is:open+label:css-fonts-3) where we can all get involved.
- We can get involved and log issues here.
- There are some cool developments for instance partial downloads so each page only downloads the subset of the font it requires.

### 1.14. Variable Font Resources

- [Axis-Praxis](https://www.axis-praxis.org/specimens/__DEFAULT__) is a playground.
- [Variable Fonts](https://v-fonts.com) is a catalogue of all available fonts.
- [variableFont.js](https://github.com/Monotype/variableFont.js) is a library for using variable fonts.
- [Microsoft](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview) has put together some info.
- [TypeNetwork](https://www.typenetwork.com/brochure/opentype-font-variations/#introduction) has more info.
- [Monotype](https://www.monotype.com/resources/expertise/variable-fonts-101) has more info.
- [Jason Pamental](https://codepen.io/jpamental/pen/MGEPEL) has a CodePen demo.
- [Jason](https://codepen.io/jpamental/) also has a load more CodePens.
- [Oliver Schöndorfer](https://zeichenschatz.net/demos/vf/variable-web-typo/) has a demo website.
- [Mandy Michael](https://codepen.io/collection/XqRLMb/) has a bunch of CodePen examples.

## 2. Implementation

- The most important thing with variable fonts is not to block page render.
- 53% of users are going to bounce if a site takes more than 3 seconds to load.
- Jason recommends [Font Face Observer](https://github.com/bramstein/fontfaceobserver) to handle the class switching.
- It loads in web fonts using the session storage variable and promises so the `wf-inactive` class is applied until fonts have downloaded.
- The script should be inline in the HTML head after the CSS import.
- The session storage variable is faster than checking the browser cache, and should avoid any repaint issues in Chrome.
- The CSS should include the fallback as below.

```css
h1 {
  font-family: "Amstelvar 1.1 VF", Georgia, Serif;
  font-weight: 563;
  font-stretch: 491;
  font-variation-settings: "wght" 563, "wdth" 491, "opsz" 16;
}

.wf-inactive h1 {
  font-family: Georgia, Serif;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 1px;
}
```

- Progressively enhance and tune for the loading process.
- This approach with Font Face Observer helps address issues for no `@font-face` support too.
- It works without requiring JS, but is faster when it's there.

### 2.1. Common Font Issues

- We still often see on mobile headings with only two or three words, and body copy with too much line height.
- We should be tailoring the typography to make use of the available screen space to give readers the best experience.
- Sometimes headings can even have one word broken onto two lines.
- Don't get too caught up in the details, just consider what is more important on the screen at any given time.
- Design is about communicating ideas and influencing behaviour.
- Use scale as a starting point, and tweak for specific typefaces and usage scenarios.
- Much like the grid: this is not religion, it is just a start.
- Take a step back and look at the bigger picture and overall goal, to guide better choices about pairing, heading sizes and the way things scale.

### 2.2. Coding Web Fonts

- The [webfonts.css](exercises/css/webfonts.css) file contains the web font declarations.
- Anything in a `@font-face` declaration will only download if the font is referenced in the CSS, so we can include as many as we want.
- By declaring `font-style: normal`, the browser will equate the font to whatever _normal_ is.
- We should always tell the browser to use a specific file for bold / italic etc. as browser synthesis looks terrible.

### 2.3. Typography for Reading

- Once we have the fonts loaded, we need to ensure we give the user the best possible reading experience.
- We should design for mobile first and set the breakpoints where the design breaks.
- Leading up to larger screen sizes, we increase the scale.
- We can look at the minimum size we want on the small screen and the maximum size on desktop, and choose intermediate values.
- When we want to style all the headers and fallbacks in this way, the CSS really starts to add up.
- Using a variable font provides a cleaner approach.

```css
@font-face {
  font-family: "Amstelvar";
  src: url("amstelar.ttf") format("truetype-variations");
}

.myVariableFontClass {
  font-weight: 563; /* 1-999 */
  font-stretch: 491; /* 1-999 */
  font-style: italic; /* binary */
  font-style: oblique 20deg; /* 0-20 (?) */
  font-optical-sizing: auto; /* matches font-size */
}

/* Or shorthand */
.myVariableFontClass {
  font-variation-settings: 'wght': 563, 'wdth' 491, ['ital' 1 OR 'slnt' 20], 'opsz' 16;
}
```

- Note that registered axes need to be lowercase, whereas custom ones are uppercase.

### 2.4. Set Root Min & Max Font Size

- As we start to think about viewport units and how we tie that into scale, it gives us some idea of how we might move away from defining these fixed relationships across different breakpoints.
- [This article by Tim Brown](https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/) is interesting but the approach is complicated, in that there is a lot of rewriting needed.
- Jason thought how he could tie in the equation from Tim Brown's article, with CSS variable concepts from [Lea Verou's talk](https://www.youtube.com/watch?v=kZOJCVvyF-4) and variable fonts.
- Jason came up with a new approach to typographic hierarchy that is pretty sophisticated, but also portable.

```css
:root {
  /* breakpoint variables */
  --bp-small: 24.15;
  --bp-medium: 43.75;
  --bp-large: 60.25;
  --bp-xlarge: 75;

  /* h1 variables */
  --h1-font-size-min: 5;
  --h1-font-size-max: 10;
}
```

- We declare our variables in `:root` so that they are available throughout the document.
- The problem with using viewport units to size text is that if the window gets narrower like a watch, we get very unpredictable results.
- We lose control of how tiny text gets to be, or how big it gets to be on a large desktop.
- The locks equation from Tim Brown is a way to set a low end and high end and have everything else calculate in the middle.

```css
h1 {
  font-size: calc(var(--h1-font-size-min) * 1em);
}
```

- The calculation here is just adding the `em` unit.
- Now on the high end when we reach large desktop, we use the max value.

```css
@media screen and (min-width: 75em) {
  h1 {
    font-size: calc(var(--h1-font-size-max) * 1em);
  }
}
```

- Now we need to figure out everything in between.

```css
@media screen and (min-width: 24.15em) {
  h1 {
    font-size: calc(var(--h1-font-size-min) * 1em) +
      (var(--h1-font-size-max) - var(--h1-font-size-min)) * ((
            100vw - (var(--bp-small) * 1em)
          ) / (var(--bp-xlarge) - var(--bp-small)));
  }
}
```

- At a minimum width of 24.15em we will trigger a breakpoint, at a phone being turned to landscape.
- 24.15em was slightly bigger than the smallest screen size Jason could find for a phone being in landscape orientation.
- The calculation then kicks in.
- We don't need to care how the equation works, just that it does.
- Which ever breakpoints are referenced above and below, it will smoothly calculate form the low end value to the high end value.
- We can use this for font size, line height, optical sizing.
- There is however a limitation, in that the calculation always ends up with a unit value.
- ONce we introduce `vw` and `em` we can't get rid of them in `calc`.
- There is a lot of active discussion in the CSS Working Group around this limitation.
- [05-plex-styles.css](exercises/css/05-plex-styles.css) demonstrates the fonts being loaded well with no scaling.
- [06-plex-styles-rwt.css](exercises/css/06-plex-styles-rwt.css) demonstrates the scaling implemented in the traditional way.
- [06-vf-styles.css](exercises/css/06-vf-styles.css) demonstrates the equation for scaling being used.

### 2.5. CSS Variables

- Note that when we flip colours we may need to adjust the text grade too.
- The text may not have sufficient contrast to stand out.
- We can change this with CSS variables.
- Check out [08-meta-styles.css](exercises/css/08-meta-styles.css) for how this can be achieved.
- Also see [08-meta-styles.css](exercises/css/08-meta-styles.css) for a fallback using `@supports` and the `.no-support-message` class for when variable fonts are unsupported.

## 3. The Future of Web Typography

- Note that not all browsers support all VF properties, like `font-stretch`.
- The lower level syntax `font-variation-settings` is implemented across the board.
- The danger is that we can fall into the trap of always using `font-variation-settings`.
- Try to use the actual properties as they become supported.

### 3.1. Pulling from History

- To understand optical sizing we need to take a brief history lesson.
- Optical sizing is not available in all typefaces, but it is amazing what we can do if we have access to it.
- Going back 700 years letterforms were thicker for smaller point sizes.
- We want refined detail for larger type, but when it gets smaller it needs to be readable without elements being lost.
- This was normal for 100s of years but was lost in the 60s and 70s with photo typesetting and digital typesetting thereafter.
- There was a single shape that was just scaled.
- Now with optical sizing this feature is built-in so we can give users a much better experience.

### 3.2. OpenType Features

- Ligatures & Swashes
- Fractions
- Kerning
- Painless fallback
- File size penalty (for now)
- These features have been in the CSS spec for years, but not every typeface supports them.

### 3.3. Text-First Design

- At the heart of designing from the content out is thinking about what the smallest element of content is.
- For a text / media site that's a paragraph.
- Start with the paragraph and layer features on one at a time to end up with a next level site.

### 3.4. Adding Font Features

- We can use `font-feature-settings` to add features.
- To see what features are available with a font, we can use [Wakamai Fondue](https://wakamaifondue.com).

### 3.5. Editorial Design

- All of the things covered so far with variable fonts are improvements on what we are already doing.
- We get access to a much broader design space, because we don't have to worry about only loading 2 or 3 files.
- We are not revolutionizing design, but potentially variable fonts have the power to do just that.
- To get there we need to think outside of our typical world of web design.
- Designers limit themselves to 2 or 3 fonts because that's the constraint they are given.
- With variable fonts a much broader range can be used because it is more appropriate to the design.
- The revolution will come from looking at what we've been doing in print and taking things to a new place on the web.
- This is a time of discovery and experimentation that is wide open to all of us.
