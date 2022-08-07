function checkPrime(num) {
  let isPrime = true;
  for (let i = 2 ; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime
}

console.log(checkPrime(11))
console.log(checkPrime(40))


function printPrime(num) {
  for (let i = 2; i <= num; i++) {

    if (checkPrime(i)) console.log(i);
  }
}

printPrime(100);