// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Base{
   public:
   int age;
};

class Child:public Base{
    public:
    void setage(int age){
        this->age=age;
    }
};


int main(){
Child c;
c.setage(2);
cout<<c.age;
}