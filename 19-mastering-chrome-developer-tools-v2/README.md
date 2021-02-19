<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Mastering Chrome Developer Tools v2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. A History of Debugging](#11-a-history-of-debugging)
- [2. Editing](#2-editing)
  - [2.1. Editing and Styles](#21-editing-and-styles)
  - [2.2. Specificity and DOM Nodes](#22-specificity-and-dom-nodes)
  - [2.3. Break on DOM Changes](#23-break-on-dom-changes)
  - [2.4. Save Changes to Disk](#24-save-changes-to-disk)
  - [2.5. Recent Selection History](#25-recent-selection-history)
- [3. Debugging](#3-debugging)
  - [3.1. Step Through Debugging](#31-step-through-debugging)
  - [3.2. Blackboxing](#32-blackboxing)
  - [3.3. Conditional and XHR Breakpoints](#33-conditional-and-xhr-breakpoints)
- [4. Networking](#4-networking)
  - [4.1. The Waterfall](#41-the-waterfall)
  - [4.2. Colour Codes](#42-colour-codes)
  - [4.3. Screenshots](#43-screenshots)
- [5. Auditing](#5-auditing)
- [6. Node.js Profiling](#6-nodejs-profiling)
- [7. Performance Monitoring](#7-performance-monitoring)
  - [7.1. The Performance API](#71-the-performance-api)
- [8. Image Performance](#8-image-performance)
  - [8.1. Querying by Size](#81-querying-by-size)
- [9. Page Jank](#9-page-jank)
  - [9.1. The Performance Panel](#91-the-performance-panel)
- [10. Memory](#10-memory)
  - [10.1. Causes of Memory Leaks](#101-causes-of-memory-leaks)
  - [10.2. Chrome Task Manager & Snapshots](#102-chrome-task-manager--snapshots)
- [11. Experiments](#11-experiments)

## 1. Introduction

This is part of the Frontend Masters Beginner Track.

Go beyond console.log to master all the built-in tools available in Google’s Chrome Developer Tools to edit, debug, and profile your web applications! You'll learn to step through your code with the debugger, audit web page performance, debug Node.js, and remove “page jank” when a site isn’t keeping up.

- [Course link](https://frontendmasters.com/courses/chrome-dev-tools-v2/).\
- [Slides](https://slides.com/jkup/devtools/).\
- [Workshop repo](https://github.com/jkup/mastering-chrome-devtools).

The following topics are covered:

- Use the DevTools as an IDE.
- Debug complex applications.
- Analyze network traffic.
- Audit a website.
- Monitor real user performance.
- Profile CPU usage.
- Analyze Node.js performance.
- Find and fix memory leaks.
- Tips & tricks.

### 1.1. A History of Debugging

- Back in the day the only debugging tool available was view source.
- The problem was you can't interact with view source, and needed to use `alert()` to try and debug.
- Then a tool [Live DOM Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/) was created which gives a representation as to how the browser renders based on the HTML instructions given to it.
- Following on from Live DOM Viewer, Mozilla released Firebug which was the first real debugging tool available.
- After Firebug all the major browsers included their own devtools which we use today.
- The Chrome DevTools docs can be found [here](https://developers.google.com/web/tools/chrome-devtools/).

## 2. Editing

- Using the DevTools to author code in some capacity.
- You can use the DevTools as a full time IDE.
- You can do some amazing things.

### 2.1. Editing and Styles

- Edit HTML and CSS.
- Save and reuse a colour palette.
  - Click any color swatch shown in Styles panel.
- Scroll items into view right.
  - Click in elements panel > Scroll into view.
- Hide and show elements.
  - <kbd>H</kbd> or <kbd>Delete</kbd> to remove from document flow.
- Trigger various states.
  - Select element and click on :hov.

### 2.2. Specificity and DOM Nodes

- Display computed styles.
  - click computed styles tab.
  - Clicking the arrow in computed styles panel will point to the relevant CSS declaration.
  - Useful in big apps that have 100's of selectors.
- Find event listeners.
  - Click Event Listeners tab.
- Change colour formats.
  - Hold shift while clicking any color swatch in the styles panel.
- Drag and Drop DOM nodes.
  - Use select tool > hold click in elements panel > drag and drop.
- Visualize CSS specificity.
  - Styles panel will show ~~strikethrough~~ when another declaration has higher specificity.
- Pretty print source code.
  - Pretty-print this minified file option appears when selecting file in sources panel.
  - However beware of uglification where variables are shortened etc - best not to debug production code.

### 2.3. Break on DOM Changes

- Where there is a visible bug but you don't know where to look in the code you can set a DOM breakpoint. This shows the JS that executes the change to the DOM.
  - Right click in elements panel > break on.

### 2.4. Save Changes to Disk

- Chrome can persist changes to disk, through adding local files to a workspace.
- DevTools will map the local files to the files being served at localhost.
  - Sources > File system > Add folder to workspace.
  - Green dots will appear in the UI which means Chrome is successfully syncing (mapping files correctly).
  - Anything that you edit in the styles tab will persist to disk.
  - Anything that you edit in the elements tab will NOT persist to disk, since we are editing the DOM which Chrome is creating from the HTML, it makes sense that we would not be able to edit HTML directly from the elements tab.
  - You cannot add a new selector in the styles tab and have it persist to disk.
  - If you want to edit files directly, you can do so in the sources tab.
- Works with Sass, however some build tools may not be supported (Webpack?).

### 2.5. Recent Selection History

- Select an element in the elements panel > <kbd>esc</kbd> to show console > type `$0` returns currently selected element.
- `$1`, `$2`, `$3`... to show history.
- Useful to call JS functions on DOM elements in the console.

## 3. Debugging

- **💡Pro tip:** <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> opens a shortcut panel where you can navigate panels.
- **💡Pro tip:** <kbd>Command</kbd> + <kbd>P</kbd> searches all files the browser has access to.

### 3.1. Step Through Debugging

- Setting a breakpoint will tell the parser as soon as it hits the breakpoint, pause and show what's going on.
- The `debugger` keyword can be used anywhere in your code to set a breakpoint.
- The danger is that you can ship this to production - need a linting rule to ensure it's not shipped!
- Refresh the page with DevTools open to trigger `debugger`.
- Can also click on the line number in sources panel to create a breakpoint.
- Options for navigation are:
  - Resume script execution (skip the breakpoint and move to the next one).
  - Step over a function (equivalent to stepping into and out of the function, moves onto next function).
  - Step into a function.
  - Step out of a function.
  - Step (do the next thing: Step over if not a function or step into if a function).
- The Debugger is unidirectional as it's parsing, so it's not a time travelling debugger (like Redux DevTools is). Once you step in and out of a function, you move to the next line.
- **Watch** is very useful. Allows you to input any expression.
  - If you input a variable name, it will tell you (if that variable is defined in the current scope) what the variable is set to.
  - Watch will also keep track of the variables added even when in a different scope as you step through the code.
- **Call Stack** says how did we get here.
  - Can see the call site of where the function was invoked.
- **Scope** is pretty handy for seeing exactly what you have access to at a specific moment in time.
  - There can be a lot of noise here, so typically its better to use watch.
- **Breakpoints** simply shows a list of breakpoints added for debugging.
  - Can uncheck them which stores in cache but prevents them from triggering the debugger. (light blue means deactivated).

### 3.2. Blackboxing

- Blackboxing scripts is really important.
- When trying to debug an application which uses a framework, often there will be 100s of functions in the Call Stack, lots of which are React or Redux internals.
- If you see a filename from a third party that you are not interested in, you can right click > blackbox script.
- This will hide its functions from the Call Stack panel.
- Can also add permanent blackboxes in settings > blackboxing > add pattern.
- You can un-blackbox script if you wish. Chrome just compresses the Call Stack, rather than remove access totally.

### 3.3. Conditional and XHR Breakpoints

- If you are looking for the cause of an error from a reused function, and only want to see when the function is called under a certain condition.
- Right click on line number > add conditional breakpoint.
- Add a condition, and the breakpoint will only pause the debugger when the condition is met.
- **XHR/Fetch** breakpoints allow you to pause the debugger only when you make a request for a URL, if the URL contains a certain string.
- Unlike the step through debugger, the Call Stack is time travelling.

## 4. Networking

### 4.1. The Waterfall

- As the website loads all the HTTP requests will be shown in the waterfall.
- X axis is time.
- For the most part, the files are shown in the order they are requested.
- Holding <kbd>Shift</kbd> over a file will highlight in green the file that called it, or in red which files it called.

### 4.2. Colour Codes

- See [slides](https://slides.com/jkup/devtools/#/13/1) for colours.

- **Light Grey: Queuing**

  - A request being queued indicates that:
  - The request was postponed by the rendering engine because it's considered lower priority than critical resources (such as scripts/styles). This often happens with images.
  - The request was put on hold to wait for an unavailable TCP socket that's about to free up.
  - The request was put on hold because the browser only allows six TCP connections per origin on HTTP 1.
  - Time spent making disk cache entries (typically very quick.)

- **Dark Grey: Stalled / Blocking**

  - Time the request spent waiting before it could be sent.
  - It can be waiting for any of the reasons described for Queueing.
  - Additionally, this time is inclusive of any time spent in proxy negotiation.

- **Medium Gey: Proxy Negotiation**

  - Time spent negotiating with a proxy server connection.

- **Teal: DNS Lookup**

  - Time spent performing the DNS lookup.
  - Every new domain on a page requires a full roundtrip to do the DNS lookup.

- **Initial Connection / Connecting**

  - Time it took to establish a connection, including TCP handshakes/retries and negotiating a SSL.

- **Brown: SSL**

  - Time spent completing a SSL handshake.

- **Bright Fluorescent Green: Request Sent / Sending**

  - Time spent issuing the network request. Typically a fraction of a millisecond.

**Long patterns of the colours prior to this point would indicate network configuration issues, so would be dealt with by the ops team.**

- **Less Bright Fluorescent Green: Waiting (TTFB)**

  - Time spent waiting for the initial response, also known as the Time To First Byte.
  - This time captures the latency of a round trip to the server in addition to the time spent waiting for the server to deliver the response.
  - Long patterns would indicate a slow application server.

- **Bright Blue: Content Download / Downloading**

  - Time spent receiving the response data.

### 4.3. Screenshots

- Click Network settings > Capture screenshots to capture a filmstrip when reloading.
- Recommend to undock DevTools to separate window as screenshots will be of the viewable area.
- When you refresh, it shows every repaint that happens at that stage in time.
- Can see which parts of the page loads first.
- Important to consider how people with slow connections will see content.
- Can inline CSS to make critical elements viewable earlier.

## 5. Auditing

- If the application isn't live online, you are limited in what tools you can use.
- Performance improvements can quickly translate to money:
  - Google.com: +500 ms (speed decrease) -> -20% traffic loss
  - Yahoo.com: +400 ms (speed decrease) -> -5-9% full-page traffic loss (visitor left before the page finished loading)
  - Amazon.com: +100 ms (speed decrease) -> -1% sales loss
- [Webpagetest](https://www.webpagetest.org).
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/).
- [Webhint](https://webhint.io).

## 6. Node.js Profiling

- Use the inspect flag e.g. `node --inspect server/index.js` and node icon appears in DevTools.
- DevTools no longer looks at frontend assets, rather the actual backend application.
- Can press start in the Profiler, refresh the page in the browser, and get a flame chart.
- X axis is time, Y axis is the Call Stack.
- Hold shift to scroll on the Y axis.
- A function may look like it is taking a long time, but it can only take as long as the combined time of its children functions.
- Best way to approach is to look for the last function that took a long time, which has children that didn't take a long time.
- Anything that's taking a second is too long and should be looked at.
- Can also see all the stuff Webpack is doing with the `--inspect` flag.
- Always keep the profiling record as short as possible, so you are only capturing what you are interested in.

## 7. Performance Monitoring

### 7.1. The Performance API

- There is a difference between you testing with fast machine locally, and the user with any kind of connection and hardware.
- We have the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) to measure performance.
- Before the performance API monitoring used to be done with DateTimes.
- The performance API methods we are interested in are `.mark()` and `.measure()`.
- Writing code to measure performance in Userland would require a POST request to grab data.
- Lots of popular apps have performance API code in production.
- The profiler in DevTools gives you access a Timings UI in the Performance section.

## 8. Image Performance

### 8.1. Querying by Size

- Make images smaller if you can.
- Remove metadata using an image optimizer.
- Use the `srcset` API:

```html
<img
  src="small.jpg"
  srcset="small.jpg 300w, medium.jpg 800w, large.jpg 1200w"
/>
```

- The browser will only make a new HTTP request for larger images.
- If the browser window shrinks, the already downloaded larger image will be used, since the cost to repaint the browser is less than to fetch a new image.
- However increasing the size of the browser image with a smaller image will result in visible lower quality, so an HTTP req is made for a larger image in this case.

## 9. Page Jank

- We focus a lot on size of files, images etc, but we also need to consider parse time by the rendering engine of the browser ([V8](https://medium.com/reloading/javascript-start-up-performance-69200f43b201)).
- We can Gzip and minify, but this doesn't affect the parse time.
- Parse time becomes an issue for devices with lower end CPUs, i.e. mobile & older computers.
- **Page Jank** is when things become jittery on screen, when the animation is supposed to be smooth.
- We should be aiming for 60FPS for animations:
  - Most devices today refresh their screens 60 times a second (60Hz).
  - The browser needs to match the device’s refresh rate and put up 1 new picture, or frame, for each of those screen refreshes.
  - Each of those frames has a budget of just over 16ms (1 second / 60 = 16.66ms).
  - In reality, however, the browser has housekeeping work to do, so all of your work needs to be completed inside 10ms.
- If the browser has too much work to do, it will skip frames, which causes page jank.
- Another cause of page jank is **layout thrashing**.
  - We do things when we interact with the DOM:
    1. We read values from it (what's the screen height, what's the width, the colour).
    2. We write values to it (innerText, innerHTML, classList).
  - When you read something from the DOM, Chrome can cache things.
  - But when you change something, Chrome disposes of the cache.

```js
// Read
var h1 = element1.clientHeight;

// Write (invalidates layout)
element1.style.height = h1 * 2 + "px";

// Read (triggers layout)
var h2 = element2.clientHeight;

// Write (invalidates layout)
element2.style.height = h2 * 2 + "px";

// Read (triggers layout)
var h3 = element3.clientHeight;

// Write (invalidates layout)
element3.style.height = h3 * 2 + "px";
```

- In an ideal world we would batch these operations together, but this simply is not possible.
- What we do have is [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).
- Sort of asynchronous way of saying to the browser "when you're about to render the next frame, I have some stuff I need to do first".
- On top of `requestAnimationFrame()` there are some libraries like [FastDOM](https://github.com/wilsonpage/fastdom).
- Libraries like React and Angular make heavy use of `requestAnimationFrame()` under the hood.
- Demo using [Koalas to the Max](https://www.koalastothemax.com):
- Press <kbd>Esc</kbd> to being up console > 3 dots > Rendering > Paint flashing.
- This highlights what is being repainted.
- The aim with heavy animations is that only the parts that are moving should get repainted.
- For websites that are repainting everything, you should look at calls to reads and writes of DOM elements.
  - Are you grabbing body.height every time?
  - Are you reading then immediately writing & invalidating the layout?

### 9.1. The Performance Panel

- Hit the record button, scroll around, hit the stop button.
- Remember with CPU performance monitoring we want the recording to be small: 1 second, 2 at the most.
- From the bottom panel up:

1. Summary: self-explanatory!
2. Memory graph: Showing us out of all the things that happened, how much memory was allocated.
3. Two remaining bars: FPS / CPU / NET + everything else below. Both have X axis as time.

- The top panel is the overview. Higher level.
  - The green is FPS: lower is better, as higher means the browser is doing more work.
  - When you see a bad example with dropped frames, a read bar will appear.
- The lower panel shows all of the call graphs.
- Almost always you want to see what's happening in the main thread first.
- Tall is just functions calling others.
- Wide is what we are looking for to identify potential performance savings.
- Again if Chrome thinks you are doing to much and frames are being dropped, red boxes will appear.
- If you click on a box you can use <kbd>W</kbd> <kbd>S</kbd> <kbd>A</kbd> <kbd>D</kbd> to navigate.
- If you click on a box the summary panel updates contextually, and clicking the function link will take you to the sources panel, where the functions will display a time automatically.

## 10. Memory

### 10.1. Causes of Memory Leaks

- Memory works in the way of: Allocate Memory > Use Memory > Release Memory.
- Memory leaks in JS happen when the memory cannot be released.
- Graphs will show memory usage increasing without decreasing again when memory leaks occur.
- Common causes:
- **The accidental global.**

```js
// Forget to put a var or const declaration and you're not in strict mode,
// JS will create the variable on the window object.
function foo() {
  bar = "This is probably not what you meant!";
}
```

- **The forgotten timer.**

```js
//
const data = getData();
// setInterval and setTimeout APIs both return a token which you can call cancel on.
// Should store this in a variable and whenever you hit the finish condition you remove it,
// otherwise this will continue forever!
setInterval(() => {
  document.innerHTML = JSON.stringify(data);
}, 1000);
```

- **The DOM and not the DOM.**

```js
// Grab from the DOM and later remove the child.
// But haven't removed the handler to the global button variable, leaving it open.
const button = document.getElementByID("button");
// Then later
function removeButton() {
  document.removeChild(
    document.getElementByID("button");
  )
}
```

### 10.2. Chrome Task Manager & Snapshots

- Settings > More tools > Task manager (right click > JavaScript memory).
- Performance panel is best for figuring out what's causing the memory leak, the Task manager is best for seeing what's going on.
- A continuously increasing memory usage indicates a leak.
- Opposite to CPU: For memory performance monitoring, a longer recording is better. 10 seconds for example.
- An increasing memory usage graph in the performance profiler recording confirms a leak.
- Once you've confirmed there is a memory leak with the Task Manager & Performance Recording, move to the Memory panel.
- Now are looking into what is using the memory; performing deeper analysis.
- Three tools in the memory panel:
  - Heap Snapshot: Grabs the while memory heap. Can also take multiple and compare them to each other.
  - Allocation instrumentation: A few Heap Snapshots over time. Identify patterns.
  - Allocation sampling: More Heap Snapshots over a longer periods of time.
- There are shallow and retained sizes for memory in the Memory panel.
- Shallow is the size of the data structure. Retained is the size of the data that is pointed to. So if a variable points to a huge array, if the variable could be garbage collected, retained is the potential memory that could be freed up.
- Can take two snapshots and change the Summary dropdown to Comparison to see differences between the two snapshots.
- Memory panel cannot identify source code, but if the issue is with a DOM node, you can use the `$0` trick to bring the variable into console.

## 11. Experiments

- Type chrome://flags/ into Chrome to enable dangerous/cool experimental features!
- Gives you an idea of what's coming next in DevTools.
