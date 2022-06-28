var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,100,100);
}
function draw() 
{
  background(30);
  if(keyDown('left')){
    box.x -= 5;
  }

  if(keyDown('right')){
    box.x += 5;
  }

  if(keyDown('up')){
    box.y -= 5;
  }

  if(keyDown('down')){
    box.y += 5;
  }


  drawSprites();
}