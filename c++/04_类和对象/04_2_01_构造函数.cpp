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

Point global(16, 17);

int main() {
  Point A;
  Point B(15, 25);
  Point C[2]; // ִ��2���޲�����Ա����
  Point D[2] = { // ÿ��ִ����2���в�����Ա����
    Point(), Point(8, 12)
  };
};
