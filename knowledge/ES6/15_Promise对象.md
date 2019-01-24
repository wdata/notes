## Promise 对象

***

学习和引用自[ECMAScript 6 入门 - 作者：阮一峰](http://es7.ruanyifeng.com/#docs/destructuring)
<br />

* [1、Set](#1)
<br />



***
### <div id="1">1、Promise 的含义</div>
所谓 <span style="color: #c7254e;">Promise</span>，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

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
* <span style="color: #c7254e;">resolve</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘成功’ （即 peding =》 resolved）**，在异步操作成功时调用，并将 **异步操作的结果，作为参数调用出去**；
* <span style="color: #c7254e;">reject</span>函数将 Promise 对象的状态从 **‘未完成’ =》 ‘失败’ （即 peding =》 rejected）**，异步操作失败时调用，并将 **异步操作报出的错误，作为参数传递出去**。

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
1. 第一个参数是resolved状态的回调函数；
2. 第二个参数（可选）是rejected状态的回调函数

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
上面代码中，第一个then =》返回Promise对象，第二个then在Promise对象状态发生变化，如果为resolved =》调用funcA，如果为rejected =》 就调用funcB；

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
1、Promise对象，如果异步操作抛出错误，状态就会改变为rejected，就会调用catch方法指定的回调函数，处理这个错误：
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

**如果Pormise状态已经变成resolved，再抛出错误是无效的**。
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
上面的代码中，一共有三个Promise对象：
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

根传统的try/catch不同的是，**如果没有使用catch方法指定错误的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应**；
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
