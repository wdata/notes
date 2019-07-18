#include <iostream>
#include <cmath>

using namespace std;

class Point {
private:
  float x, y;
public:
  Point() {
    x = 0;
    y = 0;
  }
  Point(float a, float b) {
    x = a;
    y = b;
  }
  void set(float a, float b) {
    x = a;
    y = b;
  };
  float getx() {
    return x;
  };
  float gety() {
    return y;
  };
};

class Rectangle {
private:
  Point print[4];
public:
  Rectangle(Point a, Point b) {
    print[0] = a;
    print[1].set(b.getx(), a.gety());
    print[2].set(a.getx(), b.gety());
    print[3] = b;
  };
  void coordinate() {
    for (int i = 0; i < 4; i++ ) {
      cout << "坐标A" << i + 1 << "：" << print[i].getx() << ", " << print[i].gety() << endl;
    }
  };
  float area () {
    float area = fabs((print[0].getx() - print[2].getx()) * (print[0].gety() - print[2].gety()));
    return area;
  };
  void printArea() {
    cout << "面积：" << area() << endl;
  };
};

int main() {
  float a1, a2, a3, a4;
  cout << "请输入2组坐标：";
  cin >> a1 >> a2 >> a3 >> a4;

  Point a(a1, a2), b(a3, a4);
  Rectangle R(a, b);
  R.coordinate();
  R.printArea();
}
