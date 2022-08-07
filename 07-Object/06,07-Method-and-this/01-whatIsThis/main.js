let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // * user.sayHi === function ==> function() to execute ==> this.name === 'John'