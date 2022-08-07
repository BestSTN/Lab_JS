const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
]

function calNetPrice(arr) {
  const summery = [];

  arr.forEach(obj => {
    const newObj = {};

    newObj.netPrice = obj.price * (1 - (obj.discount ?? 0))

    // if (obj['discount'] === undefined) {
    //   newObj['netPrice'] = obj['price']
    // } else {
    //   newObj['netPrice'] = obj['price'] * (1 - obj['discount'])
    // }

    summery.push(newObj)
  });

  return summery
}

console.log(calNetPrice(sales))