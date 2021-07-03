const MASSNUMS = [4, 7, 9, 2, 8, 4, 10, 15, 6, 19];

function getMinMaxValue(mass) {
    if (mass.length == 0) {
        alert("Massive is hollow!");
        return;
    }
    let temp_min = mass[0],
        temp_max = temp_min;
    // algorithm search min max value in massive numbers
    for (let i = 0; i < mass.length - 1; i++) {
        for (let j = i; j < mass.length; j++) {
            if (temp_min > mass[j]) {
                temp_min = mass[j];
            }
            else if (temp_max < mass[j]) {
                temp_max = mass[j];
            }
        }
    }
    return { min: temp_min, max: temp_max };
}

alert(`min: ${getMinMaxValue(MASSNUMS).min}, max: ${getMinMaxValue(MASSNUMS).max}`);