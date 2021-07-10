function deleteDublicate(arr) {
    arr.forEach(function (item, i) {
        console.log("indexArr: " + i + ": " + "value: " + item.id);
    })
    console.log("-----------------------");
    
    let set = new Set(arr);
    let result = [];

    for (let i = 0; i < set.size - 1; i++) {
        let j = 0;
        for (j = i + 1; j < set.size; j++) {
            if (arr[i].id == arr[j].id) {
                set.delete(arr[j]);
            }
        }
    }

    set.forEach(x => result.push(x));
    arr = result;
    set.clear;

    arr.forEach(function (item, i) {
        console.log("indexArr: " + i + ": " + "value: " + item.id);
    })
}

const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 2 }, { id: 1 }, { id: 4 }];

deleteDublicate(arr);