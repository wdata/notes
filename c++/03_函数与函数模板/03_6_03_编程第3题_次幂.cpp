#include <iostream>
#include <math.h>

using namespace std;

double cimi(double r, int t) {
  return pow(r, t);
}

int main() {
  double r;
  int t;
  cout << "请输入一个实数：";
  cin >> r;
  cout << "请输入一个整数：";
  cin >> t;

  cout << "次幂：" << cimi(r, t) << endl;
}
