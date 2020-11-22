#include <iostream>

using namespace std;

template <class T, int size = 4>
class Sum {
private:
  T m[size];
public:
  Sum(T a, T b, T c, T d) {
    m[0] = a; m[1] = b; m[2] = c; m[3] = d;
  };
  T S() {
    return m[0] + m[1] + m[2] + m[3];
  };
};

int main() {
  Sum <int, 4> numl(-1, 2, 3, 4);
  Sum <float, 4> fl(3.5f, -8.5f, 8.8f, 9.7f);
  Sum <double, 4> dl(355.4, 255.5, 21.2, 221.1);
  Sum <char, 4> ch('W', -2, -1, -1);
  cout << numl.S() << " " << fl.S() << " " << dl.S() << " " << ch.S() << endl;
}
