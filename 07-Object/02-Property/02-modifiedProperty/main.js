const user = {};

user.name = 'John';
user['name'] = 'John';
let a = 'name';
user[a] = 'John';

console.log(user);

user.surname = 'Doe';
user.name = 'Matt';

delete user.name;

console.log(user);