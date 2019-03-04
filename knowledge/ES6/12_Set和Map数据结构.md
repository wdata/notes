## Set和Map数据结构

***

学习和引用自[ECMAScript 6 入门 - 作者：阮一峰](http://es7.ruanyifeng.com/#docs/destructuring)
<br />

* [1、Set](#1)
  - [1.1、基本用法](#1_1)
    - 定义：**类似于数组，但是成员的值都是唯一的，没有重复的值**；
    - 特点：
      1. Set 通过 <span style="color: #c7254e;">add()</span> 方法添加成员，Set 结构不会添加重复的值。
      2. Set 函数可以接收一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
      3. Set 可用于去 **数组去重**和 **字符串去重**；
      4. Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的 **区别是NaN等于自身，而精确相等运算符认为NaN不等于自身**；
      5. Set 内部，两个对象总是不相等的，两个空对象会被视为两个值；
  - [1.2、Set 实例的属性和方法](#1_2)
    - 属性：
      1. <span style="color: #c7254e;">Set.prototype.constructor</span>：构造函数，默认就是Set函数。
      2. <span style="color: #c7254e;">Set.prototype.size</span>：返回 Set 实例的成员总数。
    - 操作方法：
      1. <span style="color: #c7254e;">add(value)</span>：添加某个值，返回 Set 结构本身；
      2. <span style="color: #c7254e;">delete(value)</span>：删除某个值，返回一个布尔值，表示删除是否成功；
      3. <span style="color: #c7254e;">has(value)</span>：返回一个布尔值，表示该值是否为 Set 的成员；
      4. <span style="color: #c7254e;">clear()</span>：清除所有成员，没有返回值；
  - [1.3、Set 遍历操作](#1_3)
    - 遍历方法：
      1. <span style="color: #c7254e;">keys()</span>：返回 **键名** 的遍历器；
      2. <span style="color: #c7254e;">values()</span>：返回 **键值** 的遍历器；
      3. <span style="color: #c7254e;">entries()</span>：返回 **键值对** 的遍历器；
      4. <span style="color: #c7254e;">forEach()</span>：使用回调函数 **遍历每个成员**；
    - [1.3.1、keys()，values()，entries()](#1_3_1)
      1. keys方法、values方法、entries方法返回的都是遍历器对象。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
      2. Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的 values 方法。
      3. 因此，可以省略 values 方法，**直接用 for...of 循环遍历 Set**。
    - [1.3.2、forEach()](#1_3_2)
      1. Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
      2. **Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的**。
    - [1.3.3、遍历的应用](#1_3_3)
      1. Set 结构可使用扩展运算符（...）;
      2. Set 可以很容易地实现 **并集（Union）、交集（Intersect）和差集（Difference）**。
      3. 目前只有两种方法能在遍历中同步改变 Set 的结构：
          - 一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
          - 另一种是利用 Array.from 方法。
<br />

* [2、WeakSet](#2)
  - [2.1、含义](#2_1)
    - WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别：
      1. **WeakSet 的成员只能是对象，而不能是其他类型的值**；
      2. **WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用**（也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中）；
    - 用法：
      - **WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息**
  - [2.2、语法](#2_2)
    - 作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
    - WeakSet 结构有以下三个方法：
      1. <span style="color: #c7254e;">WeakSet.prototype.add(value)</span>：向 WeakSet 实例添加一个新成员。
      2. <span style="color: #c7254e;">WeakSet.prototype.delete(value)</span>：清除 WeakSet 实例的指定成员。
      3. <span style="color: #c7254e;">WeakSet.prototype.has(value)</span>：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
    - 注意：
      1. **WeakSet 不能遍历，是因为所有的成员都是弱引用，随时可能消失**。遍历机制无法保证成员的存在；
      2. WeakSet 可用于存储 DOM 节点，而不用担心这些节点从文档移除是，发生内存泄露；
<br />

* [3、Map](#3)
  - [3.1、含义和基本用法](#3_1)
    - 定义：它类似与对象，也是键值对的集合；
    - 与 Object 的不同：
      - **Object 只能用字符串作为键， Map 的键不限于字符串、各类型的值（包括对象）都可以作为键**；
      - Object 结构提供了‘字符串 - 值’，Map 提供了 ‘值 - 值’ 结构；
    - 任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以作为 Map 构造函数的参数。也就是说，Set 和 Map 都可以用来生成新的 Map；
    - Map 的键是 **与内存地址绑定的**，只要内存地址不一样，就视为两个键。
    - Map 结构注意事项：
      1. 如果对同一个键或同一内存地址多次赋值，后面的值将覆盖前面的值；
      2. 如果读取一个未知的键，则返回 <span style="color: #c7254e;">undefined</span>；
      3. <span style="color: #c7254e;">0</span> 与 <span style="color: #c7254e;">-0</span>是同一个键，<span style="color: #c7254e;">undefined</span> 和 <span style="color: #c7254e;">null</span>是不同的键，<span style="color: #c7254e;">NaN</span> 在 Map 中视为同一个键；
  - [3.2、含义和基本用法](#3_2)
    - 操作方法：
      1. <span style="color: #c7254e;">size</span> 属性返回 Map 结构的成员总数。
      2. <span style="color: #c7254e;">set()</span> 方法设置键名 <span style="color: #c7254e;">key</span> 对应的键值为 <span style="color: #c7254e;">value</span>，然后返回整个 Map 结构。如果 <span style="color: #c7254e;">key</span> 已经有值，则键值会被更新，否则就新生成该键。；
      3. <span style="color: #c7254e;">get()</span> 方法读取 <span style="color: #c7254e;">key</span> 对应的键值，如果找不到 <span style="color: #c7254e;">key</span> ，返回 <span style="color: #c7254e;">undefined</span>。
      4. <span style="color: #c7254e;">has()</span> 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
      5. <span style="color: #c7254e;">delete()</span> 方法删除某个键，返回 <span style="color: #c7254e;">true</span>。如果删除失败，返回 <span style="color: #c7254e;">false</span>。
      6. <span style="color: #c7254e;">clear</span> 方法清除所有成员，没有返回值。
  - [3.3、遍历方法](#3_3)
    - Map 结构原生提供三个遍历器生成函数和一个遍历方法：
      1. <span style="color: #c7254e;">keys()</span>：返回键名的遍历器。
      2. <span style="color: #c7254e;">values()</span>：返回键值的遍历器。
      3. <span style="color: #c7254e;">entries()</span>：返回所有成员的遍历器。
      4. <span style="color: #c7254e;">forEach()</span>：遍历 Map 的所有成员。
    -  Map 的结构默认遍历遍历器接口（<span style="color: #c7254e;">Symbol.interator</span> 属性），就是 <span style="color: #c7254e;">entries</span> 方法；
    - Map 结构转为数据结构，比较快速的方法是使用扩展运算符（...）；
    - 结合数组的 map 方法、filter 方法、可实现 Map 的遍历和过滤（Map 本身没有 map 和 filter 方法）；
    - Map 还有 forEach 方法，与数组的 forEach 方法类似，可以实现遍历。forEach 方法还可以接收第二个参数，用来绑定 this；
  - [3.4、与其他数据结构的互相转换](#3_4)
    - [3.4.1、Map 转为数组](#3_4_1)
      - 使用扩展运算符（...），转 数组最方法；
    - [3.4.2、数组 转为 Map](#3_4_2)
      - 将数组传入 Map 构造函数，就可以转为 Map ;
    - [3.4.3、Map 转为对象](#3_4_3)
      - 将数组传入 Map 构造函数，就可以转为 Map ;
    - [3.4.4、对象转为 Map](#3_4_4)
      - 使用for...in 遍历数组，再用set添加进入 Map
    - [3.4.5、Map 转为 JSON](#3_4_5)
      - Map 转为 JSON 要区分两种情况：
        1. 一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
        2. 另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。
    - [3.4.6、JSON 转为 Map](#3_4_6)
      - JSON 转为 Map，正常情况下，所有键名都是字符串。
      - 但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。
<br />

* [4、Map](#4)
  - [4.1、含义](#4_1)
    - WeakMap结构与Map结构类似，也是用于生成键值对的集合；
    - WeakMap 与 Map 的区别：
      1. **WeakMap 只接受对象作为键名（null除外），不接受其他类型的值作为键名**；
      2. **WeakMap 的键名所指向的对象，不计入垃圾回收机制**；
    - 总之：WeakMap 的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap 结构有助于防止内存泄漏。
    - 注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。所以，即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。
  - [4.2、WeakMap 的语法](#4_2)
    - WeakMap 与 Map 在API上的主要区别是两个：
      1. 因为垃圾回收机制，所以没有遍历操作（即没有 key()、value() 和 entries() 方法），也没有 size 属性和键名；
      2. **无法清空，即不支持 clear 方法**；
    - 因此，WeakMap 只有四个方法可用：**get()、set()、has()、delete()**：
  - [4.3、WeakMap 的示例](#4_3)
  - [4.4、WeakMap 的用途](#4_4)
    - WeakMap 应用的典型场合就是 DOM 节点作为键名；
    - WeakMap 的另一个用处是部署私有属性。
***
### <div id="1">1、Set</div>
<br />

##### <div id="1_1">1.1、基本用法</div>
ES6 提供了新的数据结构 Set，**它类似于数组，但是成员的值都是唯一的，没有重复的值**。

<span style="color: #c7254e;">Set</span> 本身是一个构造函数，用来生成 Set 数据结构。

1、 Set 通过 <span style="color: #c7254e;">add()</span> 方法添加成员，Set 结构不会添加重复的值。
```javascript
{
  const s = new Set();
  [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

  for (let i of s) {
    console.log(i);
  }
  // 2 3 5 4
}
```

2、 Set 函数可以接收一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
```javascript
{
  // 例一
  const set = new Set([1, 2, 3, 4, 4]);
  [...set]
  // [1, 2, 3, 4]

  // 例二
  const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
  items.size // 5

  // 例三
  const set = new Set(document.querySelectorAll('div'));
  set.size // 56

  // 类似于
  const set = new Set();
  document
  .querySelectorAll('div')
  .forEach(div => set.add(div));
  set.size // 56
}
```

3、 Set 可用于去 **数组去重**和 **字符串去重**；
```javascript
{
`  // 去除数组的重复成员
  [...new Set(array)]

  [...new Set('ababbc')].join('')
  // "abc"`
}
```

4、 Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的 **区别是NaN等于自身，而精确相等运算符认为NaN不等于自身**；
```javascript
{
  let set = new Set();
  let a = NaN;
  let b = NaN;
  set.add(a);
  set.add(b);
  set // Set {NaN}
}
```

5、 Set 内部，两个对象总是不相等的，两个空对象会被视为两个值；
```javascript
{
  let set = new Set();

  set.add({});
  set.size // 1

  set.add({});
  set.size // 2
}
```
<br />

##### <div id="1_2">1.2、Set 实例的属性和方法</div>

Set 结构的实例有以下属性：
* <span style="color: #c7254e;">Set.prototype.constructor</span>：构造函数，默认就是Set函数。
* <span style="color: #c7254e;">Set.prototype.size</span>：返回 Set 实例的成员总数。

Set 的方法分为两大类：**操作方法和遍历方法**。下面介绍四个操作方法：
* <span style="color: #c7254e;">add(value)</span>：添加某个值，返回 Set 结构本身；
* <span style="color: #c7254e;">delete(value)</span>：删除某个值，返回一个布尔值，表示删除是否成功；
* <span style="color: #c7254e;">has(value)</span>：返回一个布尔值，表示该值是否为 Set 的成员；
* <span style="color: #c7254e;">clear()</span>：清除所有成员，没有返回值；

```javascript
{
  let s = new Set([1, 2]);
  s.add(3).add(1).add(2);
  // [1, 2, 3]

  s.has(1); // true
  s.delete(1); // true
  s.has(1); // false
  s.crear();
  s.size // 0
}
```

注意：<span style="color: #c7254e;">Array.from</span>方法可以将 Set 结构转为数组。
```javascript
{
  // 数组去重方法：
  function dedupe(array) {
    return Array.from(new Set(array));
  }

  dedupe([1, 2, 3, 2, 3]); // [1, 2, 3]
}
```

##### <div id="1_3">1.3、Set 遍历操作</div>
Set 结构的实例有四个遍历方法，可以用于遍历成员：
* <span style="color: #c7254e;">keys()</span>：返回 **键名** 的遍历器；
* <span style="color: #c7254e;">values()</span>：返回 **键值** 的遍历器；
* <span style="color: #c7254e;">entries()</span>：返回 **键值对** 的遍历器；
* <span style="color: #c7254e;">forEach()</span>：使用回调函数 **遍历每个成员**；

###### <div id="1_3_1">1.3.1、<span style="color: #c7254e;">keys()，values()，entries()</span></div>

keys方法、values方法、entries方法返回的都是遍历器对象。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
```javascript
{
  let set = new Set(['red', 'green', 'blue']);
  set.keys(); or set.values() or set.entries()
  // SetIterator {"red", "green", "blue"} 遍历器对象

  // keys 和 values 遍历一个为 键名，另一个为 键值
  for (let item of set.keys()) { console.log(item); }
  for (let item of set.values()) { console.log(item); }
  // red
  // green
  // blue

  // entries 返回键值对数组
  for (let item of set.entries()) { console.log(item); }
  // ["red", "red"]
  // ["green", "green"]
  // ["blue", "blue"]
}
```

2、Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的 values 方法。
```javascript
{
  Set.prototype[Symbol.iterator] === Set.prototype.values
  // true
}
```

3、因此，可以省略 values 方法，**直接用 for...of 循环遍历 Set**。
```javascript
{
  let set = new Set(['red', 'green', 'blue']);

  for (let x of set) {
    console.log(x);
  }
  // red
  // green
  // blue
}
```

###### <div id="1_3_2">1.3.2、<span style="color: #c7254e;">forEach()</span></div>

Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

```javascript
{
  let set = new Set([1, 4, 9]);
  set.forEach((value, key) => console.log(key + ' : ' + value))
  // 1 : 1
  // 4 : 4
  // 9 : 9
}
```

上面代码说明，forEach 方法的参数就是一个处理函数。该函数的参数与数组的 forEach 一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，**Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的**。

另外，forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象。


###### <div id="1_3_3">1.3.3、遍历的应用</div>

Set 结构可使用扩展运算符（...）
```javascript
{
  let set = new Set(['red', 'green', 'blue']);
  [...set] //  ['red', 'green', 'blue']
}
```

数组的 map 和 filter方法也可以间接用于 Set：
```javascript
{
  let set = new Set([1, 2, 3]);
  set = new Set([...set].map(x => x * 2));
  // 返回Set结构：{2, 4, 6}

  let set = new Set([1, 2, 3, 4, 5]);
  set = new Set([...set].filter(x => (x % 2) == 0));
  // 返回Set结构：{2, 4}
}
```

因此使用 Set 可以很容易地实现 **并集（Union）、交集（Intersect）和差集（Difference）**。
```javascript
{
  let a = new Set([1, 2, 3]);
  let b = new Set([4, 3, 2]);

  // 并集
  let union = new Set([...a, ...b]);
  // Set {1, 2, 3, 4}

  // 交集
  let intersect = new Set([...a].filter(x => b.has(x)));
  // set {2, 3}

  // 差集
  let difference = new Set([...a].filter(x => !b.has(x)));
  // Set {1}
}
```

如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法：
* 一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；
* 另一种是利用 Array.from 方法。
```javascript
{
  // 方法一
  let set = new Set([1, 2, 3]);
  set = new Set([...set].map(val => val * 2));
  // set的值是2, 4, 6

  // 方法二
  let set = new Set([1, 2, 3]);
  set = new Set(Array.from(set, val => val * 2));
  // set的值是2, 4, 6
}
```

### <div id="2">2、WeakSet</div>
<br />

##### <div id="2_1">2.1、含义</div>
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别：
* 1、WeakSet 的成员只能是对象，而不能是其他类型的值；
* 2、WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用（也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中）；

```javascript
{
  const ws = new WeakSet();
  ws.add(1)
  // TypeError: Invalid value used in weak set
  ws.add(Symbol())
  // TypeError: invalid value used in weak set
}
```

这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，**WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息**。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

##### <div id="2_2">2.2、语法</div>

WeakSet 是一个构造函数，可以使用 new 命令，创建 WeakSet 数据结构。

作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
```javascript
{
  const a = [[1, 2], [3, 4]];
  const ws = new WeakSet(a);
  // WeakSet {[1, 2], [3, 4]}
}
```

注意，是 a 数组的成员成为 WeakSet 的成员，而不是 a 数组本身。这意味着，数组的成员只能是对象。
```javascript
{
  const b = [3, 4];
  const ws = new WeakSet(b);
  // Uncaught TypeError: Invalid value used in weak set(…)
  // 数组b的成员不是对象，加入 WeaKSet 就会报错。
}
```

WeakSet 结构有以下三个方法：
* <span style="color: #c7254e;">WeakSet.prototype.add(value)</span>：向 WeakSet 实例添加一个新成员。
* <span style="color: #c7254e;">WeakSet.prototype.delete(value)</span>：清除 WeakSet 实例的指定成员。
* <span style="color: #c7254e;">WeakSet.prototype.has(value)</span>：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

```javascript
{
  let ea = new WeakSet();
  let eb = {};
  let ec = { foo: 123 };

  ea.add(eb); // WeakSet {}
  ea.add(ec); // WeakSet {{…}}

  ea.has(eb); // true
  ea.has({}); // false
  ea.has(ec); // true

  ea.delete(eb); // true
  ea.has(eb); // false

}
```

注意：
* **WeakSet 不能遍历，是因为所有的成员都是弱引用，随时可能消失**。遍历机制无法保证成员的存在；
* WeakSet 可用于存储 DOM 节点，而不用担心这些节点从文档移除是，发生内存泄露；

下面代码保证了Foo的实例方法，只能在Foo的实例上调用。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。
```javascript
{
  const foos = new WeakSet()
  class Foo {
    constructor() {
      foos.add(this)
    }
    method () {
      if (!foos.has(this)) {
        throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
      }
    }
  }
}
```

### <div id="3">3、Map</div>
<br />

##### <div id="3_1">3.1、含义和基本用法</div>
ES6提供了 Map 数据结构，它类似与对象，也是键值对的集合；

与 Object 的不同：
> Object 只能用字符串作为键， Map 的键不限于字符串、各类型的值（包括对象）都可以作为键。Object 结构提供了‘字符串 - 值’，Map 提供了 ‘值 - 值’ 结构；

1、Map 的操作方法：set() 为新增，get() 为获取，has() 为查询，delete() 为删除；以下为 Map 的基本使用：
```javascript
{
  const m = new Map();
  const o = {p: 'Hello World'};

  m.set(o, 'content') // 新增
  m.get(o) // "content" // 获取

  m.has(o) // true // 查询
  m.delete(o) // true // 删除
  m.has(o) // false
}
```
2、任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以作为 Map 构造函数的参数。也就是说，Set 和 Map 都可以用来生成新的 Map；

数组可以用来生成 Map：
```javascript
{
  const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
  ]);

  map.size // 2
  map.has('name') // true
  map.get('name') // "张三"
  map.has('title') // true
  map.get('title') // "Author"

  // Map 实际执行的算法：
  const map = new Map();

  items.forEach(
    ([key, value]) => map.set(key, value)
  );
}
```

使用 Set 对象和 Map 对象，当做 Map 构造函数的参数：
```javascript
{
  const set = new Set([
    ['foo', 1],
    ['bar', 2]
  ]);
  const m1 = new Map(set);
  m1.get('foo') // 1

  const m2 = new Map([['baz', 3]]);
  const m3 = new Map(m2);
  m3.get('baz') // 3
}
```

3、Map 的键是 **与内存地址绑定的**，只要内存地址不一样，就视为两个键。
```javascript
{
  // 第一种情况，内存地址不一致，数值一致；
  const map = new Map();

  const k1 = ['a'];
  const k2 = ['a'];

  map
  .set(k1, 111)
  .set(k2, 222);

  map.get(k1) // 111
  map.get(k2) // 222

  // 第二种情况，内存地址一致，后一次的值覆盖前一次的值；
  const map = new Map();
  const obj = { foo: 'foo' };

  map.set(obj, 1);
  map.set(obj, 2);
  map.get(obj); // 2

  obj.foo = 'abc';
  obj.bor = 'bor';
  map.get(obj); // 2
}
```

Map 结构注意事项：
* 1、如果对同一个键或同一内存地址多次赋值，后面的值将覆盖前面的值；
* 2、如果读取一个未知的键，则返回 <span style="color: #c7254e;">undefined</span>；
* 3、<span style="color: #c7254e;">0</span> 与 <span style="color: #c7254e;">-0</span>是同一个键，<span style="color: #c7254e;">undefined</span> 和 <span style="color: #c7254e;">null</span>是不同的键，<span style="color: #c7254e;">NaN</span> 在 Map 中视为同一个键；

```javascript
{
  let map = new Map();

  map.set(-0, 123);
  map.get(+0) // 123

  map.set(true, 1);
  map.set('true', 2);
  map.get(true) // 1

  map.set(undefined, 3);
  map.set(null, 4);
  map.get(undefined) // 3

  map.set(NaN, 123);
  map.get(NaN) // 123
}
```

##### <div id="3_2">3.2、实例的属性和操作方法</div>
Map 结构的实例有以下属性和操作方法。

###### <div id="3_2_1">3.2.1、size 属性</div>
> size 属性返回 Map 结构的成员总数。

```javascript
{
  const map = new Map([['name': '张三'], ['age', 25]]);
  map.size // 2
}
```

###### <div id="3_2_2">3.2.2、set(key, value)</div>
> <span style="color: #c7254e;">set</span> 方法设置键名 <span style="color: #c7254e;">key</span> 对应的键值为 <span style="color: #c7254e;">value</span>，然后返回整个 Map 结构。如果 <span style="color: #c7254e;">key</span> 已经有值，则键值会被更新，否则就新生成该键。

```javascript
{
  const m = new Map();

  m.set('edition', 6)        // 键是字符串
  m.set(262, 'standard')     // 键是数值
  m.set(undefined, 'nah')    // 键是 undefined


}
```
set 方法返回的是当前的 Map 对象，因此可采用 **链式写法**；
```javascript
{
  let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
}
```

###### <div id="3_2_3">3.2.3、get(key)</div>
> <span style="color: #c7254e;">get</span> 方法读取 <span style="color: #c7254e;">key</span> 对应的键值，如果找不到 <span style="color: #c7254e;">key</span> ，返回 <span style="color: #c7254e;">undefined</span>。

```javascript
{
  const m = new Map();

  const hello = function() {console.log('hello');};
  m.set(hello, 'Hello ES6!') // 键是函数

  m.get(hello)  // Hello ES6!
}
```

###### <div id="3_2_4">3.2.4、has(key)</div>
> <span style="color: #c7254e;">has</span> 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

```javascript
{
  const m = new Map();

  m.set('edition', 6);
  m.set(262, 'standard');
  m.set(undefined, 'nah');

  m.has('edition')     // true
  m.has('years')       // false
  m.has(262)           // true
  m.has(undefined)     // true
}
```

###### <div id="3_2_5">3.2.5、delete(key)</div>
> <span style="color: #c7254e;">delete</span> 方法删除某个键，返回 <span style="color: #c7254e;">true</span>。如果删除失败，返回 <span style="color: #c7254e;">false</span>。

```javascript
{
  const m = new Map();
  m.set(undefined, 'nah');
  m.has(undefined)     // true

  m.delete(undefined)
  m.has(undefined)       // false
}
```

###### <div id="3_2_6">3.2.6、clear()</div>
> <span style="color: #c7254e;">clear</span> 方法清除所有成员，没有返回值。

```javascript
{
  let map = new Map();
  map.set('foo', true);
  map.set('bar', false);

  map.size // 2
  map.clear()
  map.size // 0
}
```

##### <div id="3_3">3.3、遍历方法</div>
Map 结构原生提供三个遍历器生成函数和一个遍历方法：
* <span style="color: #c7254e;">keys()</span>：返回键名的遍历器。
* <span style="color: #c7254e;">values()</span>：返回键值的遍历器。
* <span style="color: #c7254e;">entries()</span>：返回所有成员的遍历器。
* <span style="color: #c7254e;">forEach()</span>：遍历 Map 的所有成员。

注意：Map 的遍历顺序是插入顺序
```javascript
{
  const map = new Map([
    ['F', 'no'],
    ['T',  'yes'],
  ]);

  for (let key of map.keys()) {
    console.log(key);
  }
  // "F"
  // "T"

  for (let value of map.values()) {
    console.log(value);
  }
  // "no"
  // "yes"

  for (let item of map.entries()) {
    console.log(item[0], item[1]);
  }
  // "F" "no"
  // "T" "yes"

  // 或者
  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"

  // 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }
  // "F" "no"
  // "T" "yes"
}
```

1、Map 的结构默认遍历遍历器接口（<span style="color: #c7254e;">Symbol.interator</span> 属性），就是 <span style="color: #c7254e;">entries</span> 方法；
```javascript
{
  map[Symbol.iterator] === map.entries
  // true
}
```

2、Map 结构转为数据结构，比较快速的方法是使用扩展运算符（...）；
```javascript
{
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);

  [...map.keys()]
  // [1, 2, 3]

  [...map.values()]
  // ['one', 'two', 'three']

  [...map.entries()]
  // [[1,'one'], [2, 'two'], [3, 'three']]

  [...map]
  // [[1,'one'], [2, 'two'], [3, 'three']]
}
```

3、结合数组的 map 方法、filter 方法、可实现 Map 的遍历和过滤（Map 本身没有 map 和 filter 方法）；

```javascript
{
  const map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

  const map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
  );
  // 产生 Map 结构 {1 => 'a', 2 => 'b'}

  const map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
      );
  // 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
}
```

4、Map 还有 forEach 方法，与数组的 forEach 方法类似，可以实现遍历。forEach 方法还可以接收第二个参数，用来绑定 this；
```javascript
{
  map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
  });


  const reporter = {
    report: function(key, value) {
      console.log("Key: %s, Value: %s", key, value);
    }
  };

  map.forEach(function(value, key, map) {
    this.report(key, value);
  }, reporter);
  // 上面代码中，forEach方法的回调函数的this，就指向reporter。
}
```

##### <div id="3_4">3.4、与其他数据结构的互相转换</div>
<br />

###### <div id="3_4_1">3.4.1、Map 转为数组</div>
> 使用扩展运算符（...），转 数组最方法；

```javascript
{
  const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
  [...myMap]
  // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
}
```

###### <div id="3_4_2">3.4.2、Map 转为数组</div>
> 将数组传入 Map 构造函数，就可以转为 Map ;

```javascript
{
  new Map([
      [true, 7],
      [{foo: 3}, ['abc']]
    ]);
  // Map {
  //   true => 7,
  //   Object {foo: 3} => ['abc']
  // }
}
```

###### <div id="3_4_3">3.4.3、Map 转为对象</div>
> 将数组传入 Map 构造函数，就可以转为 Map ;

```javascript
{
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (const [k, v] of strMap) {
      obj[k] = v;
    };
    return obj;
  }

  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  strMapToObj(myMap);
  // 如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。
}
```

###### <div id="3_4_4">3.4.4、对象转为 Map</div>
> 使用for...in 遍历数组，再用set添加进入 Map

```javascript
{
  function strObjToMap(obj) {
    let map = new Map();
    for (const k in obj) {
      map.set(k, obj[k])
    };
    return map;
  }

  strObjToMap({yes: true, no: false});
}
```

###### <div id="3_4_5">3.4.5、Map 转为 JSON</div>
> Map 转为 JSON 要区分两种情况。

一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。
```javascript
{
  function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
  }

  let myMap = new Map().set('yes', true).set('no', false);
  strMapToJson(myMap)
  // '{"yes":true,"no":false}'
}
```

另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。
```javascript
{
  function mapToArrayJson(map) {
    return JSON.stringify([...map]);
  }

  let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
  mapToArrayJson(myMap)
  // '[[true,7],[{"foo":3},["abc"]]]'
}
```

###### <div id="3_4_6">3.4.6、JSON 转为 Map</div>
> JSON 转为 Map，正常情况下，所有键名都是字符串。

```javascript
{
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }

  jsonToStrMap('{"yes": true, "no": false}')
  // Map {'yes' => true, 'no' => false}
}
```

但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

```javascript
{
  function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }

  jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
  // Map {true => 7, Object {foo: 3} => ['abc']}
}
```

### <div id="4">4、WeakMap</div>
<br />

##### <div id="4_1">4.1、含义</div>
> WeakMap结构与Map结构类似，也是用于生成键值对的集合

```javascript
{
  // WeakMap 可以使用 set 方法添加成员
  const wm1 = new WeakMap();
  const key = {foo: 1};
  wm1.set(key, 2);
  wm1.get(key); // 2

  // WeakMap 也可以接受一个数组
  // 作为构造函数的参数
  const k1 = [1, 2, 3];
  const k2 = [4, 5, 6];
  const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
  wm2.get(k2); // bar
}
```

WeakMap 与 Map 的区别：
* 1、WeakMap 只接受对象作为键名（null除外），不接受其他类型的值作为键名；
```javascript
{
  const map = new WeakMap();
  map.set(1, 2)
  // TypeError: 1 is not an object!
  map.set(Symbol(), 2)
  // TypeError: Invalid value used as weak map key
  map.set(null, 2)
  // TypeError: Invalid value used as weak map key
}
```
* 2、WeakMap 的键名所指向的对象，不计入垃圾回收机制；
```javascript
{
  const wm = new WeakMap();

  const element = document.getElementById('example');

  wm.set(element, 'some information');
  wm.get(element) // "some information"
  }
```

总之，WeakMap 的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap 结构有助于防止内存泄漏。

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。所以，即使在 WeakMap 外部消除了obj的引用，WeakMap 内部的引用依然存在。
```javascript
{
  const wm = new WeakMap();
  let key = {};
  let obj = {foo: 1};

  wm.set(key, obj);
  obj = null;
  wm.get(key);
  // Object {foo: 1}
}
```

##### <div id="4_2">4.2、WeakMap 的语法</div>
WeakMap 与 Map 在API上的主要区别是两个：
* 1、因为垃圾回收机制，所以没有遍历操作（即没有 key()、value() 和 entries() 方法），也没有 size 属性和键名；
* 2、无法清空，即不支持 clear 方法；

因此，WeakMap 只有四个方法可用：get()、set()、has()、delete()：
```javascript
{
  const wm = new WeakMap();

  // size、forEach、clear 方法都不存在
  wm.size // undefined
  wm.forEach // undefined
  wm.clear // undefined
}
```

##### <div id="4_3">4.3、WeakMap 的示例</div>

WeakMap 的例子很难演示，因为无法观察它里面的引用会自动消失。此时，其他引用都解除了，已经没有引用指向 WeakMap 的键名了，导致无法证实那个键名是不是存在。

贺师俊老师提示，如果引用所指向的值占用特别多的内存，就可以通过 Node 的 <span style="color: #c7254e;">process.memoryUsage</span> 方法看出来。根据这个思路，网友vtxf补充了下面的例子。

首先，打开 Node 命令行。
```javascript
{
  $ node --expose-gc
}
```
上面代码中，<span style="color: #c7254e;">--expose-gc</span> 参数表示允许手动执行垃圾回收机制。

然后，执行下面的代码。
```javascript
{
  // 手动执行一次垃圾回收，保证获取的内存使用状态准确
  > global.gc();
  undefined

  // 查看内存占用的初始状态，heapUsed 为 4M 左右
  > process.memoryUsage();
  { rss: 21106688,
    heapTotal: 7376896,
    heapUsed: 4153936,
    external: 9059 }

  > let wm = new WeakMap();
  undefined

  // 新建一个变量 key，指向一个 5*1024*1024 的数组
  > let key = new Array(5 * 1024 * 1024);
  undefined

  // 设置 WeakMap 实例的键名，也指向 key 数组
  // 这时，key 数组实际被引用了两次，
  // 变量 key 引用一次，WeakMap 的键名引用了第二次
  // 但是，WeakMap 是弱引用，对于引擎来说，引用计数还是1
  > wm.set(key, 1);
  WeakMap {}

  > global.gc();
  undefined

  // 这时内存占用 heapUsed 增加到 45M 了
  > process.memoryUsage();
  { rss: 67538944,
    heapTotal: 7376896,
    heapUsed: 45782816,
    external: 8945 }

  // 清除变量 key 对数组的引用，
  // 但没有手动清除 WeakMap 实例的键名对数组的引用
  > key = null;
  null

  // 再次执行垃圾回收
  > global.gc();
  undefined

  // 内存占用 heapUsed 变回 4M 左右，
  // 可以看到 WeakMap 的键名引用没有阻止 gc 对内存的回收
  > process.memoryUsage();
  { rss: 20639744,
    heapTotal: 8425472,
    heapUsed: 3979792,
    external: 8956 }
}
```
上面代码中，只要外部的引用消失，WeakMap 内部的引用，就会自动被垃圾回收清除。由此可见，有了 WeakMap 的帮助，解决内存泄漏就会简单很多。

##### <div id="4_4">4.4、WeakMap 的用途</div>
> WeakMap 应用的典型场合就是 DOM 节点作为键名

```javascript
{
  let myElement = document.getElementById('logo');
  let myWeakmap = new WeakMap();

  myWeakmap.set(myElement, {timesClicked: 0});

  myElement.addEventListener('click', function() {
    let logoData = myWeakmap.get(myElement);
    logoData.timesClicked++;
  }, false);
}
```
上面代码中，<span style="color: #c7254e;">myElement</span>是一个 DOM 节点，每当发生 <span style="color: #c7254e;">click</span> 事件，就更新一下状态。我们将这个状态作为键值放在 WeakMap 里，对应的键名就是 <span style="color: #c7254e;">myElement</span>。一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。

WeakMap 的另一个用处是部署私有属性。
```javascript
{
  const _counter = new WeakMap();
  const _action = new WeakMap();

  class Countdown {
    constructor(counter, action) {
      _counter.set(this, counter);
      _action.set(this, action);
    }
    dec() {
      let counter = _counter.get(this);
      if (counter < 1) return;
      counter--;
      _counter.set(this, counter);
      if (counter === 0) {
        _action.get(this)();
      }
    }
  }

  const c = new Countdown(2, () => console.log('DONE'));

  c.dec()
  c.dec()
  // DONE
}
```
上面代码中，<span style="color: #c7254e;">Countdown</span>类的两个内部属性<span style="color: #c7254e;"> _counter</span>和<span style="color: #c7254e;">_action</span>，是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏。
