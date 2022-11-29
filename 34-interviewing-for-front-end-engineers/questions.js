// Remove duplicates from a string
function removeDuplicates(str) {
  const arr = str.split(' ');

  const set = new Set(arr);
  const newStr = [...set].join(' ');

  return newStr;
}

// Without using .flat(), create a function to flatten an array
function flatten(arr) {
  arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// Implement Function.prototype.bind()
/*
const foo = function () {
  console.log(this.bar);
};
let baz = foo.bind({ bar: 'hello' });
baz(); // Hello
*/
Function.prototype.bind = function (context) {
  const fn = this;

  return function () {
    fn.call(context);
  };
};

// Or if we just want to implement bind:
function bind(fn, context) {
  return function () {
    fn.call(context);
  };
}

// How do we deal with arguments?
function bind(fn, context) {
  return function () {
    fn.apply(context, [...arguments]);
  };
}

// Implement debounce
function debounce(fn, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}
// Throttle is a very similar concept
// throttle means to execute the first function call and not any subsequent ones until the time has expired.
function throttle(fn, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      return; // only difference to debounce
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}

// We have two identical DOM trees, A and B. For DOM tree A, we have the location of an element.
// Create a function to find that same element in tree B.
function reversePath(element, root) {
  const path = [];
  let pointer = element;

  while (pointer.parent) {
    // conceptually this is the hardest part because we have to go up to look down to find out its position
    const index = pointer.parent.children.indexOf(pointer);
    path.push(index);

    pointer = pointer.parent;
  }
  // we've switched to the other tree at this point
  pointer = root;

  while (path.length) {
    pointer = children[path.pop()];
  }
}

// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.
function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;
    const progress = elapsed / duration;
    const amountToMove = progress * distance;

    element.style.transform = `translateX(${amountToMove}px)`;

    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}

// Create a sleep function that takes one parameter (time) and
// will wait "time" ms
/*
async function run() {
  await sleep(500);
  console.log('hello');
  await sleep(500);
  console.log('world');
}
*/
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// Create a function to turn any function into a "promisfied" function.
// Any function to be promisified will always have a callback as the last argument.
// The callback will always have this signature:
//   function(result){}

/*
    const exampleFn = function (x, y, callback) {};
    const promisedFn = promisify(exampleFn);
    promisedFn().then(...).then(...)
*/
function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      function cb(result) {
        resolve(result);
      }

      fn.apply(this, args.concat(cb));
    });
  };
}

// Creating a custom setTimeout that takes callback at the end
function customSetTimeout(...args) {
  setTimeout(...args.reverse());
}
// Promisfy in action - using customSetTimeout
let setTimeOutPromise = promisify(customSetTimeout);

function printAndReturnPromise() {
  console.log('First Callback function called');
  return setTimeOutPromise(1000);
}

function printAfterGivenTime() {
  console.log('Second Callback function called');
}

// Promise chain
setTimeOutPromise(2000).then(printAndReturnPromise).then(printAfterGivenTime);
