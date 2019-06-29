#include <iostream>
#include <iomanip>

using namespace std;

int main() {
  int a = 65, b = 66;
  cout << to_string(a) << setw(2) << to_string(b) << endl;

  char c = 65, d = 66;
  cout << to_string(65) << setw(2) << to_string(66) << endl;
  cout << int('A') << int('B') << endl;
}
