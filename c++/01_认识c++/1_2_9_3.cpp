#include <iostream>
#include <algorithm>
#include <iterator>
#include <functional>

using namespace std;

// int a[ ] = {1, 2, 3, 4, 5, 6, 7, 8}，查找4，复制a给数组b，a反转，在查找4，返回a和b内容

int main() {
  int a[ ] = {1, 2, 3, 4, 5, 6, 7, 8}, b[8];
  cout << find(a, a, 4) << endl;
  copy(a, a+8, b);
  reverse(a, a+8);
  cout << find(a, a+8, 4) << endl;
  copy(a, a+8, ostream_iterator <int> (cout, " "));
  cout << endl;
  copy(b, b+8, ostream_iterator <int> (cout, " "));
  cout << endl;
}
