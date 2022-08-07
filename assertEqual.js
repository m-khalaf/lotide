const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;