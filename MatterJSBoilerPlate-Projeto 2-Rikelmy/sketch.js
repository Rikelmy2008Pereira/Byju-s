
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options={
		isStatic: true
	}
	var block1_options={
		restitution: 0.5,
		friction: 0.02,
		frictionAir:0
	}
	var block2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	block1 = Bodies.circle(220,10,50,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,50,50,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,50,50,block3_options);
	World.add(world,block3);

	Engine.run(engine);
	rectMode();
	ellipseMode();
	fill ('red');
}


function draw() {
  background('yellow');
  Engine.update(engine);
  

	rect(block2.position.x,block2.position.y,50,50);
	rect(block3.position.x,block3.position.y,50,50);
	ellipse(block1.position.x,block1.position.y,50);
 
}



