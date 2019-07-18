#include <iostream>

using namespace std;

class base {
private:
  int x, y;
public:
  void init(int a, int b) {
    x = a;
    y = b;
  };
  void print() {
    cout << "2*x-y=" << x * 2 - y << endl;
  };
};

int main() {
  base a;
  a.init(68, 55);
  a.print();
}
