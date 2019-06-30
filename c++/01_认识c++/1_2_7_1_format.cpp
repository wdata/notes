#include <iostream>
#include <iomanip>

using namespace std;

int main() {
  int a(29), b(1001);
  cout << a << setw(6) << b << endl; // 空格6
  cout << "8:" << oct << a << endl;
  cout << "10:" << dec << a << endl;
  cout << "16:" << hex << a << endl;

  cout << endl;

  const double pi = 31.141592657;
  cout << dec << pi << endl
       << setprecision(0) << pi << endl
       << setprecision(1) << pi << endl
       << setprecision(4) << pi << endl
       << dec << setiosflags(ios_base::right) << pi << endl
       << setiosflags(ios_base::showpos) << pi << endl
       << setiosflags(ios_base::showpoint) << -1 << endl;
}
