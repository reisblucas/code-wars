const list1 = [
  { firstName: "Emily", lastName: "N.", country: "Ireland", continent: "Europe", age: 30, language: "Ruby" },
  { firstName: "Nor", lastName: "E.", country: "Malaysia", continent: "Asia", age: 20, language: "Clojure" }
];

// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//     username: 'nore2000' }
// ]

const addUsername = (list) => {
  const result = [];
  const currentYear = new Date().getFullYear();

  list.forEach((item) => {
    const { firstName, lastName, age } = item;

    const username = {
      ...item,
      username: `${firstName
        .toLowerCase()}${lastName[0]
          .toLowerCase()}${currentYear - age}`
    };

    result.push(username);
  });
  return result;
};

console.log(addUsername(list1));
