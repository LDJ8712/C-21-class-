var movingrectangle 
var rectangle  
var rectangle2
var rectangle3

function setup() {
  createCanvas(800,400);
  movingrectangle =createSprite(400, 200, 100, 100);
  rectangle =createSprite(200,200,70,70)
  rectangle2 =createSprite(300,300,50,50)
  rectangle3 =createSprite(100,100,50,50)
}

function draw() {
  background("blue");  
  drawSprites();
  movingrectangle.y= mouseY;
  movingrectangle.x= mouseX;

  console.log(movingrectangle.x - rectangle.x);
  console.log(movingrectangle.width/2 + rectangle.width/2);

  if(Rectangles (movingrectangle,rectangle3)){
    movingrectangle.shapeColor="orange"
    rectangle3.shapeColor="orange"
  }
  else{
movingrectangle.shapeColor="red"
rectangle3.shapeColor="red"
  }
}


