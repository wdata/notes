## let和const命令

***


学习和引用自[ECMAScript 6 入门 - 作者：阮一峰](http://es6.ruanyifeng.com/#docs/let)

* [1、let的优势](#1)
  - 新增了块级作用域
  - 不存在变量提升
  - 暂时性死区
  - 不允许重复声明
<br />

* [2、块级作用域的作用](#2)
  - 原因：ES5只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景：
    - 1、内层变量可能会覆盖外层变量；
    - 2、用来计量的循环变量泄露为全局变量；
<br />

* [3、块级作用域与函数声明](#3)
  - ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明<span style="color: #a6e22e;">为了兼容旧代码，还是支持块级作用域之中声明函数</span>；
  - ES6规定（只对 ES6 的浏览器实现有效）：
    - 1、允许在块级作用域内声明函数；
    - 2、函数声明类似于<span style="color: #c7254e;">var</span>，即会提升到全局作用域或函数作用域的头部
    - 3、同时，函数声明还会提升到所在的块级作用域的头部
<br />

* [4、const 命令](#4)
  - [4.1、基本用法](#4_1)
    - 1、一旦声明，常量的值不能改变（一旦声明，必须立刻初始化）；
    - 2、作用域和let一致：只在声明所在的块级作用域内有效；
    - 3、存在暂时性死区，只能在声明的后面使用；
    - 4、不可重复声明；
  - [4.2、本质](#4_2)
    - 定义：const实际保证的，并不是是变量值不能改变，而是变量指向内存地址不能改变；
    - 简单的数据类型（字符串、数值、布尔），值就是指正所指向的内存地址，等同与常量；
    - 复合数据类型（对象、数组），只能保证指针固定（类型不变），里面的内容不能保证；
  - [4.3、冻结对象](#4_3)
    - 方法：应该使用Object.freeze方法：const foo = Object.freeze({})；
<br />

* [5、ES6 声明变量的六种方法](#5)
  - 定义：function 、 <span style="color: #c7254e;">var</span> 、let 、const 、inport 、class
  - [5.1、顶层对象的属性](#5_1)
    - 定义：在javaScript的设计中，顶层对象的属性和全局变量挂钩：
    - 无法在编译时，爆出未声明的错误，只有在运行时才知道；
    - 容易在打错字的情况下，创建全局变量；
    - 顶层对象的属性可以到处编写，不利于模块化编程；
  - [5.2、global对象](#5_2)
    - ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
      - 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
      - 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
      - Node 里面，顶层对象是global，但其他环境都不支持。
    - 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性：
      - 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
      - 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
      - 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。


***


### <div id="1">1、let的优势</div>
* 1、基本用法：
    ```
    {
        1、第一种情况，var声明的b出现声明提升，没有块级作用域；
        {
          let a = 10;
          var b = 1;
        }

        a // ReferenceError: a is not defined.
        b // 1

        2、变量i是var声明的，在全局范围内都有效，所以全局只有一个变量i。
        每次循环i的值都会发生变化，而console.log(i)指向的是全局变量i，所以循环后值都是10。
        var a = [];
        for (var i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 10

        变量i是let声明的，当前的i只在本轮循环种有效，所以每一次循环i都是一个新的变量，最终输出6。
        为什么每次循环都会重新声明，那么它怎么知道上一轮循环的值，并计算出下一轮的值？
        这是因为JavaScript引擎内部会记住上一轮循环的值，初始化本轮i时就在上一轮的基础上重新计算。

        var a = [];
        for (let i = 0; i < 10; i++) {
          a[i] = function () {
            console.log(i);
          };
        }
        a[6](); // 6

    }
    ```

* 2、不存在变量提升

    ```
    {
        // var 的情况
        console.log(foo); // 输出undefined
        var foo = 2;

        // let 的情况
        console.log(bar); // 报错ReferenceError
        let bar = 2;
    }
    ```

* 3、暂时性死区

    只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

    在代码块内，使用let命令声明变量之前，该变量都是不可用的，这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）

    ```
    {
        if (true) {
          // TDZ开始
          tmp = 'abc'; // ReferenceError
          console.log(tmp); // ReferenceError

          let tmp; // TDZ结束
          console.log(tmp); // undefined

          tmp = 123;
          console.log(tmp); // 123
        }
    }
    ```
    “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

    ```
    {
        typeof x; // ReferenceError
        let x;
    }
    ```

    上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。

* 4、不允许重复声明

    ```
    {
        // 报错
        function func() {
          let a = 10;
          var a = 1;
        }

        // 报错
        function func() {
          let a = 10;
          let a = 1;
        }
    }
    ```

### <div id="2">2、块级作用域的作用</div>
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。let实际上为 JavaScript 新增了块级作用域。
* 1、内层变量可能会覆盖外层变量；
  ```
  {
    var tmp = new Date();

    function f() {
      console.log(tmp);
      if (false) {
        var tmp = 'hello world';
      }
    }

    f(); // undefined
  }
  ```
* 2、用来计量的循环变量泄露为全局变量；
  ```
  {
    var s = 'hello';

    for (var i = 0; i < s.length; i++) {
      console.log(s[i]);
    }

    console.log(i); // 5
  }
  ```
### <div id="3">3、块级作用域和函数式声明</div>
ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
 ```
 {
    // 情况一
    if (true) {
      function f() {}
    }

    // 情况二
    try {
      function f() {}
    } catch(e) {
      // ...
    }
 }
 ```
 但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错。

 <span style="color: #c7254e;">ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。</span>ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
 ```
 {
    function f() { console.log('I am outside!'); }

    (function () {
      if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
      }

      f();
    }());

    在ES5的情况下，f()会被声明提升，所以应该得到的是：I am inside!；
    在ES6的情况下，因为有块级作用域情况，应该得到的是：I am outside!；
    但是在实际情况中，会报错：f is not a function ，因为：如果改变了块级作用域内声明的函数的处理规则，
    显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题；

 }
 ```
 所以：ES6 在附录 B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。

  * 允许在块级作用域内声明函数。
  * 函数声明类似于<span style="color: #c7254e;">var</span>，即会提升到全局作用域或函数作用域的头部。
  * 同时，函数声明还会提升到所在的块级作用域的头部。

 注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。

 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

  ```
  {
    // 函数声明语句
    {
      let a = 'secret';
      function f() {
        return a;
      }
    }

    // 函数表达式
    {
      let a = 'secret';
      let f = function () {
        return a;
      };
    }
  }
  ```
 另外，还有一个需要注意的地方。ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。

  ```
  {
    // 不报错
    'use strict';
    if (true) {
      function f() {}
    }

    // 报错
    'use strict';
    if (true)
      function f() {}
  }
  ```

### <div id="4">4、const 命令</div>

##### <div id="4_1">4.1、基本用法</div>
  * 一旦声明，常量的值不能改变（ 一旦声明，必须立刻初始化 ）；
  * 作用域和let一致：只在声明所在的块级作用域内有效；
  * 存在暂时性死区，只能在声明的后面使用；
  * 不可重复声明；

##### <div id="4_2">4.2、本质</div>
 const实际保证的，并不是是变量值不能改变，而是变量指向内存地址不能改变。

  * 简单的数据类型（字符串、数值、布尔），值就是指正所指向的内存地址，等同与常量；
  * 复合数据类型（对象、数组），只能保证指针固定（类型不变），里面的内容不能保证；

 ```
 {
    1、const foo = {};
        foo.name = "name"; // 这个是成功的！
        foo = {}; // 这个会报错：r: Identifier 'foo' has already been decla#c7254e；

    2、const fob = [];
        fob.push(1); // 成功
        fob = [1]; // 报错： Assignment to constant variable.
 }
 ```
##### <div id="4_3">4.3、冻结对象</div>
应该使用Object.freeze方法：const foo = Object.freeze({});

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
 ```
 {
      var constantize = (obj) => {
          Object.freeze(obj);
          Object.keys(obj).forEach( (keys, i) => {
              if( typeof obj[key] === "object" ){
                  constantize( obj[keys] );
              }
          } )
      }
 }
 ```
### <div id="5">5、ES6 声明变量的六种方法</div>
function 、 <span style="color: #c7254e;">var</span> 、let 、const 、inport 、class

##### <div id="5_1">5.1、顶层对象的属性</div>
在javaScript的设计中，顶层对象的属性和全局变量挂钩：

 * 无法在编译时，爆出未声明的错误，只有在运行时才知道；
 * 容易在打错字的情况下，创建全局变量；
 * 顶层对象的属性可以到处编写，不利于模块化编程；

<span style="color: #c7254e;">var</span> 和 function 声明的变量继续与顶层对象挂钩，let 和 const 等ES6声明方式则不与顶层对象挂钩；

##### <div id="5_2">5.2、global对象</div>
ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
 * 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
 * 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
 * Node 里面，顶层对象是global，但其他环境都不支持。

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性：

 * 全局环境中，this会返回顶层对象。但是，Node 模块和 ES6 模块中，this返回的是当前模块。
 * 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
 * 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。

综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

```
{
  // 方法一
  (typeof window !== 'undefined'
     ? window
     : (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object')
       ? global
       : this);

  // 方法二
  var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
  };
}
```
现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。

垫片库system.global模拟了这个提案，可以在所有环境拿到global。

```
{
  // CommonJS 的写法
  require('system.global/shim')();

  // ES6 模块的写法
  import shim from 'system.global/shim'; shim();
}
```
上面代码可以保证各种环境里面，global对象都是存在的。

```
{
  // CommonJS 的写法
  var global = require('system.global')();

  // ES6 模块的写法
  import getGlobal from 'system.global';
  const global = getGlobal();
}
```
上面代码将顶层对象放入变量global。
