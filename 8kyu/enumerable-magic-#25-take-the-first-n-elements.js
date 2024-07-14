/*

DESCRIPTION:
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

//My Solution:

function take(arr, n) {
  return [...arr].splice(0, n);
}

// Other Solutions --------------------------------------------------------------------------------

function take(arr, n) {
  return arr.slice(0, n);
}

// ------------------------------------------------------------------------------------------------

function take(arr, n) {
  return arr.filter((elem, i) => i < n);
}

// ------------------------------------------------------------------------------------------------

function take(arr, n) {
  let res = [];
  for (let i in arr) {
    if (i < n && i < arr.length) {
      res.push(arr[i]);
    }
  }
  return res;
}
