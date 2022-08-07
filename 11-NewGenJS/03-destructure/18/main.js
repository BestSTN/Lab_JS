const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];

for (let key of users) {
  let {user,age = 'unknow'} = key
  
  console.log(`${user} ${age}`)
}