import rds from "readline-sync";

let calculator = {
  a: 0,
  b: 0,
  add: function () {
    return this.a + this.b;
  },
  multiply: function () {
    return this.a * this.b;
  },
  setNumbers: function() {
    this.a = +rds.question('a: ') || 0;
    this.b = +rds.question('b: ') || 0;
    return 1;
  }
};


calculator.setNumbers();
console.log(calculator.add());
console.log(calculator.multiply());