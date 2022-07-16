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

  const without = function (source,itemsToRemove){
let newArr=source;
    for (let i=0; i<newArr.length; i++){
        for (let j=0; j<itemsToRemove.length; j++){
            if(newArr[i]=== itemsToRemove[j]){
                //newArr.push(source[i]);
                newArr.splice(i,1);
                
            }
        }
    }
    return newArr;
  }

  console.log(without([1, 2, 3], [1]))
  console.log(without(["1", "2", "3"], [1, 2, "3"]))