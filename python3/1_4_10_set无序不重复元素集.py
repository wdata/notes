'''
set() 函数创建一个无序不重复元素集，可进行关系测试，删除重复数据，还可以计算交集、差集、并集等。
语法：class set([iterable])
参数：iterable -- 可迭代对象对象（string、list、set、dictionary）
返回：set集合类型
'''

str = set('runoob')
str1 = set('rugoal')
list = set(['google', 'baidu', 1, 1.222])
# tuple = set(('g', 1, { 'b': 1 }, 22))
# num = set(1)
dic = set({ 'a': 1, 'b': 2 })
set = set({ 1, 'b', 3.111 })
print('string字符串：', str)
print('list列表：', list)
# print('tuple元组：', tuple)
# print('number数字：', num)
print('dictionary字典：', dic)
print('set集合：', set)

# 实现交集、并集、差集等
print('交集：', str & str1)
print('并集：', str | str1)
print('差集：', str - str1)
