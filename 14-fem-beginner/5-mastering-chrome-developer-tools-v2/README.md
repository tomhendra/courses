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

## 1. Introduction

Go beyond console.log to master all the built-in tools available in Google’s Chrome Developer Tools to edit, debug, and profile your web applications! You'll learn to step through your code with the debugger, audit web page performance, debug Node.js, and remove “page jank” when a site isn’t keeping up.

[Course link](https://frontendmasters.com/courses/chrome-dev-tools-v2/).\
[Slides](https://slides.com/jkup/devtools/).\
[Workshop repo](https://github.com/jkup/mastering-chrome-devtools).\

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
  - Useful in bog apps that have 100's of selectors.
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
