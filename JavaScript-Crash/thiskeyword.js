
//in a method

const obj={
    title:"a",
    play(){
      console.log("play");
    }
};

obj.play(); //will console the obj {title:"a",play()}


//in a regualr fn

function obj(){
    console.log(this);
}
//will console window object in browser and global in node env