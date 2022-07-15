var trex, trex_running, trex_collided,cloud,obstacle;
var ground, invisibleGround, groundImage,cloudImage,obstacleImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage('cloud.png');
  obstacleImage = loadImage('obstacle1.png','obstacle2.png','obstacle3.png','obstacle4.png','obstacle5.png','obstacle6.png');
  
}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor do plano de fundo
  background(180);
  
  console.log(frameCount);
  
  
  
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  //Gerar Nuvens
  spawnClouds();
  Obstacle();

  drawSprites();
}

//função para gerar as nuvens
function spawnClouds(){

  if(frameCount % 60 === 0 ){
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
    cloud.velocityX = -3;
    cloud.y = Math.round(random(10,60));
    cloud.depth = trex.depth;
    trex.depth++;
  }
 
 
}

function Obstacle(){

  if(frameCount % 70 === 0){

    obstacle = createSprite(700,145,500,100);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.x = Math.round(random(0,20));
    obstacle.depth = trex.depth;
    trex.depth++;
  }





}

