const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' }
];


for (let key of names) {
  let {firstName,lastName} = key
  
  console.log(`${firstName} ${lastName}`)
}