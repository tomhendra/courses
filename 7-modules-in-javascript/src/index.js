// ======================
// MODULES IN JAVASCRIPT
// ======================
// - grouping different pieces of code to organize things
// - good modules are highly self-contained & grouped together with their own specifically functionality
// - good modules allow for moving around and removal without disrupting the application as a whole

// ----------------------------------------------------------------------------------------------------------
// Module patterns
// - before ES Modules existed, developers used closure and encapsulation to create module pattern
// - global scope > module scope > function scope
// - can use IIFE to imitate module scope
// ----------------------------------------------------------------------------------------------------------

var globalSecret = '1234';

// IIFE -- immediately invoked function expression
var fightModule = (function(gs) {
    // removes everything from the global scope
    var harry = 'potter'
    var voldemort = 'He who must not be named'
    console.log(gs);

    function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    // this pattern of returning what is needed is called the revealing module pattern
    return {
        fight: fight
    }
})(globalSecret) // can pass in global variables to the IIFE

console.log(fightModule.fight('ron', 'hagrid'))

// pros
// - only revealing one variable -- only polluting global namespace with one variable
// - can wrap everything in this one variable, which is an object
// - updating a single module is much easier when this module is decoupled from the rest of the code
// - idea of reusability

// cons
// - two main problems:
// 1. still technically polluting the global namespace
// 2. we don't necessarily know all the dependencies -- order of script tags in html must be correct

// to fix these issues two solutions came about:
// 1. CommonJS (& browserify)
// 2. AMD (asynchronous module definition) (& require js)
