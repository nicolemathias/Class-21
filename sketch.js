var fixedRect, movingRect , rect1 , rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,100,50,50)
  rect1.shapeColor = "pink"
  rect2 = createSprite(100,400,50,50)
  rect2.shapeColor = "blue"
  rect1.velocityY = 1
  rect2.velocityY = -1

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(rect1 , movingRect)){
  rect1.shapeColor = "red";
  movingRect.shapeColor = "red";

 }
 else{
  rect1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }

 bounceOff(rect1,rect2)
  drawSprites();

}

  
