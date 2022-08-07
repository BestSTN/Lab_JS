const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

products.reduce((acc,item) => {
  let obj = {};
  obj.name = item.name
  acc[item.id] = obj
  return acc
}, {})