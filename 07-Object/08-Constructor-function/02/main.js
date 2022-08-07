function Accumulator(startingValue) {
  this.currentValue = +startingValue;
  this.read = function() {
    this.currentValue += +prompt('Enter value');
  };
  this.show = function() {
    alert(this.currentValue);
  };
}

let myAcc = new Accumulator(10);

myAcc.read();
myAcc.show();