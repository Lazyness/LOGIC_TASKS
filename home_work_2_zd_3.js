let str = "12345";

function reverse(str) {
    let newStr = "";
    if (str === Number(str)) {
        alert("You enter not string!");
        return `You enter ${str}`;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

alert(reverse(str));
