# JavaScript 设计模式

## 第一篇面向对象编程

### 第一节 灵活的语音-Javascript

#### 基础的代码

```js
{
  function checkName() {
    // 验证姓名
  }
  function checkEmail() {
    // 验证邮箱
  }
  function checkPassword() {
    // 验证密码
  }
}
```

#### 对象收编变量

```js
{
  var checkObject = {
    checkName: function () {
      // 验证姓名
    },
    checkEmail: function () {
      // 验证邮箱
    },
    checkPassword: function () {
      // 验证密码
    }
  }
}
```

#### 真假对象

返回的对象 a 与 checkObject 无关

```js
{
  var checkObject = function () {
    return {
      checkName: function () {
        // 验证姓名
      },
      checkEmail: function () {
        // 验证邮箱
      },
      checkPassword: function () {
        // 验证密码
      }
    }
  }
}
```

#### 类对象

```js
{
  var checkObject = function () {
    this.checkName = function () {
      // 验证姓名
    }
    this.checkEmail = function () {
      // 验证邮箱
    }
    this.checkPassword = function () {
      // 验证密码
    }
  }

  var a = new checkObject()
  a.checkEmail()
}
```

#### 原型

通过 this 定义，每次 new 关键字创建新对象时，新对象都会对类的 this 上的属性进行复制。所以新创建的对象都会有自己的一套方法，造成消耗。

```js
{
  var checkObject = function () {}
  checkObject.prototype.checkName = function () {
    // 验证姓名
  }
  checkObject.prototype.checkEmail = function () {
    // 验证邮箱
  }
  checkObject.prototype.checkPassword = function () {
    // 验证密码
  }

  // 或者
  var checkObject = function () {}
  checkObject.prototype = {
    checkName: function () {
      // 验证姓名
    },
    checkEmail: function () {
      // 验证邮箱
    },
    checkPassword: function () {
      // 验证密码
    }
  }
}
```

#### 链式调用

```js
{
  // 对象函数
  var checkObject = {
    checkName: function () {
      // 验证姓名
      return this
    },
    checkEmail: function () {
      // 验证邮箱
      return this
    },
    checkPassword: function () {
      // 验证密码
      return this
    }
  }
  // 调用
  checkObject.checkName().checkEmail().checkPassword()

  // 原型函数
  var checkObject = function () {}
  checkObject.prototype = {
    checkName: function () {
      // 验证姓名
      return this
    },
    checkEmail: function () {
      // 验证邮箱
      return this
    },
    checkPassword: function () {
      // 验证密码
      return this
    }
  }

  // 调用
  var a = new checkObject()
  a.checkName().checkEmail().checkPassword()
}
```

#### 原生函数 Function

```js
{
  // 1、会污染原生对象Function
  Function.prototype.checkEmail = function () {
    // 验证邮箱
  }

  var f = function () {}
  f.checkEmail()

  // 2、统一的方法
  Function.prototype.addMethod = function (name, fn) {
    this[name] = fn
  }

  var methods = new Function()
  methods.addMethod('checkName', function () {
    // 验证姓名
  })
  methods.addMethod('checkEmail', function () {
    // 验证邮箱
  })
  methods.checkName()
  methods.checkEmail()

  // 3、链式调用
  Function.prototype.addMethod = function (name, fn) {
    this[name] = fn
    return this
  }

  // 链式引用
  var methods = function () {}
  methods
    .addMethod('checkName', function () {
      // 验证姓名
      return this
    })
    .addMethod('checkEmail', function () {
      // 验证邮箱
      return this
    })

  methods.checkName().checkEmail()

  // 4、类调用
  Function.prototype.addMethod = function (name, fn) {
    this.prototype[name] = fn
    return this
  }

  var Methods = function () {}
  methods
    .addMethod('checkName', function () {
      // 验证姓名
    })
    .addMethod('checkEmail', function () {
      // 验证邮箱
    })

  var m = new Methods()
  m.checkEmail()
}
```

#### 问题

##### 1. 真假对象一节中如何实现方法的链式调用呢？

```js
{
  var checkObject = function () {
    return {
      checkName: function () {
        // 验证姓名
        return this
      },
      checkEmail: function () {
        // 验证邮箱
        return this
      },
      checkPassword: function () {
        // 验证密码
        return this
      }
    }
  }
}
```

##### 2. 试着定义一个可以为函数添加多个方法的 addMethod 方法？

```js
{
  Function.prototype.addMethod = function (name, fn) {
    this[name] = fn
    return this
  }
}
```

##### 3. 试着定义一个既可为函数原型添加方法又可为其自身添加方法的 addMethod 方法

```js
{
  Function.prototype.addMethod = function (name, fn) {
    this.prototype[name] = fn
    return this
  }
}
```

### 第二节 面向对象编程

面向过程: 是一种以过程为中心的编程思想，这些都是以什么正在发生为主要目标进行编程。

面向对象: 把相关的数据和方法组织为一个整体来看待，从更高的层次来进行系统建模，更贴近事物的自然运行模式。

#### 类

```js
{
  var Book = function (id, bookName, price) {
    this.id = id
    this.bookName = bookName
    this.price = price
  }

  Book.prototype.display = function () {
    // 展示这本书
  }

  // new关键字来实例化（创建）新的对象
  var book = new Book(10, 'Javascript设计模式', 50)
  console.log(book.bookName) // Javascript设计模式
}
```

