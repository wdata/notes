#### 交互式编程
交互式编程不需要创建脚本文件，是通过 Python 解释器的交互模式进来编写代码。
```
{
  >>> print 'hello world';
  hellw world
}
```
#### 脚本式编程
通过脚本参数调用解释器开始执行脚本，直到脚本执行完毕。当脚本执行完成后，解释器不再有效。

```
{
  test.py：
  >>> print "Hello, Python!"
  $ python test.py
  输出：Hello, Python!
}
```
#### Python 标识符
在 Python 里，标识符由字母、数字、下划线组成。
注意：
1. 所有标识符可以包括英文、数字以及下划线(\_)，但不能以数字开头。
2. 以下划线开头的标识符是有特殊意义的。以单下划线开头 \_foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import * 而导入；
3. 以双下划线开头的 \_\_foo 代表类的私有成员；以双下划线开头和结尾的 \_\_foo\_\_ 代表 Python 里特殊方法专用的标识，如 \_\_init\_\_() 代表类的构造函数。
4. Python 可以同一行显示多条语句，方法是用分号 ; 分开。

#### Python 保留字符
and	exec	not
assert	finally	or
break	for	pass
class	from	print
continue	global	raise
def	if	return
del	import	try
elif	in	while
else	is	with
except	lambda	yield
