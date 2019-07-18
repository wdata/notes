#include <iostream>

using namespace std;

class base {
private:
  int x;
public:
  void setx(int a) {
    x = a;
  };

  int getx() {
    return x;
  };
};

int main() {
  int *p;
  base a;
  a.setx(55);
  p = new int(a.getx());
  cout << *p << endl;
  cout << &p << endl;
  cout << &a << endl;
}
