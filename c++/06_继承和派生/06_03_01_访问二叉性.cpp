#include <iostream>

using namespace std;

class A {
public:
  void func() {
    cout << "a.func" << endl;
  };
};

class B {
public:
  void func() {
    cout << "b.func" << endl;
  };

  void gunc() {
    cout << "b.gunc" << endl;
  };
};

class C:public A, public B {
public:
  void gunc() {
    cout << "c.gunc" << endl;
  };

  void hune1() {
    A::func();
  };

  void hune2() {
    B::func();
  };
};

int main() {
  C obj;
  obj.hune1();
  obj.hune2();
  obj.gunc();

  obj.A::func();
  obj.B::func();
}
