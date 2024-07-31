//  these all are used to store the data

// var:

/* Variables declared with var can have a global or local scope,functional scope. Global scope is for variables declared outside functions,
 while local scope is for variables declared inside functions*/

var greeting="hloo";

if(true){
    var greeting="hii welcome"
}

console.log(greeting);
//in case of var it will always ovverride the first value here the output will be "hii welcome";
// because it is global scoped.

//but if we use let here ,then it will not override as let has also a block scope ,i.e any variable declared
// in that block cannot be accesed outside that block.

let greeting="hllo";

if(true){
    let greeting="hii welcome";
}
console.log(greeting);

/* Variables declared with let can have a global, local, or block scope. Block scope is for variables declared in a block. 
A block in JavaScript involves opening and closing curly braces*/


/*You can find blocks in if, loop, switch, and a couple of other statements.Any variables declared in such blocks with the 
let keyword will have a block scope.Also, you can't access these variables outside the block*/


// const creates "constant" variables that cannot be reassigned another value.

const obj={name:"himanshu"};
obj={address:"sa"} ///throws error
obj.name="sharma" // it will run

const a=21;
a=23//error




// global scope they behave same //

var x=1;
let y=2;
var func=()=>{
   console.log(x);  //outputs 1
   console.log(y);   //outputs 2
}
func();

// so same behaviour in global scope


// functional scope //



var func=()=>{
    var age=21;  
    let id=22;
}
console.log(age); // Throws an error
console.log(id); // Throws an error

/*Variables are declared in a functional/local scope using var and let keywords behave exactly the same, 
meaning, they cannot be accessed from outside of the scope*/


// Block scope //

for (var index = 0; index < 2; index++) {
    //do something
}
console.log(index); //outputs 2

for (let index = 0; index < 2; index++) {
    // do somethign
}

console.log(index); //throws error

// so variables with var keyword not have block scope and can be accesed,but variable with let keyword have a block scope
// and cant be accessed outside the block scope


