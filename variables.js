/**
 * Const vs Let vs Var
 * Var is function scoped
 * Let is block scoped
 * 
 * https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe
 */
'use strict';
/**
 * Const
 * It can't be reassigned
 * But can be added to
 */

const myConst = 'My Const';
console.log(myConst);

// you can add to objects
// const myObj = {
//   name: 'Scott',
//   age: 25
// };

// you can even override values in the object
// myObj.title = 'developer';
// console.log(myObj);

// you cannot reassign the variable though
// myObj = {};








/**
 * Var
 * It's function scoped
 * Use this if using anything < Node 6
 */

// var x = 5;
// console.log(x);

// x = 'look at my variable';
// console.log(x);

// x = null;
// console.log(x);

// x = {
//   name: 'Scott'
// };
// console.log(x);







/**
 * Let
 * It's block scoped
 * Use this for Node 6+
 */
// let y = 10;
// console.log(y);

// y = 'i reassigned my variable';
// console.log(y);

// y = {
//   name: 'Not Scott'
// };
// console.log(y);




/**
 * What's the difference look like?
 */


// Block scope
if (1 === 1) {
  var a = 200;
  console.log('a: ', a);
}
console.log('a: ', a);

if (1 === 1) {
  let b = 100;
  console.log('b: ', b);
}
console.log(b);
