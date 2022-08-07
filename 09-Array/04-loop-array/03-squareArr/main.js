const arr = [2, 3, 5, 7, 11];

function squareArr(array) {
  let result = [];

  array.forEach(num => {
    result.push(num ** 2)
  });

  return result
}


squareArr(arr); // [4, 9, 25, 49, 121]