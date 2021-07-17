let sumValue = {
    a:3,
    b:7
};

function calc() {
    return this.a + this.b;
}

let funcSum = calc.bind(sumValue);
console.log(funcSum());