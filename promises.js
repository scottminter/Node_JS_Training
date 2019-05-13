const BProm = require('bluebird');

/**
 * FIRST FUNCTION
 */
function func1() {
  return new BProm((resolve, reject) => {
    // try uncommenting this and seeing what happens
    // return reject('Function 1 failed');

    setTimeout(() => {
      resolve('Function 1 finished');
    }, 500); // try changing this number and see what happens
  });
}

/**
 * SECOND FUNCTION
 */
function func2() {
  return new BProm((resolve, reject) => {
    setTimeout(() => {
      resolve('Function 2 finished');
    }, 300); // try changing this number and seeing what happens
  });
}







// This calls the first function and console logs
// what is returned in the resolve call. Unless you
// uncomment the reject line, then it goes to the
// catch
func1().then((resp1) => {
  console.log(resp1);
})
.catch((err) => {
  console.error('Error: ', err);
});

// This calls the second function and console logs
// what is returned in the resolve call.
func2().then((resp2) => {
  console.log(resp2);
})
.catch((err) => {
  console.error('Error: ', err);
});