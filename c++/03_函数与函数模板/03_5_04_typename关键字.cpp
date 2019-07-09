#include <iostream>

using namespace std;

template <typename T>
T myMax(T m1, T m2) {
  return m1 > m2 ? m1 : m2;
}

template <typename T>
T myMin(T m1, T m2) {
  return m1 > m2 ? m2 : m1;
}


int main() {
  cout << myMax(2, 5) << "\t" << myMax(2.0, 5.) << " \t"
       << myMax('w', 'a') << "\t" << myMax("ABC", "ABD") << endl;
  cout << myMin(2, 5) << "\t" << myMin(2.0, 5.) << " \t"
       << myMin('w', 'a') << "\t" << myMin("ABC", "ABD") << endl;
  cout << myMin <int> (2, 5) << "\t" << myMin <int> (2.0, 5.) << " \t"
       << myMin('w', 'a') << "\t" << endl;
}
