#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point();
  Point(int, int);
};

Point::Point():x(0), y(0) {
  cout << "�޲�����Ա����������" << endl;
};

Point::Point(int a, int b):x(a), y(b) {
  cout << "������Ա������" << x << ", " << y << endl;
};


int main() {
  Point *prt1 = new Point;
  Point *prt2 = new Point(5, 7);

  delete prt1;
  delete prt2;

  cout << prt1 << endl;
  cout << prt2 << endl;
};
