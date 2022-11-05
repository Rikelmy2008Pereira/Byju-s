const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var backgroundImg,elefanteImg,orangeImg;
var elefante;
var orange;
var stone_1;
var stone_2;
var stone_3;
var set_1Img;
var set_2Img;
var set_1;
var set_2;
var ground_1;
var ground_2;
var sound1;

function preload(){

backgroundImg = loadImage('selva.png');
elefanteImg = loadImage('elefante.png');
orangeImg = loadImage('orange.png');
sound1 = loadSound('eating_sound.mp3');



}

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  stone_1 = new Ground(245,125,500,50);
  stone_2 = new Ground(355,350,500,50);
  stone_3 = new Ground(245,575,500,50);

  orange = Bodies.circle(50,100,50,50);
  World.add(world,orange);

  var options = {
    isStatic:true
  }

  ground_1 = Bodies.rectangle(599,300,10,100,options);
  World.add(world,ground_1);

  ground_2 = Bodies.rectangle(0,300,10,100,options);
  World.add(world,ground_2);

  elefante = createSprite(550,554);
  elefante.addImage(elefanteImg);
  elefante.scale = 0.2;

  set_1 = createImg('seta_direita.png');
  set_1.position(300,554);
  set_1.size(50,50);
  set_1.mouseClicked(drop1);

  set_2 = createImg('seta_esquerda.png');
  set_2.position(250,554);
  set_2.size(50,50);
  set_2.mouseClicked(drop2);

  
}


function draw() 
{
  background(backgroundImg);
  drawSprites();
  rectMode(CENTER);
  Engine.update(engine);
  rect(ground_1.position.x,ground_1.position.y,5,1000);
  rect(ground_2.position.x,ground_2.position.y,5,1000);

  stone_1.show();
  stone_2.show();
  stone_3.show();

  image(orangeImg,orange.position.x,orange.position.y,50,50);

  if(collide(orange,elefante)==true){
    sound1.play();

  }

}

function drop1(){

  Matter.Body.applyForce(orange,{x:0,y:0},{x:0.01,y:00});
}

function drop2(){

  Matter.Body.applyForce(orange,{x:0,y:0},{x:-0.01,y:00});
}

function collide(body,sprite){

  if(body!=null){
    var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
    if(d<=80)
      {
        World.remove(engine.world,orange); 
        orange = null;
         return true;
      }
      else{
        return false;
      }

  }

}

