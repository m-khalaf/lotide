const countLetters = function(strgs) {
  let strs = strgs.split(' ').join(""); //removes all space between the letters and joins them in a single string
  let result = {};
  for (const str of strs) {
    if (result[str]) { //checks if the key already exists in the object and if so it increments by one
      result[str] += 1;
    } else {
      result[str] = 1; //the key is not in the objects so it creates a new key and assigns value of 1
    }
  }
  return result;
};

module.exports = countLetters;