// DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

//My Solution

function reverseList(list) {
    const reversedArray = [];
    for( let i = list.length - 1; i >= 0; i--){
      reversedArray.push(list[i]);
    }
  return reversedArray;
  }
  
// Other Solutions

function reverseList2(list) {
    return list.reverse();
  }