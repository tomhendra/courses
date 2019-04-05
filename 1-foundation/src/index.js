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
// Exercise: call(), apply()
// How would you implement this:
// ----------------------------------------------------------------------------------------------------------

const array = [1,2,3];
 
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);  
}
 
getMaxNumber(array) // should return 3