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
  // ��̬��Ա������ֻ�ܷ��ؾ�̬��Ա
  static int getn() {
    return number;
  };
  void show() {
    cout << number << ", " << a << endl;
  };
};

int main() {

};
