#include <iostream>
#include <string>
#include <algorithm>
#include <iterator>

using namespace std;

int main() {
  string str[ ] = {
    "We are here!",
    "Where are here?",
    "welcome!"
  };

  for (int i = 0; i < 3; i++) {
    copy(str[i].begin(), str[i].end(), ostream_iterator <char> (cout));
    cout << endl;
  };

  cout << endl;

  str[0].swap(str[2]);
  str[0].swap(str[1]);
  for (int i = 0; i < 3; i++) {
    cout << str[i] << endl;
  };

  int i1 = str[0].find("h");
  cout << i1 << " " << str[0].substr(i1, i1) << endl;

  cout << str[0] << endl;

  copy(str[0].begin()+1, str[0].begin()+2, ostream_iterator <char> (cout));
  cout << endl;

  for (int i = 0; i < 10; i++) {
    if (str[0][i] == *"h")
      cout << str[0][i] << endl;
  };

  cout << str[0] << " " << str[1] << endl;

  
}
