#include<iostream>
using namespace std;

class Encapsulation{
 
    int salary;
    int age;

    void setage(int age){
        this->age=age;
    }
    int getage(){
        return age;
    }
    void setsalary(int sal){
      this->salary=sal;
    }
    int getsalary(){
        return salary;
    }
};


int main()
{
   Encapsulation e;
   e.setage(21);
   cout<<e.getage();
   e.setsalary(1500000);
   cout<<e.getsalary();

}