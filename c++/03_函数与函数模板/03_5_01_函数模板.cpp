#include <iostream>

using namespace std;

template <class T>
T myMax(T m1, T m2) {
  return m1 > m2 ? m1 : m2;
}

int main() {
  cout << myMax(2, 5) << "\t" << myMax(2.0, 5.) << " \t"
       << myMax('w', 'a') << "\t" << myMax("ABC", "ABD") << endl;
}
