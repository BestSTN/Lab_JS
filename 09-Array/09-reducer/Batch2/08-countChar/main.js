let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

let arr = str.toLowerCase().split('').filter(i => i !== ' ')


arr.reduce((a,c) => {

  // if (a[c] === undefined) {
  //   a[c] = 1
  // } else {
  //   a[c] += 1
  // }

  a[c] === undefined ? a[c] = 1 : a[c] += 1
  return a 
},{})
