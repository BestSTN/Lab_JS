let calcFac = x => {
  let sum = 1;
  for (let i = 0; i < x ;i++) {
    sum *= (x - i);
  }

  // for (let i = 1; i <= x ; i++) {
  //   sum *= i;
  // }

  return sum
}

calcFac(0);