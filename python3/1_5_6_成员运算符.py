'''
in	如果在指定的序列中找到值返回 True，否则返回 False。	             x 在 y 序列中 , 如果 x 在 y 序列中返回 True。
not in	如果在指定的序列中没有找到值返回 True，否则返回 False。	   x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。
'''

a = 1
b = 10
list = [1, 2, 4, 5]
tuple = (1, 2, 4, 5)
set = {1, 2, 4, 5}

print('a:', a, 'b:', b, 'list:', list)
print('a in list :', a in list)
print('b in list :', b in list)
print('a not in list :', a not in list)
print('b not in list :', b not in list)

print('tuple:', tuple, 'set:', set)
print('a in tuple', a in tuple)
print('a in set', a in set)
