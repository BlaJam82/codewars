/*
Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// My Solution:

const isAnagram = function (test, original) {
  const t = test.toLowerCase().split("").sort().join("");
  const o = original.toLowerCase().split("").sort().join("");
  return t === o;
};

// Other Solutions:

String.prototype.sortLetters = function () {
  return this.toLowerCase().split("").sort().join("");
};

var isAnagram1 = function (test, original) {
  return test.sortLetters() == original.sortLetters();
};

//============================================================================================

var isAnagram2 = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }
  return (
    [...test.toLowerCase()].sort().join("") ===
    [...original.toLowerCase()].sort().join("")
  );
};
