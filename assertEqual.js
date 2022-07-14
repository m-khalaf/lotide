const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);

  }
};

assertEqual(2,4);
assertEqual(2,'bootcamp');
assertEqual('bootcamp','bootcamp');
assertEqual(2,2);