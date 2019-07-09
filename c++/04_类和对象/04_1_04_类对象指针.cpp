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

void print(Point *a) {
  a -> display();
};

void print(Point &a) {
  a.display();
};

int main() {
  Point a, b, *p;
  Point &ra = a;
  b = a;
  p = &b;
  p -> setxy(112, 115);
  print(p);
  p -> display();
  ra.move(-80, 23);
  print(a);
  print(&a);
}
