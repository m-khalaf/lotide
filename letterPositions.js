const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertation Failed: ${actual} !== ${expected}`);

  }
};
const eqArrays = function(arr1,arr2) {
  let equal;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      equal = true;
    } else equal = false;
  }
  return equal;
};

const assertArraysEqual =function(ar1,ar2){
  if(eqArrays(ar1,ar2))
  console.log('arrays are equal')
  else console.log('arrays are not equal')
}

const letterPositions = function(sentence) {
  const results = {};
  //let sentenceNoSpace = sentence.split(' ').join('');
  for (let i=0; i<sentence.length; i++){
    if (sentence[i]===' ') i++;
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
      
    }
    else {
      results[sentence[i]]=[];
      results[sentence[i]].push(i);

    }
  
  }
  //delete results[' ']
  return results;
};

console.log(letterPositions('hello'));
console.log(letterPositions("lighthouse in the house"));
