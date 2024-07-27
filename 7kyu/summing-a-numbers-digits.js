/*

DESCRIPTION:
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.]

*/

// My Solution:

function sumDigits(number) {
  const positiveNum = Math.abs(number);
  return positiveNum
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

// ------------------------------------------------------------------------------------------------------

// Other Solutions:

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}

// -----------------------------------------------------------------------------------------------------

function sumDigits(number) {
  return [...Math.abs(number).toString()].reduce((s, c) => s + +c, 0);
}
