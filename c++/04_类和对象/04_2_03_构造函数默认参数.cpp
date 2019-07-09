#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point(int = 0, int = 0);
};

Point::Point(int a, int b):x(a), y(b) {
  cout << "构造函数参数：" << a << ", " << b << endl;
};


int main() {
  Point A;
  Point B(1, 2);
  Point C[2];
};
