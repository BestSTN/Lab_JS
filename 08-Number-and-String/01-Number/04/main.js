function changeDigit (num) {
  return (Math.trunc(num * 100)/100).toFixed(2)
}

changeDigit(10);
changeDigit(5.1);
changeDigit(3.1289);