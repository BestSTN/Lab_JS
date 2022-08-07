const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
// expected result: 89

// let result =
//   scores.reduce((acc, item) => acc + item.score * item.weight, 0) /
//   scores.reduce((acc, item) => acc + item.weight, 0);

let sumObj = scores.reduce(
  (acc, item) => {
    acc.score += item.score * item.weight;
    acc.weight += item.weight;
    return acc;
  },
  { score: 0, weight: 0 }
);

let result = sumObj.score / sumObj.weight;

console.log(result);
