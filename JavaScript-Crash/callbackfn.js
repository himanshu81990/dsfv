

function add(a,b,cb){
  let sum=a+b;
  cb(sum);
}

add(2,3,function(val){
    console.log(val)
})


// suppose here line 4 takes some time so we ensure that 
// whenever it has response ,we run our cb fn



function cb(a,b,cb){
   let sum=a+b;
   cb(sum);
}


cb(2,3,(val)=>{
console.log(val);
});