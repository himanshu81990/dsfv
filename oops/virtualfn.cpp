#include<iostream>
using namespace std;

class Base{
public:
virtual void show(){
    cout<<"show-base";
}
void print(){
  cout<<"base-priint";
}
};


class Child:public Base{
public:
 void show(){
    cout<<"show-child";
}
void print(){
  cout<<"child-priint";
}
};

int main(){
Base *ptr;
Child c;
ptr=&c;
ptr->show();cout<<endl;
ptr->print();
}