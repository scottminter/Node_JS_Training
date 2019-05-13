/* In ES5 */
// console.log('A: ', hoist); // output: undefined
// var hoist = 'The variable to be hoisted.';

// // what javascript is doing
// var hoist;
// console.log('B: ', hoist);
// hoist = 'The variable to be hoisted.';



// // Same thing with function scoped variables
// function doSomething () {
//   console.log('C: ', fnHoist);
//   var fnHoist = 'The variable in a function to be hoisted';
// }
// doSomething();

// // What JS is doing
// function doSomething2 () {
//   var fnHoist;
//   console.log('D: ', fnHoist);
//   fnHoist = 'The variable in a function to be hoisted';
// }
// doSomething2();




/* In ES6 */
// this now throws an error
// console.log(hoist); // Output: ReferenceError: hoist is not defined ...
// let hoist = 'The variable has been hoisted.';


// but this won't
let hoist2;
console.log('A: ', hoist2); // Output: undefined
hoist2 = 'Hoisted'

/**
 * Best practice is to declare your variable at the top of their scope. 
 */

function ridiculous (word1, word2) {
  let a = 'first',
    b = 'second',
    c = 'third';

  return a + word1 + b + word2 + c;
}

let ridiculousString = ridiculous('summer', 'fish oil');
console.log('B: ', ridiculousString);
