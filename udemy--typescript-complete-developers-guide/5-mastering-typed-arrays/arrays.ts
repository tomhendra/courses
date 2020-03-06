// When working with arrays in TS, the general rule is that they should only contain one type
// in TS we use arrays when we need to represent a collection of records in some arbitrary sort order.

// annotations should be used when initialising an empty array. Otherwise inference should be used
const carMakers = ['seat', 'opel', 'tesla'];
const cars: string[] = [];

// complex objects...
const dates = [new Date(), new Date()];

// 2D arrays...
const carsByMake = [['Leon'], ['Corsa'], ['Type S']];
const carMakes: string[][] = [];

// Why do we care about types in arrays?
// 1) TS can do type inference when extracting values from arrays
// 2) TS  can prevent us rom adding incompatible values to arrays
// 3) We can get help with map, reduce & forEach methods
// 4) Flexible - arrays can still contain multiple types

// help with inference when extracting values
// TS knows car / myCar is a string
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with map
// can access string methods on car inside map body
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), '2030-10-10'];
const someDates: (Date | string)[] = [];
