#include <iostream>
#include <string>

using namespace std;

typedef double array[12];

void avecount(array &b, int n) {
  double ave(0);
  int count(0);

  for (int j = 0; j < n-2; j++) {
    ave = ave + b[j];
    if (b[j] < 60) {
      count++;
    }
    b[n-2] = ave/(n-2);
    b[n-1] = count;
  }
}

int main() {
  array b = {12, 34, 56, 78, 90, 98, 76, 85, 64, 43};
  array &a = b;
  avecount(a, 12);
  cout << "平均成绩为：" << a[10] << "分，不及格人数有：" << a[11] << "人。" << endl;
};
