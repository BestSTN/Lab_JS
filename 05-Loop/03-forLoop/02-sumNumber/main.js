let sum = 0;
let sumEven = 0;
let sumTwo = 0;
let sumThree = 0;

for (let i = 1 ; i <= 100 ; i++) {
  sum += i;

  if (i%2 === 0) sumEven += i;

  if (i%2 === 0) sumTwo += i ** 2;
  if (i%3 === 0) sumThree += i ** 2;
}
console.log(`${sum}, ${sumEven}, ${sumTwo - sumThree}`)