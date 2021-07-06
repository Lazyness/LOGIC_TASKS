let number = -4;

function sumNumb(number) {
    if (isNaN(number)) {
        alert("You enter not number!");
        return -1;
    }

    else if (!(number % 1 === 0)) {
        alert("Enter Integer number!");
        return -1;
    }

    else if (number == 0) return 0;
    else if (number == 1) return `${number}`;
    else if (number < 0) return `(${number})+${sumNumb(number + 1)}`;
    else return `${sumNumb(number - 1)}+${number}`;
}

alert(sumNumb(number));
