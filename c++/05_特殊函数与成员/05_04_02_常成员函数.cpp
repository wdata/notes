#include <iostream>

using namespace std;

class Base {
private:
  double x, y;
  const double p;
public:
  Base(double m, double n, double d):p(d) {
    x = m;
    y = n;
  }
  void show();
  void show() const;
};

void Base::show() {
  cout << x << ", " << y << " p=" << p << endl;
};
void Base::show() const {
  cout << x << ", " << y << " const p=" << p << endl;
};

int main() {
  Base a(8.1, 9.1, 3.16);
  const Base b(2.1, 3.1, 2.16);
  a.show();
  b.show();
  // 常成员函数，只能定义常量对象，才能调用常成员函数，有且只能定义1次
}
