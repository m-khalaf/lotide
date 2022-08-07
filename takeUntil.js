const takeUntil = function(array, callback) {
  let arr = array;
  let newArray = [];
  console.log(arr);
  let i = 0;
  while (!callback(arr[i])) {// while loop that keeps running as long as the callback function is returning false
    if (callback(arr[i])) { //if the callback functions returns true it breaks from the loop
      break;
    } else {
      newArray.push(arr.shift());//pushes the values that did not pass the callback to a result array
    }
  }
  return newArray;
};

module.exports = takeUntil;