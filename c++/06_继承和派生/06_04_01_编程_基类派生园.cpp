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
  cout << "������԰�ĸߺ������" << endl;
  cin >> a >> b;
  Yuanzhu y(a, b);
  // cout << "԰�������" << y::area() << endl;
  cout << "԰�������" << y.volume() << endl;
}
