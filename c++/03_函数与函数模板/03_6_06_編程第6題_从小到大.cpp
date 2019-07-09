#include <iostream>
#include <algorithm>
#include <iterator>
#include <functional>

using namespace std;

void sortMin(int num[], int i) {
  sort(num, num+i);
}

int main() {
  int num[] = {4, 5, 1};
  sortMin(num, 3);
  copy(num, num+3, ostream_iterator <int> (cout, " "));
  cout << endl;
}
