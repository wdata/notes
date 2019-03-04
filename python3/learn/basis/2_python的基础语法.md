* [1. 基础语法](#1)
  * [1.1 交互式编程](#1_1)
  * [1.2 脚本式编程](#1_2)
  * [1.3 Python 标识符](#1_3)
  * [1.4 Python 保留字符](#1_4)
  * [1.5 行和缩进](#1_5)
  * [1.6 多行语句](#1_6)
  * [1.7 Python 引号](#1_7)
  * [1.8 Python注释](#1_8)
  * [1.9 Python空行](#1_9)
  * [1.10 同一行显示多条语句](#1_10)
  * [1.11 Print 输出](#1_11)
  * [1.12 多个语句构成代码组](#1_12)

## <div id="1">1、基础语法</div>
#### <div id="1_1">交互式编程</div>

交互式编程不需要创建脚本文件，是通过 Python 解释器的交互模式进来编写代码。

    {
      >>> print 'hello world';
      hellw world
    }

#### <div id="1_2">脚本式编程</div>

通过脚本参数调用解释器开始执行脚本，直到脚本执行完毕。当脚本执行完成后，解释器不再有效。

    {
      test.py：
      >>> print "Hello, Python!"
      $ python test.py
      输出：Hello, Python!
    }

#### <div id="1_3">Python 标识符</div>

在 Python 里，标识符由字母、数字、下划线组成。
注意：
1. 所有标识符可以包括英文、数字以及下划线(\_)，但不能以数字开头。
2. 以下划线开头的标识符是有特殊意义的。以单下划线开头 \_foo 的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 from xxx import \* 而导入；
3. 以双下划线开头的 \_\_foo 代表类的私有成员；以双下划线开头和结尾的 \_\_foo\_\_ 代表 Python 里特殊方法专用的标识，如 \_\_init\_\_() 代表类的构造函数。
4. Python 可以同一行显示多条语句，方法是用分号 ; 分开。

#### <div id="1_4">Python 保留字符</div>

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

#### <div id="1_5">行和缩进</div>
学习 Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。python 最具特色的就是用缩进来写模块。

缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。
```
{
  if True:
    print "True"
  else:
    print "False"
}
```
<span style="color: red;">IndentationError: unindent does not match any outer indentation level</span>：你使用的缩进方式不一致，有的是 tab 键缩进，有的是空格缩进，改为一致即可。

<span style="color: red;"> IndentationError: unexpected indent</span>：你的文件里格式不对了，可能是tab和空格没对齐的问题

#### <div id="1_6">多行语句</div>
Python语句中一般以新行作为语句的结束符。
但是我们可以使用斜杠（ \）将一行的语句分为多行显示，如下所示：
```
{
  total = item_one + \
        item_two + \
        item_three
}
```
语句中包含 [], {} 或 () 括号就不需要使用多行连接符。如下实例：
```
{
  days = ['Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday']
}
```

#### <div id="1_7">Python 引号</div>
可用引号( ' )、双引号( " )、三引号( ''' 或 """ ) 表示字符串，引号的开始与结束必须是相同的类型。

#### <div id="1_8">Python注释</div>
单行注释采用 # 开头
```
{
  # 第一个注释
  print "Hello, Python!";  # 第二个注释
}
```
多行注释使用三个单引号(''')或三个双引号(""")
```
{
  '''
  这是多行注释，使用单引号。
  这是多行注释，使用单引号。
  这是多行注释，使用单引号。
  '''

  """
  这是多行注释，使用双引号。
  这是多行注释，使用双引号。
  这是多行注释，使用双引号。
  """
}
```

#### <div id="1_9">Python空行</div>
函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

#### <div id="1_10">同一行显示多条语句</div>
语句之间使用分号(;)分割
```
{
  mport sys; x = 'runoob'; sys.stdout.write(x + '\n')
}
```
#### <div id="1_11">Print 输出</div>
print 默认输出是换行的，如果要实现不换行需要在变量末尾加上逗号 ,
```
{
  # 换行输出
  print x
  print y

  # 不换行输出
  print x,
  print y,

  # 不换行输出
  print x,y
}
```

#### <div id="1_12">多个语句构成代码组</div>
缩进相同的一组语句构成一个代码块，我们称之代码组。

像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。
```
{
  if expression :
     suite
  elif expression :  
     suite  
  else :  
     suite
}
```


## <div id="2">2、变量类型</div>

#### <div id="2_1">标准数据类型</div>

* Numbers（数字）
* String（字符串）
* List（列表）
* Tuple（元组）
* Dictionary（字典）

##### <div id="2_1_1">数字</div>
数字数据类型用于存储数值

##### <div id="2_1_2">字符串</div>
字符串或串(String)是由数字、字母、下划线组成的一串字符

python的字串列表有2种取值顺序：

* 从左到右索引默认0开始的，最大范围是字符串长度少1
* 从右到左索引默认-1开始的，最大范围是字符串开头

```
{
  str = 'Hello World!'

  print str           # 输出完整字符串
  print str[0]        # 输出字符串中的第一个字符
  print str[2:5]      # 输出字符串中第三个至第五个之间的字符串
  print str[2:]       # 输出从第三个字符开始的字符串
  print str * 2       # 输出字符串两次
  print str + "TEST"  # 输出连接的字符串

  Hello World!
  H
  llo
  llo World!
  Hello World!Hello World!
  Hello World!TEST
}
```
##### <div id="2_1_3">列表</div>
列表用 [ ] 标识，是 python 最通用的复合数据类型
```
{
  list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
  tinylist = [123, 'john']

  print list               # 输出完整列表
  print list[0]            # 输出列表的第一个元素
  print list[1:3]          # 输出第二个至第三个元素
  print list[2:]           # 输出从第三个开始至列表末尾的所有元素
  print tinylist * 2       # 输出列表两次
  print list + tinylist    # 打印组合的列表

  ['runoob', 786, 2.23, 'john', 70.2]
  runoob
  [786, 2.23]
  [2.23, 'john', 70.2]
  [123, 'john', 123, 'john']
  ['runoob', 786, 2.23, 'john', 70.2, 123, 'john']
}
```

##### <div id="2_1_4">元组</div>
元组是另一个数据类型，类似于List（列表）。

元组用"()"标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表。

```
{
  tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
  tinytuple = (123, 'john')

  print tuple               # 输出完整元组
  print tuple[0]            # 输出元组的第一个元素
  print tuple[1:3]          # 输出第二个至第三个的元素
  print tuple[2:]           # 输出从第三个开始至列表末尾的所有元素
  print tinytuple * 2       # 输出元组两次
  print tuple + tinytuple   # 打印组合的元组

  ('runoob', 786, 2.23, 'john', 70.2)
  runoob
  (786, 2.23)
  (2.23, 'john', 70.2)
  (123, 'john', 123, 'john')
  ('runoob', 786, 2.23, 'john', 70.2, 123, 'john')
}
```

##### <div id="2_1_5">字典</div>
