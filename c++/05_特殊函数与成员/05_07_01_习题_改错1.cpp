#include <iostream>
using namespace std;

class base {
private:
  int number;
  static int a;
public:
  void set(int i, int j);
  static int geta() {
    return a;
  };
  // 静态成员函数，只能返回静态成员
  static int getn() {
    return number;
  };
  void show() {
    cout << number << ", " << a << endl;
  };
};

int main() {

};
