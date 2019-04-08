// ====================
// TYPES IN JAVASCRIPT 
// ====================

// ----------------------------------------------------------------------------------------------------------
// Exercise 1 --- compare objects
// How would you compare two objects if they are pointing to a different location in memory but still have the 
// same properties?
// ----------------------------------------------------------------------------------------------------------

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// alert(eq); // gives false
var eq = JSON.stringify(user1) === JSON.stringify(user2) ? true : false;
console.log(eq);