#include <iostream>

using namespace std;

class Two {
private:
  int y;
public:
  friend class One;
};

class One {
private:
  int x;
public:
  One(int a, Two& r, int b) {
    x = a;
    r.y = b;
  }
  void display(Two&);
};

void One::display(Two& r) {
  cout << x << " " << r.y << endl;
}

int main() {
  Two obj1;
  One obj2(10, obj1, 5);
  obj2.display(obj1);
};
