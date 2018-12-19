'''
complex() 函数用于创建一个值为 real + imag * j 的复数或者转化一个字符串或数为复数。如果第一个参数为字符串，则不需要指定第二个参数
语法：class complex([real[, imag]])
参数：real -- int, long, float或字符串；
     imag -- int, long, float；
返回：一个复数
'''

print('complex(1, 2)：', complex(1, 2))
print('complex(1)：', complex(1))
print('complex("1")：', complex("1"))
# 注意：这个地方在"+"号两边不能有空格，也就是不能写成"1 + 2j"，应该是"1+2j"，否则会报错
print('complex("1+2j")：', complex("1+2j"))
