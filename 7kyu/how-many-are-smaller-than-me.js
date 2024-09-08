/*
Description:
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
*/

// My Solution:
function smaller(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        counter++;
      }
    }
    arr.push(counter);
  }
  return arr;
}

// Other Solutions:
const smaller = (nums) =>
  nums.map((x, i) => nums.slice(i).filter((y) => x > y).length);

//===========================================================================

function smaller(nums) {
  return nums.map((n, i) => {
    return nums.slice(i).filter((v) => v < n).length;
  });
}

//===========================================================================

function smaller(nums) {
  return nums.map((num, index) => {
    return nums.slice(index + 1).reduce((acc, num2) => {
      if (num > num2) acc += 1;
      return acc;
    }, 0);
  });
}
