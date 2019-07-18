#include <iostream>

class Point {
    private:
        float x, y;
    public:
        Point() {
            x = 0;
            y = 0;
        }
    Point(float X, float Y) {
        x = X;
        y = Y;
    }
    float getX() {
        return x;
    };
    float getY() {
        return y;
    };
    void setX(float X) {
        x = X;
    };
    void setY(float Y) {
        y = Y;
    };
};
class Rectangular {
    private:
        Point point[4];
    public:
        Rectangular(Point a, Point d) {
            point[0] = a;
            point[1].setX(d.getX());
            point[1].setY(a.getY());
            point[2] = d;
            point[3].setX(a.getX());
            point[3].setY(d.getY());
        }
    void printPointsLocation() {
        for (int i = 0; i < 4; ++i) {
            std::cout << point[i].getX() << ", " << point[i].getY() << std::endl;
        }
    }
    float getArea() {
        float height, width, area;
        height = point[0].getY() - point[3].getY();
        width = point[1].getX() - point[0].getX();
        area = height * width;
        return area;
    }
    void printArea() {
        std::cout << "area:" << getArea() << std::endl;
    }
};

int main() {
    Point a(1.0, 10.0), b(10.0, 1.0);
    Rectangular rect(a, b);
    rect.printPointsLocation();
    rect.printArea();
    return 0;
}
