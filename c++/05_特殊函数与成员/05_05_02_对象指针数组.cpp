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
  test *a[2] = {new test(1), new test(4)};
  test *b[2] = {new test(1, 1.4), new test(4, 8.1)};

  for (int i = 0; i < 2; i++) {
    cout << "a[" << i << "] = " << a[i] -> getNum() << endl;
  }

  for (int i = 0; i < 2; i++) {
    cout << "b[" << i << "] = " << "(" << b[i] -> getNum() << ", " << b[i] -> getf() << ")" << endl;
  }
}
