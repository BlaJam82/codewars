/*
Description:
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
*/

// My Solution:
function twosDifference(input) {
  const sortInput = input.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sortInput.length; i++) {
    for (let j = 0; j < sortInput.length; j++) {
      if (sortInput[j] - sortInput[i] === 2) {
        result.push([sortInput[i], sortInput[j]]);
      }
    }
  }
  return result;
}

// Other Solutions:
function twosDifference(input) {
  return input
    .sort(function (a, b) {
      return a - b;
    })
    .filter(function (a) {
      return input.indexOf(a + 2) != -1;
    })
    .map(function (a) {
      return [a, a + 2];
    });
}

//========================================================================================

function twosDifference(input) {
  input.sort((a, b) => a - b);
  var arr = [];
  for (var i = 0; i < input.length; ++i)
    if (input.indexOf(input[i] + 2) != -1) arr.push([input[i], input[i] + 2]);
  return arr;
}

//=========================================================================================

function twosDifference(input) {
  return input
    .filter((num) => input.indexOf(num + 2) != -1)
    .sort((a, b) => a - b)
    .map((num) => [num, num + 2]);
}

//=========================================================================================

function twosDifference(input) {
  input.sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[j] - input[i] === 2) arr.push([input[i], input[j]]);
    }
  }
  return arr;
}
