var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 40, 100);
  movingRect=createSprite(650,200,100,40);

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}

function draw() {
  //rgb -> red, green, blue; 0-255 0-blavck , 255-white
  background(0,0,0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  
  

  
 
if (isTouching(movingRect,fixedRect)){

  fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
}

else {
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

  drawSprites();
}





































