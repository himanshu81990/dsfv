function f1(){
    let a=10;

    function work(){
        console.log(a);
    }
    return work;
}

let ans=f1();
ans(); //output 10

// ie  inner functions have access to the variables of outer functions
//here work act as clousre 

function func(a){

    function add(b){
        console.log(a+b);
    }
    return add
}

let data=func(2);
data(3); //outputs 5
