'''
frozenset() 返回一个冻结的集合，冻结后集合不能再添加或删除任何元素
语法：class frozenset([iterable])
参数：iterable -- 可迭代的对象，比如列表、字典、元组等等
返回：新的 frozenset 对象，如果不提供任何参数，默认会生成空集合。
'''
a = frozenset(range(10))
print('listz转化为不可变集合：', a)
b = frozenset('baidu')
print('string转化为不可变集合：', b)
