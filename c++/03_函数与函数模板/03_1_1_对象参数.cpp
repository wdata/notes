#include <iostream>
#include <string>

using namespace std;

void swap(string, string);

int main() {
  string str1 = "现在", str2 = "过去";
  swap(str1, str2);
  cout << "返回后：" << str1 << " " << str2 << endl;
};

void swap(string s1, string s2) {
  string temp = s1;
  s1 = s2;
  s2 = temp;
  cout << "交换后：" << s1 << " " << s2 << endl;
}
