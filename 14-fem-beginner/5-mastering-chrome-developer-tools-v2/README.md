<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Mastering Chrome Developer Tools v2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. A History of Debugging](#11-a-history-of-debugging)

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
