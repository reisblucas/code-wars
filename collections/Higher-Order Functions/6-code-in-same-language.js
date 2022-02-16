const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

const isSameLanguage = (list) => {
  const devLanguage = list.map(({ language }) => language);
  const sameLanguage = list.every(({ language }) => language === devLanguage[0]);
  return sameLanguage;
}