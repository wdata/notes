#include <iostream>
#include <string>

using namespace std;

int main() {
  string str1 = "We are here!",
         str2("Where are you？");

  cout << str1[0] << str1[11] << "," << str1 << endl;
  cout << str2[0] << str2[11] << "," << str2 << endl;

  cout << "please input a word：";
  cin >> str1;
  cout << "length of then：" << str1 << " is " << str1.size() << "." << endl;

  string str3 = str1 + str2;
  cout << "str1 + str2 = ：" << str3 << endl;

  string str4 = str1.substr(1, 3);
  cout << "截取输入的字符串索引1至3内容：" << str4 << endl;

  string str5 = str1.substr(1, -4); // 不能从末尾用负号截取
  cout << "截取输入的字符串索引1至-4内容：" << str5 << endl;

  int int1 = str1.find("1", 0);
  if (int1 > -1)
    cout << "从0开始查找“1”，返回索引：" << int1 << endl;
  else
    cout << "从0开始查找“1”，没有查到！" << endl;

  string str6;
  getline(cin, str6, '\n');
  cout << "你输入：" << str6 << endl;

  return 0;
}