通过 this 添加的属性、方法是在当前对象上添加的，然而 JavaScript 是一种基于原型 prototype 的语言，所以每创建一个对象时（当然在 JavaScript 中函数也是一种对象），它都有一个原型 prototype 用于指向其继承的属性、方法。这样通过 prototype 继承的方法并不是对象自身的，所以在使用这些方法时，需要通过 prototype 一级一级查找来得到。这样你会发现通过 this 定义的属性或者方法是该对象自身拥有的，所以我们每次通过类创建一个新对象时，this 指向的属性和方法都会得到相应的创建，而通过 prototype 继承的属性或者方法是每个对象通过 prototype 访问到，所以我们每次通过类创建一个新对象时这些属性和方法不会再次创建。

constructor 是一个属性，当创建一个函数或者对象时都会为其创建一个原型对象 prototype，在 prototype 对象中又会像函数中创建 this 一样创建一个 constructor 属性，那么 constructor 属性指向的就是拥有整个原型对象的函数或对象，例如在本例中 Book prototype 中的 constructor 属性指向的就是 Book 类对象。

##### 共有属性、共有方法、特权方法

由于 JavaScript 的函数级作用域，声明在函数内部的变量以及方法在外界是访问不到的，通过此特性即可创建类的私有变量以及私有方法。然而在函数内部通过 this 创建的属性和方法，在类创建对象时，每个对象自身都拥有一份并且可以在外部访问到。因此通过 this 创建的属性可看作是对象共有属性和对象共有方法，而通过 this 创建的方法，不但可以访问这些对象的共有属性与共有方法，而且还能访问到类（创建时）或对象自身的私有属性和私有方法，由于这些方法权利比较大，所以我们又将它看作特权方法。在对象创建时通过使用这些特权方法我们可以初始化实例对象的一些属性，因此这些在创建对象时调用的特权方法还可以看作是类的构造器。如下面的例子。

```js
{
  // 私有属性与私有方法，特权方法，对象公有属性和对象共有方法，构造器
  var Book = function (id, name, price) {
    //私有属性
    var num = 1 //私有方法
    function checkId() {} //特权方法
    this.getName = function () {}
    this.getPrice = function () {}
    this.setName = function () {}
    this.setPrice = function () {} //对象公有属性
    this.id = id //对象公有方法
    this.copy = function () {} //构造器
    this.setName(name)
    this.setPrice(price)
  }
}
```

##### prototype 共有属性、共有方法

通过 new 关键字创建新对象时，由于类外面通过点语法添加的属性和方法没有执行到，所以新创建的对象中无法获取他们，但是可以通过类来使用。因此在类外面通过点语法定义的属性以及方法被称为类的静态共有属性和类的静态共有方法。而类通过 prototype 创建的属性或者方法在类实例的对象中是可以通过 this 访问到的（如图 2.1 新创建的对象的**proto**指向了类的原型所指向的对象），所以我们将 prototype 对象中的属性和方法称为共有属性和共有方法

```js
{
  //类静态公有属性（对象不能访问）
  Book.ischinese = true //类静态公有方法（对象不能访问）
  Book.resetTime = function () {
    console.log('new Tiem')
  }
  Book.prototype = {
    //公有属性
    isJsBook: false, //公有方法
    display: function () {}
  }

  var b = new Book(11, 'Javascript设计模式', 50)
  console.log(b.num) // undefined
  console.log(b.isJsBook) // false
  console.log(b.id) // 11
  console.log(b.ischinese) // undefined
}
```

#### 闭包

闭包是有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数。我们将这个闭包作为创建对象的构造函数，这样它既是闭包又是可实例对象的函数，即可访问到类函数作用域中的变量。

```js
{
  // 利用闭包实现
  var Book = (function () {
    //静态私有变量
    var bookNum = 0 //静态私有方法
    function checkBook(name) {} //返回构造函数
    return function (newId, newName, newPrice) {
      //私有变量
      var name, price //私有方法
      function checkID(id) {} //特权方法
      this.getName = function () {}
      this.getPrice = function () {}
      this.setName = function () {}
      this.setPrice = function () {} //公有属性
      this.id = newId //公有方法
      this.copy = function () {}
      bookNum++
      if (bookNum > 100) {
        throw new Error('我们仅出版100本书.')
      } //构造器
      this.setName(name)
      this.setPrice(price)
    }
  })()
  Book.prototype = {
    //静态公有属性
    isJsBook: false, //静态公有方法
    display: function () {}
  }

  // 利用闭包实现
  var Book = (function () {
    //静态私有变量
    var bookNum = 0 //静态私有方法
    function checkBook(name) {} //创建类
    function _book(newId, newName, newPrice) {
      //私有变量
      var name, price //私有方法
      function checkID(id) {} //特权方法
      this.getName = function () {}
      this.getPrice = function () {}
      this.setName = function () {}
      this.setPrice = function () {} //公有属性
      this.id = newId //公有方法
      this.copy = function () {}
      bookNum++
      if (bookNum > 100) throw new Error('我们仅出版100本书.') //构造器
      this.setName(name)
      this.setPrice(price)
    } //构建原型
    _book.prototype = {
      //静态公有属性
      isJsBook: false, //静态公有方法
      display: function () {}
    } //返回类
    return _book
  })()
}
```

#### 创建对象的安全模式

```js
{
  // 图书类
  var Book = function (title, time, type) {
    this.title = title
    this.time = time
    this.type = type
  } // 实例化—本书
  var book = Book('Javascript', '2014', 'js')

  console.log(book) // undefined
  console.log(window.title) // Javascript
  console.log(window.time) // 2014
  console.log(window.type) // js
}
```

