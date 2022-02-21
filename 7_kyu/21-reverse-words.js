// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const test = 'Lucas, neur4l is the better one in building at fornite!'

const reverseWords = (str) => str.split(' ')
    .map((wrd) => wrd.split('').reverse().join(''))
    .join(' ');

console.log(reverseWords(test));