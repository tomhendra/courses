// Tuple: Array-like structure where each element represents some property of a record
// order inside of a tuple has a very specific meaning

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// annotation declared with order of elements, so error message will fire if we try to change order
const pepsi: [string, boolean, number] = ['brown', true, 40];

// alternate way is with type alias...
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 80];
