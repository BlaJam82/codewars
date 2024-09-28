/*
Description:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

// My Soluton:
function position(letter) {
  const positionOfLetter = letter.charCodeAt(0) - 96;
  return `Position of alphabet: ${positionOfLetter}`;
}

// Other Solutions:
function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}

//===============================================================================================

function position(alphabet) {
  var letters = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var placed = letters.indexOf(alphabet);
  return "Position of alphabet:" + " " + placed;
}
