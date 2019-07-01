#include <iostream>
#include <complex>

using namespace std;

int main() {
  complex <int> num1(2, 3);
  complex <float> num2(3.5, 4.5);

  string str1("real is£º"),
         str2(" imag is£º");

  cout << str1 << num1.real() << str2 << num1.imag() << endl;
  cout << str1 << num2.real() << str2 << num2.imag() << endl;
}
