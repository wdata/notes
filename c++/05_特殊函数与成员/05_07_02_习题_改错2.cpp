class test {
private:
  int num;
  double f1;
public:
  test(int a) {
    num = a;
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

  for (int i = 0; i < 2; i++) {
    delete a[i];
    cout << "a[" << i << "] = " << a[i] -> getNum() << endl;
  }
}
