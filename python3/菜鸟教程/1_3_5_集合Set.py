'''

集合（set）是由一个或数个形态各异的大小整体组成的，构成集合的事物或对象称作元素或是成员。
基本功能是进行成员关系测试和删除重复元素。
可以使用大括号 { } 或者 set() 函数创建集合，注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。

'''

student = { 'Tom', 'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose', 'Rose' }

print(student) # 输出集合，重复的元素被自动去掉

# 成员测试
if 'Rose' in student :
    print('Rose在集合中')
else :
    print('Rose不在集合中')

print('-----------------')

# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')

print('a：', a)
print('b：', b)

print('a和b的差集：', a - b)
print('a和b的并集：', a | b)
print('a和b的交集：', a & b)
print('a和b中不同时存在的元素：', a ^ b)
