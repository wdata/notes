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
  cout << "������2��int���ͣ�";
  cin >> x >> y;
  Point p;
  p.setxy(x, y);
  cout << "2���ַ��ͣ�" << p.getxy() << endl;
}
