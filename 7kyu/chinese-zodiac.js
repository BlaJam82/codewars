/*
Description:
The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

##Task

Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".

animals (or $animals in Ruby) is a preloaded array containing the animals in order:

['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

elements (or $elements in Ruby) is a preloaded array containing the elements in order:

['Wood', 'Fire', 'Earth', 'Metal', 'Water']

Tell me your zodiac sign and element in the comments. Happy coding :)
*/

// My Solution:

function chineseZodiac(year) {
  const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  year -= 1924;

  return elements[Math.floor(year / 2) % 5] + " " + animals[year % 12];
}

// Other Solution:

function chineseZodiac(year) {
  return (
    elements[Math.floor(((year - 1924) % 10) / 2)] +
    " " +
    animals[(year - 1924) % 12]
  );
}

//==============================================================================================

function chineseZodiac(year) {
  let years = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  let attribute = ["Wood", "Fire", "Earth", "Metal", "Water"];
  let current = year - 1924;

  let i = Math.floor(current % 12);
  let j = Math.floor((current / 2) % 5);

  return attribute[j] + " " + years[i];
}

//===============================================================================================

function chineseZodiac(year) {
  const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];

  let numberOfYears = year - 1924;

  return `${elements[Math.floor((numberOfYears / 2) % 5)]} ${
    animals[numberOfYears % 12]
  }`;
}
