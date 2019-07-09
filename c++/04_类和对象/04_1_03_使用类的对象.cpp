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

void print(Point a) {
  a.display();
};

int main() {
  Point A, B;
  A.setxy(25, 55);
  B = A;
  A.display();
  A.move(-10, 20);
  print(A);
  print(B);
  cout << A.getx() << endl;
}
