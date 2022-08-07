const flatten = function(arr) {
  let result = [];
  for (const x of arr) {
    if (Array.isArray(x)) { //checks if element is an array and if so uses recursion to call back the same function and concats the result to the final result
      result = result.concat(flatten(x));
    } else {
      result.push(x); //if the element is just a premitive value then it just pushes it to the result array
    }
  }
  return result;
};

module.exports = flatten;

