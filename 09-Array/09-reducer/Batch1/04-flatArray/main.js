let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]

flattened.reduce((acc,item) => {
  acc.push(...item)
  return acc
},[])