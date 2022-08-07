let num_1 = prompt('num1');
let num_2 = prompt('num2');
let num_3 = prompt('num3');

function checkNotNumber(num) {
  return num === null || num.trim() === '' || isNaN(num)
}

if (checkNotNumber(num_1) || checkNotNumber(num_2) || checkNotNumber(num_3)) {
  alert('Invalid number');
} else {

  if (num_1 > num_2 && num_1 > num_3) {

    if (num_2 > num_3) {
      console.log(`${num_1}, ${num_2}, ${num_3}`);
    } else {
      console.log(`${num_1}, ${num_3}, ${num_2}`);
    }

  } else if (num_2 > num_1 && num_2 > num_3) {

    if (num_1 > num_3) {
      console.log(`${num_2}, ${num_1}, ${num_3}`);
    } else {
      console.log(`${num_2}, ${num_3}, ${num_1}`);
    }

  } else {

    if (num_1 > num_2) {
      console.log(`${num_3}, ${num_1}, ${num_3}`);
    } else {
      console.log(`${num_3}, ${num_2}, ${num_1}`);
    }
  }

} 
