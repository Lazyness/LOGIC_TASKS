function concatenation() {
    let newStr = "";
    return function (str) {
        if (str === undefined) return newStr + "";
        return newStr += str;
    }
}
let concat = concatenation();
concat('test string 1');
concat('test2');
concat('finish');
alert(concat());



