const THE_SENTINEL = 'stop';

function createObj() {
  const result = {};
  let name = '';
  let quantity = '';

  do {
    name = prompt('Enter name')
    quantity = prompt('Enter quantity')
    if (name === null || name.trim === '' || (name === THE_SENTINEL || quantity === THE_SENTINEL)) {
      break;
    } else if (quantity !== null && quantity.trim !== '' && quantity > 1) {
      name += 's'
      result[name] = quantity;
    } else {
      result[name] = quantity;
    }
  } while (name !== THE_SENTINEL && quantity !== THE_SENTINEL);

  return result
}


console.log(createObj());