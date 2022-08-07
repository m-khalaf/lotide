const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar1, ar2) {
  if (eqArrays(ar1, ar2)) {  //calls eqArrays function to check if arrays are equal
    console.log('arrays are equal');
    return true;
  } else {
    console.log('arrays are not equal');
    return false;
  }
};

module.exports = assertArraysEqual;
