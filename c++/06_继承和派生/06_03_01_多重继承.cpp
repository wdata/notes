#include <iostream>

using namespace std;

class A {
private:
  int a;
public:
  void setA(int x) {
    a = x;
  };

  void showA() {
    cout << "a = " << a << endl;
  };
};

class B {
private:
  int b;
public:
  void setB(int x) {
    b = x;
  };

  void showB() {
    cout << "b = " << b << endl;
  };
};

class C: public A, public B{
private:
  int c;
public:
  void setC(int x, int y) {
    setB(x);
    c = y;
  };

  void showC() {
    showB();
    cout << "c = " << c << endl;
  };
};

int main() {
  C obj;
  obj.setA(51);
  obj.showA();
  obj.setC(52, 53);
  obj.showC();
}
