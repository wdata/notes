#include <iostream>

using namespace std;

class Point{
private:
  int x, y;
public:
  void setxy(int a, int b);
  void move(int a, int b);
  void display();
  int getx();
  int gety();
};

void Point::setxy(int a, int b) {
  x = a;
  y = b;
};

void Point::move(int a, int b) {
  x = x + a;
  y = y + b;
};

void Point::display() {
  cout << x << ", " << y << endl;
};

int Point::getx() {
  return x;
};

int Point::gety() {
  return y;
};


int main() {
  int p1, p2;
  cout << "请输入2个整型：";
  cin >> p1 >> p2;

  Point point;
  point.setxy(p1, p2);
  point.display();
  cout << "再输入2个整型：";
  cin >> p1 >> p2;
  point.move(p1, p2);
  point.display();
  cout << "相减：" << point.getx() - point.gety() << endl;
}
