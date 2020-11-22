#include <iostream>

using namespace std;

class Base {
private:
  int x;
  const int a;
  static const int b; // 静态成员、const常量成员
  const int& r; // 常引用
public:
  Base(int, int);
  void show() {
    cout << x << ", " << a << ", " << b << ", " << r << endl;
  };
  void display(const double& r) { // 常引用做函数参数
    cout << r << endl;
  };
};

const int Base::b = 125;
Base::Base(int i, int j):x(i), a(j), r(x) {}

int main() {
  Base a1(104, 118),
       a2(119, 140);
  a1.show();
  a2.show();
  a2.display(3.1415926);
}
