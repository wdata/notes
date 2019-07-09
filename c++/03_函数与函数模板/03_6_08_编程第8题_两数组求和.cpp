#include <iostream>
#include <algorithm>
#include <iterator>

using namespace std;

template <typename t>

t with(t num[], t l, t num1[], t l1) {
  int w;
  for (int i = 0; i < l; i++) {
    w += *(num+i);
  }
  for (int i = 0; i < l1; i++) {
    w += *(num1+i);
  }
  return w;
}

int main() {
  int num[5] = {1,2,3,4,5}, num1[6] = {1,2,3,4,5,6};
  cout << "ºÍ£º" << with(num, 5, num1, 6) << endl;
}
