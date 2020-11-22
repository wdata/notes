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
  void Show() {
    cout << "x = " << x << ", y = " << y << endl;
  }
};

class Rectangle: public Point {
private:
  int H, W;
public:
  Rectangle(int ,int, int, int);
  void Show() {
    cout << "x = " << x << ", y = " << y << ", W = " << W << ", H = " << H << endl;
  }
};

Rectangle::Rectangle(int a, int b, int c, int d):Point(a, b) {
  H = c;
  W = d;
};

int main() {
  Point a(1, 2);
  Rectangle b(3, 4, 5, 6);
  a.Show();
  b.Show();

  // ����������ʼ����������
  Point& ra = b;
  ra.Show();

  // ���������ĵ�ַ����ָ������ָ��
  Point* p = &b;
  p -> Show();

  // ������ָ��pb
  Rectangle *pb = &b;
  pb -> Show();

  // ��������������ֵ���»�����������ֵ
  a = b;
  a.Show();
}
