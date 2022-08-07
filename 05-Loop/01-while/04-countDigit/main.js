let num = +prompt('enter number');
let digit = 0;


while(num > 0) {
  num = parseInt(num / 10);
  digit += 1;
}

alert(digit);