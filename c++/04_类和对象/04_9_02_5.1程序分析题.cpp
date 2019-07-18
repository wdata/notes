#include <iostream>

using namespace std;

class base {
private:
  int a, b;
public:
  ~base() {
    cout << "Destory..." << a << ", " << b << endl;
  };
  base(int a, int b):b(b), a(a) {
    cout << "³õÊ¼»¯..." << a << ", " << b << endl;
  };
};

int main() {
  
}
