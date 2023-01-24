var spaceImg;
var player, playerImg;
var vy = 0;
var vx = 0;
var g = 0.02;

function preload()
{
  spaceImg = loadImage('bg.png');
  playerImg = loadImage('normal.png');
}

function setup() {
  createCanvas(1000,700);

  player = createSprite(100,50,30,30);
  player.addImage('ply',playerImg);
  player.scale = 0.1;

  rectMode(CENTER);



  
}

function draw() 
{
  background(51);
  image(spaceImg,0,0);
  push();
  fill('black');
  textSize(30);
  text('Valor da gravidade: '+ Math.round(vy) ,600,75);
  pop();

  vy += g;
  player.position.y += vy



  drawSprites();
}


