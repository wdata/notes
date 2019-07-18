#include <iostream>

#include <math.h>

class Line {
    private:
        int x1, y1, x2, y2;
    public:
        Line(int X1, int Y1, int X2, int Y2) {
            x1 = X1;
            y1 = Y1;
            x2 = X2;
            y2 = Y2;
        }
    inline double getLenght() {
        return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    inline void printPoints() {
        std::cout << "Point1: " << x1 << ", " << y1 << std::endl;
        std::cout << "Point2: " << x2 << ", " << y2 << std::endl;
    }
    inline void printLenght() {
        std::cout << "Line.Lenght: " << getLenght() << std::endl;
    }

};

int main() {
    Line line(10, 10, 60, 80);
    line.printPoints();
    line.printLenght();
    return 0;
}
