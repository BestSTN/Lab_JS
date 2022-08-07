let sum = 0;
let counter = 0;
let num;
do {
  num = prompt('enter number')
  if (!( num === null || num.trim === '' || isNaN(num) || num == 0 || num < 0)) {
    sum += +num;
    counter++;
  }
} while (!(num === null || num.trim === '' || isNaN(num) || num == 0 || num < 0))

if (counter > 0) {
  alert(`sum = ${sum}, avg = ${sum/counter}`);
}
