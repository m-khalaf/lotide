const letterPositions = function(sentence) {
  const results = {};
  //let sentenceNoSpace = sentence.split(' ').join('');
  for (let i=0; i<sentence.length; i++){
    if (sentence[i]===' ') i++;
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
      
    }
    else {
      results[sentence[i]]=[];
      results[sentence[i]].push(i);

    }
  
  }
  return results;
};
module.exports=letterPositions;
