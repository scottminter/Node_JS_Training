/**
 * Scopes
 * Local vs Global
 */

/***  Local  ***/
// let func = function () {
//   let var1 = 'i am local';
//   console.log('a: ', var1);
// }
// func();
// console.log(var1); // throws an error



/***  Global  ***/

// The WRONG way
// function func2 () {
//   badGlobal = 'i am BAD global'; // NEVER DO THIS
//   console.log('b: ', badGlobal);
// }
// func2();
// console.log('c: ', badGlobal);


// The possibly OK but still probably shouldn't way
// let func3 = function () {
//   global.betterGlobal = 'i am better global';
//   console.log('d: ', betterGlobal);
// }
// func3();
// console.log('e: ', betterGlobal);







/**
 * Parent vs Child Scope
 * 
 * Child can access the parent scope.
 * Parent cannot access the child scope.
 */
// let customer = 'Scott';

// function blender (fruit) {
//   let flavor = fruit,
//     mixer = 'yogurt';

//     function blendSmoothie () {
//       let size = 'large';
//       console.log(customer + ' ordered a ' + size + ' ' + flavor + ' and ' + mixer + ' smoothie.');
//     }
//     // console.log(size);
//     blendSmoothie();
// }

// blender('blueberry');
// console.log(mixer);







/**
 * Precedence
 * It will use the more locally scoped variable
 */

// let x = 'outside';

// function go () {
//   let x = 'inside';
//   console.log('x on the inside: ', x);
// }

// go();
// console.log('x on the outside: ', x);
