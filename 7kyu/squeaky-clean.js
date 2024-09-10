/*
Description:
Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = ['click1','click2',null,'','','submitForm'];
the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 
*/

// My Solution:
function squeakyClean(arr) {
  return arr.filter(
    (ele) => ele !== undefined && ele !== 0 && ele !== null && ele !== ""
  );
}

// Other Solutions:
function squeakyClean(arr) {
  return arr.filter(Boolean);
}

//=====================================================================================================

function squeakyClean(arr) {
  return arr.filter((x) => x);
}

//=====================================================================================================

function squeakyClean(arr) {
  // so clever
  // such best practice

  var newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (
      arr[i] !== null &&
      arr[i] !== undefined &&
      arr[i] !== "" &&
      arr[i] !== 0
    ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
