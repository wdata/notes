#include <iostream>

using namespace std;

class Two;
class One {
private:
  int x;
public:
  One(int a) {
    x = a;
  }
  int getx() {
    return x;
  };
  void func(Two&);
};

class Two {
private:
  int y;
public:
  Two(int b) {
    y = b;
  }
  int getx() {
    return y;
  };
  friend void One::func(Two&);
};

void One::func(Two& r) {
  r.y = x;
};

int main() {
  One obj1(5);
  Two obj2(8);
  cout << obj1.getx() << " " << obj2.getx() << endl;
  obj1.func(obj2);
  cout << obj1.getx() << " " << obj2.getx() << endl;
};
