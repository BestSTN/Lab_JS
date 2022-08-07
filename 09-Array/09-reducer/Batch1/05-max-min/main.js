let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

arr.reduce((a,c) => c > a ? a = c : a,-Infinity)
arr.reduce((a,c) => c < a ? a = c : a,Infinity)

arr.reduce((a,c) => {
  if (a.max < c) {
    a.max = c
  }

  if (a.min > c) {
    a.min = c
  }

  return a
}, {max: arr[0], min: arr[0]})