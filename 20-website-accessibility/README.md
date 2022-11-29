---
title:: Website Accessibility
type:: Course
author:: Jon Kuperman (Cloudflare)
completed:: 23/02/21
url:: https://frontendmasters.com/courses/accessibility-v2/
certificate:: No certificate provided
---

&nbsp;
<div align=center>
  <img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
</div>
&nbsp;

<h1>Website Accessibility</h1>


## 1. - [1. Introduction](#1-introduction)
- [1. - 1. Introduction](#1---1-introduction)
  - [1.1. Why Devs Should Care?](#11-why-devs-should-care)
- [2. Types of Disability](#2-types-of-disability)
  - [2.1. How to Browse the Web](#21-how-to-browse-the-web)
- [3. Keyboard Navigation](#3-keyboard-navigation)
  - [3.1. Keyboard Shortcuts](#31-keyboard-shortcuts)
  - [3.2. Tabbable Elements](#32-tabbable-elements)
  - [3.3. Visible Focus](#33-visible-focus)
  - [3.4. Skip Links](#34-skip-links)
  - [3.5. Exercise 1: Setting Up an A11y Project](#35-exercise-1-setting-up-an-a11y-project)
- [4. Focus Control](#4-focus-control)
  - [4.1. Tabtrapping](#41-tabtrapping)
  - [4.2. Exercise 2: Focus Control](#42-exercise-2-focus-control)
- [5. Screen Readers](#5-screen-readers)
  - [5.1. Most popular screen readers.](#51-most-popular-screen-readers)
  - [5.2. Alt Text](#52-alt-text)
    - [5.2.1. The Four Rules of Writing Good alt Text](#521-the-four-rules-of-writing-good-alt-text)
    - [5.2.2. Tips](#522-tips)
  - [5.3. Label \& ARIA Label](#53-label--aria-label)
  - [5.4. HTML5 \& corresponding ARIA roles](#54-html5--corresponding-aria-roles)
  - [5.5. Exercise 3: Screen Reader](#55-exercise-3-screen-reader)
- [6. Semantic HTML](#6-semantic-html)
  - [6.1. Exercise 4: Semantic HTML](#61-exercise-4-semantic-html)
- [7. ARIA](#7-aria)
  - [7.1. Live Regions](#71-live-regions)
  - [7.2. Exercise 5: Live Regions](#72-exercise-5-live-regions)
- [8. Colour](#8-colour)
  - [8.1. Chrome can simulate visual impairment:](#81-chrome-can-simulate-visual-impairment)
  - [8.2. Exercise 6: Colour](#82-exercise-6-colour)
- [9. Tools](#9-tools)
  - [9.1. Spec](#91-spec)
  - [9.2. Articles](#92-articles)
  - [9.3. Code](#93-code)
  - [9.4. Chrome Extensions](#94-chrome-extensions)
  - [9.5. Tools](#95-tools)
  - [9.6. Links from our discussion](#96-links-from-our-discussion)

Web accessibility means that people with disabilities can perceive, **understand**, **navigate** and interact with the web, and that they can **contribute** to the web.

Worldwide it is estimated that 1 in 5 people have some form of disability.

The web by its nature is already accessible.

### 1.1. Why Devs Should Care?

- We're making it inaccessible.
- Human rights.
- Legal issues.
- React a larger audience.

[WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist) have pulled out the really important items from the W3C accessibility spec. They say all websites should be: 

1. Perceivable
2. Operable
3. Understandable
4. Robust

- [The slides for this workshop](https://docs.google.com/presentation/d/1_CRR-bJFX5Xt-2Tx_lPMDSMUtoxe8s8kAF7DDDXVvc8/edit?usp=sharing)

## 2. Types of Disability

- Attention deficit / Hyperactivity disorders
- Blindness or low vision
- Brain injuries
- Deaf / hard-of-hearing
- Learning disabilities
- Physical disabilities
- Speech and Language disabilties

Things that are good for people with disabilities are usually good for all users. 

### 2.1. How to Browse the Web

- Screen readers
- Mouth sticks
- Keyboard shortcuts
- Magnification
- Single switches

Very common for people with limited motor abilities to find a mouse difficult to use. Keyboards are very common use cases for these people. 

Screen readers probably the most common amongst people with disabilities.

## 3. Keyboard Navigation

### 3.1. Keyboard Shortcuts

All features of the site should be usable with just a keyboard. 

The main workflow items should be done very quickly. How many keystrokes does it take to get something done? 

Common tasks being assigned KB shortcuts is a good accessibility practice. 

Twitter has a keyboard modal if you hit shift + ? - a great example. Most main actions can be done with at most two keystrokes. 

Keyboard shortcuts are also great for power users. 

Jon has a library for implementing shortcuts [on GitHub](https://github.com/jkup/shortcut).

### 3.2. Tabbable Elements

On any website hitting the tab key will move the user forward one tabble item.

The most popular tabbable elements are: 

- `<a>`
- `<button>`
- `<input>`
- `<select>`
- `<textarea>`
- `<iframe>`

Any element that can be interacted with becomes tabbable as default. 

Any element can be made tabbable with the HTML property Tabindex.

From [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex):

A negative value (usually `tabindex="-1"`) means that the element is not reachable via sequential keyboard navigation, but could be focused with JavaScript or visually by clicking with the mouse. It's mostly useful to create accessible widgets with JavaScript.

<aside>
ℹ️ A negative value is useful when you have off-screen content that appears on a specific event. The user won't be able to focus any element with a negative tabindex using the keyboard, but a script can do so by calling the focus() method.

</aside>

`tabindex="0"` means that the element should be focusable in sequential keyboard navigation, after any positive tabindex values and its order is defined by the document's source order

A positive value means the element should be focusable in sequential keyboard navigation, with its order defined by the value of the number. That is, `tabindex="4"` is focused before `tabindex="5"` and `tabindex="0"`, but after `tabindex="3"`. If multiple elements share the same positive tabindex value, their order relative to each other follows their position in the document source. The maximum value for tabindex is `32767`. If not specified, it takes the default value `0`.

<aside>
⚠️ Avoid using tabindex values greater than 0. Doing so makes it difficult for people who rely on assistive technology to navigate and operate page content. Instead, write the document with the elements in a logical sequence.

</aside>

### 3.3. Visible Focus

It must be visually apparent which item has the current keyboard focus. 

CSS resets and frameworks can remove this so be aware. 

Accessibility traps are often found in reengineering features, so be careful when changing focus colour for example. 

### 3.4. Skip Links

Skip to navigation / main content is a common pattern for example when a site has a lot of elements in the header before the navigation is reached ([New York Times](https://www.nytimes.com/)).

This is achieved by pushing the element to the top of the page with `position: absolute` & `top: -40` for example then on focus state set `top: 0`.

This means the element will be ignored by anyone using a mouse, but keyboard users will hit it first when they tab.  

See more: [https://webaim.org/techniques/skipnav/](https://webaim.org/techniques/skipnav/)

We don't want to listen for onFocus events and do a bunch of JS stuff. This is the second thing that needs to be considered for tab focus with visual indication being the first.

### 3.5. Exercise 1: Setting Up an A11y Project

1. The form at the bottom can’t be submitted with just a keyboard.
2. There is no “skip link” for tabbing straight into the content.
   
## 4. Focus Control

We can grab the currently focussed element on a page. 

```jsx
var currentElement = document.activeElement;
```

This is useful for modals so you can save where a user currently is, and then refocus once the modal is closed. 

### 4.1. Tabtrapping

1. Select your modal
2. Find and select all focusable children ([https://github.com/jkup/focusable](https://github.com/jkup/focusable))
3. Convert them to an Array
4. Find the first and last tabbable item inside the modal
5. Listen for keydown event
6. Check to see if it’s the tab key
7. Also check if shift is being held down*
8. If moving forward and on the last item, focus the first item
9. If moving backward and on the first item, focus the last item

```jsx
Element.focus()

	if (document.activeElement === firstTabStop) {
			e.preventDefault();
			lastTabStop.focus();
}
```

### 4.2. Exercise 2: [Focus Control](exercise-files/js/modal.js)

1. When the modal appears, you are still able to tab through elements on the main page. Tabbable content should be restricted to the modal.
2. Both hitting the escape key as well as clicking outside the modal should close it.

## 5. Screen Readers

### 5.1. Most popular screen readers.

1. JAWS (Windows)
2. ZoomText (Mac and Windows)
3. Window-Eyes (Windows)
4. NVDA (Windows)
5. VoiceOver (Mac)
6. ChromeVox (Browser)

### 5.2. Alt Text

The property everyone knows is alt for images.

```html
<img alt=“Alternate Text” />
```

#### 5.2.1. The Four Rules of Writing Good alt Text

1. Be accurate
2. Be succinct
3. Don’t be redundant
4. Don’t use "image of" or "graphic of"

#### 5.2.2. Tips

- `alt=””` intentionally skip element
- `alt=”UPPERCASE”` individually reads letters

**Hide Things from Screen Readers**

- `display: none;`
- `visibility: hidden;`
- `<input hidden />`

**Hide from user but show to screen readers**

```css
.screenreader {
	position: absolute;
	left: -10000px;
	width: 1px;
	height: 1px;
	overflow: hidden;
}
```

### 5.3. Label & ARIA Label

Labels are really important for screen readers. 

```html
<label for="username">Click me</label>
<input type="text" id="username">
```

Another option is `aria-labelledby` which accepts multiple elements. Useful for forms with groups of elements.

```html
<div id="billing">Billing Address</div>
<div>
  <div id="name">Name</div>
  <input type="text" aria-labelledby="billing name"/>
</div>
<div>
  <div id="address">Address</div>
  <input type="text" aria-labelledby="billing address"/>
</div>
```

ARIA roles describe structures that organize content in a page. Document structures are not usually interactive. [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

A lot of what used to be only done with ARIA roles can now be done with semantic HTML5 elements. But sometimes it’s nice to have both for older browsers.

```html
<article role=“article”>Your Content</article>
```

### 5.4. HTML5 & corresponding ARIA roles

|HTML 5       | ARIA Role              |
|-------------|------------------------|
| `<header>`  |  `role="banner"`       |
| `<nav>`     | `role="navigation"`    |
| `<main>`    |  `role="main"`         |
| `<footer>`  | `role="contentinfo"`   |
| `<aside>`   | `role="complementary"` |
| `<section>` | `role="region"`        |
| `<article>` | `role="article"`       |
| `none`      | `role="search"`        |
| `<form>`    | `role="form"`          |

### 5.5. Exercise 3: [Screen Reader](exercise/files/screen-readers/index.html)

Your task is to make it so the entire form can be filled out with only the use of a screen reader.

## 6. Semantic HTML

One of easiest wins for accessibility is to use semantic HTML.

Always make sure the lang attribute is defined in HTML. 

Avoid semantic antipatterns likes these:

- `<div class=”button”></div>`
- `<span class=”checkbox”></span>`
- `<img src=”3443.jpg” />`

Do not be tempted to use h3 instead of h2 for a smaller heading. 

Screen readers use heading hierarchy to provide a list of headers to the user to browse the page. Using the wrong tags can confuse users trying to traverse the page in order.

### 6.1. Exercise 4: [Semantic HTML](exercise-files/semantic-html/index.html)

1. Check the ARIA roles and see if you can find HTML5 elements to replace roles.
2. Make sure all items are using the proper elements.

## 7. ARIA

**A**ccessible **R**ich **I**nternet **A**pplications.

If we really needed to use a non-semantic element, we could make it accessible with JS. Here is an example. 

Adding a role will cause a screen reader to parse it as the role specifies. 

```html
<span role=“button” class=“button”>Click Me</span>
```

Adding a `tabindex` makes it tabbable. 

```html
<span tabindex=“0” role=“button” class=“button”>Click Me</span>
```

Then we need to add both `onclick` and `onKeyUp` listeners. 

```html
<span
	tabindex=“0” role=“button” class=“button”
	onclick=“btnClicked()” onKeyUp=“btnClicked()”
>
Click Me
</span>
```

The handlers would need to be setup also. Things can get messy as we dive deeper.

`aria-describeby` gives a nice description after the focus has rested on an element. 

```html
<button aria-label="Close" aria-describedby="descriptionClose" 
    onclick="myDialog.close()">X</button>
...
<div id="descriptionClose">Closing this window will discard any information entered and return you back to the main page</div>
```

We can even use ARIA in our CSS. 

```css
.dropdown[aria-expanded="false"] .icon::after {
 content: '▶';
}
.dropdown[aria-expanded="true"] .icon::after {
 content: '▼';
}
```

### 7.1. Live Regions

For when we have areas of the page that are dynamic and communicating to screen readers that what happens in these regions is important and needs to be updated to the user. 

- `aria-live` - off/polite/assertive
- `aria-relevant` - additions/removals/text/all

[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

### 7.2. Exercise 5: [Live Regions](exercise-files/js/aria.js)

1. Write some JavaScript in aria.js to give increment and decrement functionality.
2. Use ARIA live regions so that screen readers announce when the count changes.

## 8. Colour

Page content must not flash more than 3 times per second. 

### 8.1. Chrome can simulate visual impairment:

Developer tools > More tools > Rendering > Emulate visual deficiencies

### 8.2. Exercise 6: [Colour](exercise-files/colors/index.html)

1. Experiment with our demo site and other sites.
2. What color schemes seem dangerous to use?

## 9. Tools

### 9.1. Spec

- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag)

### 9.2. Articles

- [WebAIM Resources](http://webaim.org/resources/)
- [WebAIM Checklist](http://webaim.org/standards/wcag/checklist)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [First Website](http://info.cern.ch/hypertext/WWW/TheProject.html)
- [Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [Element Functionality](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [United States Accessibility Laws](http://webaim.org/articles/laws/usa/)

### 9.3. Code

- [Keyboard shortcut library](https://github.com/jkup/shortcut)
- [List of Focusable selectors](https://github.com/jkup/focusable/blob/master/index.js)

### 9.4. Chrome Extensions

- [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)
- [NoCoffee vision simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en-US)

### 9.5. Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and [axe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) (the accessibility portion of Lighthouse is powered by the axe-core API)
- [Tenon.io](https://tenon.io/)
- [Colorsafe](http://colorsafe.co/)
- [Contrast Ratio](https://contrast-ratio.com/)

### 9.6. Links from our discussion

- [tota11y](http://khan.github.io/tota11y/)
- [Slack Channel](http://web-a11y.herokuapp.com/)
- [CSUN Conference](http://www.csun.edu/cod/conference)
- [Deque](http://www.deque.com/)
- [a11ywins Tumblr](https://a11ywins.tumblr.com/)
- [Global Accessibility Awareness Day](http://www.globalaccessibilityawarenessday.org/)
- [Accessible HTML5 Video Player](https://www.paypal-engineering.com/2014/09/05/introducing-an-accessible-html5-video-player/)