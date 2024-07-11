/*

DESCRIPTION:
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

*/

// My Solution:

function distinct(a) {
  const set = new Set();
  a.forEach((element) => set.add(element));
  return [...set];
}

// Other Solutions:

function distinct(a) {
  const set = new Set();
  a.forEach((element) => set.add(element));
  return [...set];
}

// ----------------------------------------------------------------------------------------------------------

function distinct(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

// ----------------------------------------------------------------------------------------------------------

const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);
