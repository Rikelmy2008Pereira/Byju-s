var ball;
var vx = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.x<=50 || ball.x>=350)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;

  drawSprites();

}

