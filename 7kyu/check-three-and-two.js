/*
Description:
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

// My Solution:
function checkThreeAndTwo(array) {
  const a = array.filter((char) => char === "a").length;
  const b = array.filter((char) => char === "b").length;
  const c = array.filter((char) => char === "c").length;

  return (a === 3 || b === 3 || c === 3) && (a === 2 || b === 2 || c === 2);
}

// Other Solutions:
function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }

    return result;
  }, {});

  const containsThree = Object.values(counts).some((x) => x === 3);
  const containsTwo = Object.values(counts).some((x) => x === 2);

  return containsThree && containsTwo;
}

//==============================================================================================

function checkThreeAndTwo(array) {
  var item1 = 0,
    item2 = 0,
    item3 = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      item1++;
    } else if (array[i] === "b") {
      item2++;
    } else if (array[i] === "c") {
      item3++;
    }
  }
  return (
    (item1 == 2 || item2 == 2 || item3 == 2) &&
    (item1 == 3 || item2 == 3 || item3 == 3)
  );
}
