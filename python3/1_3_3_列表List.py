'''

List（列表） 是 Python 中使用最频繁的数据类型。

列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。

列表是写在方括号 [] 之间、用逗号分隔开的元素列表。

和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。

'''

list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']

print(list, '  =>输出完整列表')
print(list[0], '  =>输出列表第一个元素')
print(list[1:3], '  =>从第二个开始输出到第三个元素')
print(list[2:], '  =>输出从第三个元素开始的所有元素')
print(list[:-2], '  =>输出从第一个开始到倒数第二个的所有元素')
print(tinylist *2 , '  =>输出两次列表')
print(list + tinylist, '  =>连接列表')
