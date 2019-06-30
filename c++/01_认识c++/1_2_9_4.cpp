#include <iostream>
#include <iterator>
#include <algorithm>
#include <functional>

using namespace std;

int main() {
  float *p;
  p = new float[15];
  for (int i = 0; i < 15; i++) {
    *(p+i) = i;
  };

  int num = 0;
  for (int i = 0; i < 15; i++) {
    num += *(p+i);
  };

  cout << "和：" << num << endl;
  sort(p, p+15);
  cout << "最小值：" << *(p+0) << endl;

  delete []p;
}
