function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

console.log(createArray(10, 1))

// 多个类型参数定义
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

swap([7, 'sevent'])

// 泛型约束
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length);  事先不知道它的属性，则不一定包含length
  return arg
}

// 使用extends约束泛型T
interface Lengthwise {
  length: number
}

function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// loggingIdentity1(12); 报错

// 多个参数类型相互约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })

// 泛型接口
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch1: SearchFunc
mySearch1 = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 用泛型的接口来定义函数的形状
interface CreateArrayFunc {
  <T>(Length: number, value: T): Array<T>
}

let createArray1: CreateArrayFunc
createArray1 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray1(3, 'x')

// 泛型类
class GenericNumber<T> {
  // @ts-ignore
  zeroValue: T
  // @ts-ignore
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

// 泛型参数的默认类型
function createArray2<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
