const findKey = function(objs, callback) {
  for (const key in objs) {
    if (callback(objs[key])) { // passes every key value to the call back function and checks if it passes and returns the key
      return key;
    }
  }
};

module.exports = findKey;