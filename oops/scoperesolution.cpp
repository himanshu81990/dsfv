#include<iostream>
using namespace std;


class Vechile{
   public:
   void drive(){
    cout<<"vechile-drive";
   }
};

class Car{
   public:
    void drive(){
    cout<<"car-drive";
   }
};

class Audi:public Vechile,public Car{
   
};
int main(){
 
    Audi a;
    a.Car::drive();
}