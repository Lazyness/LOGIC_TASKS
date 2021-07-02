const MASSNUMS = [4, 7, 9, 2, 8, 4, 10, 15, 6, 19];
let obj = {};

function get_avg(mass) {
    if (mass.length == 0) {
        alert("Massive is hollow!");
        return;
    }
    let temp_avg = 0, sum = temp_avg;
    // algorithm search avg value in massive numbers
    for (let i = 0; i < mass.length; i++) {
        sum += mass[i];
        temp_avg = sum / mass.length;
    }
    obj = { avg: temp_avg };
    return obj;
}

alert(`avg: ${get_avg(MASSNUMS).avg}`);