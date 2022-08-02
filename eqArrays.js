const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);
  
  }
};
const eqArrays = function(arr1,arr2) {
  let equal=true;
  if (arr1.length !== arr2.length) equal= false;

  for (let i = 0; i < arr1.length; i++) {
    
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
       if(!eqArrays(arr1[i],arr2[i])) equal = false;
    }
    if (arr1[i] === arr2[i]) {
      equal = true;
    } else equal = false;
  }
  return equal;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false) // => false

