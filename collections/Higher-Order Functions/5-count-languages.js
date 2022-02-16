const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

const countLanguages = (list) => {
  const result = {};
  const mapLanguage = list.map(({ language }) => language);

  mapLanguage.forEach((language) => {
    const filter = list.filter((person) => person.language === language);
    (!result[`${language}`]) ? result[`${language}`] = filter.length : null;
  });

  return result;
};