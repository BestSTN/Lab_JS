const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
const user2 = {
  firstName: "Will",
  lastName: "Smith",
  age: 15,
};

let checkAge = ({ firstName, lastName, age }) => {
  return age > 18 ? `Hello ${firstName} ${lastName}` : 'Access denied'
};

checkAge(user1)
checkAge(user2)