/* In ES5 */
console.log('A: ', hoist); // output: undefined
var hoist = 'The variable to be hoisted.';

// // what javascript is doing
// var hoist2;
// console.log('B: ', hoist2);
// hoist2 = 'The variable to be hoisted.';



// Same thing with function scoped variables
// function doSomething () {
//   console.log('C: ', fnHoist);
//   var fnHoist = 'The variable in a function to be hoisted';
// }
// doSomething();

// // // What JS is doing
// function doSomething2 () {
//   var fnHoist;
//   console.log('D: ', fnHoist);
//   fnHoist = 'The variable in a function to be hoisted';
// }
// doSomething2();




/* In ES6 with `let` */
// this now throws an error
// console.log(hoist2); // Output: ReferenceError: hoist is not defined ...
// let hoist2 = 'The variable has NOT been hoisted.';


// but this won't
// let hoist2;
// console.log('A: ', hoist2); // Output: undefined
// hoist2 = 'Hoisted'

/**
 * Best practice is to declare your variable at the top of their scope. 
 */

// function ridiculous (word1, word2) {
//   let a = 'first',
//     b = 'second',
//     c = 'third';

//   return a + ' ' + word1 + ' ' + b + ' ' + word2 + ' ' + c;
// }

// let ridiculousString = ridiculous('summer', 'bottle');
// console.log('B: ', ridiculousString);
