// 在某种情况下，我们需要还不确定类型时就要访问其中一个类型的属性和方法，比如：
/**
function getLength(something: string | number): number {
  if (something.length) {
      return something.length;
  } else {
      return something.toString().length;
  }
}
 */

 // 类型断言，格式：<类型>值 或 值 as 类型
 function getLength(something: string | number): number {
   if ((<string>something).length) {
     return (<string>something).length;
   } else {
     return something.toString().length;
   }
 }
 
 console.log(getLength(122), getLength('22111'));

 function getLength1(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString().length;
  }
}

console.log(getLength1(122), getLength1('22111'));

// 注意：不能断言联合类型中不存在的类型
