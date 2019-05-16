import subtract, { square, add } from './utils';
import isSenior, { isAdult, canDrink } from './person';

console.log('app.js is running');
console.log(square(4));
console.log(add(10, 20));
console.log(subtract(5, 3));
console.log('isAdult', isAdult(15));
console.log('canDrink', canDrink(22));
console.log('isSenior', isSenior(70));