new 关键字的作用可以看作是对当前对象的 this 不停地赋值，然而例子中没有用 new，所以就会直接执行这个函数，而这个函数在全局作用域中执行了，所以在全局作用域中 this 指向的当前对象自然就是全局变量，在你的页面里全局变量就是 window 了，所以添加的属性自然就会被添加到 window 上面了，而我们这个 book 变量最终的作用是要得到 Book 这个类（函数）的执行结果，由于函数中没有 return 语句，这个 Book 类自然不会告诉 book 变量的执行结果了，所以就是 undefined（未定义）。

```js
{
  // 图书安全类
  var Book = function (title, time, type) {
    // 判断执行过程中this是否是当前这个对象（如果是说明是用new创建的）
    if (this instanceof Book) {
      this.title = title
      this.time = time
      this.type = type // 否则重新创建这个对象
    } else {
      return new Book(title, time, type)
    }
  }
  var book = Book('Javascript', '2014', 'js')

  console.log(book) // Book
  console.log(book.title) // Javascript
  console.log(book.time) // 2014
  console.log(book.type) // js
  console.log(window.title) // undefined
  console.log(window.time) // undefined
  console.log(window.type) // undefined
}
```

#### 继承

每个类都有 3 个部分，第一部分是构造函数内的，这是供实例化对象复制用的，第二部分是构造函数外的，直接通过点语法添加的，这是供类使用的，实例化对象是访问不到的，第三部分是类的原型中的，实例化对象可以通过其原型链间接地访问到，也是为供所有实例化对象所共用的。

##### 类式继承

```js
{
  // 类式继承
  // 声明父类
  function superclass() {
    this.superValue = true
  } // 为父类添加共有方法
  superclass.prototype.getSuperValue = function () {
    return this.superValue
  } // 声明子类
  function subclass() {
    this.subValue = false
  } // 继承父类
  subclass.prototype = new superclass() // 为子类添加共有方法
  subclass.prototype.getSubValue = function () {
    return this.subValue
  }

  var instance = new subclass()
  console.log(instance.getSuperValue()) //true
  console.log(instance.getSubValue()) //false
  console.log(instance instanceof superclass) //true
  console.log(instance instanceof subclass) //true
  console.log(subclass instanceof superclass) //false
  console.log(subclass.prototype instanceof superclass) //true
  console.log(instance instanceof Object) //true
}
```

这种类式继承还有 2 个缺点:

1. 由于子类通过其原型 prototype 对父类实例化，继承了父类。所以说父类中的共有属性要是引用类型，就会在子类中被所有实例共用。
2. 由于子类实现的继承是靠其原型 prototype 对父类的实例化实现的，因此在创建父类的时候，是无法向父类传递参数的，因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化。

```js
{
  function superclass() {
    this.books = ['Javascript', 'html', 'css']
  }
  function subclass() {}
  subclass.prototype = new superclass()
  var instance1 = new subclass()
  var instance2 = new subclass()
  console.log(instance2.books) // ["Javascript", "html", "css"]
  instance1.books.push('设计模式')
  console.log(instance2.books) // ["Javascript", "html", "css", "设计模式"]
}
```

##### 构造函数继承

```js
{
  //构造函数式继承
  // 声明父类
  function superclass(id) {
    // 引用类型共有属性
    this.books = ['Javascript', 'html', 'css'] // 值类型共有属性
    this.id = id
  } // 父类声明原型方法
  superclass.prototype.showBooks = function () {
    console.log(this.books)
  }
  // 声明子类
  function subclass(id) {
    // 继承父类
    superclass.call(this, id)
  }
  // 创建第—个子类的实例
  var instance1 = new subclass(10)
  // 创建第二个子类的实例
  var instance2 = new subclass(11)
  instance1.books.push('设计模式')
  console.log(instance1.books) // ["Javascript", "html", "css", "设计模式"]
  console.log(instance1.id) // 10
  console.log(instance2.books) // ["Javascript", "html", "css"]
  console.log(instance2.id) // 11
  instance1.showBooks() // TypeError
}
```

由于这种类型的继承没有涉及原型 prototype，所以父类的原型方法自然不会被子类继承，而如果要想被子类继承就必须要放在构造函数中，这样创建出来的每个实例都会单独拥有一份而不能共用，这样就违背了代码复用的原则。

##### 组合继承

在子类构造函数中执行父类构造函数，在子类原型上实例化父类就是组合模式，这样就融合了类式继承和构造函数继承的优点，并且过滤掉其缺点。

```js
{
  // 组合式继承
  // 声明父类
  function superclass(name) {
    // 值类型共有属性
    this.name = name // 引用类型共有属性
    this.books = ['html', 'css', 'Javascript']
  } // 父类原型共有方法
  superclass.prototype.getName = function () {
    console.log(this.name)
  } // 声明子类
  function subclass(name, time) {
    // 构造函数式继承父类name属性
    superclass.call(this, name) // 子类中新增共有属性
    this.time = time
  }
  // 类式继承 子类原型继承父类
  subclass.prototype = new superclass()
  // 子类原型方法
  subclass.prototype.getTIme = function () {
    console.log(this.time)
  }
}
```

##### 原型式继承

```js
{
  // 原型式继承
  function inheritObject(o) {
    // 声明—个过渡函数对象
    function F() {} // 过渡对象的原型继承父对象
    F.prototype = o // 返回过渡对象的—个实例，该实例的原型继承了父对象
    return new F()
  }
}
```

