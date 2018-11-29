'''
python中数字有四种类型：整数、布尔型、浮点数和复数。
    int (整数), 如 1, 只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。
    bool (布尔), 如 True。
    float (浮点数), 如 1.23、3E-2
    complex (复数), 如 1 + 2j、 1.1 + 2.2j
'''
print(1, isinstance(1, int), '：整数int')
print(True, isinstance(True, bool), '：布尔bool')
print(1.11, isinstance(1.11, float), '：浮点数float')
print(1+2j, isinstance(1+2j, complex), '：复数complex')
