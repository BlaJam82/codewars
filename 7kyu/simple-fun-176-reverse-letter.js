// Description:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// My Solution:
function reverseLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return str
    .toLowerCase()
    .split("")
    .filter((char) => letters.includes(char))
    .reverse()
    .join("");
}

// Other Solutions:
reverseLetter2 = (s) =>
  s
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");

const reverseLette3 = (str) => str.match(/[a-z]/g).reverse().join("");
