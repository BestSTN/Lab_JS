let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

names.reduce((a,c) => {

  // if (a[c] === undefined) {
  //   a[c] = 1
  // } else {
  //   a[c] += 1
  // }

  a[c] === undefined ? a[c] = 1 : a[c] += 1
  // a[c] ? a[c] += 1 : a[c] = 1
  return a 
},{})
