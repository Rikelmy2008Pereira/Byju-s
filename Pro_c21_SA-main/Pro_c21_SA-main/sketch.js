const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up_2;
var right_2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 1.0
   
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  up_2 = createImg('up.png');
  up_2.position(200,30);
  up_2.size(50,50);
  up_2.mouseClicked(vForce);

  right_2 = createImg('right.png');
  right_2.position(20,30);
  right_2.size(50,50);
  right_2.mouseClicked(hForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
}

function hForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  
}

function vForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}