
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let world;
let engine;
var block1;
var block2;
var block3;
var ground;


function setup() {

	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var block1_options = {
		restitution: 0.10,
		friction: 0.20,
		frictionAir:1.0
	}
	var block2_options = {
		restitution : 1.0,
		friction:2.0,
		frictionAir:0.10
	}
	var block3_options = {
		restitution : 9.5,
		friction: 0.25,
		frictionAir: 1.0
	}
	var ground_options = {
		isStatic:true
	}

	ground = Bodies.rectangle(400,790,800,10,ground_options);
	World.add(world,ground);

	block1 = Bodies.circle(220,50,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.circle(350,50,10,10,block3_options);
	World.add(world,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill('green');
  background(0);
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,800,10);
  rect(block1.position.x,block1.position.y,10,10);
  ellipse(block2.position.x,block2.position.y,10,10);
  rect(block3.position.x,block3.position.y,10,10);
}



