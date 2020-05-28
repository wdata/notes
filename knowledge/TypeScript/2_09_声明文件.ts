// declare var jQuery: (selector: string) => any;
// jQuery('#ff');

declare const $: (selector: string) => any

// @ts-ignore
declare const jQuery = function (selector) {
  return document.querySelector(selector)
}

declare function jQuery_1(selector: string): any

//
declare function jQuery_2(domReadyCallback: () => any): any

// 当全局变量是一个类的时候，我们用declare class定义类型：
declare class Animal {
  name: string
  constructor(name: string)
  anyHi(): string
}

// declare class 语句只能用来定义类型，不能用来定义具体的实现；
declare class Aniaml_1 {
  name: string
  constructor(name: string)

  // @ts-ignore
  sayHi() {
    return `my name is ${this.name}`
  }
  // An implementation cannot be declared in ambient contexts.
}

// declare enum 定义的枚举类型也称为外部枚举
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
