const eqArrays = require('./eqArrays');

  const assertArraysEqual =function(ar1,ar2){
    if(eqArrays(ar1,ar2))
    console.log('arrays are equal')
    else console.log('arrays are not equal')
  }

  module.exports = assertArraysEqual;
