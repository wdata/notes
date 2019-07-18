#include <iostream>

using namespace std;

class Max {
private:
  int a, b, c, d;
  int maxi(int, int);
public:
  void set(int, int, int, int);
  int maxi();
};

int Max::maxi(int x, int y) {
  return x > y ? x : y;
};

void Max::set(int x1 = 0, int x2 = 0, int x3 = 0, int x4 = 0) {
  a = x1;
  b = x2;
  c = x3;
  d = x4;
};

int Max::maxi() {
  int x = maxi(a, b);
  int y = maxi(c, d);
  return maxi(x, y);
};

int main() {
  Max A[3];
  A[0].set(12, 45, 76, 89);
  A[1].set(12, 45, 76);
  A[2].set(12, 45);

  for(int i = 0; i < 3; i++) {
    cout << A[i].maxi() << " ";
  };
  cout << endl;
}
