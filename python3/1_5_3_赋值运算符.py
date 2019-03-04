'''
以下假设变量a为10，变量b为20：
=	简单的赋值运算符	c = a + b 将 a + b 的运算结果赋值为 c
+=	加法赋值运算符	c += a 等效于 c = c + a
-=	减法赋值运算符	c -= a 等效于 c = c - a
*=	乘法赋值运算符	c *= a 等效于 c = c * a
/=	除法赋值运算符	c /= a 等效于 c = c / a
%=	取模赋值运算符	c %= a 等效于 c = c % a
**=	幂赋值运算符	c **= a 等效于 c = c ** a
//=	取整除赋值运算符	c //= a 等效于 c = c // a
'''
a = 3
c = 2

print('a:', a, 'c:', c)
c = a + 2;
print('c = a + 2  =:', c)
c += a;
print('c += a  +=:', c)
c -= a;
print('c -= a  -=:', c)
c *= a;
print('c *= a  *=:', c)
c /= a;
print('c /= a  /=:', c)
c %= a;
print('c %= a  %=:', c)
c **= a;
print('c **= a  **=:', c)
c //= a;
print('c //= a  //=:', c)
