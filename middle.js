
const middle = function(arr) {
  let midArray = [];
  if (arr.length < 3) {//returns an empty array if the array has less than 3 values
    midArray = [];
  } else if (arr.length % 2 === 0) { //checks if the aray has an even length
    midArray.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);//pushed the middle two values to the result array
  } else if (arr.length % 2 !== 0) { //checks if the array has an odd length
    midArray.push(arr[((arr.length - 1) / 2)]); //pushes only the middle value to results array
  }
  return midArray;
};

module.exports = middle;