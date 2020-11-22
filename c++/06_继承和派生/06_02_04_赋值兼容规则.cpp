#include <iostream>

using namespace std;

class Point {
protected:
  int x, y;
public:
  Point(int a, int b) {
    x = a;
    y = b;
  }
  void Show() {
    cout << "x = " << x << ", y = " << y << endl;
  }
};

class Rectangle: public Point {
private:
  int H, W;
public:
  Rectangle(int ,int, int, int);
  void Show() {
    cout << "x = " << x << ", y = " << y << ", W = " << W << ", H = " << H << endl;
  }
};

Rectangle::Rectangle(int a, int b, int c, int d):Point(a, b) {
  H = c;
  W = d;
};

int main() {
  Point a(1, 2);
  Rectangle b(3, 4, 5, 6);
  a.Show();
  b.Show();

  // 派生类对象初始化基类引用
  Point& ra = b;
  ra.Show();

  // 派生类对象的地址赋给指向基类的指针
  Point* p = &b;
  p -> Show();

  // 派生类指针pb
  Rectangle *pb = &b;
  pb -> Show();

  // 派生类对象的属性值更新基类对象的属性值
  a = b;
  a.Show();
}
