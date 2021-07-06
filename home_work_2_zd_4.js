let newStr = "";
function concat(str) {
    if (str === undefined) return newStr + "";
    return newStr += str;
}

concat('test string 1');
concat('test2');
concat('finish');
alert(concat());
