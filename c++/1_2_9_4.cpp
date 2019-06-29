#include <iostream>
#include <algorithm>

using namespace std;

int main() {
  int *a = new int[100];
  cout << a << endl;

  float *b[15] = {};
  cout << sort(*b, *b+15,) << endl;
}
