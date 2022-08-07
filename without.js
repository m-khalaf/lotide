const without = function(source,itemsToRemove) {
  let newArr = [];
  for (const x of source) {//loops over the source array
    if (!itemsToRemove.includes(x)) {//checks if the itemsToRemove array include each item in the source array
      newArr.push(x);//if itemsToRemove array does not include the value it gets pushed to the result array
    }
  }
  return newArr;
};

module.exports = without;