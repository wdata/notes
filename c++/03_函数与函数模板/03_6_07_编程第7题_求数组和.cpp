#include <iostream>
#include <algorithm>
#include <iterator>

using namespace std;

template <typename t>

t with(t num[], t l) {
  int w;
  for (int i = 0; i < l; i++) {
    w += *(num+i);
  }
  return w;
}

int main() {
  int num[100];
  int a;
  cout << "�����볤�ȣ�";
  cin >> a;
  cout << "������Ԫ�أ�";
  for(int i = 0; i < a; i++) {
    cin >> *(num+i);
  };
  copy(num, num+a, ostream_iterator <int> (cout, " "));
  cout << endl;
  cout << "�ͣ�" << with(num, a) << endl;

}
