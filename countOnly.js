const countOnly = function(allItems, itemsToCount) {

  const results = {};
  for (const item of allItems) {//loops over the original array and checks if each item exists in the itemsToCOunt array
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; //checks if the key exists in the object and if yes it increments by 1
      } else {
        results[item] = 1; //the key is not in the objects so it creates a new key and assigns value of 1
      }
    }
  }
  return results;
};

module.exports = countOnly;
