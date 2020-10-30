'''
hex() 函数用于将10进制整数转换成16进制，以字符串形式表示。
语法：hex(x)
参数：x -- 10进制整数
返回：16进制数，String类型
'''
print('hex(255)：', hex(255))
print('hex(-42)：', hex(-42))
print('hex(1L)：', hex(17))
print('hex(12)：', hex(12))
a = hex(211)
print('hex返回类型：', type(a))
