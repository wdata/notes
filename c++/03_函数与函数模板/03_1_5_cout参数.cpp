#include <iostream>
#include <string>

using namespace std;

void change(const string&);
void change1(string &);

int main() {
  string str = "Can you change it?";
  change(str);
  cout << str << endl;
  change1(str);
  cout << str << endl;
}

void change(const string&s) {
  string s2 = s + " No!";
  cout << s2 << endl;
}
void change1(string &s) {
  string s2 = s + " No!";
  s = s + " no const";
}
