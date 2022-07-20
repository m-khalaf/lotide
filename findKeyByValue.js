const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);

  }
};
const findKeyByValue = function(obj, value){
  for (let key in obj){
    //console.log(key)
    if(obj[key]===value)
    return key
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//findKeyByValue(bestTVShowsByGenre, "The Wire")