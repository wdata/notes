#include <iostream>

using namespace std;

class Point{
private:
  int x, y;
public:
  void setxy(int a, int b) {
    x = a;
    y = b;
  };
  int getxy() {
    return x + y;
  };
};


int main() {
  int x, y;
  cout << "请输入2个int类型：";
  cin >> x >> y;
  Point p;
  p.setxy(x, y);
  cout << "2个字符和：" << p.getxy() << endl;
}
