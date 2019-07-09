#include <iostream>
#include <iterator>
#include <algorithm>
#include <functional>

using namespace std;

template <typename t1>

double qiugen (t1 a, t1 b, t1 c) {
  return b*b - 4*a*c;
}

int main() {
  int t[3];
  cout << "请输入3个数值：";
  for (int x = 0; x < 3; x++) {
    cin >> t[x];
  };
  copy(t, t+3, ostream_iterator <int> (cout, " "));
  cout << endl;

  cout << qiugen(t[0], t[1], t[2]) << endl;
}
