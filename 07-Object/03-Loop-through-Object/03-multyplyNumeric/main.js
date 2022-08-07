let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

let multiplyNumeric = (obj, num) => {
  // dont touch something out of scoope / global
  const result = {};

  for(let key in obj) {

    if (typeof obj[key] === 'number') {
      result[key] = obj[key] * num;
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

multiplyNumeric(menu, 3);
