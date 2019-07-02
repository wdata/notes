#include <iostream>
#include <string>

using namespace std;

inline int isNumber(char s) {
  return s >= '0' && s <= '9' ? 1 : 0;
}

int main() {
  char str;
  cin >> str;

  if (isNumber(str)) {
    cout << "它是一个数字字符！" << endl;
  } else {
    cout << "它不是一个数字字符！" << endl;
  }
}
