// DESCRIPTION:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution:

let countSheep = function (num) {
    let str = "";
    
    for (let i = 0; i < num; i++) {
      str += `${i + 1} sheep...`;
    }
    
    return str;
  }
  
// Other Solutions:

// #1
countSheep2=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

// #2
const countSheep3 = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')