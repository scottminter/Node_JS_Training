let anotherObj = {};

anotherObj.data = 'some data';

module.exports = function () {
  console.log('this is func 1');
  this.foo;
};

anotherObj.func2 = function () {
  console.log('this is func 2');
};

module.exports = anotherObj;


let obj = {};

obj.foo = 'blha';
obj.func1 = require('./func1');
obj.func2 = require('./func2');

module.export = obj;


// this in another file

let myObj = require('./someMod');
myObj.func1();
