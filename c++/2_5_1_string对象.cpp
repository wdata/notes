#include <iostream>
#include <string>

using namespace std;

int main() {
  string str1 = "We are here!",
         str2("Where are you��");

  cout << str1[0] << str1[11] << "," << str1 << endl;
  cout << str2[0] << str2[11] << "," << str2 << endl;

  cout << "please input a word��";
  cin >> str1;
  cout << "length of then��" << str1 << " is " << str1.size() << "." << endl;

  string str3 = str1 + str2;
  cout << "str1 + str2 = ��" << str3 << endl;

  string str4 = str1.substr(1, 3);
  cout << "��ȡ������ַ�������1��3���ݣ�" << str4 << endl;

  string str5 = str1.substr(1, -4); // ���ܴ�ĩβ�ø��Ž�ȡ
  cout << "��ȡ������ַ�������1��-4���ݣ�" << str5 << endl;

  int int1 = str1.find("1", 0);
  if (int1 > -1)
    cout << "��0��ʼ���ҡ�1��������������" << int1 << endl;
  else
    cout << "��0��ʼ���ҡ�1����û�в鵽��" << endl;

  string str6;
  getline(cin, str6, '\n');
  cout << "�����룺" << str6 << endl;

  return 0;
}
