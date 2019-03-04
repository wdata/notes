### Symbol

***

学习和引用自[ECMAScript 6 入门 - 作者：阮一峰](http://es7.ruanyifeng.com/#docs/destructuring)
<br />

* [1、Symbol概述](#1)
  - 定义：新增数据类型：<span style="color: #c7254e;">Symbol</span>
  - 新增原因：ES5 属性名都是字符串，容易造成属性名冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突，这就是新增 Symbol 的原因。
  - 生成方式：通过 Symbol 函数生产；
  - 特点：
    1. Symbol 函数签不能用 new 命令，否则会报错；因为生成的 Symbol 是一个原始类型的值，不是对象；
    2. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，用以作为区分；
    3. Symbol 函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的 Symbol 函数的返回值是不相等的；
    4. Symbol 值不能与其他类型的值进行运算，会报错；
    5. Symbol 值可以显式转为字符串、布尔值，但不能转化为数值；
<br />

* [2、作为属性名的 Symbol](#2)
  - 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就**能保证不会出现同名的属性**。
  - **注意：Symbol值作为对象属性名时，不能用点运算符；**
  - Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
  - 常量使用 Symbol 值最大的好处，就是**其他任何值都不可能有相同的值了，因此可以保证上面的 switch 语句会按设计的方式工作**;
<br />

* [3、实例：消除魔术字符串](#3)
  - 魔术字符串：在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值；
  - 可以将魔术字符串写成一个变量，如果这个变量等于哪个值不重要，很适合使用 Symbol 值；
<br />

* [4、属性名的遍历](#4)
  - Symbol 作为属性名，**该属性不会出现在  <span style="color: #c7254e;">for...in</span>、<span style="color: #c7254e;">for...of</span> 循环中，也不会被 <span style="color: #c7254e;">Object.keys()</span>、<span style="color: #c7254e;">Object.getOwnPropertyNames()</span>、<span style="color: #c7254e;">JSON.stringify()</span> 返回**。
  - 但 <span style="color: #c7254e;">Object.getOwnPropertySymbols</span> 方法，可以获取指定对象的所有 Symbol 属性名；
  - <span style="color: #c7254e;">Reflect.ownKeys</span> 方法可以返回所有类型的键名，包括常规键名和Symbol键名；
<br />

* [5、Symbol.for()，Symbol.keyFor()](#5)
  -  <span style="color: #c7254e;">Symbol.for</span> : 接收一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值，如果有，就返回这个 Symbol 值， 否则就新建并返回一个以该字符串为名称的 Symbol 值；**注意：2个比较的 Symbol 必须都是用 Symbol.for() 创建的**；
  - <span style="color: #c7254e;">Symbol.for</span> 与 <span style="color: #c7254e;">Symbol</span>的不同点：Symbol.for 有 **登记机制**，会被登记在全局变量中供搜索；
  - <span style="color: #c7254e;">Symbol.keyFor</span> : 返回一个已登记（使用 Symbol.for 创建的）的 Symbol 类型值的 key；
  - 注意：Symbol.for为 Symbol 值 **登记的名字，是全局环境的**，可以在不同的 iframe 或 service worker 中取到同一个值。 **所以Symbol.for可以用来存储简单的全局数据**；
<br />

* [6、实例：模块的 Singleton 模式](#6)
  - 定义：Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例；使用 Symbol 可以防止模块调用执行的都是同一个实例。
<br />

* [7、内置的 Symbol 值](#7)
  - 定义：以下都是对象的属性：
  <br />

  1. [Symbol.hasInstance](#7_1)
      - 指向一个内部方法。当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法。
  2. [Symbol.isConcatSpreadable](#7_2)
      - 等于一个布尔值，表示该对象用于 Array.prototype.concat() 时，是否可以展开。
  3. [Symbol.species](#7_3)
      - 指向一个构造函数。创建衍生对象时，会使用该属性。
  4. [Symbol.match](#7_4)
      - 指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
  5. [Symbol.replace](#7_5)
      - 指向一个方法，当该对象被 String.prototype.replace 方法调用时，会返回该方法的返回值。
  6. [Symbol.search](#7_6)
      - 指向一个方法，当该对象被 String.prototype.search 方法调用时，会返回该方法的返回值。
  7. [Symbol.split](#7_7)
      - 指向一个方法，当该对象被 String.prototype.split 方法调用时，会返回该方法的返回值。
  8. [Symbol.iterator](#7_8)
      - 指向该对象的默认遍历器方法。
  9. [Symbol.toPrimitive](#7_9)
      - 指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
  10. [Symbol.toStringTag](#7_10)
      - 指向一个方法。在该对象上面调用 Object.prototype.toString 方法时，如果这个属性存在，它的返回值会出现在 toString 方法返回的字符串之中，表示对象的类型。
  11. [Symbol.unscopables](#7_11)
      - 指向一个对象。该对象指定了使用 with 关键字时，哪些属性会被 with 环境排除。




***

### <div id="1">1、Symbol概述</div>
ES6 之前的数据类型：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）；

> ES6 新增数据类型：<span style="color: #c7254e;">Symbol</span>

新增的原因：ES5 属性名都是字符串，容易造成属性名冲突。如果有一种机制，**保证每个属性的名字都是独一无二** 的就好了，这样就从根本上防止属性名的冲突，这就是新增 Symbol 的原因。

生成方式：通过 Symbol 函数生产；

```javascript
{
  let s = Symbol();

  typeof s
  // "symbol"
}
```

<br />

**Symbol 特点：**

1. Symbol 函数签 **不能用 new 命令**，否则会报错；因为生成的 Symbol 是一个原始类型的值，不是对象；
2. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，用以作为区分；
    ```javascript
    {
      let s1 = Symbol('foo');
      let s2 = Symbol('bar');

      s1 // Symbol(foo)
      s2 // Symbol(bar)

      s1.toString() // "Symbol(foo)"
      s2.toString() // "Symbol(bar)"
    }
    ```
3. Symbol 函数的参数只是表示对当前 Symbol 值的描述，因此 **相同参数的 Symbol 函数的返回值是不相等的**；
    ```javascript
    {
      // 没有参数的情况
      let s1 = Symbol();
      let s2 = Symbol();

      s1 === s2 // false

      // 有参数的情况
      let s1 = Symbol('foo');
      let s2 = Symbol('foo');

      s1 === s2 // false
    }
    ```
4. Symbol 值不能与其他类型的值进行运算，会报错；
    ```javascript
    {
      let sym = Symbol('My symbol');
      `your symbol is ${sym}`
      //  Cannot convert a Symbol value to a string
    }
    ```
5. Symbol 值可以显式转为字符串、布尔值，但不能转化为数值；
    ```javascript
    {
      ley sym = Symbol('My symbol');
      String(sym); // "Symbol(My symbol)"
      sym.toString(); // "Symbol(My symbol)"

      Boolean(sym); // true
      !sym // false

      Number(sym) // TypeError
      sym + 2 // TypeError
    }
    ```

### <div id="2">2、作为属性名的 Symbol</div>
由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就**能保证不会出现同名的属性**。

> 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

```javascript
{
  let mySymbol = Symbol();

  // 第一种写法
  let a = {};
  a[mySymbol] = 'Hello!';

  // 第二种写法
  let a = {
    [mySymbol]: 'Hello!'
  }

  // 第三种写法
  let a = {};
  Object.defineProperty(a, mySymbol, { value: 'Hello!' });
  // Object.defineProperty，将对象的属性名指定为一个 Symbol 值;

  // 以上写法都得到同样结果
  a[mySymbol]  // "Hello!"
}
```
**注意：Symbol值作为对象属性名时，不能用点运算符；**

Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。

```javascript
{
  const log = {};

  log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
  };
  console.log(log.levels.DEBUG, 'debug message');
  console.log(log.levels.INFO, 'info message');
}
```

常量使用 Symbol 值最大的好处，就是**其他任何值都不可能有相同的值了，因此可以保证上面的 switch 语句会按设计的方式工作**;

```javascript
{
  const COLOR_RED    = Symbol();
  const COLOR_GREEN  = Symbol();

  function getComplement(color) {
    switch (color) {
      case COLOR_RED:
        return COLOR_GREEN;
      case COLOR_GREEN:
        return COLOR_RED;
      default:
        throw new Error('Undefined color');
      }
  }
}
```

### <div id="3">3、实例：消除魔术字符串</div>
魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。

风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

```javascript
{
  function getArea(shape, options) {
    let area = 0;

    switch (shape) {
      case 'Triangle': // 魔术字符串
        area = .5 * options.width * options.height;
        break;
      /* ... more code ... */
    }

    return area;
  }

  getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串
}
```
上面代码中，字符串 Triangle 就是一个魔术字符串。它多次出现，与代码形成“强耦合”，不利于将来的修改和维护。

```javascript
{
  const shapeType = {
    triangle: 'Triangle'
  };

  function getArea(shape, options) {
    let area = 0;
    switch (shape) {
      case shapeType.triangle:
        area = .5 * options.width * options.height;
        break;
    }
    return area;
  }

  getArea(shapeType.triangle, { width: 100, height: 100 });
}
```
上面代码中，我们把Triangle写成shapeType对象的triangle属性，这样就消除了强耦合。

如果仔细分析，可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。因此，这里就很适合改用 Symbol 值。

```javascript
{
  const shapeType = {
    triangle: Symbol()
  };
}
```

### <div id="4">4、属性名的遍历</div>
* Symbol 作为属性名，**该属性不会出现在  <span style="color: #c7254e;">for...in</span>、<span style="color: #c7254e;">for...of</span> 循环中，也不会被 <span style="color: #c7254e;">Object.keys()</span>、<span style="color: #c7254e;">Object.getOwnPropertyNames()</span>、<span style="color: #c7254e;">JSON.stringify()</span> 返回**。
  ```javascript
  {
    const obj = {
      'a': 123
    };
    let a = Symbol('a');
    let b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';

    for(const x in obj) {
      console.log(x); // a
    }
  }
  ```


* 但 <span style="color: #c7254e;">Object.getOwnPropertySymbols</span> 方法，可以获取指定对象的所有 Symbol 属性名；

  ```javascript
  {
    const objectSymbols = Object.getOwnPropertySymbols(obj);

    objectSymbols
    // [Symbol(a), Symbol(b)]
  }
  ```

* <span style="color: #c7254e;">Reflect.ownKeys</span> 方法可以返回所有类型的键名，包括常规键名和Symbol键名；
  ```javascript
  {
    let obj = {
      [Symbol('my_key')]: 1,
      enum: 2,
      nonEnum: 3
    };

    Reflect.ownKeys(obj);
    // ["enum", "nonEnum", Symbol(my_key)]
  }
  ```

由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
```javascript
{
  let size = Symbol('size');

  class Collection {
    constructor() {
      this[size] = 0;
    }

    add(item) {
      this[this[size]] = item;
      this[size]++;
    }

    static sizeOf(instance) {
      return instance[size];
    }
  }

  let x = new Collection();
  Collection.sizeOf(x) // 0

  x.add('foo');
  Collection.sizeOf(x) // 1

  Object.keys(x) // ['0']
  Object.getOwnPropertyNames(x) // ['0']
  Object.getOwnPropertySymbols(x) // [Symbol(size)]

  // 上面代码中，对象x的size属性是一个 Symbol 值，所以Object.keys(x)、Object.getOwnPropertyNames(x)都无法获取它。这就造成了一种非私有的内部方法的效果
}
```

### <div id="5">5、Symbol.for()，Symbol.keyFor()</div>

* <span style="color: #c7254e;">Symbol.for</span> : 接收一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值，如果有，就返回这个 Symbol 值， 否则就新建并返回一个以该字符串为名称的 Symbol 值；**注意：2个比较的 Symbol 必须都是用 Symbol.for() 创建的**；
  ```javascript
  {
    let s1 = Symbol.for('foo');
    let s2 = Symbol.for('foo');
    let s3 = Symbol('foo');

    s1 === s2 // true
    s3 === s2 // false

    Symbol.for("bar") === Symbol.for("bar")
    // true

  }
  ```
* <span style="color: #c7254e;">Symbol.for</span> 与 <span style="color: #c7254e;">Symbol</span>的不同点：Symbol.for 有 **登记机制**，会被登记在全局变量中供搜索。
* <span style="color: #c7254e;">Symbol.keyFor</span> : 返回一个已登记（使用 Symbol.for 创建的）的 Symbol 类型值的 key；
  ```javascript
  {
    let s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"

    let s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined
  }
  ```
* 注意：Symbol.for为 Symbol 值 **登记的名字，是全局环境的**，可以在不同的 iframe 或 service worker 中取到同一个值。 **所以Symbol.for可以用来存储简单的全局数据**；
  ```javascript
  {
    iframe = document.createElement('iframe');
    iframe.src = String(window.location);
    document.body.appendChild(iframe);

    iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo')
    // true
  }
  ```

### <div id="6">6、实例：模块的 Singleton 模式</div>
Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。

使用 Symbol 可以防止模块调用执行的都是同一个实例：
```javascript
{
  // mod.js
  const FOO_KEY = Symbol.for('foo');

  function A() {
    this.foo = 'hello';
  }

  if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
  }

  module.exports = global[FOO_KEY];
}
```
上面代码中，可以保证 global[FOO_KEY] 不会被无意间覆盖，但还是可以被改写。
```javascript
{
  global[Symbol.for('foo')] = { foo: 'world' };

  const a = require('./mod.js');
}
```

### <div id="7">7、内置的 Symbol 值</div>

<br />

##### <div id="7_1">7.1、Symbol.hasInstance</div>
<span style="color: #c7254e;">Symbol.hasInstance</span>：对象的 Symbol.hasInstance 属性，指向一个内部方法。当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法。
```javascript
{
  class MyClass {
    [Symbol.hasInstance](foo) {
      return foo instanceof Array;
    }
  }

  [1, 2, 3] instanceof new MyClass() // true
}
```

##### <div id="7_2">7.2、Symbol.isConcatSpreadable</div>
<span style="color: #c7254e;">Symbol.isConcatSpreadable</span>：对象的 Symbol.isConcatSpreadable 属性等于一个布尔值，表示该对象用于 Array.prototype.concat() 时，是否可以展开。
```javascript
{
  let arr1 = ['c', 'd'];
  ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
  arr1[Symbol.isConcatSpreadable] // undefined

  let arr2 = ['c', 'd'];
  arr2[Symbol.isConcatSpreadable] = false;
  ['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']

  arr2[Symbol.isConcatSpreadable] = true;
  ['a', 'b'].concat(arr2, 'e') // ['a', 'b', 'c', 'd', 'e']
}
```
类似数组的对象正好相反，默认不展开。它的 Symbol.isConcatSpreadable 属性设为true，才可以展开。
```javascript
{
  let obj = {length: 2, 0: 'c', 1: 'd'};
  ['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

  obj[Symbol.isConcatSpreadable] = true;
  ['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
}
```

##### <div id="7_3">7.3、Symbol.species</div>
<span style="color: #c7254e;">Symbol.species</span>：对象的 Symbol.species 属性，指向一个构造函数。创建衍生对象时，会使用该属性。
```javascript
{
  class MyArray extends Array {
  }

  const a = new MyArray(1, 2, 3);
  const b = a.map(x => x);
  const c = a.filter(x => x > 1);

  b instanceof MyArray // true
  c instanceof MyArray // true
}
```
上面代码中，子类MyArray继承了父类Array，a是MyArray的实例，b和c是a的衍生对象。你可能会认为，b和c都是调用数组方法生成的，所以应该是数组（Array的实例），但实际上它们也是MyArray的实例。

Symbol.species属性就是为了解决这个问题而提供的。

```javascript
{
  class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
  }

  const a = new MyArray();
  const b = a.map(x => x);

  b instanceof MyArray // false
  b instanceof Array // true
}
```
上面代码中，a.map(x => x)生成的衍生对象，就不是MyArray的实例，而直接就是Array的实例。

它主要的用途是，**有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。**

##### <div id="7_4">7.4、Symbol.match</div>
<span style="color: #c7254e;">Symbol.match</span>：对象的 Symbol.match 属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。

```javascript
{
  String.prototype.match(regexp)
  // 等同于
  regexp[Symbol.match](this)

  class MyMatcher {
    [Symbol.match](string) {
      return 'hello world'.indexOf(string);
    }
  }

  'e'.match(new MyMatcher()) // 1
}
```

##### <div id="7_5">7.5、Symbol.replace</div>
<span style="color: #c7254e;">Symbol.replace</span>：对象的 Symbol.replace 属性，指向一个方法，当该对象被 String.prototype.replace 方法调用时，会返回该方法的返回值。

```javascript
{
  String.prototype.replace(searchValue, replaceValue)
  // 等同于
  searchValue[Symbol.replace](this, replaceValue)
}
```

下面是一个例子。

```javascript
{
  const x = {};
  x[Symbol.replace] = (...s) => console.log(s);

  'Hello'.replace(x, 'World') // ["Hello", "World"]
}
```

Symbol.replace方法会收到两个参数，第一个参数是replace方法正在作用的对象，上面例子是Hello，第二个参数是替换后的值，上面例子是World。

##### <div id="7_6">7.6、Symbol.search</div>
<span style="color: #c7254e;">Symbol.search</span>：对象的 Symbol.search 属性，指向一个方法，当该对象被 String.prototype.search 方法调用时，会返回该方法的返回值。
```javascript
{
  String.prototype.search(regexp)
  // 等同于
  regexp[Symbol.search](this)

  class MySearch {
    constructor(value) {
      this.value = value;
    }
    [Symbol.search](string) {
      return string.indexOf(this.value);
    }
  }
  'foobar'.search(new MySearch('foo')) // 0
}
```

##### <div id="7_7">7.7、Symbol.split</div>
<span style="color: #c7254e;">Symbol.split</span>：对象的 Symbol.split 属性，指向一个方法，当该对象被 String.prototype.split 方法调用时，会返回该方法的返回值。
```javascript
{
  String.prototype.split(separator, limit)
  // 等同于
  separator[Symbol.split](this, limit)
}
```
下面是一个例子。

```javascript
{
  class MySplitter {
    constructor(value) {
      this.value = value;
    }
    [Symbol.split](string) {
      let index = string.indexOf(this.value);
      if (index === -1) {
        return string;
      }
      return [
        string.substr(0, index),
        string.substr(index + this.value.length)
      ];
    }
  }

  'foobar'.split(new MySplitter('foo'))
  // ['', 'bar']

  'foobar'.split(new MySplitter('bar'))
  // ['foo', '']

  'foobar'.split(new MySplitter('baz'))
  // 'foobar'
}
```

上面方法使用 Symbol.split 方法，重新定义了字符串对象的split方法的行为，

##### <div id="7_8">7.8、Symbol.iterator</div>
<span style="color: #c7254e;">Symbol.iterator</span>：对象的 Symbol.iterator 属性，指向该对象的默认遍历器方法。

```javascript
{
  const myIterable = {};
  myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };

  [...myIterable] // [1, 2, 3]
}
```

对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器，详细介绍参见《Iterator 和 for...of 循环》一章。

```javascript
{
  class Collection {
    *[Symbol.iterator]() {
      let i = 0;
      while(this[i] !== undefined) {
        yield this[i];
        ++i;
      }
    }
  }

  let myCollection = new Collection();
  myCollection[0] = 1;
  myCollection[1] = 2;

  for(let value of myCollection) {
    console.log(value);
  }
  // 1
  // 2
}
```

##### <div id="7_9">7.9、Symbol.toPrimitive</div>
<span style="color: #c7254e;">Symbol.toPrimitive</span>：对象的 Symbol.toPrimitive 属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。


Symbol.toPrimitive 被调用时，会接受一个字符串参数，表示当前运算的模式，一共有三种模式。

* Number：该场合需要转成数值
* String：该场合需要转成字符串
* Default：该场合可以转成数值，也可以转成字符串

```javascript
{
  let obj = {
    [Symbol.toPrimitive](hint) {
      switch (hint) {
        case 'number':
          return 123;
        case 'string':
          return 'str';
        case 'default':
          return 'default';
        default:
          throw new Error();
       }
     }
  };

  2 * obj // 246
  3 + obj // '3default'
  obj == 'default' // true
  String(obj) // 'str'
}
```

##### <div id="7_10">7.10、Symbol.toStringTag</div>
<span style="color: #c7254e;">Symbol.toStringTag</span>：对象的 Symbol.toStringTag 属性，指向一个方法。在该对象上面调用 Object.prototype.toString 方法时，如果这个属性存在，它的返回值会出现在 toString 方法返回的字符串之中，表示对象的类型。

也就是说，这个属性可以用来定制[object Object]或[object Array]中object后面的那个字符串。

```javascript
{
  // 例一
  ({[Symbol.toStringTag]: 'Foo'}.toString())
  // "[object Foo]"

  // 例二
  class Collection {
    get [Symbol.toStringTag]() {
      return 'xxx';
    }
  }
  let x = new Collection();
  Object.prototype.toString.call(x) // "[object xxx]"
}
```

ES6 新增内置对象的Symbol.toStringTag属性值如下：
* JSON[Symbol.toStringTag]：'JSON'
* Math[Symbol.toStringTag]：'Math'
* Module 对象M[Symbol.toStringTag]：'Module'
* ArrayBuffer.prototype[Symbol.toStringTag]：'ArrayBuffer'
* DataView.prototype[Symbol.toStringTag]：'DataView'
* Map.prototype[Symbol.toStringTag]：'Map'
* Promise.prototype[Symbol.toStringTag]：'Promise'
* Set.prototype[Symbol.toStringTag]：'Set'
* %TypedArray%.prototype[Symbol.toStringTag]：'Uint8Array'等
* WeakMap.prototype[Symbol.toStringTag]：'WeakMap'
* WeakSet.prototype[Symbol.toStringTag]：'WeakSet'
* %MapIteratorPrototype%[Symbol.toStringTag]：'Map Iterator'
* %SetIteratorPrototype%[Symbol.toStringTag]：'Set Iterator'
* %StringIteratorPrototype%[Symbol.toStringTag]：'String Iterator'
* Symbol.prototype[Symbol.toStringTag]：'Symbol'
* Generator.prototype[Symbol.toStringTag]：'Generator'
* GeneratorFunction.prototype[Symbol.toStringTag]：'GeneratorFunction'

##### <div id="7_11">7.11、Symbol.unscopables</div>
<span style="color: #c7254e;">Symbol.unscopables</span>：对象的 Symbol.unscopables 属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被 with 环境排除。

```javascript
{
  Array.prototype[Symbol.unscopables]
  // {
  //   copyWithin: true,
  //   entries: true,
  //   fill: true,
  //   find: true,
  //   findIndex: true,
  //   includes: true,
  //   keys: true
  // }

  Object.keys(Array.prototype[Symbol.unscopables])
  // ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']
}
```
上面代码说明，数组有 7 个属性，会被 with 命令排除。
```javascript
{
  // 没有 unscopables 时
  class MyClass {
    foo() { return 1; }
  }

  var foo = function () { return 2; };

  with (MyClass.prototype) {
    foo(); // 1
  }

  // 有 unscopables 时
  class MyClass {
    foo() { return 1; }
    get [Symbol.unscopables]() {
      return { foo: true };
    }
  }

  var foo = function () { return 2; };

  with (MyClass.prototype) {
    foo(); // 2
  }
}
```
上面代码通过指定 Symbol.unscopables 属性，使得 with 语法块不会在当前作用域寻找 foo 属性，即 foo 将指向外层作用域的变量。
