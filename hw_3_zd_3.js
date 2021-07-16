function deleteDublicate(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i].id, arr[i]);
    }
    arr.splice(0, arr.length);
    map.forEach(x => arr.push(x));
    map.clear();

    return arr;
}

const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 4 }];

deleteDublicate(arr);