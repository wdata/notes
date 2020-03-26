

// 1、函数声明（Function Declaration）
function funSum(x: number, y: number): number {
  return x + y;
}

console.log(funSum(1, 2));

// 2、函数表达式（Function Expression），mySum的类型根据类型推论获得
let mySum = function(x: number, y: number): number {
  return x + y;
}

console.log(mySum(1, 2));

// 手动添加类型，=> 用来表示函数的定义
let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

console.log(mySum1(1, 2));


// 3、接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): Boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

/**
  如果写成这个
  mySearch = function(source: string, subString: string) {
    return source + subString;
  }

  error => 
  
  error TS2322: Type '(source: string, subString: string) => string' is not assignable to type 'SearchFunc'.
  Type 'string' is not assignable to type 'Boolean'.
  
  
  等于
  let mySum2: (source: string, subString: string) => Boolean = function(source: string, subString: string) {
    return source.search(subString) !== -1;
  }
 */

 
 // 4、可选参数，可选参数只能放在必选后面，就是可选参数必须放在最后
 // 可选放在前面会报错：An argument for 'firstName' was not provided.后面的都会忽略
 function buildName(firstName: string, lastName?: string) {
   if (lastName) {
     return `${firstName} ${lastName}`; 
   } else {
     return firstName;
   }
 }
 
 console.log(buildName('hello', 'world'));
 console.log(buildName('hello!!'));

 
 // 5、默认参数
 function buildName1(firstName: string, lastName: string = 'Cat') {
   return firstName + lastName;
 }
 
 console.log(buildName1('hello', 'world'));
 console.log(buildName1('hello'));

// 6、剩余参数
function push(array: Array<number>, ...items: any[]): Array<number> {
   for (let x of items) {
     array.push(x);
   }
   return array;
  //  items.forEach((item) => {
  //    array.push(item)
  //  })
 }
 
 let a: number[] = [];
 push(a, 1, 2, '3');
 console.log(a);

 
 // 6、重载
 
 // 6-1、用联合类型实现，缺点：不够精确，不能number返回number，这样相互对应
 function reverse(x: number | string): number | string {
   if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
   } else {
     return x.split('').reverse().join('');
   }
 }

 console.log(reverse(123456), reverse('123456'));

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
