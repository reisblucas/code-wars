// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const SeriesSum = (n) => {
  if (n === 0 || n === 1) { return n.toFixed(2); }

  n -= 1;
  let seriesN = [1];
  let denominator = 4;

  while (n > 0) {
    const nextNumber = 1/(denominator);
    seriesN = [...seriesN, nextNumber];
    denominator += 3;
    n -= 1;
  }

  return seriesN.reduce((acc, curr) => acc += curr, 0).toFixed(2);
}

console.log(SeriesSum(2));
console.log(SeriesSum(5));