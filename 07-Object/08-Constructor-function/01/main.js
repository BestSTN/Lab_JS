function MyCalculator () {
  this.num1 = 0;
  this.num2 = 0;
  this.read = function() {
    this.num1 = +prompt('Enter number 1')
    this.num2 = +prompt('Enter number 2')
  };
  this.sum = function() {
    return this.num1 + this.num2;
  }
  this.mul = function() {
    return this.num1 * this.num2;
  }
}

let cal1 = new MyCalculator()

cal1.read();
console.log(cal1.sum());
console.log(cal1.mul());