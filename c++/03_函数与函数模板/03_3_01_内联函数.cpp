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
    cout << "����һ�������ַ���" << endl;
  } else {
    cout << "������һ�������ַ���" << endl;
  }
}
