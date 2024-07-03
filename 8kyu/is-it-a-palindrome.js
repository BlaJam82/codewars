/*

DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

*/

// My Solution:

function isPalindrome(x) {
  const lower = x.toLowerCase();
  return lower.split("").reverse().join("").toLowerCase() === lower
    ? true
    : false; //true and false not needed
}

// ------------------------------------------------------------------------------------------------------------------

// Other Solutions:

function isPalindrome(x) {
  return x.toUpperCase() === x.toUpperCase().split("").reverse().join("");
}

// ------------------------------------------------------------------------------------------------------------------

function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}
