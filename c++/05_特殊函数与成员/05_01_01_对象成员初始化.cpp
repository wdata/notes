#include <iostream>

using namespace std;

class object {
private:
  int val;
public:
  object():val(0) {
    cout << "Default constructor for object" << endl;
  }
  object(int i):val(i) {
    cout << "Constructor for object " << val << endl;
  }
  ~object() {
    cout << "Destructor for object " << val << endl;
  }
};

class container {
private:
  object one, two;
  int data;
public:
  container():data(0) {
    cout << "Default constructor for constructor" << endl;
  }
  container(int i, int j, int k);
  ~container() {
    cout << "Destructor for constructor " << data << endl;
  }
};

container::container(int i, int j, int k):two(i), one(j) {
  data = k;
  cout << "Constructor for constructor " << data << endl;
};


int main() {
  container obj, anObj(5, 6, 10);

  // 第一次猜测输出顺序
  // Default constructor for constructor
  // Constructor for object 0
  // Constructor for object 0
  // Constructor for object 5
  // Constructor for object 6
  // Constructor for object 10
  // Destructor for object 10
  // Destructor for object 6
  // Destructor for constructor 5
  // Destructor for object 0
  // Destructor for object 0
  // Destructor for constructor 0

  // 看了一部分后，第二次材料顺序
  // Default constructor for object
  // Default constructor for object
  // Default constructor for constructor
  // Constructor for object 6
  // Constructor for object 5
  // Constructor for constructor 10
  // Destructor for constructor 10
  // Destructor for object 5
  // Destructor for object 6
  // Constructor for constructor 0
  // Destructor for object 0
  // Destructor for object 0
}
