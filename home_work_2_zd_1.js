let number = 4;

function factorial(number) {
    if (number < 0) {
        alert("Enter positive number!");
        return -1;
    }

    else if (isNaN(number)) {
        alert("You enter not number!");
        return -1;
    }

    else if (!(number % 1 === 0)) {
        alert("Enter Integer number!");
        return -1;
    }

    else if (number == 0) return 1;
    else if (number == 1) return number;
    else return number * factorial(number - 1)
}

alert(factorial(number));
