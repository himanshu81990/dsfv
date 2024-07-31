#include<iostream>
using namespace std;

class Base{
   public:
    void speak(){
        cout<<"speaking";
    }
};

class Child:public Base{
   public:
   void speak(){
    cout<<"speaking";
   }
};

   
int main(){
    Child c;
    c.speak();
}