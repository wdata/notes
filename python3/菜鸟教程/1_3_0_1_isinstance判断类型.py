'''

isinstance() 函数来判断一个对象是否是一个已知的类型，类似 type()。

isinstance()和type()区别：

1、tpye()不会认为子类是一种父类类型，不会考虑继承关系。
2、isinstance()会认为子类是一种父类类型，考虑继承关系。

语法：isinstance(object, classinfo)

'''
print('2是否为int类型：', isinstance(2, int))
print('2是否为str类型：', isinstance(2, str))
print('2是否为str, int, list中的一个类型：', isinstance(2, (str, int, list)))

# type() 与 isinstance()区别：
class A:
    pass

class B(A):
    pass

print('isinstance下A和A是否相等：', isinstance(A(), A))
print('tpye下A和A是否相等：', type(A()) == A)
print('isinstance下B和A是否相等：', isinstance(B(), A))
print('tpye下B和A是否相等：', type(B()) == A)
