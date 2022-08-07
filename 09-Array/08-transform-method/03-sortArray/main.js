const arr = [11, 17, 23, 13, 7, 19];

function compare(a,b) {
  return a < b ?  1 : -1
}

arr.sort(compare)


arr.sort((a,b) => a < b ? 1 : -1)