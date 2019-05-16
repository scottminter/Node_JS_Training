
module.exports = function Func2 () {
  let myData = this.data1;
  console.log('func2 mydata: ', myData);
  
  this.func1();
};
