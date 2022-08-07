function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}

function checkAge2(age) {
  return age > 18 ? true : confirm("Did parents allow you?")
}

function checkAge3(age) {
  return age > 18 || confirm("Did parents allow you?")
}

console.log(
  checkAge(15)
)
console.log(
  checkAge2(15)
)
console.log(
  checkAge3(15)
)