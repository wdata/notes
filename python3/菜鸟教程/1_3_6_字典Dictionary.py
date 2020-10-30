'''

字典（dictionary）是Python中另一个非常有用的内置数据类型。

列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。

字典是一种映射类型，字典用"{ }"标识，它是一个无序的键(key) : 值(value)对集合。

键(key)必须使用不可变类型。

在同一个字典中，键(key)必须是唯一的。

'''

dic = {}
dic['one'] = '1 - 教程'
dic[2] = '2 - 工具'

tinydict = { 'name': 'baidu', 'code': 1, 'site': 'wwww.baidu.com' }

print("输出键为 'one' 的值: ", dic['one'])
print('输出键为 2 的值: ', dic[2])
print('输出完整的字典: ', tinydict)
print('输出所有键: ', tinydict.keys()) # 将dicticonary转化为
print('输出所有值: ', tinydict.values())

for s in tinydict:
    print('tinydict for in 下的值：', s, tinydict[s])

dict_1 = dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
print('Dictionary另一种创建：', dict_1)

dict_2 = {x: x**2 for x in (2, 3, 6)}
print('使用for创建重复Dictonary：', dict_2)

dict_3 = dict(baidu=1, Google=2, taobao=3)
print('Dictionary的创建方式：', dict_3)

'''
另外，字典类型也有一些内置的函数，例如clear()、keys()、values()等。

注意：

1、字典是一种映射类型，它的元素是键值对。
2、字典的关键字必须为不可变类型，且不能重复。
3、创建空字典使用 { }。

'''
