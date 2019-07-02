#include <iostream>

using namespace std;

double max(double, double);
int max(int, int);
char max(char, char);
int max(int, int, int);

int main() {
  cout << max(2.5, 16.55) << endl;
  cout << max(4, 1) << endl;
  cout << max("A", "b") << endl;
  cout << max(3, 1, 5) << endl;
  cout << max(5, 2, 1) << endl;
  cout << max(4, 6, 2) << endl;
}

double max(double a, double b) {
  return a > b ? a : b;
}
int max(int a, int b) {
  return a > b ? a : b;
}
char max(char a, char b) {
  return a > b ? a : b;
}
int max(int a, int b, int c) {
  int d = max(a, b);
  return d > c ? d : c;
}
