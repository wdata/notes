'''
以下假设变量a为10，变量b为20：

运算符	描述	实例
==	等于 - 比较对象是否相等	(a == b) 返回 False。
!=	不等于 - 比较两个对象是否不相等	(a != b) 返回 True。
>	大于 - 返回x是否大于y	(a > b) 返回 False。
<	小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。这分别与特殊的变量True和False等价。注意，这些变量名的大写。	(a < b) 返回 True。
>=	大于等于 - 返回x是否大于等于y。	(a >= b) 返回 False。
<=	小于等于 - 返回x是否小于等于y。	(a <= b) 返回 True。
'''

a = 21
b = 10
c = 2

print('a:', a, 'b:', b, 'c:',c)
print('a == b:', a == b)
print('a != b:', a != b)
print('a > b:', a > b)
print('a < b:', a < b)
print('a >= b:', a >= b)
print('a <= b:', a <= b)
print('(a == b) == False:', (a == b) == False)
