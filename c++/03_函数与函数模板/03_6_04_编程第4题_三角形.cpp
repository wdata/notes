#include <iostream>
#include <string>

using namespace std;

void sanjiao(char c, int n) {
  for (int i = 0; i < n; i++) {
    for (int y = 0; y <= i; y++) {
      cout << c << " ";
    }
    cout << endl;
  }
}

int main() {
  char c;
  cout << "请输入一个字符：";
  cin >> c;

  int n;
  cout << "请输入一个整型：";
  cin >> n;

  sanjiao(c, n);
}
