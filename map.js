const map = function(array,callback) {
  const results = [];
  for (const item of array) { //loops over the array and calls the calls the callback function and pushes the result of the callback into the results array
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
