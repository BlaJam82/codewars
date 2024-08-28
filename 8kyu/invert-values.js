/*
Description:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.
*/

// My Solution:
function invert(array) {
  return array.map((num) => (num > 0 ? -Math.abs(num) : Math.abs(num)));
}

// Other Solutions:

const invert = (array) => array.map((num) => -num);

//=========================================================================================

function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

//=========================================================================================

function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

//==========================================================================================

function invert(array) {
  return array.map((i) => 0 - i);
}
