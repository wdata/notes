# type() 函数如果你只有第一个参数则返回对象的类型
'''
type语法
type(object)
type(name, bases, dict)

name -- 类的名称。
bases -- 基类的元组。
dict -- 字典，类内定义的命名空间变量。

'''
print(2, '的类型', type(2))
print('2', '的类型', type('2'))
print([], '的类型', type([]))
print({}, '的类型', type({}))
