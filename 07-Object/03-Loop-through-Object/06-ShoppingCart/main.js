function shoppingCart (name, quantity, price, discount) {
  let result = {};

  result.name = name;
  result.quantity = quantity;
  result.price = price;
  if (discount !== null && discount !== 0 && !(isNaN(discount))) {
    result.discount = discount;
  }

  return result
}

let a = shoppingCart('apple', 2, 30, 20)
let b = shoppingCart('banana', 5, 50)
let c = shoppingCart('orange', 3, 100, 0)

console.log(a)
console.log(b)
console.log(c)

function calCart (obj) {
  if (obj?.discount === undefined) {
    return obj.quantity * obj.price
  } else {
    return (obj.quantity * obj.price) * (100 - obj.discount) / 100
  }
}

console.log(calCart(a))
console.log(calCart(b))
console.log(calCart(c))