const findKey = require('../findKey');
const assert = require('chai').assert;

describe('#findKey', () => {
  let data = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  it("should return noma", () => {
    assert.strictEqual(findKey(data, x => x.stars === 2), 'noma');
  });
});