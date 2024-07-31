#include<iostream>
using namespace std;

class Poly{

   int add(int x,int y){
    return x+y;
   }

   int add(int x,int y,int z){
    return x+y+z;
   }
}


int main()
{
  Poly p;
  p.add(22,2,2);
}