

const countLetters =function(strgs){
  let strs = strgs.split(' ').join("")
  let result ={};
  for (let str of strs){
    if (result[str]){
      result[str]+=1;
    }
    else
    result[str]=1;
  }
  return result;
}

console.log(countLetters("lighthouse in the house"))