let print = '';
for (let i = 0; i < 8 ; i++) {
  for (let j = 0; j <= i ; j++) {
      print += `${j+1} `
  }
  print = print.trim() + '\n'
}

console.log(print)