```js
{
  var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
  }
  var newBook = inheritObject(book)
  newBook.name = 'ajax book'
  newBook.alikeBook.push('xml book')
  var otherBook = inheritObject(book)
  otherBook.name = 'flash book'
  otherBook.alikeBook.push('as book')
  console.log(newBook.name) //ajax book
  console.log(newBook.alikeBook) //["css book", "html book", "xml book","as book"]
  console.log(otherBook.name) //flash book
  console.log(otherBook.alikeBook) //["css book", "html book", "xml book","as book"]
  console.log(book.name) //js book
  console.log(book.alikeBook) //["css book", "html book", "xml book","as book"]
}
```

##### 寄生式继承

```js
{
  // 原型式继承
  function inheritObject(o) {
    // 声明—个过渡函数对象
    function F() {} // 过渡对象的原型继承父对象
    F.prototype = o // 返回过渡对象的—个实例，该实例的原型继承了父对象
    return new F()
  }
  // 寄生式继承
  // 声明基对象
  var book = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
  }
  function createBook(obj) {
    // 通过原型继承方式创建新对象
    var o = new inheritObject(obj) // 拓展新对象
    o.getName = function () {
      console.log(name)
    } // 返回拓展后的新对象
    return o
  }
}
```

##### 寄生组合式继承

```js
{
  // 原型式继承
  function inheritObject(o) {
    // 声明—个过渡函数对象
    function F() {} // 过渡对象的原型继承父对象
    F.prototype = o // 返回过渡对象的—个实例，该实例的原型继承了父对象
    return new F()
  }
  /**
   * 寄生式继承 继承原型
   * 传递参数 subclass　子类
   * 传递参数 superclass 父类
   **/
  function inheritPrototype(subclass, superclass) {
    // 复制—份父类的原型副本保存在变量中
    var p = inheritObject(superclass.prototype) // 修正因为重写子类原型导致子类的constructor属性被修改
    p.constructor = subclass // 设置子类的原型
    subclass.prototype = p
  }
}
```

测试用例

```js
{
  // 定义父类
  function superclass(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
  } // 定义父类原型方法
  superclass.prototype.getName = function () {
    console.log(this.name)
  } // 定义子类
  function subclass(name, time) {
    // 构造函数式继承
    superclass.call(this, name) // 子类新增属性
    this.time = time
  } // 寄生式继承父类原型
  inheritPrototype(subclass, superclass) // 子类新增原型方法
  subclass.prototype.getTime = function () {
    console.log(this.time)
  } // 创建两个测试方法
  var instance1 = new subclass('js book', 2014)
  var instance2 = new subclass('css book', 2013)

  instance1.colors.push('black')
  console.log(instance1.colors) //["red", "blue", "green", "black"]
  console.log(instance2.colors) //["red", "blue", "green"]
  instance2.getName() //css book
  instance2.getTime() //2013
}
```

#### 多继承

```js
{
  // 多继承 属性复制
  var mix = function () {
    var i = 1, // 从第二个参数起为被继承的对象
      len = arguments.length, // 获取参数长度
      target = arguments[0], // 第—个对象为目标对象
      arg // 缓存参数对象 // 遍历被继承的对象
    for (; i < len; i++) {
      // 缓存当前对象
      arg = arguments[i] // 遍历被继承对象中的属性
      for (var property in arg) {
        // 将被继承对象中的属性复制到目标对象中
        target[property] = arg[property]
      }
    } // 返回目标对象
    return target
  }

  // 绑定到原生对象Object上
  Object.prototype.mix = function () {
    var i = 0, // 从第—个参数起为被继承的对象
      len = arguments.length, // 获取参数长度
      arg // 缓存参数对象 // 遍历被继承的对象
    for (; i < len; i++) {
      // 缓存当前对象
      arg = arguments[i] // 遍历被继承对象中的属性
      for (var property in arg) {
        // 将被继承对象中的属性复制到目标对象中
        this[property] = arg[property]
      }
    }
  }
}
```

#### 多态

多态，就是同一个方法多种调用方式

```js
{
  function Add() {
    // 无参数算法
    function zero() {
      return 10
    } // —个参数算法
    function one(num) {
      return 10 + num
    } // 两个参数算法
    function two(num1, num2) {
      return num1 + num2
    } // 相加共有方法
    this.add = function () {
      var arg = arguments, // 获取参数长度
        len = arg.length
      switch (
        len // 如果设有参数
      ) {
        case 0:
          return zero() // 如果只有—个参数
        case 1:
          return one(arg[0]) // 如果有两个参数
        case 2:
          return two(arg[0], arg[1])
      }
    }
  } // 实例化类
  var A = new Add() //测试
  console.log(A.add()) // 10
  console.log(A.add(5)) // 15
  console.log(A.add(6, 7)) // 13
}
```

#### 总结

面向对象:

1. 封装
   1. 私有属性、私有方法、特权方法、共有属性、共有方法
   2. 静态的: 不论对类如何示例化，只创建一次
      1. 静态类方法
      2. 静态类属性
   3. 可被继承:
      1. 在构造函数中: 这类属性与方法在对象实例化时被复制一遍
      2. 在原型对象中: 这类属性与方法在对象实例化时被所有实例化对象所共用
2. 继承
   1. 对象继承: 实例化的是对象
   2. 类的继承: 实例化的是类
      1. 类式继承: 通过原型链继承的方式
      2. 构造函数式继承: 通过构造函数继承的方式
      3. 组合继承: 将类式与构造函数式继承组合起来
      4. 寄生式继承: 通过在一个函数内的过渡对象实现继承并返回新对象的方式
      5. 寄生组合式继承: 寄生式继承融合构造函数继承的方式
   3. 多继承: 通过拷贝方法与属性的方法，将多个父类（对象）的属性与方法拷贝给子类实现继承
