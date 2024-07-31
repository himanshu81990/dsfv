 const items=[
    {name:"bike",price:100},
    {name:"Tv",price:200},
    {name:"Album",price:10},
    {name:"Book",price:5},
    {name:"Phone",price:500},
    {name:"computer",price:1000},
    {name:"keyboard",price:25},
 ]

//  1- FILTER

let filteredItems=items.filter((currval)=>{
   return currval.price<=100;
})

console.log(filteredItems);

//  2 - MAP

let mappedItems=items.map((currval)=>{
    return currval.name;
 })
 
 console.log(filteredItems);


 // 3- FIND

 let founded=items.find((val)=>{
     return val.price==5;
 })

 console.log(founded); //output:{ name: 'Book', price: 5 }'

 // 4- foreach

items.forEach((val)=>{
    console.log(val.price);
 })

 //5- Reduce

 let totalamount=items.reduce((total,curval)=>{
     return total+curval.price;
 },0)
 console.log(totalamount);


 //6-include

 let array=[32,432,43];

 console.log(array.includes(2)); //output:false