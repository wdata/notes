#include <iostream>
#include <iomanip>

using namespace std;

int main() {

  // 看出现什么问题

  // 1、
  // int& ref = num;
  // ref = ref + 100;
  // num = num + 50;

  // 2、
  // int x = 58, y = 98;
  // const int *p = &x;
  // y = *p;
  // *p = 65;
  // p = &y;

  // 3、
  int x = 58, y = 98, z = 55;
  int * const p = &x;
  *p = 65;
  p = &y;
  z = *p;
}