3. 多态: 通过传递的参数判断来决定执行逻辑;

#### 问题: 如何实现对象属性和方法的深拷贝?

```js
{
}
```

## 第二篇 面创建型设计模式

### 第一节 简单工厂模式

```js
{
  // 是通过类实例化对象创建的
  // 篮球基类
  var Basketball = function () {
    this.intro = '篮球盛行于美国'
  }
  Basketball.prototype = {
    getMember: function () {}
  } // 足球基类
  var Football = function () {
    this.intro = '足球在世界范围内很流行'
  }
  Football.prototype = {
    getMember: function () {}
  } // 网球基类
  var Tennis = function () {
    this.intro = '每年有很多网球系列赛'
  }
  Tennis.prototype = {
    getMember: function () {}
  } // 运动工厂
  var sportsFactory = function (name) {
    switch (name) {
      case 'NBA':
        return new Basketball()
      case 'wordcup':
        return new Football()
      case 'Frenchopen':
        return new Tennis()
    }
  } //工厂模式

  // 创建一个新对象然后包装增强其属性和功能来实现的
  function createBook(name, time, type) {
    // 创建—个对象，并对对象拓展属性和方法
    var o = new object()
    o.name = name
    o.time = time
    o.type = type
    o.getName = function () {
      console.log(this.name)
    } // 将对象返回
    return o
  }
  var book1 = createBook('js book', 2014, 'js')
  var book2 = createBook('css book', 2013, 'css')
  book1.getName()
  book2.getName()
}
```

#### 提问: 简单工厂模式与类的异同点

### 第二节 工厂方法模式

将工厂方法看作是一个实例化对象的工厂类。安全起见，我们采用安全模式类，而我们将创建对象的基类放在工厂方法类的原型中即可。

安全模式类是说可以屏蔽使用这对类的错误使用造成的错误。比如对于一个类（我们暂且称之为 Demo 类）的创建，我们知道类的前面是需要有 new 关键字的（如 var d = new Demo()），不过如果其他人不知道这个对象（Demo）是一个类，那么在使用时很可能忽略 new 关键字直接执行类（如 var d = Demo();），此时我们得到的并不是我们预期的对象

```js
{
  // 未屏蔽错误版
  var Demo = function () {}
  Demo.prototype = {
    show: function () {
      console.log('成功获取！')
    }
  }
  var d = new Demo()
  d.show() // 成功获取！
  var d = Demo()
  d.show() // Uncaught TypeError: cannot read property 'show' of undefined

  // 安全模式类
  var Demo = function () {
    if (!(this instanceof Demo)) {
      return new Demo()
    }
  }
  var d = Demo()
  d.show() // 成功获取！
}
```

```js
{
  // 安全模式创建的工厂类
  var Factory = function (type, content) {
    if (this instanceof Factory) {
      var s = new this[type](content)
      return s
    } else {
      return new Factory(type, content)
    }
  } // 工厂原型中设置创建所有类型数据对象的基类
  Factory.prototype = {
    UI: function (content) {
      this.content = content
      ;(function (content) {
        var div = document.createElement('div')
        div.innerHTML = content
        div.style.border = '1px solid red'
        document.getElementById('container').appendchild(div)
      })(content)
    },
    Java: function (content) {
      //　……
    },
    Javascript: function (content) {
      //　……
    },
    php: function (content) {
      //　……
    }
  }
}
```

#### 提问: 通过工厂方法模式为页面创建不同功能的按钮

```js
{
  // 安全模式创建的工厂类
  var Factory = function (type, content) {
    if (this instanceof Factory) {
      var s = new this[type](content)
      return s
    } else {
      return new Factory(type, content)
    }
  } // 工厂原型中设置创建所有类型数据对象的基类
  Factory.prototype = {
    UI: function (content) {
      this.content = content
      ;(function (content) {
        var button = document.createElement('button')
        button.innerHTML = content.text
        button.style.width = content.width || '100px'
        button.style.height = content.height || '40px'
        button.style.backgroundColor = content.backgroundColor
        document.getElementById('container').appendchild(button)
      })(content)
    },
    disable: function (content) {
      //　……
    },
    allow: function (content) {
      //　……
    }
  }
}
```

### 第三节 抽象工厂模式

抽象工厂模式（Abstract Factory）: 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一类产品的实例。

```js
{
  // 汽车抽象类，当使用其实例对象的方法时会抛出错误
  var car = function () {}
  car.prototype = {
    getPrice: function () {
      return new Error('抽象方法不能调用')
    },
    getspeed: function () {
      return new Error('抽象方法不能调用')
    }
  }
}
```

在继承上却是很有用的，因为定义了一种类，并定义了该类所必备的方法，如果在子类中没有重写这些方法，那么当调用时能找到这些方法便会报错。

#### 抽象工厂

