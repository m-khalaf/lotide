const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns [1,2,3,4,5,6,7,8]', () => {
    let test = [1, 2, [3, [4]], [5, [6, [7]]], [8]];
    assert.deepEqual(flatten(test), [1, 2, 3, 4, 5, 6, 7, 8]);

  });

});



