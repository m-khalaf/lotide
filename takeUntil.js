const takeUntil = function (array, callback) {
  let arr = array;
  newArray = [];
  console.log(arr);
  let i = 0;
  while (!callback(arr[i])) {
    if (callback(arr[i])) break;
    else newArray.push(arr.shift());
  }
  return newArray;

  /* for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    // console.log(callback(arr[i]));
    // console.log(i)
    if (callback(arr[i])) return newArray;
    else newArray.push(arr.shift());

  }
  return newArray; */

}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);