```js
{
  // 抽象工厂方法
  var VehicleFactory = function (subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
      // 缓存类
      function F() {} // 继承父类属性和方法
      F.prototype = new VehicleFactory[superType]() // 将子类constructor指向子类
      subType.constructor = subType // 子类原型继承“父类”
      subType.prototype = new F()
    } else {
      // 不存在该抽象类抛出错误
      throw new Error('未创建该抽象类')
    }
  }
  // 小汽车抽象类
  VehicleFactory.car = function () {
    this.type = 'car'
  }
  VehicleFactory.car.prototype = {
    getPrice: function () {
      return new Error('抽象方法不能调用')
    },
    getspeed: function () {
      return new Error('抽象方法不能调用')
    }
  }
  // 公交车抽象类
  VehicleFactory.Bus = function () {
    this.type = 'bus'
  }
  VehicleFactory.Bus.prototype = {
    getPrice: function () {
      return new Error('抽象方法不能调用')
    },
    getPassengerNum: function () {
      return new Error('抽象方法不能调用')
    }
  }
  // 宝马汽车子类
  var BMW = function (price, speed) {
    this.price = price
    this.speed = speed
  }
  // 抽象工厂实现对car抽象类的继承
  VehicleFactory(BMW, 'car')
  BMW.prototype.getPrice = function () {
    return this.price
  }
  BMW.prototype.getspeed = function () {
    return this.speed
  }
  // 抽象工厂实现对Bus抽象类的继承
  VehicleFactory(YUToNG, 'Bus')
  YUToNG.prototype.getPrice = function () {
    return this.price
  }
  YUToNG.prototype.getPassengerNum = function () {
    return this.passenger
  } // 奔驰汽车子类
  var BenzTruck = function (price, trainLoad) {
    this.price = price
    this.trainLoad = trainLoad
  }
}
```

##### 问题: 抽象工厂模式与工厂方法模式以及简单工厂模式之间的异同点及其关系

#### 建造者模式

将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。

```js
{
  // 创建—位人类
  var Human = function (param) {
    // 技能
    this.skill = (param && param.skill) || '保密' // 兴趣爱好
    this.hobby = (param && param.hobby) || '保密'
  }
  // 类人原型方法
  Human.prototype = {
    getskill: function () {
      return this.skill
    },
    getHobby: function () {
      return this.hobby
    }
  }
  // 实例化姓名类
  var Named = function (name) {
    var that = this
    // 构造器
    // 构造函数解析姓名的姓与名
    ;(function (name, that) {
      that.wholeName = name
      if (name.indexof(' ') > -1) {
        that.FirstName = name.slice(0, name.indexof(' '))
        that.secondName = name.slice(name.indexof(' '))
      }
    })(name, that)
  }
  // 实例化职位类
  var Work = function (work) {
    var that = this
    // 构造器
    // 构造函数中通过传入的职位特征来设置相应职位以及描述
    ;(function (work, that) {
      switch (work) {
        case 'code':
          that.work = '工程师'
          that.workDescript = '每天沉醉于编程'
          break
        case 'UI':
        case 'UE':
          that.work = '设计师'
          that.workDescript = '设计更似—种艺术'
          break
        case 'teach':
          that.work = '教师'
          that.workDescript = '分享也是—种快乐'
          break
        default:
          that.work = work
          that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述'
      }
    })(work, that)
  }
  // 更换期望的职位
  Work.prototype.changeWork = function (work) {
    this.work = work
  }
  // 添加对职位的描述
  Work.prototype.changeDescript = function (setence) {
    this.workDescript = setence
  }
  /****
   * 应聘者建造者
   * 参数 name: 姓名（全名）
   * 参数 work: 期望职位
   **/

  var Person = function (name, work) {
    // 创建应聘者缓存对象
    var _person = new Human() // 创建应聘者姓名解析对象
    _person.name = new Named(name) // 创建应聘者期望职位
    _person.work = new Work(work) // 将创建的应聘者对象返回
    return _person
  }

  var person = new Person('xiao ming', 'code')
  console.log(person.skill) // 保密
  console.log(person.name.FirstName) // xiao
  console.log(person.work.work) // 工程师
  console.log(person.work.workDescript) // 每—天在编程中度过
  person.work.changeDescript('更改—下职位描述！')
  console.log(person.work.workDescript) // 更改—下职位描述！
}
```

##### 问题: 对于一个卡片堆砌页面，想一想如何应用建造者模式实现对每一个页面中结构卡片的创建？

### 原型模式

原型模式（Prototype）: 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法。

```js
{
  // 图片轮播类
  var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr // 轮播图片数组
    this.container = container // 轮播图片容器
  }
  LoopImages.prototype = {
    // 创建轮播图片
    createImage: function () {
      console.log('LoopImages createImage function')
    }, // 切换下—张图片
    changeImage: function () {
      console.log('LoopImages changeImage function')
    }
  }
  // 上下滑动切换类
  var slideLoopImg = function (imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container)
  }
  slideLoopImg.prototype = new LoopImages() // 重写继承的切换下—张图片方法
  slideLoopImg.prototype.changeImage = function () {
    console.log('slideLoopImg changeImage function')
  }
  // 渐隐切换类
  var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container) // 切换箭头私有变量
    this.arrow = arrow
  }
  FadeLoopImg.prototype = new LoopImages()
  FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage function')
  }
  // 测试用例
  console.log(fadeImg.container) // slide
  fadeImg.changeImage() // FadeLoopImg changeImage function
}
```

#### 原型继承

```js
{
  /********
　* 基于己经存在的模板对象克隆出新对象的模式
　* arguments[0], arguments[1], arguments[2]: 参数1，参数2，参数3 表示模板对象
　* 注意。这里对模板引用类型的属性实质上进行了浅复制（引用类型属性共享），当然根据需求可以自
　行深复制（引用类型属性复制）
　*****/
  function prototypeExtend() {
    var F = function () {}, // 缓存类，为实例化返回对象临时创建
      args = arguments, // 模板对象参数序列
      i = 0,
      len = args.length
    for (; i < len; i++) {
      // 遍历每个模板对象中的属性
      for (var j in args[i]) {
        // 将这些属性复制到缓存类原型中
        F.prototype[j] = args[i][j]
      }
    } // 返回缓存类的—个实例
    return new F()
  }

  var penguin = prototypeExtend(
    {
      speed: 20,
      swim: function () {
        console.log('游泳速度 ' + this.speed)
      }
    },
    {
      run: function (speed) {
        console.log('奔跑速度 ' + speed)
      }
    },
    {
      jump: function () {
        console.log('跳跃动作')
      }
    }
  )
}
```

