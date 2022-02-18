// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

const list1 = [
  { firstName: "Harry", lastName: "K.", country: "Brazil", continent: "Americas", age: 22, language: "JavaScript", githubAdmin: "yes" },
  { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 49, language: "Ruby", githubAdmin: "no" },
  { firstName: "Jing", lastName: "X.", country: "China", continent: "Asia", age: 34, language: "JavaScript", githubAdmin: "yes" },
  { firstName: "Piotr", lastName: "B.", country: "Poland", continent: "Europe", age: 128, language: "JavaScript", githubAdmin: "no" }
];

// write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

// [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// ]

const findAdmin = (list, lang) => list.filter(({githubAdmin}) => githubAdmin === "yes").filter(({language}) => language === lang);

console.log(findAdmin(list1, "JavaScript"));
