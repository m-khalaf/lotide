const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let obj in object1) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
      if (!eqArrays(object1[obj], object2[obj])) return false;
    } else {
      if (object1[obj] !== object2[obj]) {
        return false;
      }
    }

  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
const inspect = require('util').inspect;
  if (eqObjects(actual, expected))
    console.log(`✅✅✅Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`❌❌❌Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);


};

const cd = { c: "1", d: ["2", 3 ] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

