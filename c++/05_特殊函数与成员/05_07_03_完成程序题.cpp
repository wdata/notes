#include <iostream>

using namespace std;

class test {
private:
  int X;
public:
  test(int a) {
    X = a;
  }
  int getx() {
    return X;
  };
};

int main() {
  int i;
  test *p, a[2][3] = {{1, 2, 3}, {4, 5, 6}};
  for (i = 0; i <= 6; i++, p++) {
    if ((p - a[0])%3 == 0) cout << endl;
    cout << p -> getx() << " ";
  }
}
