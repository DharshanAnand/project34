var dog;
var happydog;
var database;
var foodS;
var foodStock;
var dogimg;
var doghimg;
var bottle=20;

function preload()
{
  
  
  dogimg=loadImage("dogImg.png");
  doghimg=loadImage("dogImg1.png");
}

function setup() {
  database= firebase.database();
  console.log(database);

  createCanvas(500, 500);
  Dog = createSprite(250,250,10,10);
  //instead of Dog you wrote dog
  Dog.addImage(dogimg);
Dog.scale = 0.2;
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}
 

function draw() {  
background("yellow")
textSize(20)
text("food remaining:"+bottle,100,400);
  // you gave the drawsprites and text proeprty inside if statement.
  if(keyWentDown(UP_ARROW))
  {
   writeStock(foodS);
   bottle=bottle-1
   Dog.addImage(doghimg);
  }
  drawSprites();
  text("Note:Press UP_ARROW Key To Feed Drake Milk",100,100)

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x=x-1
  }
  
  database.ref("/").update({
    food:x
  })
}
