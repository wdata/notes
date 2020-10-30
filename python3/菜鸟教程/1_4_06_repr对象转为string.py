'''
repr() 函数将对象转化为供解释器读取的形式。
语法：repr(object)
参数：object -- 对象
返回值：返回一个对象的 string 格式
'''

s = 'BAIDU'
print('String还是返回String：', repr(s))
dict = {'baidu': 'baidu.com', 'google': 'google.com'}
print('Dictionary转换为String：', repr(dict))

'''
str() 和 repr() 的不同：
1、str()追求输出可读性，输出格式要便于理解，适合用于输出内容到用户终端
2、repr() 的输出追求明确性，除了对象内容，还需要展示出对象的数据类型信息，适合开发和调试阶段使用。
'''
