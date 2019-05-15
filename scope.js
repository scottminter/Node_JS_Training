/**
 * Scopes
 * Local vs Global
 */

/***  Local  ***/
let func = function () {
  let var1 = 'i am local';
  console.log('a: ', var1);
}

func();
// console.log(var1); // throws an error



/***  Global  ***/

// The WRONG way
// let func2 = function () {
//   var2 = 'i am global'; // NEVER DO THIS
//   console.log('b: ', var2);
// }
// func2();
// console.log('c: ', var2);


// // The possibly OK but still probably shouldn't way
// let func3 = function () {
//   global.var3 = 'i am also global';
//   console.log('d: ', var3);
// }
// func3();
// console.log('e: ', var3);







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
// // console.log(mixer);







/**
 * Precedence
 * It will use the more locally scoped variable
 */

// var x = 'outside';

// function go () {
//   let x = 'inside';
//   console.log('x on the inside: ', x);
// }

// go();
// console.log('x on the outside: ', x);
