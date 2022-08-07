const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) { //loops over the object and checks if the value passed to the function matches the value in the objects and if so it returns the key
      return key;
    }
  }
};

module.exports = findKeyByValue;