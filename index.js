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
};

function calculatorSetRDSValues() {
    const ua = +rds.question('A: ');
    const ub = +rds.question('B: ');

    calculator.a = ua || 0;
    calculator.b = ub || 0;
}

calculatorSetRDSValues();
console.log(calculator.add());
console.log(calculator.multiply());