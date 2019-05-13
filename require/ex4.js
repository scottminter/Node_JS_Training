let anotherObj = {};

anotherObj.data = 'some data';

anotherObj.func1 = function () {
  console.log('this is func 1');
};

anotherObj.func2 = function () {
  console.log('this is func 2');
};

module.exports = anotherObj;
