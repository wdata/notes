// May 28, 2019 转为 28 May 2019

#include <iostream>
#include <string>

using namespace std;

int main() {
  string date;

  cout << "请输入美国日期格式，例如（May 28, 2019）：";
  getline(cin, date, '\n');

  int i = date.find(" ");
  string month = date.substr(0, i);

  int k = date.find(",");
  string day = date.substr(i+1, k-i-1);

  string year = date.substr(k+2, date.size()-1);

  string new_date = day + " " + month + " " + year;

  cout << "输入的美国日期格式：" << date << endl;
  cout << "年：" << year << " 月：" << month << " 日：" << day << endl;
  cout << "国际日期格式：" << new_date << endl;
}
