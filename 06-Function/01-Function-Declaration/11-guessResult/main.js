// function sayHi(age) {
//   if (age < 12) alert("Hi kid");
// }
// console.log(sayHi); // * function
// console.log(sayHi(10)); // ** undefined


function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** undefined
console.log(sayHi()); // **** Who are you