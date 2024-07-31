#include<iostream>
using namespace std;

class Human{
   public:
   int eyes;
   Human(){
    cout<<"human";
   }
};

class Men{
  public:
  Men(){
    cout<<"SDa";
  }
  int maturity;
};

class Boy:public Human,public Men{
   public:
   void set(int eyes,int maturity ){
     this->eyes=eyes;
     this->maturity=maturity;
   }
};


int main(){
 
     Boy b;
     b.set(2,9);
     cout<<b.eyes<<b.maturity;
}