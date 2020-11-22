#include <iostream>

using namespace std;

class test {
private:
  int n;
public:
  test(int i) {
    n = i;
    cout << "constructor: " << i << endl;
  }
  ~test() {
    cout << "destructor: " << n << endl;
  }
  int getn() {
    return n;
  };
  void inc() {
    n++;
  };
};

int main() {
  cout << "loop start: " << endl;
  for (int i = 0; i < 3; i++) {
    static test a(3);
    test b(3);
    a.inc();
    b.inc();
    cout << "a.n= " << a.getn() << endl;
    cout << "b.n= " << b.getn() << endl;
  }
  cout << "loop endl" << endl;
  cout << "Exit main()" << endl;

  // 第1，输出
  // loop start:
  // constructor: 3
  // constructor: 3
  // a.n=  4
  // b.n=  4
  // destructor: 4
  // constructor: 3
  // a.n=  5
  // b.n=  4
  // destructor: 4
  // constructor: 3
  // a.n=  6
  // b.n=  4
  // destructor: 4
  // 自己写的
  // destructor: 6
  // loop endl
  // Exit main()

  // 真实输出
  // loop endl
  // Exit main()
  // destructor: 6
}
