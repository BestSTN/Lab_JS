const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * email + isActive false
user = {};
console.log(user); // ** Error: cant change const