#include <iostream>

using namespace std;

class constFun {
public:
  int f5() const {
    return 5;
  };
  int obj() {
    return 45;
  };
};

int main() {
  constFun s;
  const int i = s.f5();
  const int j = s.obj();
  int x = s.obj();
  int y = s.f5();
  cout << i << " " << j << " " << x << " " << y;

  const constFun d;
  int k = d.f5();
  cout << "k=" << k << endl;
}
