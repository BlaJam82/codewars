/*

DESCRIPTION:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

// My Solution:

function nameShuffler(str) {
  const strToArray = str.split(" ");
  return strToArray[1] + " " + strToArray[0];
}

// -----------------------------------------------------------------------------------------------

// Other Solutions:

function nameSuffle(str) {
  return str.split(" ").reverse().join(" ");
}

// -----------------------------------------------------------------------------------------------

function nameShuffler(str) {
  const [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}
