const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const getFirstPython = (list) => {
  const search = list.find(({ language }) => language === 'Python');

  if (search !== undefined) {
    const { firstName, country } = search;
    return `${firstName}, ${country}`;
  };

  return 'There will be no Python developers';
};