#### 问题: 原型继承的实现是不需要了解创建的过程的。谈谈你的理解

### 单例模式

单例模式（Singleton）: 又被称为单体模式，是只允许实例化一次的对象类。

这种模式经常为我们提供一个命名空间。如我们使用过的 jQuery 库，单例模式就为它提供了一个命名空间 jQuery。

```js
{
  // 最简单的单例
  var Ming = {
    g: function (id) {
      return document.getElementById(id)
    },
    css: function (id, key, value) {
      // 通过当前对象this来使用g方法
      this.g(id).style[key] = value
    }
  }
}
```

#### 静态变量

```js
{
  var conf = (function () {
    // 私有变量
    var conf = {
      MAX_NUM: 100,
      MIN_NUM: 1,
      coUNT: 1000
    } // 返回取值器对象
    return {
      // 取值器方法
      get: function (name) {
        return conf[name] ? conf[name] : null
      }
    }
  })()
}
```

#### 惰性单例

有些单例对象需要延迟创建，这种延迟创建的形式成为“惰性单例”

```js
{
  // 惰性载入单例
  var Lazysingle = (function () {
    // 单例实例引用
    var _instance = null // 单例
    function single() {
      /**这里定义私有属性和方法**/
      return {
        publicMethod: function () {},
        publicProperty: '1.0'
      }
    } // 获取单例对象接口
    return function () {
      // 如果为创建单例将创建单例
      if (!_instance) {
        _instance = single()
      } // 返回单例
      return _instance
    }
  })()
}
```

#### 问题: 来实现一个小型代码库吧，来体会一下单例模式的优越性

## 结构性设计模式

### 外观模式

外观模式（Facade）: 为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易。在 JavaScript 中有时也会用于对底层结构兼容性做统一封装来简化用户使用。

```js
{
  // 外观模式实现
  function addEvent(dom, type, fn) {
    // 对于支持DoM2级事件处理程序addEventListener方法的浏览器
    if (dom.addEventListener) {
      dom.addEventListener(type, fn, false)
      // 对于不支持addEventListener方法但支持attachEvent方法的浏览器
    } else if (dom.attachEvent) {
      dom.attachEvent('on' + type, fn)
      // 对于不支持addEventListener方法也不支持attachEvent方法，但支持on+'事件名'的浏览器
    } else {
      dom['on' + type] = fn
    }
  }
}
```

#### 问题: 通过外观模式来封装一个获取元素 css 样式的方法

```js
{
  function getCssStyle(box, key) {
    if (window.getComputedStyle)
    return window.getComputedStyle(obj, null)[key];
  } else {
    return box.currentStyle[key];
  }
}
```

### 适配器模式

适配器模式（Adapter）: 将一个类（对象）的接口（方法或者属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决。

#### 框架适配

```js
{
  // 相似框架
  window.A = A = jQuery

  // 不同框架
  A.g = function (id) {
    // 通过jQuery获取jQuery对象，然后返回第—个成员
    return $(id).get(0)
  }
  A.on = function (id, type, fn) {
    // 如果传递参数是字符串则以id处理，否则以元素对象处理
    var dom = typeof id === 'string' ? $('#' + id) : $(id)
    dom.on(type, fn)
  }
}
```

#### 参数适配

```js
{
  function doSomeThing(name, title, age, color, size, prize) {}
  // 多个参数改为一个对象适配
  function doSomeThing(obj) {
    var _adapter = {
      name: '雨夜清荷',
      title: '设计模式',
      age: 24,
      color: 'pink',
      size: 100,
      prize: 50
    }
    for (var i in _adapter) {
      _adapter[i] = obj[i] || _adapter[i]
    } // 或者 extend(_adapter, obj) 注: 此时可能会多添加属性 // do things
  }
}
```

#### 数据适配

```js
{
  var arr = ['Javascript', 'book', '前段编程语言', '8月1日']
  // 将数组改为对象
  function arrToObjAdapter(arr) {
    return {
      name: arr[0],
      type: arr[1],
      title: arr[2],
      data: arr[3]
    }
  }
  var adapterData = arrToObjAdapter(arr)
  console.log(adapterData) // {name: "Javascript", type: "book", title: "前段编程语言", data: "8月1日"}
}
```

#### 接口适配

```js
{
  //为简化模型，这里使用jQuery的ajax方法 理想数据是—个—维数组
  function ajaxAdapter(data) {
    //处理数据并返回新数据
    return [data['key1'], data['key2'], data['key3']]
  }
  $.ajax({
    url: 'someAddress.php',
    success: function (data, status) {
      if (data) {
        //使用适配后的数据——返回的对象
        doSomeThing(ajaxAdapter(data))
      }
    }
  })
}
```

#### 问题:将后端传输的字符串或 XML 文档适配成对象

### 代理模式

代理模式（Proxy）:由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用。

#### 站长统计

通过 img 的 src 属性向其他域发送请求

```js
{
  // 统计代理
  var count = (function () {
    // 缓存图片（参考第二十二章，备忘录模式）
    var _img = new Image() // 返回统计函数
    return function (param) {
      // 统计请求字符串
      var str = 'http://www.count.com/a.gif?' // 拼接请求字符串
      for (var i in param) {
        str += i + '=' + param[i]
      } // 发送统计请求
      _img.src = str
    }
  })() // 测试用例，统计num
  count({ num: 10 })
}
```

