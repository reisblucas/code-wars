const list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

const getAverageAge = (arr) => Math.round((arr.reduce((acc, { age }) => (acc += age), 0) / arr.length));

console.log(getAverageAge(list1));
