'''
dict() 函数用于创建一个字典
语法：
    class dict(**kwarg)
    class dict(mapping, **kwarg)
    class dict(iterable, **kwarg)
参数：
    **kwargs -- 关键字
    mapping -- 元素的容器
    iterable -- 可迭代对象

返回： dictionary类型
'''

print('dict空字典：', dict())
print('关键词创建：', dict(a = 'a', b = 'b', c = 'c'))
print('映射函数方式构建：', dict(zip(['one', 'three', 'two'], [1, 3, 2])))
print('可迭代对象构建：',dict([('one', 1), ('three', 3), ('two', 2)]))
