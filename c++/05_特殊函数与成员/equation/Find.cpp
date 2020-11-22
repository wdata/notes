#include "equation.h"

void Read(float&, float&, float&);

int main() {
  float a, b, c;
  cout << "����һ���󷽳�ax2 + bx + c = 0�ĸ��ĳ���" << endl;
  for(;;) {
    Read(a, b, c);
    if (a == 0) {
      return 0;
    }
    FindRoot obj(a, b, c);
    obj.Find();
    obj.Display();
  }
}

void Read(float& a, float& b, float& c) {
  cout << "���뷽��ϵ��a��";
  cin >> a;
  if (a == 0) {
    getchar();
    return;
  }
  cout << "���뷽��ϵ��b��";
  cin >> b;
  cout << "���뷽��ϵ��c��";
  cin >> c;
}
