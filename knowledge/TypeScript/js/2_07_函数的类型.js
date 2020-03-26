"use strict";
function funSum(x, y) {
    return x + y;
}
console.log(funSum(1, 2));
let mySum = function (x, y) {
    return x + y;
};
console.log(mySum(1, 2));
let mySum1 = function (x, y) {
    return x + y;
};
console.log(mySum1(1, 2));
let mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}
console.log(buildName('hello', 'world'));
console.log(buildName('hello!!'));
function buildName1(firstName, lastName = 'Cat') {
    return firstName + lastName;
}
console.log(buildName1('hello', 'world'));
console.log(buildName1('hello'));
function push(array, ...items) {
    for (let x of items) {
        array.push(x);
    }
    return array;
}
let a = [];
push(a, 1, 2, '3');
console.log(a);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(123456), reverse('123456'));
function reverse2(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
console.log(reverse2(123456), reverse2('123456'));
