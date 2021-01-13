#include "port.h"
#include <iostream>
using namespace std;
int main(void)
{
  Port a("gua1", "ho", 200), b("gua2", "ho", 50);
  cout << a << endl
       << b << endl
       << endl;
  a -= 500;
  b += 10;
  cout << a << endl
       << b << endl
       << endl;

  VintagePort aa("gua1", 5, "like", 2019);
  VintagePort bb("gua2", 50, "likes", 3000);
  cout << aa << endl;
  cout << bb << endl;
  aa += 500;
  bb -= 600;
  cout << aa << endl;
  cout << bb << endl
       << endl;

  a.show();
  b.show();
  aa.show();
  bb.show();
  system("pause");
  return 0;
}