#### JSONP

```js
{
  　// 前端浏览器页面
　<script type="text/Javascript">
  　// 回调函数，打印出请求数据与响应数据
  　function jsonpcallBack(res,req){
  　 console.log(res,req);
  　}
　</script>
　<script type="text/Javascript" src="http://localhost/test/jsonp.php?callback=jsonp callBack&data=getJsonPData"></script>
　// 另外—个域下服务器请求接口
　<?php
　 /*后端获取请求字段数据，并生成返回内容*/
　$data = $_GET["data"];
　$callback = $_GET["callback"];
　echo $callback."('success', '".$data."')";
　?>
}
```

#### 代理模板

比如我们将自己的域称为X域，另外的域称为Y域，X域中要有一个被代理页面，即A页面。在A页面中应该具备三个部分，第一个部分是发送请求的模块，如form表单提交，负责向Y域发送请求，并提供额外两组数据，其一是要执行的回调函数名称，其二是X域中代理模板所在的路径，并将target目标指向内嵌框架。第二个部分是一个内嵌框架，如iframe，负责提供第一个部分中form表单的响应目标target的指向，并将嵌入X域中的代理页面作为子页面，即B页面。第三个部分是一个回调函数，负责处理返回的数据。

```php
{
  // 代理页面A
  <script type="text/Javascript">
  　function callback(data){
  　 console.log('成功接收数据', data);
  　}
　</script>
　<iframe name="proxyIframe" id="proxyIframe" src="">
　</iframe>
　<form action="http://localhost/test/proxy.php" method="post" target="proxyIframe">
　 <input type="text" name="callback" value="callback">
　 <input type="text" name="proxy" value="http://localhost:8080/proxy.html">
　 <input type="submit" value="提交">
　</form>

  // 代理页面B
  <script type="text/Javascript">
  　// 页面加载后执行
  　window.onload = function(){
  　 //如果不在A页面中返回，不执行
  　 if(top == self) return;
  　 //获取并解析searcher中的数据
  　 var arr = location.search.substr(1).split('&'),
  　 //预定义函数名称以及参数集
  　　fn, args;
  　 for(var i = 0, len = arr.length, item;i < len;i++){
  　　//解析searcher中的每组数据
  　　item = arr[i].split('=');
  　　//判断是否为回调函数
  　　if(item[0] == 'callback'){
  　　 //设置回调函数
  　　 fn = item[1];
  　　//判断是否是参数集
  　　} else if(item[0] == 'arg'){
  　　 //设置参数集
  　　 args = item[1];
  　　}
  　}
  　try{
  　　//执行A页面中预设的回调函数
  　　eval('top.' + fn + '("' + args + '")');
  　} catch(e){
      
    }
　}
　</script>


  // 接口文件C
  <?php
　 $proxy = $_PosT["proxy"];
　 $callback = $_PosT["callback"];
　 header("Location:".$proxy."?callback=".$callback."&arg=success");
　?>
  // 测试结果
　/*
　 控制台输出依次是
　 成功接收数据success
　*/
}
```

#### 问题：动态加载script标签的方法+图片预览这种代理模式

### 装饰者模式

装饰者模式（Decorator）：在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求。

```js
{
  　// 装饰者
　var decorator = function(input, fn){
　 // 获取事件源
　 var input = document.getElementById(input)；
　 // 若事件源己经绑定事件
　 if(typeof input.onclick === 'function'){
　　// 缓存事件源原有回调函数
　　var oldclickFn = input.onclick；
　　// 为事件源定义新的事件
　　input.onclick = function(){
　　 // 事件源原有回调函数
　　 oldclickFn()；
　　 // 执行事件源新增回调函数
　　 fn()；
　　}
　 }else{
　　// 事件源未绑定事件，直接为事件源添加新增回调函数
　　input.onclick = fn；
　 }
　 // 做其他事情
　}
}
```

#### 问题：对输入框添加focus与blur事件，想一想通过装饰者模式如何实现？

### 桥接模式

桥接模式（Bridge）：在系统沿着多个维度变化的同时，又不增加其复杂度并己达到解耦。

```js
{
  　// 抽象
　function changecolor(dom, color, bg){
　 // 设置元素的字体颜色
　 dom.style.color = color；
　 // 设置元素的背景颜色
　 dom.style.background = bg；
　}
　spans[1].onmouseover = function(){
　 changecolor(this.getElementsByTagName('strong')[0], 'red', '#ddd')；
　}
　spans[1].onmouseout = function(){
　 changecolor(this.getElementsByTagName('strong')[0], '#333', '#f5f5f5')；
　}

  // 多元化对象
  　// 多维变量类
　// 运动单元
　function speed(x, y){
　 this.x = x；
　 this.y = y；
　}
　speed.prototype.run = function(){
　 console.log('运动起来')；
　}
　function Ball(x,y,c){
　 // 实现运动单元
　 this.speed = new speed(x,y)；
　 // 实现着色单元
　 this.color = new color(c)；
　}
　Ball.prototype.init = function(){
　 // 实现运动
　 this.speed.run()；
　 // 实现着色
　 this.color.draw()；
　}
}
```

桥接模式最主要的特点即是将实现层（如元素绑定的事件）与抽象层（如修饰页面UI逻辑）解耦分离，使两部分可以独立变化。

#### 问题：创建一个对象桥接method，实现为对象拓展方法的功能。

### 组合模式

组合模式（Composite）：又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。
