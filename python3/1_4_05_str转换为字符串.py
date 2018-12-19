'''
str() 函数将对象转化为适于人阅读的形式
语法：class str(object='')
参数：object -- 对象
返回：一个对象的string格式
'''

print('str("www.baidu.com")：', str("www.baidu.com"))
print('Number转换为String：', str(123))
list = ['123', 123, { 'list': 'list' }, (123, '123'), {123, '123'}]
print('List转换为String：', str(list))
print('Tuple转换为String：', str(('tuple')))
print('Set转换为String：', str({'set', 123}))
dict = {'baidu': 'www.baidu.com', 'google': 'www.google.com'}
print('Dictionary转换为String：', str(dict))
