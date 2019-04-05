// ======================
// JAVASCRIPT FOUNDATION
// ======================

// ----------------------------------------------------------------------------------------------------------
// Exercise 1 -- Fix This Code
// ----------------------------------------------------------------------------------------------------------

// fill array with 60000 elements
/* 
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();
*/

// solution
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        setTimeout(removeItemsFromList, 0);
    }
};
 
removeItemsFromList();

// ----------------------------------------------------------------------------------------------------------
// Exercise 2 -- call(), apply()
// How would you implement this:
// ----------------------------------------------------------------------------------------------------------

const array = [1,2,3];
 
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);  
}
 
getMaxNumber(array) // should return 3

// ----------------------------------------------------------------------------------------------------------
// Exercise 3 -- this Keyword 2
// Run this code, and you will see there is an issue. How would you fix it?
// ----------------------------------------------------------------------------------------------------------

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character); // added .bind(character);
 
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't