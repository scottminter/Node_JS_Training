/**
 * Scopes
 */

/* Local */
let func = function () {
  let loc = 'i am local';
  console.log(loc);
}

func();
// console.log(loc); // throws an error

/* Global */
// let func2 = function () {
//   loc2 = 'i am global'; // NEVER DO THIS
//   console.log(loc2);
// }

// func2();
// console.log(loc2);

// let bar = 4;
// let func2 = function () {
//   console.log(bar);
//   bar = 50;
// }

// console.log(bar);
// func2();
// console.log(bar);



/**
 * Parent vs Child Scope
 * 
 * Child can access the parent scope.
 * Parent cannot access the child scope.
 */
// let g = 'global';

// function blender (fruit) {
//   let b = fruit,
//     y = 'yogurt';

//     function blendSmoothie () {
//       let size = 'lg';
//       console.log(b + ' and ' + y + ' makes ' + size + ' ' + b + ' swirl');
//     }
//     // console.log(size);
//     blendSmoothie();
// }

// blender('blueberry');
// // console.log(size);


/**
 * Precedence
 */

// var g = 'global';

// function go () {
//   let g = 'local';

//   console.log(g + ' inside go');
// }

// go();
// console.log(g + ' outside go');
