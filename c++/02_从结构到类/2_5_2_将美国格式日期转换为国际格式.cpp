// May 28, 2019 תΪ 28 May 2019

#include <iostream>
#include <string>

using namespace std;

int main() {
  string date;

  cout << "�������������ڸ�ʽ�����磨May 28, 2019����";
  getline(cin, date, '\n');

  int i = date.find(" ");
  string month = date.substr(0, i);

  int k = date.find(",");
  string day = date.substr(i+1, k-i-1);

  string year = date.substr(k+2, date.size()-1);

  string new_date = day + " " + month + " " + year;

  cout << "������������ڸ�ʽ��" << date << endl;
  cout << "�꣺" << year << " �£�" << month << " �գ�" << day << endl;
  cout << "�������ڸ�ʽ��" << new_date << endl;
}
