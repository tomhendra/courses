"use strict";

function foo() {
  return 42;
}
function bar() {
  return 10;
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function constant(v) {
  return function f() {
    return v;
  };
}
// add2( constant(42), constant(10) );		// 52

// with iteration:
function addn(...fns) {
  while (fns.length > 2) {
    let [fn0, fn1, ...rest] = fns;
    fns = [
      function f() {
        return add2(fn0, fn1);
      },
      ...rest,
    ];
  }
  return add2(fns[0], fns[1]);
}
addn(constant(3), constant(7), foo, bar, constant(11));

// with recursion:
function addn([fn0, fn1, ...rest]) {
  if (rest.length == 0) return add2(fn0, fn1);

  return addn([
    function f() {
      return add2(fn0, fn1);
    },
    ...rest,
  ]);
}
addn([constant(3), constant(7), foo, bar, constant(11)]);

// with reduce:
function addn(...fns) {
  return fns.reduce(function reducer(composedFn, fn) {
    return function f() {
      return add2(composedFn, fn);
    };
  })();
}
addn(constant(3), constant(7), foo, bar, constant(11));

var vals = [7, 4, 8, 0, 10, 7, 3, 2, 5, 9, 12, 6, 4, 1, 7, 8];

addn(
  vals
    .reduce(function unique(newList, num) {
      if (!newList.includes(num)) return [...newList, num];
      return newList;
    }, [])
    .filter(function isEven(v) {
      return v % 2 == 0;
    })
    .map(constant)
);
