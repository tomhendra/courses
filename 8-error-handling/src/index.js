// ===============
// ERROR HANDLING
// ===============
// - a feature for telling the programmer how to fix something that's wrong
// - native constructor function in JavaScript


// ----------------------------------------------------------------------------------------------------------
// Errors in JavaScript
// - throw keyword stops script from executing unless error is being handled somehow
// - Error has 3 built in properties:
//   1. name -- name of error
//   2. message -- error message
//   3. stack -- stack trace (where we were in the call stack when error happened)
// - many built in constructors for errors, such as
//   - SyntaxError
//   - ReferenceError
// - we use catch to catch errors! runtime handles errors if there is no handling defined
// ----------------------------------------------------------------------------------------------------------

// can throw anything in JS...
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw Error       // Constructor function
throw new Error // will create an instance of an Error in JavaScript and stop the execution of your script. 

function a() {
  const b =  new Error('what?')
  return b
}

a().stack

let error = new Error(message);
let error2 = new SyntaxError(message);
let error3 = new ReferenceError(message);


// ----------------------------------------------------------------------------------------------------------
// Try / catch
// ----------------------------------------------------------------------------------------------------------

function fail() {
    try {
      console.log('this works');
      throw new Error('oopsie');
    } catch(e) {
      console.log('error', e);
    } finally {
      console.log('still good');
      return 'returning from fail';
    }
    console.log('never going to get here'); // not reachable
  }
  fail();
  