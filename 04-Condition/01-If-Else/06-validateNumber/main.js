let num_1 = prompt('Put in first number');
let num_2 = prompt('Put in second number');

if (num_1 === null || num_1.trim() === '' || isNaN(num_1) || num_2 === null || num_2.trim() === '' || isNaN(num_2)) {
  alert('Invalid number');
} else {
  alert(+num_1 + +num_2);
} 