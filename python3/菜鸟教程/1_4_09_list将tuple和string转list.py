'''
list() 方法用于将元组或字符串转换为列表。
注：元组与列表是非常类似的，区别在于元组的元素值不能修改，元组是放在括号中，列表是放于方括号中。

语法：list( seq )
参数：list -- 要转换为列表的元组或字符串。
返回：list类型

'''

tuple = ('google', 1, 1.22, { 'baidu': 'www.baidu.com' }, [1, '2'], { 1, 1.22 })
print('tuple原数据：', tuple)
list_1 = list(tuple)
print('将tuple转化为list类型：', list_1)

str = 'Hellow google'
print('str原数据：', str)
list_2 = list(str)
print('将str转化为list类型：', list_2)
