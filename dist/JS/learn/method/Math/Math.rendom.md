## Math.rendom()

函数返回一个浮点,  伪随机数在范围[0，1)，也就是说，从0（包括0）往上，但是不包括1（排除1），然后您可以缩放到所需的范围。

#### 得到一个大于等于0，小于1之间的随机数
```
{
    function getRandom() {
      return Math.random();
    }
}
```

#### 得到一个两数之间的随机数
```
{
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
}
```

#### 得到一个两数之间的随机整数，包括两个数在内
```
{
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
}
```