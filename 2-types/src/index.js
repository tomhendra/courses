// ====================
// TYPES IN JAVASCRIPT 
// ====================

// ----------------------------------------------------------------------------------------------------------
// Exercise 1 --- compare objects
// How would you compare two objects if they are pointing to a different location in memory but still have 
// the same properties?
// ----------------------------------------------------------------------------------------------------------
var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// alert(eq); // gives false
var eq = JSON.stringify(user1) === JSON.stringify(user2) ? true : false;
console.log(eq);

// ----------------------------------------------------------------------------------------------------------
// Exercise 2 --- Pass By Reference
// ----------------------------------------------------------------------------------------------------------
const number = 100
const string = "Jay"
let obj1 = {
  value: "a"
}
let obj2 = {
  value: "b"
}
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
    console.log(number); // 1000
    console.log(string); // 'Pete'
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); // 100
console.log(string); // 'Jay'
console.log(obj1.value); // 'c'

// ----------------------------------------------------------------------------------------------------------
// Exercise 3 --- Type coercion
// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines 
// below are:
// ----------------------------------------------------------------------------------------------------------
false == ""  // true
false == []  // true
false == {}  // false
"" == 0 // true
"" == [] // true
"" == {} // false
0 == [] // true
0 == {} // false      
0 == null // false