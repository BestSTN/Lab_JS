let print = '';

for (let i = 2; i <= 12 ; i++) {
  
  for (let j = 1; j <= 12 ; j++) {
    print += `${i} x ${j} = ${i*j}\n`;
  }

  console.log(print);
  print = '';
}
