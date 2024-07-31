// Normal fn vs Arrow fn



// 1: Syntax //


// Normal fn:

function abc(){
    console.log("hello");
}
abc();


// Arrow fn:

const abc =()=>{
    console.log("himanshu in banglore with 13lakh base package and free lunch cab bfst snacks gym and with bha ")
}
abc();


// Normal fn

function dis(a,b){
    return a+b;
}
console.log(dis(2,4));

// Arrown fn

const add=(a,b)=>{
    return a+b
}
add(3,2);

// if we have a single statement in body we can also do like
const addd =(a,b)=>(a+b);
addd(3,2);


// 2: Arguments //

// Argument keyword is only there in normal fn not in arrow,we have to use
// spread operator in arrow fn

// normal fn

function addnumbers(){
     console.log(arguments)
}

addnumbers(2,22,1,12,34,421,24,32,41)

// here argument is an array like object

// arrow fn

const adding=(...nums)=>{
  console.log(nums);
}

adding(32,2,3,1,98,23,13,32,334,4)
// here sprad operator is used and nums which is an array 


// 3: HOISTING //

// It is posibble in normal fn but not in arrow fns

grow();
function grow(){
    console.log("growing")   //outputs: growing
}


func();
const func=()=>{
   console.log("arrow fn");  //output:error :Cannot access 'func' before initialization
}

// 4:This keyword //

// normal fn refer to the object
// arrown fn scope is global so it refers to window object

// normal fn
const obj={
    name:"him",
    func(){
        console.log(this.name);
    }
}
obj.func();  //outputs :him


// arrown fn
//because arrow functions do not bind their own this
const objj={
    name:"himanshu",
    func:()=>{
       console.log(this)
    }
}
objj.func()  //outputs window object ,cant access name
// here this.name will output undefined