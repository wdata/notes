## Promise 对象

***

学习和引用自[ECMAScript 6 入门 - 作者：阮一峰](http://es7.ruanyifeng.com/#docs/destructuring)
<br />

* [1、Promise 的含义](#1)
  - 定义：所谓 <span style="color: #c7254e;">Promise</span>，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，<font color='#c7254e' >Promise</font> 是一个对象，从它可以获取异步操作的消息。<font color='#c7254e' >Promise</font> 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
  - 特点：
    1. **对象的状态不受外界影响**。<span style="color: #c7254e;">Promise</span>对象代表一个异步操作，有三种状态：<span style="color: #c7254e;">pending</span>（进行中）、<span style="color: #c7254e;">fulfilled</span>（已成功）和<span style="color: #c7254e;">rejected</span>（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
    2.  **一旦状态改变，就不会再变，任何时候都可以得到这个结果**。<span style="color: #c7254e;">Promise</span>对象的状态改变，只有两种可能：从 <span style="color: #c7254e;">pending</span> 变为 <span style="color: #c7254e;">fulfilled</span> 和从 <span style="color: #c7254e;">pending</span> 变为 <span style="color: #c7254e;">rejected</span>。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为  <span style="color: #c7254e;">resolved</span> （已定型）。
  * 缺点：
    1. 首先，无法取消 <span style="color: #c7254e;">Promise</span>，一旦新建它就会立即执行，无法中途取消；
    2. 其次，如果不设置回调函数，<span style="color: #c7254e;">Promise</span> 内部抛出的错误，不会反应到外部；
    3. 当处于 <span style="color: #c7254e;">pending</span> 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）；
<br />

* [2、基本用法](#2)
  - <span style="color: #c7254e;">Promise</span>对象是一个构造函数
  - 参数：
    1. <span style="color: #c7254e;">resolve</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘成功’ （即 peding =》 <font color='#c7254e' >resolved</font>）**，在异步操作成功时调用，并将 **异步操作的结果，作为参数调用出去**；
    2. <span style="color: #c7254e;">reject</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘失败’ （即 peding =》 <font color='#c7254e' >rejected</font>）**，异步操作失败时调用，并将 **异步操作报出的错误，作为参数传递出去**。
  * 注意：
    1. **Promise 新建后会立即执行**；
    2. 如果调用 resolve 函数和 reject 函数时带有参数，那么它们的参数会被传递给回调函数。
        * reject 函数的参数通常是Error对象的实例，表示抛出的错误；
        * resolve 函数的参数除了正常的值以外，还可能是另一个 Promise 实例；
    3. **调用 <span style="color: #c7254e;">resolve</span> 或 <span style="color: #c7254e;">reject</span> 并不会终结  <span style="color: #c7254e;">Promise</span>  的参数函数的执行**。
<br />
* [3、Promise.prototype.then()](#3)
  - 作用：为 Promise 实例添加状态改变时的回调函数；
  - 参数：
    1. 第一个参数是<font color='#c7254e' >resolved</font>状态的回调函数；
    2. 第二个参数（可选）是<font color='#c7254e' >rejected</font>状态的回调函数；
  - 特点：
    1. then可以使用链式调用，可以指定一组按照次序调用的回调函数。第一个回调函数的返回，在第二个回调函数中作为参数接收，依次调用；
    2. 前一个回调函数返回一个 Promise 对象（即异步操作），这时后一个回调函数的回调函数就会等待Promise对象的状态发生变化，才会被调用；
<br />
* [4、Promise.prototype.catch()](#4)
  - 作用：用于指定发生错误时的回调函数；
  - 抛出错误的原因：
    1. <font color='#c7254e' >Promise</font> 对象，如果异步操作抛出错误，状态就会改变为<font color='#c7254e' >rejected</font>，就会调用catch方法指定的回调函数，处理这个错误：
    2. 如果then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获；
  - 注意：
    1. **如果Pormise状态已经变成<font color='#c7254e' >resolved</font>，再抛出错误是无效的**；
    2. **Promise对象的错误具有‘冒泡’性质，会一直向后传递，直到会被捕获为止**；
    3. **不要在then方法里面定义Rejct状态的回调函数（即then的第二个参数），总是用cahch方法**；
    4. **如果没有使用catch方法指定错误的回调函数，<font color='#c7254e' >Promise</font> 对象抛出的错误不会传递到外层代码，即不会有任何反应**；
    5. **eatch方法要放在最后面执行，因为eatch方法后面跟then方法报错时，之前的eatch方法不会执行**；
<br />
* [5、Promise.prototype.finally()](#5)
  - **<font color='#c7254e' >finally</font>方法用于指定不管 Promise 对象最后状态如何，都会执行的操作**。
  - 注意：
    1. **<font color='#c7254e' >finally</font>方法的回调函数不接受任何参数，这意味着没有办法知道，前面的<font color='#c7254e' >Promise</font>状态到底是fufilied还是<font color='#c7254e' >rejected</font>**。表面，<font color='#c7254e' >finally</font>方法的操作，与状态无关，不依赖<font color='#c7254e' >Promise</font>的执行结果。
    2. <font color='#c7254e' ><font color='#c7254e' >finally</font></font>本质上是then方法的特例；
  -
<br />

* [6、Promise.all()](#6)
  - **<font color='#c7254e' >Promise.all</font>方法用于将多个<font color='#c7254e' >Promise</font>实例，包装成一个新的<font color='#c7254e' >Promise</font>实例**。
  - 特点：
    1. <font color='#c7254e' >Promise.all</font>方法可以接收一个数组作为参数，p1、p2、p3都是<font color='#c7254e' >Promise</font>实例；
    2. 如果不是实例，就会调用<font color='#c7254e' >Promise.resolve</font>方法，将参数转化为<font color='#c7254e' >Promise</font>实例；
    3. <font color='#c7254e' >Promise.all</font>方法的参数可以不是数组，但是必须具有Iterator接口，且返回的每个成员都是<font color='#c7254e' >Promise</font>实例；
  - 注意：
    1. <font color='#c7254e' >Promise.all</font>链接的方法，可以数组格式接收参数<font color='#c7254e' >Promise</font>实例返回的值；
    2. **<font color='#c7254e' >Promise.all</font>需要等参数<font color='#c7254e' >Promise</font>实例的结果都返回，才会触法回调函数**；
    3. 作为参数的<font color='#c7254e' >Promise</font>实例，自己定义了catch方法，如果结果为<font color='#c7254e' >rejected</font>，并不会触法<font color='#c7254e' >Promise.all()</font>的catch方法；
    4. **如果在使用<font color='#c7254e' >Promise.all</font>方法在某一个参数<font color='#c7254e' >Promise</font>实例报错是执行catch方法，可以在这个参数<font color='#c7254e' >Promise</font>实例中添加catch方法，那么参数<font color='#c7254e' >Promise</font>实例报错时，就不会执行<font color='#c7254e' >Promise.all</font>的catch方法**
<br />

* [7、Promise.race()](#7)
  - <font color='#c7254e' >Promise.race</font>方法同样是将多个<font color='#c7254e' >Promise</font>实例，包装成一个新的<font color='#c7254e' >Promise</font>实例；
  - 与<font color='#c7254e' >Promise.all</font>的不同点：
    1. **只要任意一个参数<font color='#c7254e' >Promise</font>实例率先改变状态，新的<font color='#c7254e' >Promise</font>实例就会先调用<font color='#c7254e' >Promise.resolve</font>方法，将其参数转化为<font color='#c7254e' >Promise</font>实例，在进一步处理**。
<br />

* [8、Promise.resolve()](#8)
  - <font color='#c7254e' >Promise.resolve</font>方法可以将对象转为Promise对象;
  - <font color='#c7254e' >Promise.resolve</font>方法的参数分成四种情况：
    1. [8.1、参数是一个Promise实例：](#8_1)
        * 如果参数是<font color='#c7254e' >Promise</font>实例，那么<font color='#c7254e' >Promise.resolve</font>将不做任何修改、原封不动地返回这个实例。
    2. [8.2、参数是一个thenable对象：](#82)
        - theable对象是指具有then方法的对象，比如下面这个对象：
    3. [8.3、参数不是具有then方法的对象，或根本就不是对象；](#8_3)
        - 如果参数是一个原始值，或者是一个不具有then方法的对象，则<font color='#c7254e' >Promise.resolve</font>方法返回一个新的<font color='#c7254e' >Promise</font>对象，状态为<font color='#c7254e' >resolved</font>。
    4. [8.4、不带有任何的参数；](#8_4)
        - <font color='#c7254e' >Promise.resolve</font>方法允许调用时不带参数，直接返回一个<font color='#c7254e' >resolved</font>状态的<font color='#c7254e' >Promise</font>对象。
<br />

* [9、Promise.reject()](#9)
  - Promise.reject(reason)方法返回一个状态为<font color='#c7254e' >rejected</font>的<font color='#c7254e' >Promise</font>实例；
  - 注意：**<font color='#c7254e' >Promise.reject()</font>方法的参数，会原封不动地作为reject的理由，变成后续方法的参数**。这一点与<font color='#c7254e' >Promise.resolve</font>方法不一致。
<br />
* [10、应用](#10)
  - [10.1、加载图片](#10_1)
    - 我们可以将图片的加载写成一个<font color='#c7254e' >Promise</font>，一旦加载完成，<font color='#c7254e' >Promise</font>的状态就发生变化。
  - [10.2、Generator函数与Promise的结合](#10_2)
    - 使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个<font color='#c7254e' >Promise</font>对象。
<br />

* [11、Promise.try()](#11)
  - Promise.try可以让同步函数同步执行，让异步函数异步执行。
  - 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 <font color='#c7254e' >Promise</font> 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。
  - 原来的两种方法：
    - [11.1、用async函数来写](#11_1)
    - [11.2、使用new Promise()](#11_2)
  - 提供了新的方法[11.1、使用Promise.try方法](#11_3)
    - 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
<br />



***
### <div id="1">1、Promise 的含义</div>
所谓 <span style="color: #c7254e;">Promise</span>，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，<font color='#c7254e' >Promise</font> 是一个对象，从它可以获取异步操作的消息。<font color='#c7254e' >Promise</font> 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

<span style="color: #c7254e;">Promise</span> 对象有以下两个特点：
1. **对象的状态不受外界影响**。<span style="color: #c7254e;">Promise</span>对象代表一个异步操作，有三种状态：<span style="color: #c7254e;">pending</span>（进行中）、<span style="color: #c7254e;">fulfilled</span>（已成功）和<span style="color: #c7254e;">rejected</span>（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
2. **一旦状态改变，就不会再变，任何时候都可以得到这个结果**。<span style="color: #c7254e;">Promise</span>对象的状态改变，只有两种可能：从 <span style="color: #c7254e;">pending</span> 变为 <span style="color: #c7254e;">fulfilled</span> 和从 <span style="color: #c7254e;">pending</span> 变为 <span style="color: #c7254e;">rejected</span>。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为  <span style="color: #c7254e;">resolved</span> （已定型）。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

<span style="color: #c7254e;">Promise</span> 对象的缺点：
1. 首先，无法取消 <span style="color: #c7254e;">Promise</span>，一旦新建它就会立即执行，无法中途取消。
2. 其次，如果不设置回调函数，<span style="color: #c7254e;">Promise</span> 内部抛出的错误，不会反应到外部。
3. 当处于 <span style="color: #c7254e;">pending</span> 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

### <div id="2">2、基本用法</div>
ES6 规定，<span style="color: #c7254e;">Promise</span>对象是一个构造函数，用来生成<span style="color: #c7254e;">Promise</span>实例。

下面代码创造了一个Promise实例：
```javascript
{
  const promise = new Promise(function(resolve, reject) {
    if (/* 异步操作成功 */) {
      resolve(value);
    } else {
      reject(error);
    }
  });
}
```

Promise参数：
* <span style="color: #c7254e;">resolve</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘成功’ （即 peding =》 <font color='#c7254e' >resolved</font>）**，在异步操作成功时调用，并将 **异步操作的结果，作为参数调用出去**；
* <span style="color: #c7254e;">reject</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘失败’ （即 peding =》 <font color='#c7254e' >rejected</font>）**，异步操作失败时调用，并将 **异步操作报出的错误，作为参数传递出去**。

<span style="color: #c7254e;">Promise</span> 实例生成以后，可以用<span style="color: #c7254e;">then</span>方法分别指定 <span style="color: #c7254e;">resolved</span> 状态和 <span style="color: #c7254e;">rejected</span> 状态的回调函数。

```javascript
{
  promise.then(function(value) {
    // success
  }, function(error) {
    // failure
  })
}
```

<span style="color: #c7254e;">then</span> 方法有两个回调作为参数：

 * 第一个回调函数是 <span style="color: #c7254e;">Promise</span> 对象的状态变为  <span style="color: #c7254e;">resolved</span> 时调用；
 * 第二个回收函数是 <span style="color: #c7254e;">Promise</span> 对象的状态变为  <span style="color: #c7254e;">rejected</span> 时调用；（可选）

<span style="color: #c7254e;">Promise</span> 简单例子：
```javascript
{
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  };

  timeout(100).then((value) => {
    console.log(value);
  });

  // 上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。
}
```

1、**Promise 新建后会立即执行**，然后 then 方法指定回调函数，将在当前脚本所有同步任务执行完才会执行，所以 <span style="color: #c7254e;">resolved</span> 最后输出；
```javascript
{
  let promise = new Promise((resolve, reject) => {
    console.log('Promise');
    resolve();
  });

  promise.then((value) => {
    console.log('resolved.');
  });

  console.log('Hi!');

  // Promise
  // Hi!
  // resolved.
}
```

异步加载图片的例子：
```javascript
{
  function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };

      image.onerror = () => {
        reject(new Error('Could not load image at ' + url));
      };

      image.src = url;
    });
  };
}
```
上面的代码，使用 <span style="color: #c7254e;">Promise</span> 包装了一个图片加载的异步操作。如果加载成功，就调用 <span style="color: #c7254e;">resolve</span> 方法，否则就调用 <span style="color: #c7254e;">reject</span> 方法。

下面是用 <span style="color: #c7254e;">Promise</span> 对象实现Ajax操作的例子：
```javascript
{
  const getJSON = (url) => {
    const promise = new Promise((resolve, reject) => {
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open('GET', url);
      client.onreadystatechange = handler;
      client.respoenseType = 'json';
      client.setRequestHeader('Accept', 'application/json');
      client.send();
    });
    return promise;
  };

  getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json').then((json) => {
    console.log('Contents：' + json);
  }, (error) => {
    console.error('出错了', error);
  });
}
```
上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部， <span style="color: #c7254e;">resolve</span> 函数和 <span style="color: #c7254e;">reject</span> 函数调用时，都带有参数。


2、如果调用 <span style="color: #c7254e;">resolve</span> 函数和 <span style="color: #c7254e;"> <span style="color: #c7254e;">reject</span> </span> 函数时带有参数，那么它们的参数会被传递给回调函数。
*  <span style="color: #c7254e;">reject</span> 函数的参数通常是Error对象的实例，表示抛出的错误；
*  <span style="color: #c7254e;">resolve</span> 函数的参数除了正常的值以外，还可能是另一个  <span style="color: #c7254e;">Promise</span>  实例；

比如像下面的：
```javascript
{
  const p1 = new Promise(function (resolve, reject) {
    // ...
  });

  const p2 = new Promise(function (resolve, reject) {
    // ...
    resolve(p1);
  });
}
```

注意，这时 <span style="color: #c7254e;">p1</span> 的状态就会传递给 <span style="color: #c7254e;">p2</span> ，也就是说， <span style="color: #c7254e;">p1</span> 的状态决定了 <span style="color: #c7254e;">p2</span> 的状态。如果 <span style="color: #c7254e;">p1</span> 的状态是 <span style="color: #c7254e;">pending</span> ，那么 <span style="color: #c7254e;">p2</span> 的回调函数就会等待 <span style="color: #c7254e;">p1</span> 的状态改变；如果 <span style="color: #c7254e;">p1</span> 的状态已经是 <span style="color: #c7254e;">resolved</span> 或者 <span style="color: #c7254e;">rejected</span> ，那么 <span style="color: #c7254e;">p2</span> 的回调函数将会立刻执行。
```javascript
{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 3000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(p1), 1000);
  });

  p2.then(result => console.log(result))
  .catch(error => console.log(error));
}
```
上面代码中， <span style="color: #c7254e;">p1</span> 是一个  <span style="color: #c7254e;">Promise</span> ，3 秒之后变为 <span style="color: #c7254e;">rejected</span> 。 <span style="color: #c7254e;">p2</span> 的状态在 1 秒之后改变， <span style="color: #c7254e;">resolve</span> 方法返回的是 <span style="color: #c7254e;">p1</span> 。由于 <span style="color: #c7254e;">p2</span> 返回的是另一个  <span style="color: #c7254e;">Promise</span> ，导致 <span style="color: #c7254e;">p2</span> 自己的状态无效了，由 <span style="color: #c7254e;">p1</span> 的状态决定 <span style="color: #c7254e;">p2</span> 的状态。所以，后面的then语句都变成针对后者（ <span style="color: #c7254e;">p1</span> ）。又过了 2 秒， <span style="color: #c7254e;">p1</span> 变为 <span style="color: #c7254e;">rejected</span> ，导致触发catch方法指定的回调函数。

3、注意，**调用 <span style="color: #c7254e;">resolve</span> 或 <span style="color: #c7254e;">reject</span> 并不会终结  <span style="color: #c7254e;">Promise</span>  的参数函数的执行**。
```javascript
{
  new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
  }).then(r => {
    console.log(r);
  });
}
```
上面代码中，调用 <span style="color: #c7254e;">resolve(1)</span> 以后，后面的console.log(2)还是会执行，并且会首先打印出来。**这是因为立即  <span style="color: #c7254e;">resolved</span>  的  <span style="color: #c7254e;">Promise</span>  是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务**。

一般来说，调用 <span style="color: #c7254e;">resolve</span> 或 <span style="color: #c7254e;">reject</span> 以后， <span style="color: #c7254e;">Promise</span>  的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在 <span style="color: #c7254e;">resolve</span> 或 <span style="color: #c7254e;">reject</span> 的后面。所以，**最好在它们前面加上return语句**，这样就不会有意外。
```javascript
{
  new Promise((resolve, reject) => {
    return resolve(1);
    console.log(2);
  }).then(r => {
    console.log(r);
  });
}
```

### <div id="3">3、Promise.prototype.then()</div>
<span style="color: #c7254e;">then</span> 方法是定义在原型对象  <span style="color: #c7254e;">Promise.prototype</span> ；

作用：为 Promise 实例添加状态改变时的回调函数。
###### 参数：
1. 第一个参数是<font color='#c7254e' >resolved</font>状态的回调函数；
2. 第二个参数（可选）是<font color='#c7254e' >rejected</font>状态的回调函数

###### 特点：
1、 then可以使用链式调用，可以指定一组按照次序调用的回调函数。第一个回调函数的返回，在第二个回调函数中作为参数接收，依次调用；
```javascript
{
  getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json').then(json => {
    return json.post;
  }).then(post => {
    // ...
  });
}
```
2、 前一个回调函数返回一个 Promise 对象（即异步操作），这时后一个回调函数，的回调函数就会等待Promise对象的状态发生变化，才会被调用；

```javascript
{
  getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json').then(post => {
    return getJSON(post.commetURL)
  }).then(funcA(comments) => {
    console.log('resolved:', comments);
  }, funcB(err) => {
    console.log('rejected:', err);
  });
}
```
上面代码中，第一个then =》返回Promise对象，第二个then在Promise对象状态发生变化，如果为<font color='#c7254e' >resolved</font> =》调用funcA，如果为<font color='#c7254e' >rejected</font> =》 就调用funcB；

更简洁的箭头函数：
```javascript
{
  getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json').then(
    post => getJSON(post.commentURL)
  ).then(
    comments => console.log('resolved:', comments),
    err => console.log('rejected:', err);
  )
}
```

### <div id="4">4、Promise.prototype.catch()</div>

<span style="color: #c7254e;">Promise.prototype.catch</span> 方法是<span style="color: #c7254e;">.then(null, rejection)</span>或<span style="color: #c7254e;">.then(undefined, rejection)</span>的别名，用于指定发生错误时的回调函数。

```javascript
{
  getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json').then(
    posts => console.log(posts)
  ).catch(
    error => console.log('发生错误！', error)
  );
}
```
抛出错误的原因：
1、<font color='#c7254e' >Promise</font> 对象，如果异步操作抛出错误，状态就会改变为<font color='#c7254e' >rejected</font>，就会调用catch方法指定的回调函数，处理这个错误：
2、如果then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获；
```javascript
{
  const p = getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json');
  p.then(val => console.log('resolved', val))
  .catch(err => console.log('rejected', err));

  // 等同于
  p.then(val => console.log('resolved', val))
  .then(err => console.log('rejected', err));

  // 等同于
  p.then(
    val => console.log('resolved', val),
    err => console.log('rejected', err)
  )
}
```
例子：
```javascript
{
  const promise = new Promise(
    (resolve, reject) => {
      throw new Error('text')
    }
  );
  promise.catch(
    error => console.log(error)
  );
}
```
上面的写法和下面的两种写法是等价的：
```javascript
{
  写法一
  const promise = new Promise(
    (resolve, reject) => {
      try {
        throw new Error('text')
      } catch(e) {
        reject(e);
      }
    }
  );
  promise.catch(
    error => console.log(error)
  );

  // 写法二
  const promise = new Promise(
    (resolve, reject) => reject(new Error('text'))
  );
  promise.catch(
    error => console.log(error)
  );
}
```
比较上面的两种写法，可以发现reject方法的作用，等同于抛出错误。

**如果Pormise状态已经变成<font color='#c7254e' >resolved</font>，再抛出错误是无效的**。
```javascript
{
  const promise = new Promise(
    (resolve, reject) => {
      resolve('ok');
      throw new Error('text');
    }
  );
  promise.then(
    val => console.log(val),
    err => console.log(err)
  )
}
```

**Promise对象的错误具有‘冒泡’性质，会一直向后传递，直到会被捕获为止**。
```javascript
{
  const p = getJSON('chrome-extension://henmfoppjjkcencpbjaigfahdjlgpegn/messages.json');
  p.then(
    (post) => { return getJSON(post.commentURL) }
  ).then(
    comments => getJSON(comments)
  ).catch(
    // 处理前面三个Promise产生的错误
    err => console.log('reject', err)
  )
}
```
上面的代码中，一共有三个 <font color='#c7254e' >Promise</font> 对象：
1、一个由getJSON产生；
2、两个由then产生；
它门之间任何一个抛出错误，都会被最后一个catch捕获。

**不要在then方法里面定义Rejct状态的回调函数（即then的第二个参数），总是用cahch方法**
```javascript
{
  // bad
  promise.then(function(data) {
    // success
  }, function(err) {
    // error
  });

  good
  promise.then(function(data) {
    // success
  }).catch(function(err) {
    // error
  });
}
```
第二种写法好处：第二种写法可以捕获前面then方法执行的错误，也更接近同步的写法（try/catch）。

根传统的try/catch不同的是，**如果没有使用catch方法指定错误的回调函数，<font color='#c7254e' >Promise</font> 对象抛出的错误不会传递到外层代码，即不会有任何反应**；
```javascript
{
  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing().then(function() {
    console.log('everything is great');
  });
  setTimeout(() => {console.log(123)}, 2000);
  // Uncaught (in promise) ReferenceError: x is not defined
  // 123
}
```
上面的代码中，<font color='#c7254e' >someAsyncThing</font>函数产生的<font color='#c7254e' >Promise</font>对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示<font color='#c7254e' >ReferenceError: x is not defined</font>，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，<font color='#c7254e' >Promise</font>内部的错误不会影响到<font color='#c7254e' >Promise</font>外部的代码，通俗的说法就是“<font color='#c7254e' >Promise</font> 会吃掉错误”。

注意：**eatch方法要放在最后面执行，因为eatch方法后面跟then方法报错时，之前的eatch方法不会执行**
```js
{
  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing().then(function() {
    return someOtherAsyncThing();
  }).catch(function(error) {
    console.log('oh no', error);
    // 下面一行会报错，因为 y 没有声明
    y + 2;
  }).then(function() {
    console.log('carry on');
  });
  // oh no [ReferenceError: x is not defined]
}
```
上面的代码中，eatch抛出一个错误，y + 2的错误没有被捕获，被抛到外层；

```js
{
  someAsyncThing().then(() => {
    return someOtherAsyncThing();
  }).catch(error => {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
  }).catch(error => {
    console.log('carry on', error);
  });
}
```
上面代码中，第二个catch方法用来捕获前一个catch方法抛出的错误。

### <div id="5">5、Promise.prototype.finally()</div>

**<font color='#c7254e' >finally</font>方法用于指定不管 Promise 对象最后状态如何，都会执行的操作**。
```js
{
  // 标准
  promise
  .then(result => {···})
  .catch(error => {···})
  .finally(() => {···});
}
```
不管<font color='#c7254e' >Promise</font>最后状态是上面，<font color='#c7254e' >finally</font>方法都会执行；

例子：服务器使用 <font color='#c7254e' >Promise</font> 处理请求，然后使用<font color='#c7254e' >finally</font>方法关掉服务器。
```js
{
  server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
}
```

注意：
1、**<font color='#c7254e' >finally</font>方法的回调函数不接受任何参数，这意味着没有办法知道，前面的<font color='#c7254e' >Promise</font>状态到底是fufilied还是<font color='#c7254e' >rejected</font>**。表面，<font color='#c7254e' >finally</font>方法的操作，与状态无关，不依赖<font color='#c7254e' >Promise</font>的执行结果。

2、<font color='#c7254e' ><font color='#c7254e' >finally</font></font>本质上是then方法的特例；
```js
{
  promise.finally(() => {
    // 语句
  });

  // 等同于
  promise.then(
    result => {
      // 语句
      return result;
    },
    error => {
      // 语句
      throw error;
    }
  )
}
```
上面代码中，如果不使用<font color='#c7254e' >finally</font>方法，同样的语句需要为成功和失败两种情况各写一次。有了<font color='#c7254e' >finally</font>方法，则只需要写一次。

实现方式：
```js
{
  Promise.prototype.finally = function(callback) {
    let P = this.constructor;
    return this.then(
      value => P.resolve(callback()).then(() => console.log('finally-resolve：', value)),
      reason => P.resolve(callback()).then(() => { console.log('finally-rejected：', reason) })
    );
  };

  const promise = new Promise((resolve, reject) => {
  	const m = 0.1;
  	if (m > 0.5) {
  		resolve(m);
  	} else {
  		reject(m);
  	}
  });

  promise.finally(() => {
  	console.log('finally');
  });

  // finally
  // finally-rejected： 0.1
}
```
上面的代码中，不管前面的<font color='#c7254e' >Promise</font>是fulfilled还是<font color='#c7254e' >rejected</font>，都会执行回调函数callback。

从上面的实现可以看出，<font color='#c7254e' >finally</font>方法总是会返回原来的值；
```js
{
  // resolve 的值是 undefined
  Promise.resolve(2).then(() => {}, () => {})

  // resolve 的值是 2
  Promise.resolve(2).finally(() => {})

  // reject 的值是 undefined
  Promise.reject(3).then(() => {}, () => {})

  // reject 的值是 3
  Promise.reject(3).finally(() => {})
}
```

### <div id="6">6、Promise.all()</div>

**<font color='#c7254e' >Promise.all</font>方法用于将多个<font color='#c7254e' >Promise</font>实例，包装成一个新的<font color='#c7254e' >Promise</font>实例**。
```js
{
  const p = Promise.all([p1, p2, p3]);
}
```

特点：

1）、<font color='#c7254e' >Promise.all</font>方法可以接收一个数组作为参数，p1、p2、p3都是<font color='#c7254e' >Promise</font>实例；
2）、如果不是实例，就会调用<font color='#c7254e' >Promise.resolve</font>方法，将参数转化为<font color='#c7254e' >Promise</font>实例；
3）、<font color='#c7254e' >Promise.all</font>方法的参数可以不是数组，但是必须具有Iterator接口，且返回的每个成员都是<font color='#c7254e' >Promise</font>实例；


p的状态由p1、p2、p3决定，分为两种情况：

1）、只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数；
2）、只要p1、p2、p3之中有一个被<font color='#c7254e' >rejected</font>，p的状态就变成<font color='#c7254e' >rejected</font>，此时第一个被rject的实例的返回值，会传递给p的回调函数；

例子：
```js
{
  // 生产一个Promise对象的数组
  const promise = [2, 4, 5, 6, 11, 13].map((id) => {
    return getJSON(`/post/${id}.json`);
  });

  Promise.all(promise).then(resolved => {
    console.log('resolved：', resolved);
  }).catch(rejected => {
    throw rejected;
  });
}
```
上面的代码中，<font color='#c7254e' >Promise</font>是包含6个<font color='#c7254e' >Promise</font>实例的数组，只有这6个实例的状态都变成fulfilled，或者其中一个变为<font color='#c7254e' >rejected</font>，才会调用<font color='#c7254e' >Promise.all</font>方法后面的回调函数。

另一个例子：
```js
{
  function connectDatabase() {
  	const promise = new Promise((resolve, rejecte) => {
  		resolve(true);
  	});
    return promise;
  };
  function findAllBooks(resolve) {
    console.log('booksPromise', resolve);
    // 返回booksPromise参数，Promise.ALL可以接收此参数；
    return 'booksPromise';
  };
  function getCurrentUser(reject) {
    console.log('userPromise', reject);
    // 返回userPromise参数，Promise.ALL可以接收此参数；
    return 'userPromise';
  };
  function pickTopRecommentations(books, user) {
    // 接收Promise.all中Promise实例then方法return返回的参数，格式为数组
    console.log('books：', books, ' user：', user);
  }

  const databasePromise = connectDatabase();

  const booksPromise = databasePromise
    .then(findAllBooks);
  const userPromise = databasePromise
    .then(getCurrentUser);

  Promise.all([
    booksPromise,
    userPromise
  ])
  .then(([books, user]) => pickTopRecommentations(books, user));
}
```
注意：

1）、<font color='#c7254e' >Promise.all</font>链接的方法，可以数组格式接收参数<font color='#c7254e' >Promise</font>实例返回的值；
2）、<font color='#c7254e' >Promise.all</font>需要等参数<font color='#c7254e' >Promise</font>实例的结果都返回，才会触法回调函数；
3）、作为参数的<font color='#c7254e' >Promise</font>实例，自己定义了catch方法，如果结果为<font color='#c7254e' >rejected</font>，并不会触法<font color='#c7254e' >Promise.all()</font>的catch方法；

注意3例子：
```js
{
  const p1 = new Promise((resolve, reject) => {
    resolve('hello');
  })
  .then(result => result)
  .catch(e => e);

  const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
  })
  .then(result => result)
  .catch(e => e);

  Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e));
  // ["hello", Error: 报错了]
}
```
上面的代码中，p1返回resolve，p2返回<font color='#c7254e' >rejected</font>，但p2有自己的catch方法，该方法返回的是一个新的 <font color='#c7254e' >Promise</font> 实例，p2指向的实际上是这个实例。**该实例执行完catch方法后，也会变成<font color='#c7254e' >resolved</font>**，导致<font color='#c7254e' >Promise.all()</font>方法参数里面的两个实例都会<font color='#c7254e' >resolved</font>，因此会调用then方法指定的回调函数，而不会调用catch方法指定的回调函数。

如果p2没有自己的catch方法，就会调用<font color='#c7254e' >Promise.all()</font>的catch方法。
```js
{
  const p1 = new Promise((resolve, reject) => {
    resolve('hello');
  })
  .then(result => result);

  const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
  })
  .then(result => result);

  Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e));
  // Error: 报错了
}
```

因此：**如果在使用<font color='#c7254e' >Promise.all</font>方法在某一个参数<font color='#c7254e' >Promise</font>实例报错是执行catch方法，可以在这个参数<font color='#c7254e' >Promise</font>实例中添加catch方法，那么参数<font color='#c7254e' >Promise</font>实例报错时，就不会执行<font color='#c7254e' >Promise.all</font>的catch方法**。


### <div id="7">7、Promise.race()</div>
<font color='#c7254e' >Promise.race</font>方法同样是将多个<font color='#c7254e' >Promise</font>实例，包装成一个新的<font color='#c7254e' >Promise</font>实例；

实例：
```js
{
  const p = Promise.race([p1, p2, p3]);
}
```
与<font color='#c7254e' >Promise.all</font>的不同点：
1）、**只要任意一个参数<font color='#c7254e' >Promise</font>实例率先改变状态，新的<font color='#c7254e' >Promise</font>实例就会先调用<font color='#c7254e' >Promise.resolve</font>方法，将其参数转化为<font color='#c7254e' >Promise</font>实例，在进一步处理**。

例子：
```js
{
  const p = Promise.race([
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('2秒回调！')), 2000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('1秒回调！')), 1000)
    })
  ]);

  p.then(value => console.log('resolve：', value))
  .catch(error => console.log('error：', error));
}
```
上面的代码中，<font color='#c7254e' >Promise.race</font>中第二个参数先执行，并调用catch方法，第一个参数则不再执行。

### <div id="8">8、Promise.resolve()</div>
<font color='#c7254e' >Promise.resolve</font>方法可以将对象转为Promise对象
```js
{
  const jsPromise = Promise.resolve($.ajax('/whaterver.json'));
  // 上面的代码将jQuery生产的deferred对象，转化为一个新的Promise对象
}
```

<font color='#c7254e' >Promise.resolve</font>等价与下面的写法
```js
{
  Promise.resolve('foo');
  // 等价于
  new Promise(resolve => resolve('foo'));
}
```

<font color='#c7254e' >Promise.resolve</font>方法的参数分成四种情况：

###### 1）、<span id="8_1">参数是一个Promise实例：</span>

如果参数是<font color='#c7254e' >Promise</font>实例，那么<font color='#c7254e' >Promise.resolve</font>将不做任何修改、原封不动地返回这个实例。

###### 2）、<span id="8_2">参数是一个thenable对象：</span>

theable对象是指具有then方法的对象，比如下面这个对象：
```js
{
  let thenable = {
    then: (resolve, reject) => {
      resolve(42);
    }
  };
}
```
<font color='#c7254e' >Promise.resolve</font>方法会将这个对象转化为<font color='#c7254e' >Promise</font>对象，然后就立即执行thenable对象的then方法：
```js
{
  let p1 = Promise.resolve(thenable);
  p1.then(value => console.log('resolve：', value))
  .catch(error => console.log('error：', error));
}
```
上面的代码中，thenable对象的then方法执行后，对象p1的状态变为<font color='#c7254e' >resolved</font>，从而立即执行最后那个then方法执行的回调函数。

###### 3）、<span id="8_3">参数不是具有then方法的对象，或根本就不是对象；</span>

如果参数是一个原始值，或者是一个不具有then方法的对象，则<font color='#c7254e' >Promise.resolve</font>方法返回一个新的<font color='#c7254e' >Promise</font>对象，状态为<font color='#c7254e' >resolved</font>。
```js
{
  const p = Promise.resolve('Hello');
  p.then(value => console.log(value + ' Wrold！'));
  // Hello Wrold！
}
```
上面代码生成一个新的 <font color='#c7254e' >Promise</font> 对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 <font color='#c7254e' >Promise</font> 实例的状态从一生成就是<font color='#c7254e' >resolved</font>，所以回调函数会立即执行。<font color='#c7254e' >Promise.resolve</font>方法的参数，会同时传给回调函数。

###### 4）、<span id="8_4">不带有任何的参数；</span>

<font color='#c7254e' >Promise.resolve</font>方法允许调用时不带参数，直接返回一个<font color='#c7254e' >resolved</font>状态的<font color='#c7254e' >Promise</font>对象。

所以，如果希望获得一个<font color='#c7254e' >Promise</font>对象，比较方便的方法是直接调用<font color='#c7254e' >Promise.resolve</font>方法
```js
{
  const p = Promise.resolve();
  p.then(() => {
    // ...
  });
}
```

注意：立即resolve的<font color='#c7254e' >Promise</font>对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
```js
{
  setTimeout(() => { console.log('three') }, 0);
  Promise.resolve().then(() => { console.log('two') });
  console.log('one');
  // one
  // two
  // three
}
```
上面的代码中：setTimeout(fn, 0)在下一轮“事件循环”开始时执行，<font color='#c7254e' >Promise.resolve()</font>在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。

### <div id="9">9、Promise.reject()</div>

Promise.reject(reason)方法返回一个状态为<font color='#c7254e' >rejected</font>的<font color='#c7254e' >Promise</font>实例；

```js
{
  const p = Promise.reject('出错了！');
  // 等同于
  const p = new Promise((resolve, reject) => reject('出错了！'));
  p.then(null, (error) => {
    console.log(error);
  });
}
```

注意：**<font color='#c7254e' >Promise.reject()</font>方法的参数，会原封不动地作为reject的理由，变成后续方法的参数**。这一点与<font color='#c7254e' >Promise.resolve</font>方法不一致。
```js
{
  const thenable = {
    then(resolve, reject) {
      reject('出错了！');
    }
  };
  Promise.reject(thenable)
  .catch(e => console.log(e === thenable));
}
```

### <div id="10">10、应用</div>

###### 1）、<span id="10_1">加载图片</span>

我们可以将图片的加载写成一个<font color='#c7254e' >Promise</font>，一旦加载完成，<font color='#c7254e' >Promise</font>的状态就发生变化。
```js
{
  const preloadImage = (path) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = path;
    });
  };
}
```

###### 2）、<span id="10_2">Generator函数与Promise的结合</span>

使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个<font color='#c7254e' >Promise</font>对象。
```js
{
  function getFoo() {
    return new Promise((resolve, reject) => {
      resolve('foo');
    });
  }
  const g = function* () {
    try {
      const foo = yield getFoo();
      console.log(foo);
    } catch(e) {
      console.log()
    }
  };

  function run(generator) {
    const it = generator();

    function go(result) {
      if (result.done) return result.value;

      return result.value.then(value => {
        return go(it.next(value));
      }, error => {
        return go(it.throw(error));
      });
    };

    go(it.next());
  };
  run(g);
}
```
上面代码的 Generator 函数g之中，有一个异步操作getFoo，它返回的就是一个<font color='#c7254e' >Promise</font>对象。函数run用来处理这个<font color='#c7254e' >Promise</font>对象，并调用下一个next方法。

### <div id="11">11、Promise.try()</div>
Promise.try可以让同步函数同步执行，让异步函数异步执行。

实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 <font color='#c7254e' >Promise</font> 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。
```js
{
  Promise.resolve().then(f)
}
```

上面的写法有一个缺点，就是如果f是同步函数，那么它会在本轮事件循环的末尾执行。
```js
{
  const f = () => console.log('now');
  Promise.resolve().then(f);
  console.log('next');
  // next
  // now  
}
```
上面代码中，函数f是同步的，但是用 <font color='#c7254e' >Promise</font> 包装了以后，就变成异步执行了。

那么有没有一种方法，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？回答是可以的，并且还有两种写法。

原来的两种方式：
###### 1）、<span id="11_1">用async函数来写：</span>
```js
{
  const f = () => console.log('now');
  (async () => f())();
  console.log('next');
  // now
  // next
}
```

上面代码中，第二行是一个立即执行的匿名函数，会立即执行里面的async函数，因此如果f是同步的，就会得到同步的结果；如果f是异步的，就可以用then指定下一步，就像下面的写法。
```js
{
  (async () => f())()
  .then(...)
}
```

需要注意的是，async () => f()会吃掉f()抛出的错误。所以，如果想捕获错误，要使用promise.catch方法。

```js
{
  (async () => f())()
  .then(...)
  .catch(...)
}
```

###### 2）、<span id="11_1">使用new Promise()；</span>

```js
{
  const f = () => console.log('now');
  (
    () => new Promise(
      resolve => resolve(f())
    )
  )();
  console.log('next');
  // now
  // next
}
```
上面代码也是使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。

###### <span id="11_3">使用Promise.try方法；</span>
```js
{
  const f = () => console.log('now');
  Promise.try(f()).then(() => {});
  console.log('next');
}
```

由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。这样有许多好处，其中一点就是可以更好地管理异常。
```js
{
  function getUsername(userId) {
    return database.users.get({id: userId})
    .then((user) => {
      return user.name;
    });
  }
}
```
上面代码中，database.users.get()返回一个 <font color='#c7254e' >Promise</font> 对象，如果抛出异步错误，可以用catch方法捕获，就像下面这样写。
```js
{
  database.users.get({id: userId})
  .then(...)
  .catch(...)
}
```
但是database.users.get()可能还会抛出同步错误（比如数据库连接错误，具体要看实现方法），这时你就不得不用try...catch去捕获。

```js
{
  try {
  database.users.get({id: userId})
    .then(...)
    .catch(...)
  } catch (e) {
    // ...
  }
}
```

上面这样的写法就很笨拙了，这时就可以统一用promise.catch()捕获所有同步和异步的错误。
```js
{
  Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)
}
```
事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
