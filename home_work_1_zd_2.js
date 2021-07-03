const MASSNUMS = [4, 7, 9, 2, 8, 4, 10, 15, 6, 19];

function getAvg(mass) {
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
    return { avg: temp_avg };
}

alert(`avg: ${getAvg(MASSNUMS).avg}`);