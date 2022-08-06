const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let obj in object1) {
    if (Array.isArray(object1[obj]) && Array.isArray(object2[obj])) {
      if (!eqArrays(object1[obj], object2[obj])) return false;

    } else if (typeof (object1[obj]) === 'object' && typeof (object2[obj]) === 'object') {
       if(!eqObjects(object1[obj],object2[obj])) return false;
    }

    else {
      if (object1[obj] !== object2[obj]) {
        return false;
      }
    }

  }
  return true;
};

module.exports =eqObjects;

console.log("Primitives As Values")
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

console.log("\nArrays As Values")

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log("\nObjects As Values")

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjects({ a: { y: {c:2}, z: 1 }, b: 2 }, { a: { y:{c:2}, z: 1 }, b: 2 }))//=>true