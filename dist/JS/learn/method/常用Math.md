## Math

Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。

### [Math.random()](Math/Math.rendom.md)

    返回0到1之间的伪随机数.

### Math.floor(x)

    返回小于x的最大整数。
    
### Math.ceil(x)

    返回大于于x的最大整数。

### Math.round(x)

    返回四舍五入后的整数.

### Math.max([x[,y[,…]]])

    返回0个到多个数值中最大值.
    
#### 使用Math.max
```
{   
    // 正常使用
    Math.max(10, 20);   //  20
    
    // 数值数组中的最大元素
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
    
    // 或者通过使用最新的扩展语句spread operator，获得数组中的最大值变得更容易。
    var arr = [1, 2, 3];
    var max = Math.max(...arr);
}
```

### Math.min([x[,y[,…]]])

    返回0个到多个数值中最小值

### Math.pow(x,y)

    返回x的y次幂

### Math.sqrt(x)

    返回x的平方根
    
### Math.cbrt(x) 

    返回x的立方根

### Math.acos(x)

    返回x的反余弦值

### Math.asin(x)

    返回x的反正弦值






