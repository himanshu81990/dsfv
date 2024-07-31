#include<iostream>
using namespace std;


class Vechile{
    public:
    int price;
    string c;
   
};

class Car:public Vechile{
    public:
    int company;
    int alloys;
};

class Merc:public Car{
     public:
     void set(int p,string c,int comp,int alloys){
        price=p;
        color=c;
        company=comp;
        alloys=alloys;
     }
     void get(){
        cout<<price<<" "<<color<<" "<<company<<" "<<alloys;
     }
};

int main(){
   Merc m;
   m.set(21,"red",11,2);
   m.get();
}