// variable and fns can be used before declaring ,it is called hoisting.declaration is moved to top


console.log(a);  //output will be undefined not an error

var a=13;

// output:Since it is declared with var, the variable is hoisted. This means that we can access the variable before the line 
// where it was declared without errors




// but in let hoisting ,the output will throw an error



console.log(a);
let a=20;

// it will throw an error






// diff bw undefined and not defined

console.log(b);  notdefined

var b;
console.log(b);  undefined