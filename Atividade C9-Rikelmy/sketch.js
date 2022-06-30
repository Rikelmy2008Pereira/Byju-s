var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor = 'green';
}
function draw() 
{
  if(keyDown('left')){
    box.x -= 5;
    background('blue');
    box.shapeColor = 'black';
  }

  if(keyDown('right')){
    box.x += 5;
    background('yellow');
    box.shapeColor = 'green';
  }

  if(keyDown('up')){
    box.y -= 5;
    background('green');
    box.shapeColor = 'blue';
  }

  if(keyDown('down')){
    box.y += 5;
    background('red');
    box.shapeColor = 'yellow';
  }
  drawSprites();
}