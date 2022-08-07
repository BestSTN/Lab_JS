const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

let result = [];

for (let index in alphabets) {
  if (alphabets[index] === 'a') {
    result.push(index)
  }
}

console.log(result);