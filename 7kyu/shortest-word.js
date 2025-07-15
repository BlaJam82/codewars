// Description:

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution:
function findShort(s) {
  const words = s.split(" ");
  const wordLengths = words.map((word) => word.length);
  return Math.min(...wordLengths);
}

// Other solutions:
function findShort2(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}
