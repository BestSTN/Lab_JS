let removeRandom = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length)

  arr.splice(randomIndex,1)
  return arr
}

const array1 = [1, 2, 3, 4, 5];
removeRandom(array1)