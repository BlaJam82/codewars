/*
Description:
In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

// My Solution:
function getLargerNumbers(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] || a[i] > b[i] ? result.push(a[i]) : result.push(b[i]);
  }
  return result;
}

// Other Solutions:
function getLargerNumbers(a, b) {
  var newArray = [];

  for (i = 0; i < a.length; i++) {
    newArray.push(Math.max(a[i], b[i]));
  }

  return newArray;
}

//==================================================================================================

const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));

//==================================================================================================

const getLargerNumbers = (arr1, arr2) =>
  arr1.map((el, i) => (arr2[i] < el ? el : arr2[i]));

//==================================================================================================

function getLargerNumbers(a, b) {
  var res = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) res.push(a[i]);
    else res.push(b[i]);
  }
  return res;
}
