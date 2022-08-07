function isEmptyObject (obj) {

  // go in loop when have atleast 1 key
  for (let key in obj) {
    return false
  }
  // 0 key go through this line
  return true
}

const user_1 = {name: 'CC12'};
const user_2 = {name: 'Codecamp', cohort: 12};
const user_3 = {};

console.log(isEmptyObject(user_1));
console.log(isEmptyObject(user_2));
console.log(isEmptyObject(user_3));