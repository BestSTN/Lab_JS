let user = prompt('put in username');

if (user === '' || user === null) {
  user = 'guest';
} else {

  if (user === 'codecamp') {
    let password = prompt('put in password');
    if (password == 123456) {
      user = 'codecamp';
    } else {
      alert('Wrong password')
      user = 'guest';
    }
  } else {
    user = 'guest';
  }

}

alert(`Welcome ${user}`);