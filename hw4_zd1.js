let sumValue = {
    a:3,
    b:7
};

function calc() {
    return this.a + this.b;
}
console.log(calc.call(sumValue));