#include <iostream>
#include <string>

using namespace std;

int a[ ] = {2, 4, 6, 8, 10, 12};
int &index(int i);

float a1 = 1.11111;
float &index1(float i);

int main() {
  index(3) = 16;
  cout << index(3) << endl;

  index(a1) = 2.22222;
  cout << index(a1) << endl;
}

int &index(int i) {
  return a[i];
}

float &index1(float i) {
  return i;
}
