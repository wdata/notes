## 取整方法

### 直接取整

#### 1、parent()

parseInt() 函数可解析一个字符串，并返回一个整数。

语法
```
{   
    parseInt(string, radix)
    
    string	必需。要被解析的字符串。
    radix   可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
    如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
    如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
}
```

#### 2、~~number

所有取整之中最快的，位运算，一如既往的快。

```
{   
    var num1 = ~~20.15,  //20
        num2 = ~~(-20.15);  //-20
}
```

#### 3、number^0
```
{   
    var num1 = 20.15^0,  //20
        num2 = (-20.15)^0;  //-20
}
```
#### 4、number<<0
```
{   
    var num1 = 20.15 << 0,  //20
        num2 = (-20.15) << 0,  //-20
}
```

### 计算取整

#### 1、Math.floor() 

    向下取整

```
{   
    var num1 = Math.floor(20.1),  //20
        num4 = Math.floor(-20.1)  //-21
}
```
    
#### 2、Math.ceil(x)

    向上取整

```
{   
    var num1 = Math.ceil(20.1),  //21
        num4 = Math.ceil(-20.1)  //-20
}
```

#### 3、Math.round(x)

    返回四舍五入后的整数.

```
{   
    var num1 = Math.round(20.1),  //20
        num2 = Math.round(20.5),  //21
        num3 = Math.round(20.9),  //21
        num4 = Math.round(-20.1),  //-20
        num5 = Math.round(-20.5),  //-20 注意这里是-20而不是-21
        num6 = Math.round(-20.9);  //-21
}
```