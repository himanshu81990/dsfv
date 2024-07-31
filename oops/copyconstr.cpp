#include<iostream>
using namespace std;

class Student{
    int age;
    public:
    int marks;

    Student(Student &s1){
        marks=s1.marks;
    }
    Student(int val){
         marks=val;
    }

};

int main(){

    Student s(22);
    Student s1(s);
    cout<<s1.marks;
    
}