/*DESCRIPTION:
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/

// My Solution:
function divCon(x) {
  let nums = 0;
  let strings = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      nums += x[i];
    } else {
      strings += Number(x[i]);
    }
  }
  return nums - strings;
}

// Other Solutions:
function divCon(x) {
  return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
  );
}

// --------------------------------------------------------------------------------------------------------------------------

function divCon(x) {
  const strings = x.filter((n) => typeof n === "string");
  const nums = x.filter((n) => typeof n === "number");

  const strSum = strings.reduce((acc, str) => (acc += +str), 0);
  const numSum = nums.reduce((acc, str) => (acc += str), 0);

  return numSum - strSum;
}
