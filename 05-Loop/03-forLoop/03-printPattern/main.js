// let print = '';
// for (let i = 0; i < 4 ; i++) {
//   print += '* '
//   console.log(print.trim());
// }


let print = '';
for (let i = 0; i < 4 ; i++) {
  for (let j = 0; j <= i ; j++) {
      print += '* '
  }
  print = print.trim() + '\n'
}

console.log(print)