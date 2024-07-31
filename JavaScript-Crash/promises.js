function sumofthree(...elements){

    return new Promise((resolve,reject)=>{
      if(elements.size()>3){
        reject("only 3 elemts are all0wed");
      }
      else{
        let sum=0;
        for(var i=0;i<elements.size();i++)
            {
                sum+=elements[i];
            }
            resolve(sum);
      }
    })
}


sumofthree(3,4,2)
.then(result=>console.log(result))
.catch(error=>console.log(error));


async function prom(){
   const data=await fetch("https://fs");
    console.log(data);
}



async function prom() {
    const data = await fetch("");
    // const ans = await data.json();
    console.log(data.json());
}
prom();