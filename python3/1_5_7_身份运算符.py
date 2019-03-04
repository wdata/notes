'''
身份运算符用于比较两个对象的存储单元
is	     is 是判断两个标识符是不是引用自一个对象	      x is y, 类似 id(x) == id(y) , 如果引用的是同一个对象则返回 True，否则返回 False
is not	 is not 是判断两个标识符是不是引用自不同对象	  x is not y ， 类似 id(a) != id(b)。如果引用的不是同一个对象则返回结果 True，否则返回 False。
注： id() 函数用于获取对象内存地址。
'''

a = 20
b = 20
c = { 'a': 20 }
d = {}
e = {}

print('a:', a, 'b:', b, 'c:', c)
print('a is b :', a is b)
print('a is c["a"] :', a is c['a'])
print(id(a), id(b), id(c), id(c['a']))
print('e:', e, 'd:', d)
print('d is e :', d is e)
