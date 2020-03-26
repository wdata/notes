"use strict";
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength(122), getLength('22111'));
function getLength1(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength1(122), getLength1('22111'));
