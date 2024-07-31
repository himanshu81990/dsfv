#include<iostream>
using namespace std;

class Abstr
{
  int age;
  int income;

public:
void set(int x,int y){
    age=x;
    income=y;
}
 void get(){
    cout<<age<<income;
 }


};

int main(){
Abstr a;
a.set(23,15000000);
a.get();
}