str = 'Runoob'

print(str) # 输出字符串
print(str[0:-1]) # 输入第一个到数第二个的所有字符串
print(str[0]) # 输入字符串第一个字符
print(str[2:5]) # 输出从第三个开始到第五个的字符
print(str[2:]) # 输出从第三个开始的后的字符
print(str * 2) # 输出字符 2 次
print(str + '你好！') # 链接字符串

print('----------------------')

print('hellow\nrunoob') # 使用反斜杠（\）+n转义特殊字符
print(r'hellow\nrunoob') # 在字符串前面添加一个r， 表示原始字符串，不会发送转义


input("\n\n按下 enter键后退出。")

import sys; x = 'runoob'; sys.stdout.write(x + '\n')
