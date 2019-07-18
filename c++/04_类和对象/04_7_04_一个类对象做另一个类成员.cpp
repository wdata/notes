#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  void set(int a, int b) {
    x = a; y = b;
  };
  int getx() {return x;};
  int gety() {return y;};
};

class Rectangle {
private:
  Point Loc; // 在Rectangle使用Point类的成员
  int H, W;
public:
  void set(int, int, int, int);
  Point* getloc();
  int geth() {return H;};
  int getw() {return W;};
};

void Rectangle::set(int x, int y, int h, int w) {
  Loc.set(x, y);
  H = h; W = w;
};

Point* Rectangle::getloc() {
  return &Loc;
};

int main() {
  Rectangle rect;
  rect.set(10, 2, 25, 20);

  cout << rect.geth() << ", " << rect.getw() << endl;

  Point *p = rect.getloc();
  cout << p -> getx() << ", " << p -> gety() << endl;
}
