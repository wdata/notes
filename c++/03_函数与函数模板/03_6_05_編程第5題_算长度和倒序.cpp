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
  cout << "ÇëÊäÈëÒ»¸ö×Ö·û´®£º";
  cin >> str;

  cout << "×Ö·û´®³¤¶È£º" << strlen(str) << endl;
  cout << "×Ö·û´®µ¹Ğğ£º" << revers(str) << endl;
}
