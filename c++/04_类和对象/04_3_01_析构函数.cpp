#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point(int = 0, int = 0);
  Point(Point&); // 复制构造 函数
  ~Point();
  void display();
};

Point::Point(int a, int b):x(a), y(b) {
  cout << "构造函数参数：" << a << ", " << b << endl;
};

void Point::display() {
  cout << "执行了一次输出：" << x << ", " << y << endl;
};

// 复制构造函数
Point::Point(Point& t) {
  x = t.x + 1;
  y = t.y + 2;
  cout << "复制构造函数参数：" << x << ", " << y << endl;
};

Point::~Point() {
  cout << "我是析构函数，我在最后执行！" << endl;
}

int main() {
  Point obj1(25, 51);
  Point obj2(obj1);
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
};
