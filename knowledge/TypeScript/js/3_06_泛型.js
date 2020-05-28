"use strict";
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(10, 1));
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'sevent']);
function loggingIdentity(arg) {
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
function copyFields(target, source) {
    for (let id in source) {
        target[id] = source[id];
    }
    return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
copyFields(x, { b: 10, d: 20 });
let mySearch1;
mySearch1 = function (source, subString) {
    return source.search(subString) !== -1;
};
let createArray1;
createArray1 = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray1(3, 'x');
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function createArray2(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
