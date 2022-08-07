const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //loops over each letter in the string
    if (sentence[i] === ' ') { //if the letter is a space moves to the next letter
      i++;
    }
    if (results[sentence[i]]) { //checks if the letter already exists in the results objects and if yes it pushes the index of letter to the array
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = []; //the letter doesnt exists in the result object so it creates a new array and pushes the index
      results[sentence[i]].push(i);
    }
  }
  return results;
};
module.exports = letterPositions;
