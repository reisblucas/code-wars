const list1 = [
  { firstName: "Sofia", lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
  { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: "Python" },
  { firstName: "Madison", lastName: "U.", country: "United States", continent: "Americas", age: 32, language: "Ruby" }
];

function greetDevelopers(list) {
  const result = list.map((dev) => {
    const { firstName, language } = dev;
    dev.greeting = `Hi ${firstName}, what do you like the most about ${language}?`;
    return list;
  });
  return result;
}

greetDevelopers(list1);
