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
  void Showxy() {
    cout << "x = " << x << ", y = " << y << endl;
  }
};

class Rectangle: public Point {
private:
  int H, W;
public:
  Rectangle(int ,int, int, int);
  void Show(int a) {
    x = a;
    cout << "x = " << x << ", y = " << y << ", W = " << W << ", H = " << H << endl;
  }
};

Rectangle::Rectangle(int a, int b, int c, int d):Point(a, b) {
  H = c;
  W = d;
};

int main() {
  Rectangle a(1, 2, 3, 4);
  a.Showxy();
  a.Show(10);
}
