#include <iostream>
#include <string>

using namespace std;

string input(const int);

int fun(string);

int main() {
  int n;
  cout << "�����ַ���������";
  cin >> n;
  int i = fun(input(n));
  cout << "������ַ����ܳ��ȣ�" << i << endl;
}

string input(const int n) {
  string str1, str2;
  for (int i = 0; i < n; i++) {
    cin >> str1;
    str2 += str1;
  }
  return str2;
}

int fun(string str) {
  int i = str.size();
  return i;
}
