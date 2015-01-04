/*global describe, it */
'use strict';
var assert = require('assert');
var selectionsort = require('../');

function makeRandomArray() {

  var precision = 2;
  var multiplier = 100;
  var size = 100;
  var result = [];

  for (var i = size; i > 0; i -= 1) {
    result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
  }
  return result;
}

describe('selectionsort node module', function () {

  it('should work with empty arrays', function () {
    assert.deepEqual(selectionsort([]), []);
  });

  it('should work with sorted arrays', function () {
    assert.deepEqual(selectionsort([1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.deepEqual(selectionsort([5, 1, 12, -5, 16, 2, 12, 14]), [-5, 1, 2, 5, 12, 12, 14, 16]);
    assert.deepEqual(selectionsort([6, 4, 9, 3, 1, 7]), [1, 3, 4, 6, 7, 9]);
  });

  it('should work with random non-sorted arrays', function () {

    var array = makeRandomArray({
      precision: 0
    });
    var sorted = selectionsort(array);

    for (var i = 0; i < sorted.length - 1; i += 1) {
      assert((sorted[i] <= sorted[i + 1]) === true);
    }
  });

  it('should not change the unsorted array', function () {

    var unsorted  = [4, 2, 1, 3];

    assert.deepEqual(selectionsort(unsorted), [1, 2, 3, 4]);
    assert.deepEqual(unsorted, [4, 2, 1, 3]);
  });
});
