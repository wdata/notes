'''
python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块。

Python 中用 elif 代替了 else if，所以if语句的关键字为：if – elif – else。
'''

var1 = 100
if var1:
    print('1 - if is: True')
    print(var1)

var2 = 0
if var2:
    print('2 - if is: False')
    print(var2)
print('Good bye!')

age = int(input('请输入你家狗狗的年龄：'))
print('')
if age < 0:
    print('你是在逗我玩吗？')
elif age == 1:
    print('相当于14岁的人了！')
elif age == 2:
    print('相当于22岁的人了！')
elif age > 2:
    human = 22 + (age - 2) * 5
    print('对应人类的年龄：', human, '岁')

# 退出提示
input('点击enter键退出！')
