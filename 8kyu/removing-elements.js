/*

Description:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

//My Solution:

//P: Take in an array. Keep first element and remove every second element. Rotate this pattern
//R: Return an array
//E: ["Cat", "Dog", "Cat", "Dog"] => ["Cat", "Cat"]
//   ["Football", "Baseball", "Soccer Ball", "Tennis Ball"] => ["Football", "Soccer Ball"]
//   ["Person", {name: "Bob"}] => ["Person"]

function removeEveryOther(arr) {
  //P: Use the filter method of Array to remove every second element
  //   Use a conditional to return the even indexes of the given array
  return arr.filter((element, index) => {
    if (index === 0 || index % 2 === 0) {
      return element;
    }
  });
}

console.log(removeEveryOther(["Cat", "Dog", "Cat", "Dog"]));
console.log(removeEveryOther(["Person", { name: "Bob" }], "Person"));

//=================================================================================================
//Other Solutions:

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

//=================================================================================================

function removeEveryOther(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//=================================================================================================

const removeEveryOther = (arr) => arr.filter((item, i) => i % 2 == 0);
