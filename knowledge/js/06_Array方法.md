## Array方法

#### 遍历数组：
1. `forEach`
2. `map`
3. `filter`

#### 其他方法：
1. `push`：末尾添加
2. `pop`：末位删除
3. `shift`：头部删除
4. `unshift`：头部添加
5. `indexOf`：查找索引
6. `splice`：通过索引删除
7. `slice`：选取数组
8. `from`：从类数组对象或者可迭代对象中创建一个新的数组实例
9. `isArray`：用来判断某个变量是否是一个数组对象。
10. `copyWith`：在数组内部， 将一段元素序列拷贝到另一段元素序列上， 覆盖原有的值
11. `reverse`：颠倒数组中元素的排列顺序， 即原先的第一个变为最后一个， 原先的最后一个变为第一个。
12. `sort`：对数组元素进行排序， 并返回当前数组。(按照数字大小排序)
13. `concat`：返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
14. `includes`：判断当前数组是否包含某指定的值， 如果是返回 true， 否则返回 false。
15. `join`：连接所有数组元素组成一个字符串。
16. `toSource`：返回一个表示当前数组字面量的字符串。 遮蔽了原型链上的
17. `toString`：返回一个由所有数组元素组合而成的字符串。 遮蔽了原型链上的
18. `toLocaleString`：返回一个由所有数组元素组合而成的本地化后的字符串。 遮蔽了原型链上的
19. `lastIndexOf`：返回数组中最后一个（ 从右边数第一个） 与指定值相等的元素的索引， 如果找不到这样的元素， 则返回 1。
20. `entries`：返回一个数组迭代器对象， 该迭代器会包含所有数组元素的键值对。
21. `every`：如果数组中的每个元素都满足测试函数， 则返回 true， 否则返回 false。
22. `some`：如果数组中至少有一个元素满足测试函数， 则返回 true， 否则返回 false。
23. `find`：找到第一个满足测试函数的元素并返回那个元素的值， 如果找不到， 则返回 undefined。
24. `findIndex`：找到第一个满足测试函数的元素并返回那个元素的索引， 如果找不到， 则返回 1。
25. `keys`：返回一个数组迭代器对象， 该迭代器会包含所有数组元素的键。
26. `reduce`：从左到右为每个数组元素执行一次回调函数， 并把上次回调函数的返回值放在一个暂存器中传给下次回调函数， 并返回最后一次回调函数的返回值。
27. `reduceRight`：从右到左为每个数组元素执行一次回调函数， 并把上次回调函数的返回值放在一个暂存器中传给下次回调函数， 并返回最后一次回调函数的返回值。
28. `values`：返回一个数组迭代器对象， 该迭代器会包含所有数组元素的值。
