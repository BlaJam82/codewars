/*
Description:
This is a question from codingbat

Given a non-negative integer n,
create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
0 <= n <= 1 000
*/

// My Solution:

function squareUp(n) {
  const zeroArr = Array(n).fill(0);
  const ansArr = [];
  const arr = [];

  for (let i = n; i > 0; i--) {
    arr.push(i);
  }

  for (let i = n; i >= 0; i--) {
    ansArr.push(zeroArr.slice(0, i).concat(arr.slice(i)));
  }
  return [].concat(...ansArr.filter((v) => !v.every((v) => v === 0)));
}

// Other Solutions:

function squareUp(n) {
  let res = [];

  for (let i = 1; i <= n; i++)
    for (let j = n; j >= 1; j--) res.push(j <= i ? j : 0);

  return res;
}

//=================================================================================================

function squareUp(n) {
  let results = [];
  let acc = [];
  for (let i = 1; i <= n; i++) {
    acc = [i, ...acc];
    let zeros = new Array(n - acc.length).fill(0);
    results.push(...[...zeros, ...acc]);
  }
  return results;
}
