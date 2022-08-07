const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) { //checks if objects are equal in length and if not returns false 
    return false;
  }
  for (const obj in object1) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) { //checks if both key-pair values in the objects are arrays and if so it calls the eqArray function
      if (!eqArrays(object1[obj], object2[obj])) { 
        return false;
      }
    } else if (typeof (object1[obj]) === 'object' && typeof (object2[obj]) === 'object') { //checks if both key-pair values in the objects are objects and if so it uses recursion to call eqObjects function
      if (!eqObjects(object1[obj], object2[obj])) {
        return false;
      }
    } else {
      if (object1[obj] !== object2[obj]) { //if key-pair values are not arrays or objects then it compares them as premitive values
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;