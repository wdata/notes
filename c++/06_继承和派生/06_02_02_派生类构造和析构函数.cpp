#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point(int a, int b) {
    x = a;
    y = b;
    cout << "Point..." << endl;
  }
  void Showxy() {
    cout << "x = " << x << ", y = " << y << endl;
  }
  ~ Point() {
    cout << "Delete Point" << endl;
  }
};

class Rectangle: public Point {
private:
  int H, W;
public:
  Rectangle(int a, int b, int h, int w):Point(a, b) {
    H = h;
    W = w;
    cout << "Rectangle..." << endl;
  }
  void Show() {
    cout << "H = " << H << ", W = " << W << endl;
  }
  ~Rectangle() {
    cout << "Delete Rectangle" << endl;
  }
};

int main() {
  Rectangle a(1, 2, 3, 4);
  a.Showxy();
  a.Show();
}
