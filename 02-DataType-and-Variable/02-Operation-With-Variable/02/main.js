let a = 1; //a=1
let b = 2; //b=2
let c = a++; //a=2 c=1
let d = ++c; // c=2 d=2
let e = ++d + d++ + d; // d=4 e=10
console.log(a, b, c, d, e);