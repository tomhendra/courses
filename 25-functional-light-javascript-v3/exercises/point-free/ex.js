"use strict";

/************** Refactor these *************

function output(txt) {
	console.log(txt);
}

function printIf(shouldPrintIt) {
	return function(msg) {
		if (shouldPrintIt(msg)) {
			output(msg);
		}
	};
}

function isLongEnough(str) {
	return !isShortEnough(str);
}
*/

// ************** utilities *****************

// predicate is a special name for a (generally unary) function that is going to return a true / false value
function not(predicate) {
  return function negated(...args) {
    return !predicate(...args);
  };
}

// when is essentially a functional if statement
function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

// ************** Solution *****************

var output = console.log.bind(console);
var isLongEnough = not(isShortEnough);
var printIf = when(output);

// printIf     (isShortEnough)(msg1)
// when(output)(isShortEnough)(msg1)
// Same shape  (isShortEnough)(msg1)

// ******************************************

function isShortEnough(str) {
  return str.length <= 5;
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
