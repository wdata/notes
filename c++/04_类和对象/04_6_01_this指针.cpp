#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  void set(int, int);
  void display();
};

void Point:: set(int a, int b) {
  this -> x = a;
  this -> y = b;
};

void Point::display() {
  cout << this -> x << ", " << y << endl;
  cout << this << endl; // 指向对象A的地址
};

int main() {
  Point A;
  A.set(1, 2);
  A.display();
}
