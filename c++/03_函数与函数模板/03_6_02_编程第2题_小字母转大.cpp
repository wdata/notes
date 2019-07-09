#include <iostream>

using namespace std;

char up(char ch) {
  return ch >= 'a' && ch <= 'z' ? ch - 'a' + 'A' : ch;
}

int main() {
  char ch;
  cout << "ÇëÊäÈëÒ»¸ö×ÖÄ¸£º";
  cin >> ch;

  cout << up(ch) << endl;
}
