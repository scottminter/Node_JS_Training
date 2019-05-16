/**
 * Requiring a file just executes the code inside
 */
// require('./ex1');



/**
 * Node gives us the export function
 * allowing us to save what is exported as a variable
 * - you can export functions
 * - you can export objects
 * - you can export objects with functions
 */
// let doSomething = require('./ex2');
// console.log(doSomething);
// doSomething('blueberry', 'oatmeal');



// let myObj = require('./ex3.js');
// console.log(myObj);



let anotherObj = require('./ex4');
console.log(anotherObj);
console.log(anotherObj.data);
anotherObj.func1();
anotherObj.func2();



