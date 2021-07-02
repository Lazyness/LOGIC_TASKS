const MASSNUMS = [4, 7, 9, 2, 8, 4, 10, 15, 6, 19];
// const MASSNUMS = [-1, 0, 1, 2, 4, 5];
let flag = true;

function get_avg(mass) {
    if (mass.length == 0) {
        alert("Massive is hollow!");
        return;
    }
    let j = 0;
    // algorithm search masive sort or not?
    for (let i = 0; i < mass.length - 1; i++) {
        for (j = j + 1; j < mass.length; j++) {
            if (mass[i] > mass[j]) {
                flag = false;
                break;
            }
            break;
        }
    }
    return flag;
}

alert(`sort: ${get_avg(MASSNUMS)}`);
