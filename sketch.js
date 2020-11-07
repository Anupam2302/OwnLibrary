var fixed,moving,o1,o2,o3;

function setup() {
  createCanvas(800,400);

 fixed=createSprite(400, 200, 40, 50);
 fixed.shapeColor="yellow";
 fixed.debug=true;

moving=createSprite(400, 200, 70, 50);
 moving.shapeColor="yellow";
 moving.debug=true;

 o1=createSprite(350,10,50,50);
 o1.velocityY=1;
 o2=createSprite(100,200,50,50);
 o2.velocityX=2;
 o3=createSprite(700,200,50,50);
 o3.velocityX=-2;
}

function draw() {
  background("blue"); 
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

if(bounce(o3,o2)){
 o3.shapeColor="red";
 o2.shapeColor="red";
}

if(bounce(o1,moving)){
  o1.shapeColor="red";
  moving.shapeColor="red";
 }
  drawSprites();
}
