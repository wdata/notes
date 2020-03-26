"use strict";
let isBoolean = false;
let isBoolean2 = Boolean(1);
let number1 = 1;
let num2 = 0xf00d;
let num3 = NaN;
let num4 = Infinity;
let str = 'Tony';
let str1 = `ffwwww ${str}`;
function alertName() {
    console.log('name');
}
let unusable = undefined;
let n = null;
let u = undefined;
let u1;
var Class;
(function (Class) {
    Class[Class["num"] = 2] = "num";
    Class[Class["num2"] = 1] = "num2";
})(Class || (Class = {}));
let c = Class.num;
console.log(Class);
let un = undefined;
un = 1;
let never;
never = (() => { throw new Error('错误'); })();
