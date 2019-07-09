#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point(int = 0, int = 0);
  Point(Point&); // ���ƹ��� ����
  ~Point();
  void display();
};

Point::Point(int a, int b):x(a), y(b) {
  cout << "���캯��������" << a << ", " << b << endl;
};

void Point::display() {
  cout << "ִ����һ�������" << x << ", " << y << endl;
};

// ���ƹ��캯��
Point::Point(Point& t) {
  x = t.x + 1;
  y = t.y + 2;
  cout << "���ƹ��캯��������" << x << ", " << y << endl;
};

Point::~Point() {
  cout << "���������������������ִ�У�" << endl;
}

int main() {
  Point obj1(25, 51);
  Point obj2(obj1);
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
  obj2.display();
};
