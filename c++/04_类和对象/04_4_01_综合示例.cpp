#include <iostream>

using namespace std;

class Point {
private:
  int X, Y;
public:
  Point(int a = 0, int b = 0) {
    X = a;
    Y = b;
    cout << "调用构造函数" << endl;
  };
  Point(const Point &p);
  int getX() {return X;};
  int getY() {return Y;};
  void show() {
    cout << "X: " << X << ", Y:" << Y << endl;
  };
  ~Point() {
    cout << "delete... " << X << ", " << Y << endl;
  };
};

Point::Point(const Point &p) {
  X = p.X + 1;
  Y = p.Y + 1;
  cout << "Copy: " << X << ", " << Y << endl;
};

void display(Point p) {
  p.show();
};

void disp(Point &p) {
  p.show();
};

Point fun() {
  Point A(101, 202);
  return A;
};

int main() {
  Point A(42, 35);

  Point B(A);
  Point C(58, 94);
  cout << "called display(B)" << endl;

  display(B);

  cout << "Next... " << endl;
  cout << "called disp(B)" << endl;
  disp(B);

  cout << "called C=fun()" << endl;
  C = fun();

  cout << "called disp(C)" << endl;
  disp(C);

  cout << "out..." << endl;
};
