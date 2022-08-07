function max(a,b = 0,c = 0,d = 0) {
  if (a === undefined) return undefined;
  if (b === undefined) return a;
  if (c === undefined) return a > b ? a : b;
  if (d === undefined) return Math.max(a,b,c)
  return Math.max(a,b,c,d);
} 

console.log(
  max(),
  max(2),
  max(3, 1),
  max(7, 3, 9, 2),
  max(2, 'hi', 5)
)