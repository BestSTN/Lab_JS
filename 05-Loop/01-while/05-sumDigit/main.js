let num = +prompt('enter number');
let sum = 0;


while(num > 0) {
  sum += num % 10;
  num = parseInt(num/10) 
}

alert(sum);