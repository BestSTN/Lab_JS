const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

persons.reduce((acc,item) => {

  item.sex === 'M' ? acc.M.push(item.name) : acc.F.push(item.name)

  return acc
}, {M: [], F: []})