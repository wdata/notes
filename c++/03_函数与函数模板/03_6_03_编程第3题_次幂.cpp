#include <iostream>
#include <math.h>

using namespace std;

double cimi(double r, int t) {
  return pow(r, t);
}

int main() {
  double r;
  int t;
  cout << "������һ��ʵ����";
  cin >> r;
  cout << "������һ��������";
  cin >> t;

  cout << "���ݣ�" << cimi(r, t) << endl;
}
