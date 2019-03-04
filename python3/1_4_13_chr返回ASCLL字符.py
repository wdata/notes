'''
chr() 用一个范围在 range（256）内的（就是0～255）整数作参数，返回一个对应的字符
语法：chr(i)
参数：i -- 可以是10进制也可以是16进制的形式的数字
返回：当前整数对应的ascii字符
'''

print('chr(0x30)：', chr(0x30))
print('chr(0x31)：', chr(0x31))
print('chr(0x61)：', chr(0x61))
print('chr(48)：', chr(48))
print('chr(49)：', chr(49))
print('chr(97)：', chr(97))
