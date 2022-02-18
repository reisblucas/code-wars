// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

const list1 = [
  { firstName: "Maria", lastName: "Y.", country: "Cyprus", continent: "Europe", age: 30, language: "Java" },
  { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 70, language: "Python" },
];

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.


const getAverageAge = (arr) => Math.round((arr.reduce((acc, { age }) => (acc += age), 0) / arr.length));

console.log(getAverageAge(list1));
