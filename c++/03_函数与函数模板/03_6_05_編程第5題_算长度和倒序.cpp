#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int strlen(string str) {
  int l = str.size();
  return l;
}

string revers(string str) {
  reverse(str.begin(), str.end());
  return str;
}

int main() {
  string str;
  cout << "������һ���ַ�����";
  cin >> str;

  cout << "�ַ������ȣ�" << strlen(str) << endl;
  cout << "�ַ�������" << revers(str) << endl;
}
