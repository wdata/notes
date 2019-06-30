#include <iostream>
#include <algorithm>
#include <iterator>
#include <functional>

using namespace std;

int main() {
  double a[ ] = {1, 4, 3, 2}, b[4];

  copy(a, a + 4, ostream_iterator<double>(cout, " "));
  cout << endl;

  reverse_copy(a, a+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  copy(a, a+4, b);
  copy(b, b+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  sort(a, a+4);
  copy(b, b+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  reverse_copy(a, a+4, b);
  copy(b, b+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  double c[] = {1, 4, 3, 2};

  sort(a, a+4);
  copy(a, a+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  sort(a, a+4, greater <double> ());
  copy(a, a+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  double *x = find(a, a+4, 4);
  if (x == a+4) cout << "not 1" << endl;
  else cout << "there 1" << endl;

  x = find(a, a+4, 8);
  if (x == a+4) cout << "not 8" << endl;
  else cout << "there 8" << endl;

  copy(a+1, a+4, ostream_iterator <double> (cout, " "));
  cout << endl;

  return 0;
};
