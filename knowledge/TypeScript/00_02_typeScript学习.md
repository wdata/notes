## typescript学习

### 原始数据类型
```ts
{

  // 1、string/字符串
  let str: string = '1';

  // 2、boolean
  let isBoolean: boolean = false;

  // 3、number
  let num: number = 1;

  // 4、array
  let arr: array = [1, 2, 3];

  // 5、tuple/元组
  let tuple: [string, number] = ['hello', 1]

  // 6、Enum/枚举
  enum Color {Red, Green, Blue};
  let enum: color = Color.Blue;

  // 7、void/无返回值
  function hello(): void {
    console.log('hello typescript');
  };

  // 8、null/对象值缺失
  let nullValue: null = null;

  // 9、undefined/初始化未定义值
  let undefinedValue: undefined | number = undefined;
  undefinedValue = 1;

  // 10、never/其他类型
  let never: never;
  never = (() => { throw new Error('错误') })();
}
```


### 类型推论
1. typeScript没有明确指定类型，会推测出一个类型，叫类型推论；
2. 如果定义的时候没有赋值，不管之后有没有赋值，都会推断成 any 类型而完全不被类型检查；

```ts
{
  let num = 9;
  // error
  num = 'string';
  // correct
  num = 1;
}
```

### 联合数据类型

表示取值可以分为多种类型中的一种，用 | 分割每个类型；

注意：

1. **只能访问此联合类型的所有类型里共有的属性或方法**；
2. 联合类型变量被赋值时会根据类型推断，推断出一个类型；

```ts
{
  let myFavor2: string | number;

  myFavor2 = 'string';
  myFavor2 = 7;
}
```

### 对象接口
interface定义的是对象的接口，**赋值的时候，变量的形状必须和接口的形状保持一致**。

注意：
1. keyName?: number， 表示该属性可以不存在；
2. keyName: string: number，表示key为string的任意值，它的子属性必须是number；
3. readonly keyName: number，id只读，不能修改（**注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**）；

```ts
{
  interface Person {
    readonly id: number,
    name: string,
    age?: number,
    [name: string]: string
  }

  let tom: Person = {
    name: 'wang',
    age: 21,
    tom: 'tom'
  }

  let tom2: Person = {
    name: 'wang',
    tom: 'tom'
  }
}
```
### 数组的展示

注意：
1. typescript已经内置了IArguments接口；

```ts
{
  // 1、类型+方括号表示
  let num: number[] = [1, 2, 3];
  
  // 2、数组泛型
  let arrNum: Array<number> = [1, 2, 3, 4];
  let arrStr: Array<string> = ['1', '2', '3'];
  let arrStrNum: Array<string | number> = [1, 2, '3', '4']; // 联合类型
  
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
  
  // 5、any在数组中运用
  let list: any[] = [1, '2', true];
  let list2: Array<any> = [1, '2', true];
}
```

### 函数

注意：
1. => 在ES6中表示为箭头函数，在TS中，表示为输出类型；
2. 可选参数，只能放在必选参数后面；
3. 设置默认参数后，不能再设置可选参数；
4. 函数内的参数


#####  1、函数声明（Function Declaration）
```ts
{
  function funSum(x: number, y: number): number {
    return x + y;
  }
}
```

#####  2、函数表达式（Function Expression），mySum的类型根据类型推论获得
```js
{
  let mySum = function(x: number, y: number): number {
    return x + y;
  }
  
  // 类似，=> 指明了返回类型
  let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
  };
}
```

#####  3、接口定义函数的形状
```ts
{
  interface SearchFunc {
    (source: string, subString: string): Boolean;
  }

  let mySearch: SearchFunc;

  mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
  }
}
```

##### 4、可选参数，可选参数只能放在必选后面，就是可选参数必须放在最后
```ts
{
  function buildName(firstName: string, lastName?: string) {
    if (lastName) {
      return `${firstName} ${lastName}`; 
    } else {
      return firstName;
    }
  }
}
```

##### 5、默认参数
```js
{
  function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + lastName;
  }
}
```

##### 6、剩余参数
```js
{
  function push(array: Array<number>, ...items: any[]): Array<number> {
    for (let x of items) {
      array.push(x);
    }
    return array;
  }

  let a: number[] = [];
  push(a, 1, 2, '3');
  
  // 我设置了array必选是数字数组，输出也限制为数字数组
  // 但是我仍然能插入字符串
}
```

##### 6、重载
```ts
{
 // 6-1、用联合类型实现，缺点：不够精确，不能number返回number，这样相互对应
 function reverse(x: number | string): number | string {
   if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
   } else {
     return x.split('').reverse().join('');
   }
 }
 
 // 6-2、用typescript提供的重载，类似于C++的方式
 // 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
 function reverse2(x: number): number;
 function reverse2(x: string): string;
 function reverse2(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else {
    return x.split('').reverse().join('');
  }
 }
 console.log(reverse2(123456), reverse2('123456'));

  /**
   思考：虽然网站上说第二种方法比第一种方法好，但是实际上是没有区别的。
   获取看起好像更简洁了，但实际上复杂性大大的增加了；
   第二种方法，本身不是实现真正的重载，它只是为了方便在前面写清楚，输入和输出的指向性
  */
}
```


### 类型断言

在某种情况下，我们需要还不确定类型时就要访问其中一个类型的属性和方法，例如：
```ts
{
  function getLength(something: string | number): number {
    if (something.length) {
        return something.length;
    } else {
        return something.toString().length;
    }
  }
  // 此方法会报错
}
```
格式：<类型>值 或 值 as 类型

注意：
1. **不能断言联合类型中不存在的类型**

```ts
{

  // <类型>值 
  function getLength(something: string | number): number {
    if ((<string>something).length) {
      return (<string>something).length;
    } else {
      return something.toString().length;
    }
  }
  
  // 值 as 类型
  function getLength1(something: string | number): number {
    if ((something as string).length) {
      return (something as string).length;
    } else {
      return something.toString().length;
    }
  }
}
```

### 新语法索引

```
{
  ​declare var 声明全局变量

  ​declare function 声明全局方法

  ​declare class 声明全局类

  ​declare enum 声明全局枚举类型

  ​declare namespace 声明（含有子属性的）全局对象

  ​interface 和 type 声明全局类型

  ​export 导出变量

  ​export namespace 导出（含有子属性的）对象

  ​export default ES6 默认导出

  ​export = commonjs 导出模块

  ​export as namespace UMD 库声明全局变量

  ​declare global 扩展全局变量

  ​declare module 扩展模块

  ​/// <reference /> 三斜线指令
}
```
