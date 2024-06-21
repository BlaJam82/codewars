// DESCRIPTION:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// My Solution:

function strCount(str, letter){  
    let count= 0;
    for(let char of str) {
       if (char === letter) {
           count++;
       }
    }
    return count;
}
  
// Other Solutions:

function strCount(str, letter){  
    return str.split(letter).length-1
}
  
// -------------------------------------------------------------------------------------------------------------- 
  
function strCount(str, letter) { 
    let count = 0;
    
    [...str].forEach(char => char == letter ? count++ : count);
    
    return count;
}
  
// --------------------------------------------------------------------------------------------------------------

function strCount(str, letter){  
    return (str.match(new RegExp(letter, 'g')) || []).length
}