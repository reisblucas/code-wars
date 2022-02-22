// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s)

// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

const howToScore = {
  triple: [
    { '1': 1000 },
    { '6': 600 },
    { '5': 500 },
    { '4': 400 },
    { '3': 300 },
    { '2': 200 }
  ],
    single: [
      { '1': 100 },
      { '5': 50 },
    ]
};

const countSideAmount = (dices) => {
  const obj = {};

  dices.forEach((dice) => {
    const amount = dices.filter((side) => side === dice ).length;
    if (!obj[dice]) { obj[dice] = amount; }
  });

  return obj;
}

const eachScore = (entries) => {
  const scoreArr = [];

  const { single, triple } = howToScore;
  entries.forEach((entry) => {
    const key = `${entry[0]}`;
    const amount = entry[1];

    if (amount === 1) {
      const mappedSingle = single.find((match) => match[key]);
      mappedSingle && scoreArr.push(mappedSingle[key]);
    }

    if (amount === 2) {
      let times = 2;
      while(times) {
        const mappedSingle = single.find((match) => match[key]);
        mappedSingle && scoreArr.push(mappedSingle[key]);
        times -= 1;
      }
    }

    if (amount === 3) {
      const mappedTriple = triple.find((match) => match[key]);
      scoreArr.push(mappedTriple[key]);
    }

    if (amount === 4) {
      const mappedTriple = triple.find((match) => match[key]);
      scoreArr.push(mappedTriple[key]);

      const mappedSingle = single.find((match) => match[key]);
      mappedSingle && scoreArr.push(mappedSingle[key]);
    }

    if (amount === 5) {
      const mappedTriple = triple.find((match) => match[key]);
      scoreArr.push(mappedTriple[key]);

      let times = 2;
      while(times) {
        const mappedSingle = single.find((match) => match[key]);
        mappedSingle && scoreArr.push(mappedSingle[key]);
        times -= 1;
      }
    }
  })
  
  return scoreArr;
}

const score = dices => {
  const counted = countSideAmount(dices);

  const entries = Object.entries(counted);

  const scoreSum = eachScore(entries).reduce((acc, curr) => acc += curr, 0);
  return scoreSum;
}

console.log(score([4, 4, 4, 3, 3])); // { '3': 2, '4': 3 }
console.log(score( [1, 2, 3, 4, 5] ));
console.log(score([1,1,1,3,1]));

console.log(score([1,1,1,1,1]));
console.log(score([1,1,5,3,3]));