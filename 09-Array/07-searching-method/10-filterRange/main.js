const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

filterRange(arr, 5, 9)