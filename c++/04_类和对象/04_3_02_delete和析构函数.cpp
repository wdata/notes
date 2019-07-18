#include <iostream>

using namespace std;

class Point {
private:
  int x, y;
public:
  Point(int = 0, int = 0); // 默认参数
  ~Point(); // 析构函数
};

Point::Point(int a, int b):x(a),y(b) {
  cout << "initializing：" << x << ", " << y << endl;
};

Point::~Point() {
  cout << "析构函数调用：" << x << ", " << y << endl;
};


int main() {
  Point *ptr[3];
  ptr[0] = new Point(1, 2);
  ptr[1] = new Point(2, 3);
  ptr[2] = new Point(3, 4);
  // cout << endl;
  delete [ ]ptr;
};
