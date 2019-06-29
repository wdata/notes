#include <iostream>
#include <iomanip>

using namespace std;

int main() {

  cout << setfill('*')
       << setw(0) << 15 << endl
       << setw(1) << 15 << endl
       << setw(2) << 15 << endl
       << setw(4) << 15 << endl
       << setw(16) << 15 << endl;

  cout << setw(16) << setfill('*') << " " << endl;

  cout << setiosflags(ios_base::right)
       << setw(5) << 1
       << setw(5) << 2
       << setw(5) << 3 << endl;

  cout << resetiosflags(ios_base::right);

  cout << setiosflags(ios_base::left)
       << setw(5) << 1
       << setw(5) << 2
       << setw(5) << 3 << endl;

  return 0;
}
