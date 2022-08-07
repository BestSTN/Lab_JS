let checkPermission = (role, yes, no) => {
  role === 'ADMIN' ? yes() : no();
}

checkPermission(
  'ADMIN',
  () => alert('ACCESS GRANTED'),
  () => alert('ACCESS DENIED')
);