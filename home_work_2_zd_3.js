let str = "JavaScript";

function reverse(str) {
    let newStr = "";
    if (!isNaN(str)) {
        alert("You enter not number!");
        return `You enter ${str}`;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

alert(reverse(str));
