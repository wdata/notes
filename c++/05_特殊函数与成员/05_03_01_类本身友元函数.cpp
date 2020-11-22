#include <iostream>
#include <cmath>

using namespace std;

class Point {
private:
  double X, Y;
public:
  Point(double xi, double yi) {
    X = xi;
    Y = yi;
  }
  double GetX() { return X; };
  double GetY() { return Y; };
  friend double distances(Point &, Point &);
};

double distances(Point& a, Point& b) {
  double dx = a.X - b.X;
  double dy = a.Y - b.Y;
  return sqrt(dx * dx + dy * dy);
};

int main() {
  Point p1(3.5, 5.5), p2(4.5, 6.5);
  cout << "The distances is " << distances(p1, p2) << endl;
}
