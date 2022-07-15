const eqArrays = function(arr1,arr2) {
    let equal;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equal = true;
      } else equal = false;
    }
    return equal;
  };

  const assertArraysEqual =function(ar1,ar2){
    if(eqArrays(ar1,ar2))
    console.log('arrays are equal')
    else console.log('arrays are not equal')
  }

  assertArraysEqual([1, 2, 3], [1, 2, 3]);
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3])