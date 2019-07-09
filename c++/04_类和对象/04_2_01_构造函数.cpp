#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point();
  Point(int, int);
};

Point::Point():x(0), y(0) {
  cout << "无参数成员函数！！！" << endl;
};

Point::Point(int a, int b):x(a), y(b) {
  cout << "参数成员函数：" << x << ", " << y << endl;
};

Point global(16, 17);

int main() {
  Point A;
  Point B(15, 25);
  Point C[2]; // 执行2次无参数成员函数
  Point D[2] = { // 每个执行了2次有参数成员函数
    Point(), Point(8, 12)
  };
};
