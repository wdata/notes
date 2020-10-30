'''
eval() tuple 函数将列表转换为元组
语法：tuple( seq )
参数：seq -- 要转换为元组的序列
返回：tuple
'''

list = ['Google', 'Taobao', { 'baidu': 'wwww.baidu.com' }, 'weixin']

tuplel = tuple(list)
print('Tuple()转化：', tuplel)
# tuplel[2] = 1 TypeError: 'tuple' object does not support item assignment
# tuple对象不支持编辑
