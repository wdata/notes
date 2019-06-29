#include <iostream>

using namespace std;

struct Point {
  private:
    double x, y;
  public:
    void Setxy(double a, double b) {
      x = a;
      y = b;
    };

    void Display() {
      cout << x << "\t" << y << endl;
    }
};
