#include <iostream>

using namespace std;

template <class T>

class TAnyTemp {
private:
  T x, y;
public:
  TAnyTemp(T X, T Y):x(X), y(Y) {}
  T getx() {
    return x;
  };
  T gety() {
    return y;
  };
};

int main() {
  TAnyTemp <int> iObject(321, 456);
  cout << "x = " << iObject.getx() << endl;
  cout << "y = " << iObject.gety() << endl;
}
