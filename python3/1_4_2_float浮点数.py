'''
float() 函数用于将整数和字符串转换成浮点数
语法：class float([x])
参数：x -- 整数或字符串
'''

print('float(1)：', float(1))
print('float(112)：', float(112))
print('float(-123.6)：', float(-123.6))
print("float('123')：", float('123'))

'''
float和int的异同：
相同：
1、x默认都是0；
2、能将字符串转换为数字Number类型；
3、都能保留负数；
不同点：
1、float保留字符串和数字转换为Number的浮点小数；
2、int能设置字符串或数字的进制，并转换为十进制；
3、int有2个参数，float只有1个参数；
最主要区别：int是整型，float是浮点型；
'''
