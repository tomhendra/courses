// TODO: write `findAll(..)`
// - exact matches (`Object.is(..)`)
// - strings (except "" or whitespace-only) can match numbers
// - numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
// - `null` can match `undefined`, and vice versa
// - booleans can only match booleans
// - objects only match the exact same object

function findAll(match, arr) {
  var result = [];
  for (let v of arr) {
    // Object.is determines whether two values are exactly the same.
    if (Object.is(match, v)) {
      result.push(v);
      // null and undefined are coercively equal.
    } else if (match == null && v == null) {
      result.push(v);
      // booleans can only match booleans.
    } else if (typeof match == 'boolean' && typeof v == 'boolean') {
      if (match == v) {
        result.push(v);
      }
    } else if (
      // strings (except "" or whitespace-only) can match numbers
      // account for all corner cases, so we can trust == to coerce.
      typeof match == 'string' &&
      match.trim() != '' && // except "" or whitespace-only
      typeof v == 'number' &&
      !Object.is(-0, v)
    ) {
      if (match == v) {
        result.push(v);
      }
    } else if (
      // numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
      // account for all corner cases, so we can trust == to coerce.
      typeof match == 'number' &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      typeof v == 'string' &&
      v.trim() != ''
    ) {
      if (match == v) {
        result.push(v);
      }
    }
  }
  return result;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  '',
  '0',
  '42',
  '42hello',
  'true',
  'NaN',
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, '0']) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, '42']) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll('', values), ['']) === true);
console.log(setsMatch(findAll('0', values), [0, '0']) === true);
console.log(setsMatch(findAll('42', values), [42, '42']) === true);
console.log(setsMatch(findAll('42hello', values), ['42hello']) === true);
console.log(setsMatch(findAll('true', values), ['true']) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, '42hello']) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll('', values), ['', 0]) === false);
console.log(setsMatch(findAll('false', values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, 'true']) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
