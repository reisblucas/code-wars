// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

const list1 = [
  { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 29, language: "JavaScript" },
  { firstName: "Jing", lastName: "X.", country: "China", continent: "Asia", age: 39, language: "Ruby" },
  { firstName: "Harry", lastName: "K.", country: "Brazil", continent: "Americas", age: 19, language: "Python" },
  { firstName: "Andrei", lastName: "E.", country: "Romania", continent: "Europe", age: 59, language: "C" },
  { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 75, language: "Python" },
  { firstName: "Maria", lastName: "S.", country: "Peru", continent: "Americas", age: 60, language: "C" },
  { firstName: "Chloe", lastName: "K.", country: "Guernsey", continent: "Europe", age: 88, language: "Ruby" },
  { firstName: "Noa", lastName: "A.", country: "Israel", continent: "Asia", age: 40, language: "Ruby" },
  { firstName: "Viktoria", lastName: "W.", country: "Bulgaria", continent: "Europe", age: 98, language: "PHP" },
  { firstName: "Piotr", lastName: "B.", country: "Poland", continent: "Europe", age: 128, language: "JavaScript" }
];

const list2 = [
  {age: 5},
  {age: 6},
  { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 29, language: "Ruby" },
  { firstName: "Amar", lastName: "V.", country: "Bosnia and Herzegovina", continent: "Europe", age: 32, language: "Ruby" },
];

const list3 = [
  { firstName: "Sofia", lastName: "P.", country: "Italy", continent: "Europe", age: 41, language: "Clojure" },
  { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 42, language: "JavaScript" },
  { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Python" },
  { firstName: "Rimas", lastName: "C.", country: "Jordan", continent: "Asia", age: 44, language: "Java" }
];

const isAgeDiverse = (list) => {
  const result = {};

  let counter = 10;
  while(counter <= 100) { result[counter] = false; counter += 10; }

  const devAges = list.map(({ age }) => age).sort((a, b) => a - b);

  devAges.forEach((age) => {
    const size = `${age}`.length;
    const ageStr = `${age}`;

    if (age < 10) { result[10] = true;}
    if (age >= 100) { result[100] = true;}
    if (size === 2 && age > 0) {
      const tenBelow = Number(ageStr[0]) * 10;
      const tenAbove = (Number(ageStr[0]) * 10) + 10;

      result[tenBelow] = tenBelow > age || age < tenAbove;
    }
  });

  const isDiverse = Object.values(result).every((item) => item);
  return isDiverse;
};

isAgeDiverse(list1);
isAgeDiverse(list2);
isAgeDiverse(list3);
