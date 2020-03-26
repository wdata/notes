

// 1、类型+方括号表示
let num: number[] = [1, 2, 3];

// error：Type 'string' is not assignable to type 'number'
// let num1: number[] = [1, '2', 3];

// error：Argument of type '"1"' is not assignable to parameter of type
// num.push('1');

// 2、数组泛型
let arrNum: Array<number> = [1, 2, 3, 4];
let arrStr: Array<string> = ['1', '2', '3'];
let arrStrNum: Array<string | number> = [1, 2, '3', '4'];
let arrAny: Array<any> = [1, '2', true, null, undefined, {}];

// 3、接口表示数组
interface numberFun {
  [index: number]: number;
}
let finb: numberFun = [1, 2, 3, 4];

// 4。类数组
function sum() {
  // error
  // let args: number[] = arguments;
  
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}


function sum1() {
  let args: IArguments = arguments;
}

// typescript已经内置了IArguments类型
// error Duplicate number index signature
// interface IArguments {
//   [index: number]: any,
//   length: number,
//   callee: Function
// }

// 5、any在数组中运用
let list: any[] = [1, '2', true];
let list2: Array<any> = [1, '2', true];
