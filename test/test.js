"use strict";

const objectFilter = require('..');
const objectFilterNoLodash = require('../without-lodash');
const expect = require('chai').expect;

describe('object-filter', function () {
  it('should filter the keys of an object', function () {
    let obj = { a: 1, b: 2, c: 3 };
    let newObj = objectFilter(obj, ['a', 'b']);
    expect(Object.keys(newObj).length).to.equal(2);
    expect(newObj).to.eql({
      a: 1,
      b: 2
    });
  });
  it('should work without lodash', function () {
    let obj = { a: 1, b: 2, c: 3 };
    let newObj = objectFilterNoLodash(obj, ['a', 'b']);
    expect(Object.keys(newObj).length).to.equal(2);
    expect(newObj).to.eql({
      a: 1,
      b: 2
    });
  });
});
