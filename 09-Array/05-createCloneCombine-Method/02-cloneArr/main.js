let a = [1, 2, 3, 4, 5]

function clone(arr) {
  return arr.slice()
}

let b = clone(a)

console.log(b)