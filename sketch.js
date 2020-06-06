var Object1,Object2

function setup() {
  createCanvas(800,400);
  Object1 = createSprite(400, 200, 50, 50);
  Object1.shapeColor = "green"

  Object2 = createSprite(500,200,50,50)
  Object2.shapeColor = "blue"
}

function draw() {
  background("yellow");  
  
Object2.x = World.mouseX
Object2.y = World.mouseY

if(Object2.x-Object1.x > Object1.width/2 + Object2.width/2){
  Object1.shapeColor = "red"
  Object2.shapeColor = "red"
}
else{
  Object1.shapeColor = "green"
  Object2.shapeColor = "blue"
}
  drawSprites();
}