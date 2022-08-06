const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects - \nPrimitives As Values', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };

  it('returns true', () => {

    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it('returns false', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

});

describe('#eqObjects - \nArrays As Values', () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };


  it('returns true', () => {

    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it('returns false', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

});

describe('#eqObjects - \nObjects As Values', () => {
  x = { a: { z: 1 }, b: 2 };
  y = { a: { z: 1 }, b: 2 };
  a = { a: { y: 0, z: 1 }, b: 2 };
  b = { a: { z: 1 }, b: 2 };
  c = { a: { y: 0, z: 1 }, b: 2 };
  d = { a: 1, b: 2 };
  e = { a: { y: { c: 2 }, z: 1 }, b: 2 };
  f = { a: { y: { c: 2 }, z: 1 }, b: 2 };

  it('returns true', () => {

    assert.deepEqual(eqObjects(x, y), true);
  });

  it('returns false', () => {
    assert.deepEqual(eqObjects(a, b), false);
  });

  it('returns false', () => {
    assert.deepEqual(eqObjects(c, d), false);
  });

  it('returns true', () => {
    assert.deepEqual(eqObjects(e, f), true);
  });


});