const values = [1, 4, 8, 2, 1, 3, 3, 8];
console.log(unique(values)); // [1, 4, 8, 2, 3]

function unique(arr) {
  const set = new Set(arr)
  return Array.from(set)  
}