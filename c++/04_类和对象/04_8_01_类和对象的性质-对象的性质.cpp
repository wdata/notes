#include <iostream>

using namespace std;

class Point;

class Empty {
private: Empty(){}
};

int main() {
  Point A;
  A.set(1, 2);
  cout << A.getx() << ", " << A.gety() << endl;
}

class Point {
private:
  int x, y;
public:
  void set(int a, int b) {
    x = a; y = b;
  };
  int getx() {return x;};
  int gety() {return y;};
};
