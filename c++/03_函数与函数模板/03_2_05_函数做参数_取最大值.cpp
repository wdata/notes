#include <iostream>

using namespace std;

int max(int, int);

int main() {
  cout << "×î´óÖµ£º" << max(22, max(11, 44)) << endl;
}

int max(int m1, int m2) {
  return m1 > m2 ? m1 : m2;
}
