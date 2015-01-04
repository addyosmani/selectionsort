'use strict';

function compare(a, b) {
  return a - b;
}

/**
 * Selection sort with O(n^2) time complexity
 * @param  {Array} array      to be sorted
 * @param  {Function} compareFunction Compare function
 * @return {Array}            sorted array
 */
module.exports = function (array, compareFunction) {

  var sorted = Array.prototype.slice.call(array);
  var min = 0;
  var index = 0;
  var temp = 0;

  compareFunction = compareFunction || compare;

  for (var i = 0; i < sorted.length; i += 1) {
    index = i;
    min = sorted[i];

    for (var j = i + 1; j < sorted.length; j += 1) {
      if (compareFunction(min, sorted[j]) > 0) {
        min = sorted[j];
        index = j;
      }
    }

    temp = sorted[i];
    sorted[i] = min;
    sorted[index] = temp;
  }

  return sorted;
};
