let arr = [];
let item;
do {
  item = prompt('Enter number')
  if (item === null || item.trim() === '' || isNaN(item)) {
    break;
  } else {
    arr.push(item)
  }
} while (item !== null && item.trim() !== '' && !isNaN(item))

let sum = 0;
arr.forEach(item => {
  sum += +item
})

console.log(sum);



