// 成员函数：允许结构定义函数的函数

#include <iostream>

using namespace std;

struct Point {
  void Setxy(double a, double b) {
    x = a;
    y = b;
  };

  void Display() {
    cout << x << "\t" << y << endl;
  }

  double x, y;
};

int main() {
  Point a;
  a.Setxy(10.6, 18.5);
  a.Display();
  cout << a.x << "\t" << a.y << endl;
}
