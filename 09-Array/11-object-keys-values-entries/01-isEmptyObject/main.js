const obj1 = {};
const obj2 = { name: "John", age: "24" };

function checkEmptyObj(obj) {
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length === 0;
}

console.log(checkEmptyObj(obj1));
console.log(checkEmptyObj(obj2));
