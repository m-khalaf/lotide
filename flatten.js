const flatten = function (arr) {
  let result = [];
  for (let x of arr) {
    if (Array.isArray(x)) {
      result = result.concat(flatten(x));
    }
    else result.push(x);
  }

  return result;
}

module.exports = flatten;

