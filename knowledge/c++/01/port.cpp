#include <cstring>
#include <iostream>
using namespace std;
#include "port.h"

//Port methods
Port::Port(const char *br, const char *st, int b)
{
  brand = new char[strlen(br) + 1];
  strcpy(brand, br);
  strncpy(style, st, 20);
  bottles = b;
}
Port::Port(const Port &p)
{
  brand = new char[strlen(p.brand) + 1];
  strcpy(brand, p.brand);
  strncpy(style, p.style, 20);
  bottles = p.bottles;
}
Port &Port::operator=(const Port &p)
{
  if (this == &p)
    return *this;
  delete[] brand;
  brand = new char[strlen(p.brand) + 1];
  strcpy(brand, p.brand);
  strncpy(style, p.style, 20);
  bottles = p.bottles;
  return *this;
}
Port &Port::operator+=(int b)
{
  bottles += b;
  return *this;
}
Port &Port::operator-=(int b)
{
  if (bottles <= b)
    bottles = 0;
  else
    bottles -= b;
  return *this;
}
void Port::show() const
{
  cout << "Brand: " << brand << endl
       << "Kind: " << style << endl
       << "Bottles: " << bottles << endl;
}
ostream &operator<<(ostream &os, const Port &p)
{
  os << p.brand << ", " << p.style << ", " << p.bottles;
  return os;
}

//VintagePort Methods
VintagePort::VintagePort() : Port()
{
  nickname = new char[5];
  strcpy(nickname, "null");
  year = -1;
}
VintagePort::VintagePort(const char *br, int b, const char *nn, int y)
    : Port(br, "none", b)
{
  nickname = new char[strlen(nn) + 1];
  strcpy(nickname, nn);
  year = y;
}
VintagePort::VintagePort(const VintagePort &vp)
    : Port(vp)
{
  nickname = new char[strlen(vp.nickname) + 1];
  strcpy(nickname, vp.nickname);
  year = vp.year;
}
VintagePort &VintagePort::operator=(const VintagePort &vp)
{
  if (this == &vp)
    return *this;
  Port::operator=(vp);
  delete[] nickname;
  nickname = new char[strlen(vp.nickname) + 1];
  strcpy(nickname, vp.nickname);
  year = vp.year;
  return *this;
}
void VintagePort::show() const
{
  Port::show();
  cout << "Nickname: " << nickname << endl
       << "Year: " << year << endl;
}
ostream &operator<<(ostream &os, const VintagePort &vp)
{
  os << (const Port &)vp;
  os << ", " << vp.nickname << ", " << vp.year;
  return os;
}
