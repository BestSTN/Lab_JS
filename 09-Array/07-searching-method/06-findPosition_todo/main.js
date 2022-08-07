const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
// expexted result: 1

console.log(
  tasks.findIndex(obj => obj.id === 2)
);