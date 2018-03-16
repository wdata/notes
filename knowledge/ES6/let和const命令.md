## let和const命令

学习和引用自[ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/let)

### let的优势

1. 基本用法：
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

2. 不存在变量提升

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

3. 暂时性死区

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
 
4. 不允许重复声明

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

### 块级作用域

#### 为什么需要块级作用域

  1. 内层变量可能会覆盖外层变量；

  2. 用来计量的循环变量泄露为全局变量；

 #### ES6 的块级作用域

  let实际上为 JavaScript 新增了块级作用域。

### 块级作用域和函数式声明



