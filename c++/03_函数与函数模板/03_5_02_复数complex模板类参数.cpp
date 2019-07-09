#include <iostream>
#include <complex>
#include <string>

using namespace std;

void printer(complex <int>);
void printer(complex <double>);

int main() {
  int i(0);
  complex <int> num1(2, 3);
  complex <double> num2(3.5, 4.5);
  printer(num1);
  printer(num2);
  return 0;
}

void printer(complex <int> a) {
  string str1 = "实部值是：", str2 = "虚部值是：";
  cout << str1 << a.real() << " " << str2 << a.imag() << endl;
}

void printer(complex <double> a) {
  string str1 = "实部值是：", str2 = "虚部值是：";
  cout << str1 << a.real() << " " << str2 << a.imag() << endl;
}
