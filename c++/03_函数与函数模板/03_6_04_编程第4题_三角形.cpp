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
  cout << "������һ���ַ���";
  cin >> c;

  int n;
  cout << "������һ�����ͣ�";
  cin >> n;

  sanjiao(c, n);
}
