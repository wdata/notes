#include <iostream>
const double M_PI = 3.14;

using namespace std;

class Yuan {
private:
  double d;
public:
  Yuan(double x) {
    d = x;
  }

  double area() {
    return (d*d) * M_PI;
  };
};

class Yuanzhu:Yuan {
private:
  double h;
public:
  Yuanzhu(double x, double y):Yuan(y) {
    h = x;
  }
  double volume() {
    return area() * h;
  };
};

int main() {
  double a, b;
  cout << "请输入园的高和体积：" << endl;
  cin >> a >> b;
  Yuanzhu y(a, b);
  // cout << "园的面积：" << y::area() << endl;
  cout << "园的体积：" << y.volume() << endl;
}
