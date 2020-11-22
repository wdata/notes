#include <iostream>

using namespace std;

template <class T>
class Max4 {
private:
  T a, b, c, d;
  T Max (T a, T b) {
    return a > b ? a : b;
  }
public:
  Max4(T, T, T, T);
  T Max(void);
};

template <class T>
Max4 <T>::Max4(T a1, T a2, T a3, T a4):a(a1), b(a2), c(a3), d(a4) {};

template <class T>
T Max4 <T>::Max(void) {
  return Max(Max(a, b), Max(c, d));
};

int main() {
  Max4 <char> C1 ('W', 'w', 'a', 'A');
  Max4 <int> C2 (-50, -49, -51, -52);
  Max4 <double> C3 (1.11, 2.1, 1.21, 1.01);
  cout << C1.Max() << " " << C2.Max() << " " << C3.Max() << endl;
}
