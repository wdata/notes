class test {
private:
  int num;
  double f1;
public:
  test(int a) {
    num = a;
  }
  test(int a, double b) {
    num = a;
    f1 = b;
  }
  int getNum() {
    return num;
  };
  double getf() {
    return f1;
  };
};

#include <iostream>

using namespace std;

int main() {
  test a[2] = {1, 4}, *p;
  test b[2] = {test(1, 1.4), test(4, 8.1)};

  for (int i = 0; i < 2; i++) {
    cout << "a[" << i << "] = " << a[i].getNum() << endl;
  }

  p = b;
  for (int i = 0; i < 2; i++, p++) {
    cout << "b[" << i << "] = " << "(" << p -> getNum() << ", " << p -> getf() << ")" << endl;
  }
}
