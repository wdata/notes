// 布尔
let isBoolean: boolean = false;
let isBoolean2: boolean = Boolean(1);

// 非布尔
// let isBoolean3: boolean = new Boolean(1);

// 数值
let number1: number = 1;
let num2: number = 0xf00d;
let num3: number = NaN;
let num4: number = Infinity;

// 字符串
let str: string = 'Tony';
let str1: string = `ffwwww ${str}`;

// 空值
function alertName(): void {
  console.log('name');
}
let unusable: void = undefined;

// null 和 undefined
let n: null = null;
let u: undefined = undefined;


let u1: undefined;

// error
// let num6: number = undefined;

// error
// let u: void;
// let num: number = u;


// enum枚举
enum Class {
  num = 2,
  num2 = 1
}

let c: Class = Class.num;
console.log(Class);


// undefined
let un: undefined | number = undefined;
un = 1;

let never: never;
// error
// never = 1;

never = (() => { throw new Error('错误') })();
