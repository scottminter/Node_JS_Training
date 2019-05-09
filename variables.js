/**
 * Const vs Let vs Var
 * Var is function scoped
 * Let is block scoped
 */
// calling x after definition 
var x = 5;
console.log(x);

// calling y after definition  
let y = 10;
console.log(y);

// calling var z before definition will return undefined 
console.log(z);
var z = 2;

// calling let a before definition will give error 
console.log(a);
let a = 3;

// using let is best practice for Node version 6^
// this is also a good reason to declare all variables at the top of a function
function foobar () {
  let a = 1,
    b = 2,
    c = 3;

    return a + b + c;
}

console.log(foobar());
 



/**
 * Const
 * It can't be reassigned
 */
const myConst = 'some value';
console.log(myConst);

myConst = 'a new value';
console.log(myConst);

